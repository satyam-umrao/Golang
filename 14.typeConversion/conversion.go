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

	fmt.Println("\n----------float to int conversion----------")
	num4 := 3.14
	num5 := int(num4) // float to an integer
	fmt.Printf("type of num4 : %T\ntype of num5 : %T\n", num4, num5)

	fmt.Println("\n----------float to string conversion----------")
	num6 := 3.14
	str6 := strconv.FormatFloat(num6, 'f', -1, 64) // float to a string
	fmt.Printf("type of num6 : %T\ntype of str6 : %T\n", num6, str6)
}

// Output
// ----------int to float conversion----------
// type of a : int
// type of b : float64

// ----------int to string conversion----------
// type of num : int
// type of str : string

// ----------string to int conversion----------
// type of str2 : string
// type of num2 : int

// ----------string to float conversion----------
// type of str3 : string
// type of num3 : float64

// ----------float to int conversion----------
// type of num4 : float64
// type of num5 : int

// ----------float to string conversion----------
// type of num6 : float64
// type of str6 : string
