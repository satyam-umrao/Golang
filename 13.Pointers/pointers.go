package main

import "fmt"

func ChangeValueByRefrence(num *int) {
	*num += 20
}

func main() {
	// initialization of pointers
	var a int
	a = 10

	var ptr *int
	ptr = &a

	fmt.Println("Value is", a)
	fmt.Println("pointer address is", ptr)
	fmt.Println("pointer points at value is", *ptr)

	// 2nd and fast method to initialize pointers
	fmt.Println("\n<<<---------2nd method--------->>>")
	num := 10
	pointer := &num
	fmt.Println("num :", a, "; pointer :", pointer, "; points to :", *pointer)

	fmt.Println("\n<<<---------default value--------->>>")
	var point *int
	if point == nil {
		fmt.Println("pointer do not points any value")
	}

	//change value of pointer
	fmt.Println("\n<<<---------Chamging value--------->>>")
	number := 10
	ChangeValueByRefrence(&number)
	fmt.Println("new num", number)
}
