package main

import "fmt"

// new function
// syntax : func functionName(parameters datatype) returnType {---function body---}
func greet(name string) string {
	return "Hello, " + name + "!"
}

// add two numbers
func add(a, b int) int {
	return a + b
}

// Multiplication of two numbers
func multiply(a, b int) (result int) { // in this case we are using named return value
	result = a * b
	return // it is predefined that result will be returned.
}

// main function
func main() {
	fmt.Println("Hello, World!")
	fmt.Println(greet("Alice"))
	fmt.Println("Sum of 5 and 3 is:", add(5, 3))
	fmt.Println("Product of 5 and 3 is:", multiply(5, 3))
}

// Output
// Hello, World!
// Hello, Alice!
// Sum of 5 and 3 is: 8
// Product of 5 and 3 is: 15
