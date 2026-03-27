package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name   string `json:"name"`
	Age    int    `json:"age"`
	Gender string `json:"gender"`
}

func main() {
	person := Person{
		Name:   "John Doe",
		Age:    30,
		Gender: "Male",
	}
	fmt.Println("Person Data : ", person)

	// Marshelling (Encoding Go struct to JSON)
	jsonData, err := json.Marshal(person)
	if err != nil {
		fmt.Println("Error in Marshelling : ", err)
	}
	fmt.Println("JSON Data : ", string(jsonData))

	// Unmarshalling (Decoding JSON to Go struct)
	var person2 Person
	err = json.Unmarshal(jsonData, &person2)
	if err != nil {
		fmt.Println("Error in Unmarshalling : ", err)
	}
	fmt.Println("Unmarshalled Data : ", person2)
}
