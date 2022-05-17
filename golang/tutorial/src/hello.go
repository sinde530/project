package main

import (
	"fmt"
	"reflect"
)

func main() {
	a := 1

	if true {
		fmt.Println(reflect.TypeOf(a))
	}
}
