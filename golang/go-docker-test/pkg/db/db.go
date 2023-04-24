package main

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
)

func InsertUser(collection *mongo.Collection, user User) error {
	_, err := collection.InsertOne(context.Background(), user)
	if err != nil {
		return err
	}
	return nil
}
