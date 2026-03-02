package main

import "fmt"

// Basic initialization of an array
func basic(a [5]int) {
	a[0] = 1
	a[1] = 2
	a[2] = 3
	a[3] = 4
	a[4] = 5
	fmt.Println("basic initialization : ", a)
}

// Array initialization with values
func withValues() {
	a := [5]int{1, 2, 3, 4, 5}
	fmt.Println("With values : ", a)
}

// Blank array
func blank() {
	b := [5]string{}
	fmt.Println("Blank string", b)
	fmt.Printf("Blank string with quotes %q\n", b)

}

// main function
func main() {
	var a [5]int
	basic(a)
	withValues()
	blank()
}

// Output
// basic initialization :  [1 2 3 4 5]
// With values :  [1 2 3 4 5]
// Blank string [    ]
// Blank string with quotes ["" "" "" "" ""]
