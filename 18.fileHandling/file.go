// comment content according to the code

package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	// Creating a file
	file, err := os.Create("fileHandling.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// // Writing a file
	content := "Hello, this is a file handling example in Go!"
	bytes, err := io.WriteString(file, content)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%d bytes written to file.\n", bytes)
	fmt.Println("File created and content written successfully.")

	// reading a file
	file, err := os.Open("fileHandling.txt")
	if err != nil {
		fmt.Printf("error while opening a file: %v", err)
		return
	}
	defer file.Close()

	buffer := make([]byte, 1024)
	for {
		n, err := file.Read(buffer)
		if err.Error() == "EOF" {
			break
		}
		if err != nil {
			fmt.Println("error while reading a file: ", err)
			return
		}
		fmt.Print(string(buffer[:n]))
	}

	// 2nd method of reading a file
	// content, err := ioutil.ReadFile("fileHandling.txt")
	content, err := os.ReadFile("fileHandling.txt")
	if err != nil {
		fmt.Printf("error while reading a file: %v", err)
		return
	}
	fmt.Println(string(content))
}
