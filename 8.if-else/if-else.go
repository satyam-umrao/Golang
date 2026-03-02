package main

import "fmt"

// simple if statement
func simpleif(a int) {
	if a > 5 {
		fmt.Println("a is greater than 5")
	}
}

// if-else statement
func if_else(a int) {
	if a > 5 {
		fmt.Println("a is greater than 5")
	} else {
		fmt.Println("a is less than or equal to 5")
	}
}

// if-else if statement
func if_else_if(a int) {
	if a > 5 {
		fmt.Println("a is greater than 5")
	} else if a == 5 {
		fmt.Println("a is equal to 5")
	} else {
		fmt.Println("a is less than 5")
	}
}

// nested if statement
func nested_if(a, b, c int) {
	if a > c {
		if a > b {
			fmt.Println("a is greater than b")
		} else {
			fmt.Println("b is greater than a")
		}
	} else {
		if b > c {
			fmt.Println("b is greater than c")
		} else {
			fmt.Println("c is greater than b")
		}
	}
}

// main function
func main() {
	a := 10
	b := 3
	c := 5
	simpleif(a)
	if_else(a)
	if_else_if(a)
	nested_if(a, b, c)
}
