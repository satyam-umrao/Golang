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
