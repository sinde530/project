package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sinde530/oauth-login/cmd/handlers"
	"golang.org/x/oauth2"
)

var (
	globalToken *oauth2.Token // Non-concurrent security
)

func main() {
	router := gin.Default()
	router.GET("/", home)
	router.GET("/login", handlers.Login)
	router.GET("/oauth/kakao-login", handlers.CallbackHandler)

	router.Run(":3030")
}

func home(c *gin.Context) {
	c.String(http.StatusOK, "Welcome to the home page!")
}
