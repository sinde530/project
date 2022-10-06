package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func home(w http.ResponseWriter, r *http.Request) {
	if r.Method != "/" {
		http.NotFound(w, r)
		return
	}

	w.Write([]byte("Hello from Snippet box"))
}

func showSnippet(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil || id < 1 {
		http.NotFound(w, r)
		return
	}

	fmt.Fprintf(w, "Display a specific snippet with Id %d...", id)
	// w.Write([]byte("Display a specific snippet"))
}

func createSnippet(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		// w.Header().Set("Allow", "POST")
		// max-age | 캐시의 수명도를 결정함
		// w.Header().Set("Cache-Control", "public, max-age=31536000")
		// w.Header().Add("Cache-Control", "public")
		// w.Header().Add("Cache-Control", "max-age=31536000")
		// Del | key값을 지워준다.
		// w.Header().Del("Cache-Control")

		// w.Header().Get("Cache-Control")

		// w.WriteHeader(405)
		// w.Write([]byte("Method Not Allowed"))
		http.Error(w, "Method Not Allowed", 405)
		return
	}
	// w.Write([]byte("create new snippet"))
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", home)
	mux.HandleFunc("/snippet", showSnippet)
	mux.HandleFunc("/snippet/create", createSnippet)

	log.Println("Starting server on http://localhost:8000/")
	err := http.ListenAndServe(":8000", mux)
	log.Fatal(err)
}
