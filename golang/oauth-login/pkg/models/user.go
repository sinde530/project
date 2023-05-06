package models

import "github.com/globalsign/mgo/bson"

type User struct {
	ID      bson.ObjectId `bson:"_id,omitempty"`
	KakaoID string
	Email   string
	Profile string
}
