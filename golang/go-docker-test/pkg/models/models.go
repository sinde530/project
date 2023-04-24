package main

type User struct {
	UID      string `bson:"uid"`
	Username string `bson:"username"`
	Email    string `bson:"email"`
	Posts    []Post `bson:"posts"`
	Bio      string `bson:"bio"`
	Likes    int    `bson:"likes"`
	Photo    string `bson:"photo"`
}

type Post struct {
	// Define your Post structure here
}
