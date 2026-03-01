package main

import "fmt"

func main() {
	var name string = "John"           // String variable
	var age int = 30                   // integer variable
	var isStudent bool = false         // boolean variable
	var height float64 = 1.75          // float variable 64-bit
	var weight float32 = 70.5          // float variable 32-bit
	var score uint = 85                // unsigned integer variable
	var initial rune = 'J'             // rune variable (alias for int32, used for Unicode code points)
	var complexNum complex128 = 1 + 2i // complex number variable (128-bit)
	var byteValue byte = 255           // byte variable (alias for uint8, used for raw data)

	fmt.Println("Name:", name)
	fmt.Println("Age:", age)
	fmt.Println("Is Student:", isStudent)
	fmt.Println("Height:", height)
	fmt.Println("Weight:", weight)
	fmt.Println("Score:", score)
	fmt.Println("Initial:", initial)
	fmt.Println("Complex Number:", complexNum)
	fmt.Println("Byte Value:", byteValue)

	// other ways to declare variables
	var city, country string = "New York", "USA"
	var name2 = "Bob" // any type (int,string, bool, etc.))
	friend := "Alice"

	// reassigning a new value to the existing variable 'name'
	fmt.Println("City:", city)
	fmt.Println("Country:", country)
	fmt.Println("Name2:", name2)
	fmt.Println("Friend:", friend)

	// constants : cannot be changed after declaration
	const pi = 3.14
	const gravity = 9.81
	fmt.Println("Pi:", pi)
	fmt.Println("Gravity:", gravity)
}
