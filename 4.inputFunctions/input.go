package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	// stanf only take one word as input

	// fmt.Printf("Enter your name : ")
	// var name string
	// fmt.Scanf("%s", &name)
	// fmt.Printf("👋 Hello ! %s", name)

	// if you want to take full name as input then you can use buffered reader
	fmt.Printf("\nEnter your full name : ")
	reader := bufio.NewReader(os.Stdin)
	fullName, _ := reader.ReadString('\n')
	fmt.Printf("👋 Hello ! %s", fullName)
}
