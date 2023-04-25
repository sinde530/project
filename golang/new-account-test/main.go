package main

import (
	"fmt"

	"example.com/hello/banking"
)

func main() {
	account := banking.Account{Owner: "Crong", Balance: 1000}
	fmt.Println(account)
}
