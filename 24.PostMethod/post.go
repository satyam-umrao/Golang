package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

type Todo struct {
	UserId    int    `json:"userId"`
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func main() {
	todo := Todo{
		UserId:    10,
		Id:        1,
		Title:     "Hello World",
		Completed: true,
	}

	data, err := json.Marshal(todo)
	if err != nil {
		fmt.Println("Error in Marshelling : ", err)
		return
	}

	dataString := string(data)
	NewReader := strings.NewReader(dataString)

	MyUrl := "https://jsonplaceholder.typicode.com/todos"
	res, err := http.Post(MyUrl, "application/json", NewReader)
	if err != nil {
		fmt.Println("Error in Post Request : ", err)
		return
	}
	defer res.Body.Close()

	// response, err := ioutil.ReadAll(res.Body)
	// if err != nil {
	// 	fmt.Println("Error in Reading Response : ", err)
	// 	return
	// }
	// fmt.Println("response : ", string(response))
	fmt.Println("Response status : ", res.Status)
}
