package main

// for loop
func SimpleForLoop() {
	for i := 0; i < 5; i++ {
		println(i)
	}
}

// infinite for loop
func InfiniteForLoop() {
	for {
		println("Infinite loop")
	}
}

// for loop with break statement
func ForLoopWithBreak() {
	for i := 0; i < 10; i++ {
		println(i)
		if i == 5 {
			break
		}
	}
}

// for loop in slice
func ForLoopInSlice() {
	slice := []string{"Go", "Python", "Java", "C++"}
	for index, value := range slice {
		println(index, value)
	}
}

// for loop in string
func ForLoopInString() {
	str := "Hello, World!"
	for index, char := range str {
		println(index, string(char))
	}
}

// main function
func main() {
	println("Simple For loop")
	SimpleForLoop()

	println("Infinite for loop")
	// InfiniteForLoop()

	println("ForLoop With Break")
	ForLoopWithBreak()

	println("ForLoop In Slice")
	ForLoopInSlice()

	println("ForLoop In String")
	ForLoopInString()
}

// Output
//
// Simple For loop
// 0
// 1
// 2
// 3
// 4
// Infinite for loop
// ForLoop With Break
// 0
// 1
// 2
// 3
// 4
// 5
// ForLoop In Slice
// 0 Go
// 1 Python
// 2 Java
// 3 C++
// ForLoop In String
// 0 H
// 1 e
// 2 l
// 3 l
// 4 o
// 5 ,
// 6
// 7 W
// 8 o
// 9 r
// 10 l
// 11 d
// 12 !
