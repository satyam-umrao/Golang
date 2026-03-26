package main

import (
	"fmt"
	"net/url"
)

func main() {
	myURL := "https://www.example.com/path?query=123#fragment"
	println("URL:", myURL)
	fmt.Printf("type : %T\n", myURL)

	// change type to *URL

	parsedURL, err := url.Parse(myURL)
	if err != nil {
		fmt.Printf("error while parsing URL: %v", err)
		return
	}
	fmt.Printf("Parsed URL: %+v\n", parsedURL)
	fmt.Println("Scheme:", parsedURL.Scheme)
	fmt.Println("Host:", parsedURL.Host)
	fmt.Println("Path:", parsedURL.Path)
	fmt.Println("RawQuery:", parsedURL.RawQuery)
	fmt.Println("Fragment:", parsedURL.Fragment)

	// Modify the URL
	parsedURL.Path = "/newpath"
	parsedURL.RawQuery = "query=456"
	parsedURL.Fragment = "newfragment"

	newURL := parsedURL.String()
	fmt.Println("Modified URL:", newURL)
}

// Output
// URL: https://www.example.com/path?query=123#fragment
// type : string
// Parsed URL: https://www.example.com/path?query=123#fragment
// Scheme: https
// Host: www.example.com
// Path: /path
// RawQuery: query=123
// Fragment: fragment
// Modified URL: https://www.example.com/newpath?query=456#newfragment
