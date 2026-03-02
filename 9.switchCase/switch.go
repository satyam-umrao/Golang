package main

import "fmt"

func dayname(day int) {
	switch day {
	case 1:
		fmt.Println("Monday")
	case 2:
		fmt.Println("Tuesday")
	case 3:
		fmt.Println("Wedsnesday")
	case 4:
		fmt.Println("Thursday")
	case 5:
		fmt.Println("Friday hay !")
	case 6:
		fmt.Println("Saturday")
	case 7:
		fmt.Println("Sunday")
	}
}

func monthSeason(month string) {
	switch month {
	case "December", "January", "February":
		fmt.Println("Winter ⛄")
	case "March", "April", "May":
		fmt.Println("Spring 🌸")
	case "June", "July", "August":
		fmt.Println("Summer 🍺")
	case "September", "October", "November":
		fmt.Println("Autumn 🍂")
	}
}

func temperature(temp float64) {
	switch {
	case temp < 0:
		fmt.Println("Freezing ❄️")
	case temp >= 0 && temp < 15:
		fmt.Println("Cold 🧥")
	case temp >= 15 && temp < 30:
		fmt.Println("Warm ☀️")
	default:
		fmt.Println("Hot 🔥")
	}
}

func main() {
	day := 5
	month := "January"
	temp := 12.5

	// function calling
	dayname(day)
	monthSeason(month)
	temperature(temp)
}

// Output
// Friday hay !
// Winter ⛄
// Cold 🧥
