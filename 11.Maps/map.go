package main

import "fmt"

// main function
func main() {
	// create a map
	testResult := make(map[string]int)
	// adding values
	testResult["Aman"] = 99
	testResult["Rohan"] = 94
	testResult["Rishi"] = 76

	// print values
	fmt.Println("<<<-----Basic print method----->>>")
	fmt.Printf("Aman score %d out of 100\n", testResult["Aman"])

	// print values using for loop
	fmt.Println("<<<-----Print using for loop----->>>")
	for name, marks := range testResult {
		fmt.Printf("%s score %d out of 100\n", name, marks)
	}

	// change values
	fmt.Println("<<<-----changing values----->>>")
	fmt.Printf("before : Rishi score %d out of 100\n", testResult["Rishi"])
	testResult["Rishi"] = 85
	fmt.Printf("After  : Rishi score %d out of 100\n", testResult["Rishi"])

	// delete any key value pair
	fmt.Println("<<<-----delete values----->>>")
	fmt.Printf("before : Rishi score %d out of 100\n", testResult["Rishi"])
	delete(testResult, "Rishi")
	fmt.Printf("After  : Rishi score %d out of 100\n", testResult["Rishi"])

	// check is rishi is deleted or not
	value, exists := testResult["Rishi"]
	fmt.Printf("score of Rishi is %d (exists : %t)", value, exists)

}
