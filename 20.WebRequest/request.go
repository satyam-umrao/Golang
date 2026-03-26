package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	fmt.Println("Web Request in Golang")
	res, err := http.Get("https://jsonplaceholder.typicode.com/todos/2")
	if err != nil {
		fmt.Printf("error while making request: %v", err)
		return
	}
	defer res.Body.Close()

	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Printf("error while reading response: %v", err)
		return
	}
	fmt.Println(string(data))
}

// Output
// Web Request in Golang
// {
//   "userId": 1,
//   "id": 2,
//   "title": "quis ut nam facilis et officia qui",
//   "completed": false
// }
