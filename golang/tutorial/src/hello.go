package main

import (
	"net/http"
)

func todo(w http.ResponseWriter, r *http.Request)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/todo", todo)
}
