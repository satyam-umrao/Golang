package main

import (
	"fmt"
	"strings"
)

func main() {

	fmt.Println("----------Split----------")
	a := "Hello,World,Go"
	s := strings.Split(a, ",")
	fmt.Println(s)

	fmt.Println("\n----------Join----------")
	a2 := []string{"Hello", "World", "Go"}
	s2 := strings.Join(a2, ",")
	fmt.Println(s2)

	fmt.Println("\n----------Contains----------")
	a3 := "Hello, World!"
	fmt.Println(strings.Contains(a3, "World"))
	fmt.Println(strings.Contains(a3, "Go"))

	fmt.Println("\n----------HasPrefix & HasSuffix----------")
	a4 := "Hello, World!"
	fmt.Println(strings.HasPrefix(a4, "Hello"))
	fmt.Println(strings.HasSuffix(a4, "!"))

	fmt.Println("\n----------ToUpper & ToLower----------")
	a5 := "Hello, World!"
	fmt.Println(strings.ToUpper(a5))
	fmt.Println(strings.ToLower(a5))

	fmt.Println("\n----------Trim----------")
	a6 := "   Hello, World!   "
	fmt.Println(strings.TrimSpace(a6))

	fmt.Println("\n----------index----------")
	a7 := "Hello"
	fmt.Println(strings.Index(a7, "o"))

	fmt.Println("\n----------Count----------")
	a8 := "Hello"
	fmt.Println(strings.Count(a8, "l"))

	fmt.Println("\n----------Fields----------")
	a9 := "  welcome to golang "
	fmt.Println(strings.Fields(a9))
}

// Output
// ----------Split----------
// [Hello World Go]

// ----------Join----------
// Hello,World,Go

// ----------Contains----------
// true
// false

// ----------HasPrefix & HasSuffix----------
// true
// true

// ----------ToUpper & ToLower----------
// HELLO, WORLD!
// hello, world!

// ----------Trim----------
// Hello, World!

// ----------index----------
// 4

// ----------Count----------
// 2

// ----------Feilds----------
// [welcome to golang]
