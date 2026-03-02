package main

import "fmt"

// initialization of slice
func initialize() {
	// slice creation method 1
	// syntax: []dType{values}
	slice1 := []int{1, 2, 3, 4, 5}

	// slice creation method 2
	// syntax: make([]dType, length)
	slice2 := make([]int, 5) // creates a slice of length 5 with default values (0)

	// slice creation method 3
	// synatx: make([]dType, length, capacity)
	slice3 := make([]int, 0, 5) // creates a slice with length 0 and capacity 5

	// printing the slices
	fmt.Println("Slice 1 : ", slice1)
	fmt.Println("Slice 2 : ", slice2)
	fmt.Println("Slice 3 : ", slice3)

	fmt.Println("slice 3 length: ", len(slice3))
	fmt.Println("slice 3 capacity: ", cap(slice3))
}

func appendToSlice() {
	numbers := []int{}
	numbers = append(numbers, 1, 2, 3, 4, 5)
	fmt.Println("append :", numbers)
}

// Main function
func main() {
	// initialize()
	appendToSlice()
}

// Output
// Slice 1 :  [1 2 3 4 5]
// Slice 2 :  [0 0 0 0 0]
// Slice 3 :  []
// slice 3 length:  0
// slice 3 capacity:  5
