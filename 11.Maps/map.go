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

	//nested map
	fmt.Println("\n<<<-----Nested map----->>>")
	student := make(map[string]map[string]int)
	student["Aman"] = make(map[string]int)
	student["Aman"]["Maths"] = 99
	student["Aman"]["Science"] = 98

	fmt.Printf("Aman score in Maths is %d and in Science is %d\n", student["Aman"]["Maths"], student["Aman"]["Science"])

	for name, subject := range student {
		fmt.Printf("%s score in Maths is %d and in Science is %d\n", name, subject["Maths"], subject["Science"])
	}

	// new way to initialize map
	fmt.Println("\n<<<-----new way to initialize map----->>>")
	testResult2 := map[string]int{
		"Aman":  99,
		"Rohan": 94,
		"Rishi": 76,
	}
	fmt.Printf("Aman score %d out of 100\n", testResult2["Aman"])
}

// Output
// <<<-----Basic print method----->>>
// Aman score 99 out of 100
// <<<-----Print using for loop----->>>
// Aman score 99 out of 100
// Rohan score 94 out of 100
// Rishi score 76 out of 100
// <<<-----changing values----->>>
// before : Rishi score 76 out of 100
// After  : Rishi score 85 out of 100
// <<<-----delete values----->>>
// before : Rishi score 85 out of 100
// After  : Rishi score 0 out of 100
// score of Rishi is 0 (exists : false)
// <<<-----Nested map----->>>
// Aman score in Maths is 99 and in Science is 98
// Aman score in Maths is 99 and in Science is 98

// <<<-----new way to initialize map----->>>
// Aman score 99 out of 100
