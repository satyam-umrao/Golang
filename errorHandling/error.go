package main

import "fmt"

func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, fmt.Errorf("cannot divide by zero")
	} else {
		return a / b, nil
	}
}

// main function
func main() {
	a := 10
	b := 02

	// function call with error handling
	// divide, err := divide(a, b)
	// if err != nil {
	// 	fmt.Println("Error:", err)
	// } else {
	// 	fmt.Println("Result:", divide)
	// }

	// simmple method to handle error
	result, _ := divide(a, b) // use underscore to ignore error
	fmt.Println("Result:", result)

}

// Output
// Result: 5
