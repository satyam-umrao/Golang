package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("----------int to float conversion----------")
	// -----------1st method-----------
	// var a int = 23
	// var b float64 = float64(a)
	// -----------2nd method-----------
	a := 23
	b := float64(a)
	fmt.Printf("type of a : %T\ntype of b : %T\n", a, b)

	fmt.Println("\n----------int to string conversion----------")
	num := 100
	str := strconv.Itoa(num) // integer to a string
	fmt.Printf("type of num : %T\ntype of str : %T\n", num, str)

	fmt.Println("\n----------string to int conversion----------")
	str2 := "200"
	num2, _ := strconv.Atoi(str2) // string to an integer
	fmt.Printf("type of str2 : %T\ntype of num2 : %T\n", str2, num2)

	fmt.Println("\n----------string to float conversion----------")
	str3 := "3.14"
	num3, _ := strconv.ParseFloat(str3, 64) // ParseFloat(string, bitSize)
	fmt.Printf("type of str3 : %T\ntype of num3 : %T\n", str3, num3)
}
