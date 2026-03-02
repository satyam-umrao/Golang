package main

import "fmt"

func main() {

	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
	//                                                                                           //
	//                         printing methods in Golang (fmt package)                          //
	//                                                                                           //
	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
	//                                                                                           //
	//    |<<------------------method------------------|-----------purpose------------>>|        //
	//    |     fmt.Println()                          | adds automatic new line       |        //
	//    |     fmt.Printf()                           | uses format specifiers        |        //
	//    |     fmt.Print()                            | no auto new line              |        //
	//    |<<------------------------------------------|-------------------------------->>|        //
	//                                                                                           //
	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

	name := "Satyam"
	age := 22
	height := 5.97

	// <<<-------using Println------->>>
	fmt.Println("<<<-------using Println------->>>")
	fmt.Println("age is", age)
	fmt.Println("name is", name)
	fmt.Println("height is", height)

	// <<<-------using Printf------->>>
	fmt.Print("\n<<<-------using Printf------->>>\n")
	fmt.Printf("name is %s\n", name)
	fmt.Printf("age is %d\n", age)
	fmt.Printf("height is %.2f\n", height)

	// <<<-------Without formatter------->>>
	fmt.Print("\n<<<-------Without formatter------->>>")
	fmt.Print("\nage is ", age)
}
