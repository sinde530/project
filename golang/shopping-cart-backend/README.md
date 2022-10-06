# GO Learn

## go mod init

```go
go mod init thebasics.net/gowebapplication
```

## http connect

```go
package main

import (
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello from Snippet box"))
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", home)

	log.Println("Starting server on http://localhost:8080/")
	err := http.ListenAndServe(":8080", mux)
	// 로그로 에러를 남김
	log.Fatal(err)
}

```

## route

```go
// ...

// Route
func showSnippet(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Display a specific snippet"))
}

func createSnippet(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("create new snippet"))
}

func main() {
	// ...
  //Route functions
	mux.HandleFunc("/snippet", showSnippet)
	mux.HandleFunc("/snippet/create", createSnippet)

 // ...
}

```

## Restricting URL

```go
func home(w http.ResponseWriter, r *http.Request) {
	if r.Method != "/" {
		http.NotFound(w, r)
		return
	}
}
```

## Status Codes

| curl -i -X POST http://localhost:{port}/snippet/create

```go
func createSnippet(w http.ResponseWriter, r *http.Request) {
	// status codes
	if r.Method != "POST" {
		w.WriteHeader(201)
		w.Write([]byte("Method Not Allowed"))
    return
	}
  //...
}
```

### terminal curl

```go
curl -i -X POST http://localhost:8000/snippet/create
HTTP/1.1 200 OK
Date: Thu, 06 Oct 2022 08:08:48 GMT
Content-Length: 18
Content-Type: text/plain; charset=utf-8
```

## Customizing Headers

```go
package main

import (
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	// ...
}

func showSnippet(w http.ResponseWriter, r *http.Request) {
	// ...
}

func createSnippet(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		w.Header().Set("Allow", "POST")
		// max-age | 캐시의 수명도를 결정함
		w.Header().Set("Cache-Control", "public, max-age=31536000")
		w.Header().Add("Cache-Control", "public")
		w.Header().Add("Cache-Control", "max-age=31536000")
		// Del | key값을 지워준다.
		// w.Header().Del("Cache-Control")

		w.Header().Get("Cache-Control")

		// ...
		return
	}
	w.Write([]byte("create new snippet"))
}

func main() {
// ...
}

```
