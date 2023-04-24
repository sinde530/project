package main

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	// Set up MongoDB client
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Create a new database and collection instance
	database := client.Database("mydatabase")
	collection := database.Collection("users")

	// Define the user data
	user := User{
		UID:      "your_user_uid",
		Username: "your_username",
		Email:    "your_email",
		Posts:    []Post{},
		Bio:      "",
		Likes:    0,
		Photo:    "your_photo_url",
	}

	// Insert the user into the collection
	err = InsertUser(collection, user)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("User has been signed up!")
}
