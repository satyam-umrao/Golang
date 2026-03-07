package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("-------------Time package in Go------------")
	CurrentTime := time.Now()
	fmt.Println(CurrentTime.String())

	fmt.Println("\n--------------Time Formatting--------------")
	formattedTime := CurrentTime.Format("2006-01-02 03:04:05 PM Monday")
	fmt.Println(formattedTime)

	fmt.Println("\n-------------Time Parsing-----------------")
	timeString := "2024-06-01 12:30:00"
	parsedTime, _ := time.Parse("2006-01-02 15:04:05", timeString)
	fmt.Println(parsedTime)

	fmt.Println("\n-------------Time Duration----------------")
	duration := time.Hour*2 + time.Minute*30
	fmt.Println("Duration:", duration)

}

// Output
// -------------Time package in Go------------
// 2026-03-07 22:54:40.5350835 +0530 IST m=+0.000561601

// --------------Time Formatting--------------
// 2026-03-07 10:54:40 PM Saturday

// -------------Time Parsing-----------------
// 2024-06-01 12:30:00 +0000 UTC

// -------------Time Duration----------------
// Duration: 2h30m0s
