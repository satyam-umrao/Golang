package main

import "fmt"

func main() {
	name := "Satyam"
	age := 22
	height := 5.97

	// println :
	// automatically add a new line at the end of the output
	fmt.Println("<<<-------using Println------->>>")
	fmt.Println("age is", age)
	fmt.Println("name is", name)
	fmt.Println("height is", height)

	// printf
	// required format specifiers like %d ,%s etc.
	fmt.Print("\n<<<-------using Printf------->>>\n")
	fmt.Printf("name is %s\n", name)
	fmt.Printf("age is %d\n", age)
	fmt.Printf("height is %.2f\n", height)

	// In printf and print if we want to change the line ,
	// we add \n to change the line

	// print function without
	// line change (ln) in println
	// or formatter (f) in printf
	fmt.Print("\n<<<-------Without formatter------->>>")
	fmt.Print("\nage is ", age)

}
