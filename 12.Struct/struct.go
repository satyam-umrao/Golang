package main

import "fmt"

// struct creation
type Person struct {
	FirstName string
	LastName  string
	Age       int
}
type Details struct {
	City    string
	Country string
}

type Contact struct {
	Email string
	Phone string
}

type Employee struct {
	Person_about     Person
	Personal_details Details
	Contact_info     Contact
}

func main() {
	// Add a value to the struct
	p := Person{
		FirstName: "John",
		LastName:  "Doe",
		Age:       30,
	}
	fmt.Println(p)

	// Accessing struct fields
	fmt.Println("First Name:", p.FirstName)
	fmt.Println("Last Name:", p.LastName)
	fmt.Println("Age:", p.Age)

	// add details to employee
	e := Employee{
		Person_about: Person{
			FirstName: "Alice",
			LastName:  "Smith",
			Age:       28,
		},
		Personal_details: Details{
			City:    "New York",
			Country: "USA",
		},
		Contact_info: Contact{
			Email: "example@gmail.com",
			Phone: "123-456-7890",
		},
	}
	fmt.Println(e)
	// accss particular field
	fmt.Println("Employee Name:", e.Person_about.FirstName, e.Person_about.LastName)

	// Update struct fields
	e.Person_about.Age = 29
	fmt.Println("Updated Age:", e.Person_about.Age)

}
