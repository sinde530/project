package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/globalsign/mgo/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/kakao"
)

var (
	clientID     = "ae9ebb58e96375b4051ca6a45744bc4e"
	clientSecret = "Yo5IDcyWJ5JxYMy2n30r4TgLtx4B7eGB"
	redirectURL  = "http://192.168.0.72:3030/oauth/kakao-login"
	oauthConfig  = &oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		RedirectURL:  redirectURL,
		Scopes:       []string{"profile_nickname", "profile_image", "account_email"},
		Endpoint:     kakao.Endpoint,
	}
)

type KakaoUserInfo struct {
	ID      int64  `json:"id"`
	Email   string `json:"kakao_account"`
	Profile string `json:"properties"`
}

type User struct {
	ID      bson.ObjectId `bson:"_id,omitempty"`
	KakaoID string
	Email   string
	Profile string
}

func CallbackHandler(c *gin.Context) {
	code := c.Query("code")
	token, err := oauthConfig.Exchange(oauth2.NoContext, code)
	if err != nil {
		fmt.Println("Error: ", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to exchange code for token."})
		return
	}

	client := oauthConfig.Client(oauth2.NoContext, token)
	resp, err := client.Get("https://kapi.kakao.com/v2/user/me")
	if err != nil {
		fmt.Println("Error: ", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get user info from Kakao API."})
		return
	}
	defer resp.Body.Close()

	var userInfo map[string]interface{}
	err = json.NewDecoder(resp.Body).Decode(&userInfo)

	if err != nil {
		fmt.Println("Error: ", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to decode user info."})
		return
	}

	kakaoAccount := userInfo["kakao_account"].(map[string]interface{})
	properties := userInfo["properties"].(map[string]interface{})
	kakaoID := int64(userInfo["id"].(float64))
	email := kakaoAccount["email"].(string)
	profileImage := properties["profile_image"].(string)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	mongoClient, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		panic(err)
	}
	defer func() {
		if err = mongoClient.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()

	collection := mongoClient.Database("mydatabase").Collection("kakao-users")

	user := &User{
		KakaoID: fmt.Sprintf("%d", kakaoID),
		Email:   email,
		Profile: profileImage,
	}

	_, err = collection.InsertOne(ctx, user)
	if err != nil {
		fmt.Println("Error: ", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to insert user to database."})
		return
	}

	claims := jwt.MapClaims{
		"kakaoID": user.KakaoID,
		"email":   user.Email,
		"profile": user.Profile,
	}

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := jwtToken.SignedString([]byte("my-secret-key"))
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{"access_token": tokenString})
	c.Redirect(http.StatusTemporaryRedirect, "/")
}

func Login(c *gin.Context) {
	authUrl := oauthConfig.AuthCodeURL("state", oauth2.AccessTypeOffline)
	c.Redirect(http.StatusTemporaryRedirect, authUrl)
}
