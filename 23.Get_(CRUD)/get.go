package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Todo struct {
	UserId    int    `json:"userId"`
	Id        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func main() {
	res, err := http.Get("https://jsonplaceholder.typicode.com/todos/1")
	if err != nil {
		fmt.Println("Error getting Url : ", err)
		return
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		fmt.Println("Error Code : ", res.Status)
		return
	}

	// data, err := ioutil.ReadAll(res.Body)
	// if err != nil {
	// 	fmt.Println("Error getting data : ", err)
	// 	return
	// }
	// fmt.Println("Data : ", string(data))

	var todo Todo
	err = json.NewDecoder(res.Body).Decode(&todo) // decode
	if err != nil {
		fmt.Println("error :", err)
		return
	}
	fmt.Println("Todo", todo)
}

// Output
// Todo {1 1 delectus aut autem false}
