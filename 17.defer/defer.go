package main

import "fmt"

func add(a, b int) int {
	return a + b
}

func main() {
	data := add(10, 20)
	fmt.Println("Starting of the program")
	defer fmt.Println("Middle of the program") // exexutes in the end of the program
	defer fmt.Println("Data:", data)
	fmt.Println("End of the program")

}

// defer store in the forms of stack and execute in the last in first out manner
// here :
// fmt.Println("Data:", data)                1 index
// fmt.Println("Middle of the program")      0 index
