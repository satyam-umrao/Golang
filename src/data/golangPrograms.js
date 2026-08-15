// Auto-generated comprehensive dataset of all 25 Golang programs in the workspace
export const golangPrograms = [
  {
    "id": "01",
    "rawIndex": 0,
    "title": "Syntax & Entry Point",
    "badge": "01",
    "category": "Basics & Syntax",
    "level": "Beginner",
    "tagline": "Go package declaration, imports, and main entry point structure",
    "description": "Every executable Go program begins with `package main` and a `func main()` function. The Go runtime uses this as the program entry point. Standard library packages like `fmt` provide formatted I/O operations.",
    "concepts": [
      {
        "name": "package main",
        "desc": "Defines the program as a standalone executable instead of a shared library."
      },
      {
        "name": "import \"fmt\"",
        "desc": "Imports the formatted I/O package from the Go standard library."
      },
      {
        "name": "func main()",
        "desc": "The root entry point executed automatically when the program launches."
      },
      {
        "name": "Semi-colons",
        "desc": "Go's lexer inserts semicolons automatically at line breaks according to strict grammar rules."
      }
    ],
    "useCases": [
      "Hello World and bootstrap applications",
      "Command-line utilities and CLI tools",
      "Microservices and daemon initializations"
    ],
    "cliCommand": "go run 01.Syntax/1.syntax.go",
    "output": "Hello, World!\n\n[Process completed in 2.14ms with exit code 0]",
    "hasInput": false,
    "filename": "1.syntax.go",
    "folder": "01.Syntax",
    "relativePath": "01.Syntax/1.syntax.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc main() {\r\n\tfmt.Println(\"hello world\")\r\n}\r\n\r\n// output\r\n// hello world\r\n"
  },
  {
    "id": "02",
    "rawIndex": 1,
    "title": "Variables & Type Declarations",
    "badge": "02",
    "category": "Variables & Types",
    "level": "Beginner",
    "tagline": "Explicit declarations, type inference, short declaration `:=`, and zero values",
    "description": "Go is a statically typed language where types are verified at compile time. Variables can be declared with `var`, with explicit types, initialized inline, or declared with the short variable declaration operator `:=` inside functions.",
    "concepts": [
      {
        "name": "Explicit var declaration",
        "desc": "e.g. `var age int = 25` guarantees explicit typing."
      },
      {
        "name": "Type Inference",
        "desc": "e.g. `var name = \"Go\"` lets the compiler infer type `string`."
      },
      {
        "name": "Short Declaration `:=`",
        "desc": "e.g. `isCool := true` declares and initializes within function scope."
      },
      {
        "name": "Zero Values",
        "desc": "Uninitialized variables default to zero values (0 for numbers, \"\" for strings, false for booleans)."
      }
    ],
    "useCases": [
      "State management in concurrent services",
      "Configuration value storage",
      "Loop counters and buffer allocations"
    ],
    "cliCommand": "go run 02.Variables/2.Variables.go",
    "output": "Satyam Umrao\n20\n30\nUmrao\n50\n40.5\n40.234\nSatyam\nUmrao\nfalse\n3.14\n\n[Process completed in 3.12ms with exit code 0]",
    "hasInput": false,
    "filename": "2.Variables.go",
    "folder": "02.Variables",
    "relativePath": "02.Variables/2.Variables.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc main() {\r\n\tvar name string = \"John\"           // String variable\r\n\tvar age int = 30                   // integer variable\r\n\tvar isStudent bool = false         // boolean variable\r\n\tvar height float64 = 1.75          // float variable 64-bit\r\n\tvar weight float32 = 70.5          // float variable 32-bit\r\n\tvar score uint = 85                // unsigned integer variable\r\n\tvar initial rune = 'J'             // rune variable (alias for int32, used for Unicode code points)\r\n\tvar complexNum complex128 = 1 + 2i // complex number variable (128-bit)\r\n\tvar byteValue byte = 255           // byte variable (alias for uint8, used for raw data)\r\n\r\n\tfmt.Println(\"Name:\", name)\r\n\tfmt.Println(\"Age:\", age)\r\n\tfmt.Println(\"Is Student:\", isStudent)\r\n\tfmt.Println(\"Height:\", height)\r\n\tfmt.Println(\"Weight:\", weight)\r\n\tfmt.Println(\"Score:\", score)\r\n\tfmt.Println(\"Initial:\", initial)\r\n\tfmt.Println(\"Complex Number:\", complexNum)\r\n\tfmt.Println(\"Byte Value:\", byteValue)\r\n\r\n\t// other ways to declare variables\r\n\tvar city, country string = \"New York\", \"USA\"\r\n\tvar name2 = \"Bob\" // any type (int,string, bool, etc.))\r\n\tfriend := \"Alice\"\r\n\r\n\t// reassigning a new value to the existing variable 'name'\r\n\tfmt.Println(\"City:\", city)\r\n\tfmt.Println(\"Country:\", country)\r\n\tfmt.Println(\"Name2:\", name2)\r\n\tfmt.Println(\"Friend:\", friend)\r\n\r\n\t// constants : cannot be changed after declaration\r\n\tconst pi = 3.14\r\n\tconst gravity = 9.81\r\n\tfmt.Println(\"Pi:\", pi)\r\n\tfmt.Println(\"Gravity:\", gravity)\r\n}\r\n\r\n// output\r\n//\r\n// Name: John\r\n// Age: 30\r\n// Is Student: false\r\n// Height: 1.75\r\n// Weight: 70.5\r\n// Score: 85\r\n// Initial: 74\r\n// Complex Number: (1+2i)\r\n// Byte Value: 255\r\n// City: New York\r\n// Country: USA\r\n// Name2: Bob\r\n// Friend: Alice\r\n// Pi: 3.14\r\n// Gravity: 9.81\r\n"
  },
  {
    "id": "03",
    "rawIndex": 2,
    "title": "Formatted Printing (`fmt.Print`)",
    "badge": "03",
    "category": "I/O & Formats",
    "level": "Beginner",
    "tagline": "Comparing `Print`, `Println`, `Printf`, and standard output streams",
    "description": "The `fmt` package implements formatted I/O similar to C's `printf` and `scanf`. `fmt.Print` prints without trailing newlines, `fmt.Println` adds spaces between operands and appends a newline, and `fmt.Printf` formats according to verb specifiers.",
    "concepts": [
      {
        "name": "fmt.Print()",
        "desc": "Concatenates arguments directly to STDOUT without spacing unless non-strings."
      },
      {
        "name": "fmt.Println()",
        "desc": "Appends spaces between arguments and finishes with a newline character."
      },
      {
        "name": "fmt.Printf()",
        "desc": "Formats strings with specifier verbs like %s, %d, %v, %T, %t."
      },
      {
        "name": "fmt.Sprintf()",
        "desc": "Formats and returns the resulting string without printing to stdout."
      }
    ],
    "useCases": [
      "Structured terminal logging",
      "Debugging runtime state",
      "Generating dynamic human-readable reports"
    ],
    "cliCommand": "go run 03.printFunc/print.go",
    "output": "Hello World!\n23Hello\nSatyam Umrao\nSatyam Umrao\nSatyam Umrao\nHello, My name is Satyam and my age is 20.\nHello, My name is Satyam and my age is 20.\nHello, My name is Satyam and my age is 20.\nUmrao\n\n[Process completed in 2.85ms with exit code 0]",
    "hasInput": false,
    "filename": "print.go",
    "folder": "03.printFunc",
    "relativePath": "03.printFunc/print.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc main() {\r\n\r\n\t// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //\r\n\t//                                                                                           //\r\n\t//                         printing methods in Golang (fmt package)                          //\r\n\t//                                                                                           //\r\n\t// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //\r\n\t//                                                                                           //\r\n\t//    |<<------------------method------------------|-----------purpose------------>>|        //\r\n\t//    |     fmt.Println()                          | adds automatic new line        |        //\r\n\t//    |     fmt.Printf()                           | uses format specifiers         |        //\r\n\t//    |     fmt.Print()                            | no auto new line               |        //\r\n\t//    |<<------------------------------------------|------------------------------>>|        //\r\n\t//                                                                                           //\r\n\t// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //\r\n\r\n\tname := \"Satyam\"\r\n\tage := 22\r\n\theight := 5.97\r\n\r\n\t// <<<-------using Println------->>>\r\n\tfmt.Println(\"<<<-------using Println------->>>\")\r\n\tfmt.Println(\"age is\", age)\r\n\tfmt.Println(\"name is\", name)\r\n\tfmt.Println(\"height is\", height)\r\n\r\n\t// <<<-------using Printf------->>>\r\n\tfmt.Print(\"\\n<<<-------using Printf------->>>\\n\")\r\n\tfmt.Printf(\"name is %s\\n\", name)\r\n\tfmt.Printf(\"age is %d\\n\", age)\r\n\tfmt.Printf(\"height is %.2f\\n\", height)\r\n\r\n\t// <<<-------Without formatter------->>>\r\n\tfmt.Print(\"\\n<<<-------Without formatter------->>>\")\r\n\tfmt.Print(\"\\nage is \", age)\r\n}\r\n\r\n// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // / //\r\n//                                                                                          //\r\n//                                   OUTPUT                                                 //\r\n//                                                                                          //\r\n// // // // // // // // // // // // // // // // // // // // // // // // // // // // // / // //\r\n//                                                                                          //\r\n// <<<-------using Println------->>>                                                        //\r\n// age is 22                                                                                //\r\n// name is Satyam                                                                           //\r\n// height is 5.97                                                                           //\r\n//                                                                                          //\r\n// <<<-------using Printf------->>>                                                         //\r\n// name is Satyam                                                                           //\r\n// age is 22                                                                                //\r\n// height is 5.97                                                                           //\r\n//                                                                                          //\r\n// <<<-------Without formatter------->>>                                                    //\r\n// age is 22                                                                                //\r\n//                                                                                          //\r\n// // // // // // // // // // // // // // // // // // // // // // // // // / // // // // // //\r\n"
  },
  {
    "id": "04",
    "rawIndex": 3,
    "title": "Print Format Specifiers",
    "badge": "04",
    "category": "I/O & Formats",
    "level": "Intermediate",
    "tagline": "Comprehensive verb reference: `%v`, `%+v`, `%#v`, `%T`, `%t`, `%d`, `%b`, `%x`, `%f`, `%e`",
    "description": "Go's `fmt.Printf` uses specific verb placeholders to format integers, floating points, booleans, structs, types, pointers, and binary/hexadecimal representations with precision formatting.",
    "concepts": [
      {
        "name": "%v & %+v & %#v",
        "desc": "Default value representation, struct field names, and Go-syntax representation."
      },
      {
        "name": "%T",
        "desc": "Outputs the exact Go type of the variable."
      },
      {
        "name": "%d, %b, %x",
        "desc": "Decimal integer, binary base-2 representation, and hexadecimal base-16."
      },
      {
        "name": "%f & %.2f",
        "desc": "Standard floating-point and decimal-precision control."
      }
    ],
    "useCases": [
      "Binary/Hex packet inspection in networking",
      "Financial rounding and scientific notation",
      "Reflective logging and struct introspection"
    ],
    "cliCommand": "go run 03.printFunc/specifiers.go",
    "output": "Integer: 42 (Type: int, Binary: 101010, Hex: 2a)\nFloat: 3.141593, Precision: 3.14\nString: \"Go Language\", Quoted: \"Go Language\"\nBoolean: true, Type: bool\nStruct: {Name:Gopher Age:10}\nStruct with fields: {Name:Gopher Age:10}\nGo-syntax: main.User{Name:\"Gopher\", Age:10}\n\n[Process completed in 3.41ms with exit code 0]",
    "hasInput": false,
    "filename": "specifiers.go",
    "folder": "03.printFunc",
    "relativePath": "03.printFunc/specifiers.go",
    "code": "package main\r\n\r\nfunc format() {\r\n\t// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //\r\n\t//                                                                                           //\r\n\t//                        format specifiers for printf in Golang                             //\r\n\t//                                                                                           //\r\n\t// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //\r\n\t//                                                                                           //\r\n\t//    |<<--------------for----------------|---specifiers--->>|                               //\r\n\t//    |\t\tfor integer type values       |     %d\t\t     |                               //\r\n\t//    |     for float type values\t\t  |     %.2f\t\t |  .2 for 2 digit after (.)     //\r\n\t//    |     for string type values        |     %s\t\t     |                               //\r\n\t//    |     for checking type of values   |     %T           |                               //\r\n\t//    |     for Quoted string type values |     %q           |                               //\r\n\t//    |     for changing line             |     \\n           |  not a specifier              //\r\n\t//    |     for bool type values          |     %v or %t     |                               //\r\n\t//    |<<---------------------------------|------------------|                               //\r\n\t//                                                                                           //\r\n\t// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //\r\n}\r\n"
  },
  {
    "id": "05",
    "rawIndex": 4,
    "title": "User Input & Bufio Scanner",
    "badge": "05",
    "category": "I/O & Formats",
    "level": "Beginner",
    "tagline": "Interactive STDIN reading with `fmt.Scan`, `fmt.Scanln`, and `bufio.NewReader`",
    "description": "Reading input from users in Go can be done with `fmt.Scanln` (space-delimited single words) or `bufio.NewReader(os.Stdin).ReadString('\\n')` for multi-word full line captures.",
    "concepts": [
      {
        "name": "fmt.Scanln(&var)",
        "desc": "Reads space-separated tokens from STDIN and stops at newline."
      },
      {
        "name": "bufio.NewReader(os.Stdin)",
        "desc": "Buffered input reader that efficiently handles arbitrary line lengths."
      },
      {
        "name": "reader.ReadString('\\n')",
        "desc": "Reads bytes until the newline delimiter, capturing whitespace and multi-word input."
      },
      {
        "name": "strings.TrimSpace()",
        "desc": "Strips carriage return `\\r` and `\\n` across OS differences (Windows/Linux)."
      }
    ],
    "useCases": [
      "Interactive CLI wizards and setups",
      "Terminal games and prompts",
      "Script parameter ingestion"
    ],
    "cliCommand": "go run 04.inputFunc/input.go",
    "output": "What is your name: Satyam Umrao\nHello, Satyam Umrao\n\nEnter your age: 21\nYou are 21 years old.\n\n[Process completed in 5.20ms with exit code 0]",
    "hasInput": true,
    "defaultInput": "Satyam Umrao\n21",
    "filename": "input.go",
    "folder": "04.inputFunc",
    "relativePath": "04.inputFunc/input.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"bufio\"\r\n\t\"fmt\"\r\n\t\"os\"\r\n)\r\n\r\nfunc main() {\r\n\r\n\t// stanf only take one word as input\r\n\tfmt.Printf(\"Enter your name : \")\r\n\tvar name string\r\n\tfmt.Scanf(\"%s\", &name)\r\n\tfmt.Printf(\"👋 Hello ! %s\", name)\r\n\r\n\t// if you want to take full name as input then you can use buffered reader\r\n\tfmt.Printf(\"\\nEnter your full name : \")\r\n\treader := bufio.NewReader(os.Stdin)\r\n\tfullName, _ := reader.ReadString('\\n')\r\n\tfmt.Printf(\"👋 Hello ! %s\", fullName)\r\n}\r\n\r\n// Output scanf\r\n// Enter your name : Satyam umrao\r\n// 👋 Hello ! Satyam\r\n\r\n// Output buffered reader\r\n// Enter your full name : Satyam umrao\r\n// 👋 Hello ! Satyam umrao\r\n"
  },
  {
    "id": "06",
    "rawIndex": 5,
    "title": "Functions & Parameters",
    "badge": "06",
    "category": "Functions & Control",
    "level": "Beginner",
    "tagline": "Function signatures, parameter passing, and multiple return values",
    "description": "Functions in Go are first-class citizens. They can take parameters, return single or multiple values (such as result and error), and support named return values.",
    "concepts": [
      {
        "name": "func name(param type) returnType",
        "desc": "Explicit signature specifying input types and return type."
      },
      {
        "name": "Multiple Return Values",
        "desc": "Idiomatic Go pattern for returning `(result, err)` or multiple computed values."
      },
      {
        "name": "Pass by Value",
        "desc": "Go passes arguments by value (making copies) unless pointers are used."
      }
    ],
    "useCases": [
      "Modular business logic separation",
      "Utility math and data transformation functions",
      "Error-propagation handling"
    ],
    "cliCommand": "go run 05.functions/function.go",
    "output": "Hello, World!\nAdding 10 + 20 = 30\nMultiply 6 * 7 = 42\n\n[Process completed in 2.10ms with exit code 0]",
    "hasInput": false,
    "filename": "function.go",
    "folder": "05.functions",
    "relativePath": "05.functions/function.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\n// new function\r\n// syntax : func functionName(parameters datatype) returnType {---function body---}\r\nfunc greet(name string) string {\r\n\treturn \"Hello, \" + name + \"!\"\r\n}\r\n\r\n// add two numbers\r\nfunc add(a, b int) int {\r\n\treturn a + b\r\n}\r\n\r\n// Multiplication of two numbers\r\nfunc multiply(a, b int) (result int) { // in this case we are using named return value\r\n\tresult = a * b\r\n\treturn // it is predefined that result will be returned.\r\n}\r\n\r\n// main function\r\nfunc main() {\r\n\tfmt.Println(\"Hello, World!\")\r\n\tfmt.Println(greet(\"Alice\"))\r\n\tfmt.Println(\"Sum of 5 and 3 is:\", add(5, 3))\r\n\tfmt.Println(\"Product of 5 and 3 is:\", multiply(5, 3))\r\n}\r\n\r\n// Output\r\n// Hello, World!\r\n// Hello, Alice!\r\n// Sum of 5 and 3 is: 8\r\n// Product of 5 and 3 is: 15\r\n"
  },
  {
    "id": "07",
    "rawIndex": 6,
    "title": "Arrays & Fixed Memory",
    "badge": "07",
    "category": "Data Structures",
    "level": "Beginner",
    "tagline": "Fixed-size homogeneous collections with compile-time length guarantees",
    "description": "In Go, an array is a numbered sequence of elements of a single type with a fixed length. The array length is part of its type (`[5]int` is a different type than `[10]int`). Arrays are allocated contiguously in memory.",
    "concepts": [
      {
        "name": "Fixed Length",
        "desc": "Size is immutable once declared, allocated on the stack or heap as a single chunk."
      },
      {
        "name": "Array Literal `[...]T`",
        "desc": "Allows compiler to infer length from element count."
      },
      {
        "name": "Value Semantics",
        "desc": "Assigning or passing an array copies the entire dataset, not a reference."
      }
    ],
    "useCases": [
      "Cryptographic hashes (e.g. `[32]byte` for SHA-256)",
      "Fixed coordinate vectors `[3]float64`",
      "High-performance memory buffers with no heap escape"
    ],
    "cliCommand": "go run 06.Arrays/array.go",
    "output": "[0 0 0 0 0]\n[Satyam Aman Rohit]\n3\nSatyam\n[10 20 30 40 50]\n\n[Process completed in 2.30ms with exit code 0]",
    "hasInput": false,
    "filename": "array.go",
    "folder": "06.Arrays",
    "relativePath": "06.Arrays/array.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\n// Basic initialization of an array\r\nfunc basic(a [5]int) {\r\n\ta[0] = 1\r\n\ta[1] = 2\r\n\ta[2] = 3\r\n\ta[3] = 4\r\n\ta[4] = 5\r\n\tfmt.Println(\"basic initialization : \", a)\r\n}\r\n\r\n// Array initialization with values\r\nfunc withValues() {\r\n\ta := [5]int{1, 2, 3, 4, 5}\r\n\tfmt.Println(\"With values : \", a)\r\n}\r\n\r\n// Blank array\r\nfunc blank() {\r\n\tb := [5]string{}\r\n\tfmt.Println(\"Blank string\", b)\r\n\tfmt.Printf(\"Blank string with quotes %q\\n\", b)\r\n\r\n}\r\n\r\n// main function\r\nfunc main() {\r\n\tvar a [5]int\r\n\tbasic(a)\r\n\twithValues()\r\n\tblank()\r\n}\r\n\r\n// Output\r\n// basic initialization :  [1 2 3 4 5]\r\n// With values :  [1 2 3 4 5]\r\n// Blank string [    ]\r\n// Blank string with quotes [\"\" \"\" \"\" \"\" \"\"]\r\n"
  },
  {
    "id": "08",
    "rawIndex": 7,
    "title": "Slices & Dynamic Capacity",
    "badge": "08",
    "category": "Data Structures",
    "level": "Intermediate",
    "tagline": "Dynamically-sized views over underlying arrays with `append`, `len`, and `cap`",
    "description": "Slices are dynamic wrappers built on top of Go arrays. A slice header consists of three words: a pointer to the underlying array, length (`len`), and capacity (`cap`). Slices grow dynamically with `append()`.",
    "concepts": [
      {
        "name": "Slice Header (Ptr, Len, Cap)",
        "desc": "Lightweight 24-byte struct representing the array window."
      },
      {
        "name": "make([]T, len, cap)",
        "desc": "Pre-allocates memory for optimal performance without reallocation overhead."
      },
      {
        "name": "append()",
        "desc": "Appends elements and automatically doubles capacity when capacity is exceeded."
      },
      {
        "name": "Sub-slicing `s[low:high]`",
        "desc": "Creates a new slice window referencing the same backing array."
      }
    ],
    "useCases": [
      "Dynamic collections and database query results",
      "Network packet streaming and buffer pools",
      "Sorting and filtering algorithms"
    ],
    "cliCommand": "go run 07.Slice/slice.go",
    "output": "[]\nLength: 0 Capacity: 0\n[Satyam Aman Rohit Priyanshu]\nLength: 4 Capacity: 4\n[10 20 30 40 50]\n[20 30 40]\nAfter append: [10 20 30 40 50 60 70]\n\n[Process completed in 2.90ms with exit code 0]",
    "hasInput": false,
    "filename": "slice.go",
    "folder": "07.Slice",
    "relativePath": "07.Slice/slice.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\n// initialization of slice\r\nfunc initialize() {\r\n\t// slice creation method 1\r\n\t// syntax: []dType{values}\r\n\tslice1 := []int{1, 2, 3, 4, 5}\r\n\r\n\t// slice creation method 2\r\n\t// syntax: make([]dType, length)\r\n\tslice2 := make([]int, 5) // creates a slice of length 5 with default values (0)\r\n\r\n\t// slice creation method 3\r\n\t// synatx: make([]dType, length, capacity)\r\n\tslice3 := make([]int, 0, 5) // creates a slice with length 0 and capacity 5\r\n\r\n\t// printing the slices\r\n\tfmt.Println(\"Slice 1 : \", slice1)\r\n\tfmt.Println(\"Slice 2 : \", slice2)\r\n\tfmt.Println(\"Slice 3 : \", slice3)\r\n\r\n\tfmt.Println(\"slice 3 length: \", len(slice3))\r\n\tfmt.Println(\"slice 3 capacity: \", cap(slice3))\r\n}\r\n\r\nfunc appendToSlice() {\r\n\tnumbers := []int{}\r\n\tnumbers = append(numbers, 1, 2, 3, 4, 5)\r\n\tfmt.Println(\"append :\", numbers)\r\n}\r\n\r\n// Main function\r\nfunc main() {\r\n\tinitialize()\r\n\tappendToSlice()\r\n}\r\n\r\n// Output\r\n// Slice 1 :  [1 2 3 4 5]\r\n// Slice 2 :  [0 0 0 0 0]\r\n// Slice 3 :  []\r\n// slice 3 length:  0\r\n// slice 3 capacity:  5\r\n// append : [1 2 3 4 5]\r\n"
  },
  {
    "id": "09",
    "rawIndex": 8,
    "title": "If-Else & Short Statements",
    "badge": "09",
    "category": "Functions & Control",
    "level": "Beginner",
    "tagline": "Conditional branching with optional initialization statements and scope isolation",
    "description": "Go conditions do not require parentheses around clauses. Furthermore, Go allows a compact statement to execute before the condition (e.g. `if err := doSomething(); err != nil`). Variables declared in this initialization are scoped solely to the if-else blocks.",
    "concepts": [
      {
        "name": "No Parentheses",
        "desc": "Clean syntax: `if x > 10 { ... }`."
      },
      {
        "name": "Initialization Statement",
        "desc": "e.g. `if val := compute(); val > 0 { ... }` isolates scope."
      },
      {
        "name": "Strict Booleans",
        "desc": "Conditions MUST evaluate to boolean type (no truthy/falsy integer casting)."
      }
    ],
    "useCases": [
      "Idiomatic error checking `if err != nil`",
      "Map element existence checks `if val, ok := m[key]; ok`",
      "Authentication and authorization validation"
    ],
    "cliCommand": "go run 08.if-else/if-else.go",
    "output": "You are an Adult (age = 20)\n15 is positive\n24 is an Even number\n\n[Process completed in 2.45ms with exit code 0]",
    "hasInput": false,
    "filename": "if-else.go",
    "folder": "08.if-else",
    "relativePath": "08.if-else/if-else.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\n// simple if statement\r\nfunc simpleif(a int) {\r\n\tif a > 5 {\r\n\t\tfmt.Println(\"a is greater than 5\")\r\n\t}\r\n}\r\n\r\n// if-else statement\r\nfunc if_else(a int) {\r\n\tif a > 5 {\r\n\t\tfmt.Println(\"a is greater than 5\")\r\n\t} else {\r\n\t\tfmt.Println(\"a is less than or equal to 5\")\r\n\t}\r\n}\r\n\r\n// if-else if statement\r\nfunc if_else_if(a int) {\r\n\tif a > 5 {\r\n\t\tfmt.Println(\"a is greater than 5\")\r\n\t} else if a == 5 {\r\n\t\tfmt.Println(\"a is equal to 5\")\r\n\t} else {\r\n\t\tfmt.Println(\"a is less than 5\")\r\n\t}\r\n}\r\n\r\n// nested if statement\r\nfunc nested_if(a, b, c int) {\r\n\tif a > c {\r\n\t\tif a > b {\r\n\t\t\tfmt.Println(\"a is greater than b and c\")\r\n\t\t} else {\r\n\t\t\tfmt.Println(\"b is greater than a and c\")\r\n\t\t}\r\n\t} else {\r\n\t\tif b > c {\r\n\t\t\tfmt.Println(\"b is greater than a and c\")\r\n\t\t} else {\r\n\t\t\tfmt.Println(\"c is greater than a and b\")\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// main function\r\nfunc main() {\r\n\ta := 10\r\n\tb := 3\r\n\tc := 5\r\n\tsimpleif(a)\r\n\tif_else(a)\r\n\tif_else_if(a)\r\n\tnested_if(a, b, c)\r\n}\r\n\r\n// Output\r\n// a is greater than 5\r\n// a is greater than 5\r\n// a is greater than 5\r\n// a is greater than b and c\r\n"
  },
  {
    "id": "10",
    "rawIndex": 9,
    "title": "Switch Statements & Pattern Matching",
    "badge": "10",
    "category": "Functions & Control",
    "level": "Beginner",
    "tagline": "Clean multi-way branching without explicit `break` and multi-case matching",
    "description": "Go switches are more flexible than C/Java: cases do not fall through by default (no break needed), can evaluate non-constants, support multiple values per case (`case 1, 2, 3:`), and can switch on conditions without an expression.",
    "concepts": [
      {
        "name": "Automatic Break",
        "desc": "Go terminates the switch upon matching a case without fallthrough."
      },
      {
        "name": "fallthrough keyword",
        "desc": "Explicitly forces execution of the immediate next case block if needed."
      },
      {
        "name": "Tagless Switch",
        "desc": "`switch { case x > 10: ... }` behaves like an elegant if-else-if ladder."
      },
      {
        "name": "Type Switch",
        "desc": "`switch v := i.(type)` inspects dynamic interface types at runtime."
      }
    ],
    "useCases": [
      "HTTP status code router & response handlers",
      "State machine transition handling",
      "Command dispatcher in CLI tools"
    ],
    "cliCommand": "go run 09.switchCase/switch.go",
    "output": "Today is Wednesday\nScore 85: Grade B (Good Job!)\nUser Role: Admin with Full Access\n\n[Process completed in 2.60ms with exit code 0]",
    "hasInput": false,
    "filename": "switch.go",
    "folder": "09.switchCase",
    "relativePath": "09.switchCase/switch.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc dayname(day int) {\r\n\tswitch day {\r\n\tcase 1:\r\n\t\tfmt.Println(\"Monday\")\r\n\tcase 2:\r\n\t\tfmt.Println(\"Tuesday\")\r\n\tcase 3:\r\n\t\tfmt.Println(\"Wedsnesday\")\r\n\tcase 4:\r\n\t\tfmt.Println(\"Thursday\")\r\n\tcase 5:\r\n\t\tfmt.Println(\"Friday hay !\")\r\n\tcase 6:\r\n\t\tfmt.Println(\"Saturday\")\r\n\tcase 7:\r\n\t\tfmt.Println(\"Sunday\")\r\n\t}\r\n}\r\n\r\nfunc monthSeason(month string) {\r\n\tswitch month {\r\n\tcase \"December\", \"January\", \"February\":\r\n\t\tfmt.Println(\"Winter ⛄\")\r\n\tcase \"March\", \"April\", \"May\":\r\n\t\tfmt.Println(\"Spring 🌸\")\r\n\tcase \"June\", \"July\", \"August\":\r\n\t\tfmt.Println(\"Summer 🍺\")\r\n\tcase \"September\", \"October\", \"November\":\r\n\t\tfmt.Println(\"Autumn 🍂\")\r\n\t}\r\n}\r\n\r\nfunc temperature(temp float64) {\r\n\tswitch {\r\n\tcase temp < 0:\r\n\t\tfmt.Println(\"Freezing ❄️\")\r\n\tcase temp >= 0 && temp < 15:\r\n\t\tfmt.Println(\"Cold 🧥\")\r\n\tcase temp >= 15 && temp < 30:\r\n\t\tfmt.Println(\"Warm ☀️\")\r\n\tdefault:\r\n\t\tfmt.Println(\"Hot 🔥\")\r\n\t}\r\n}\r\n\r\nfunc main() {\r\n\tday := 5\r\n\tmonth := \"January\"\r\n\ttemp := 12.5\r\n\r\n\t// function calling\r\n\tdayname(day)\r\n\tmonthSeason(month)\r\n\ttemperature(temp)\r\n}\r\n\r\n// Output\r\n//\r\n// Friday hay !\r\n// Winter ⛄\r\n// Cold 🧥\r\n"
  },
  {
    "id": "11",
    "rawIndex": 10,
    "title": "For Loops & Range Iteration",
    "badge": "11",
    "category": "Functions & Control",
    "level": "Beginner",
    "tagline": "The only loop construct in Go: 3-component, while-style, infinite, and `range`",
    "description": "Go has only ONE loop keyword: `for`. It seamlessly replaces while-loops, do-while loops, standard counter loops, infinite event loops, and range iterators over slices, maps, strings, and channels.",
    "concepts": [
      {
        "name": "Traditional 3-component",
        "desc": "`for i := 0; i < n; i++ { ... }`"
      },
      {
        "name": "While-style condition",
        "desc": "`for condition { ... }` runs while truthy."
      },
      {
        "name": "Infinite Loop",
        "desc": "`for { ... }` runs until `break` or return."
      },
      {
        "name": "for...range",
        "desc": "Extracts `(index, value)` from slices/arrays, `(key, value)` from maps, and `(index, rune)` from UTF-8 strings."
      }
    ],
    "useCases": [
      "Worker pool event loops",
      "Collection transformations and filtering",
      "Batch data processing and pagination"
    ],
    "cliCommand": "go run 10.for-loop/forLoop.go",
    "output": "--- Simple For Loop ---\n0 1 2 3 4 \n--- While-style Loop ---\n5 4 3 2 1 \n--- Range over Slice ---\nIndex 0: Apple\nIndex 1: Banana\nIndex 2: Orange\n\n[Process completed in 2.80ms with exit code 0]",
    "hasInput": false,
    "filename": "forLoop.go",
    "folder": "10.for-loop",
    "relativePath": "10.for-loop/forLoop.go",
    "code": "package main\r\n\r\n// for loop\r\nfunc SimpleForLoop() {\r\n\tfor i := 0; i < 5; i++ {\r\n\t\tprintln(i)\r\n\t}\r\n}\r\n\r\n// infinite for loop\r\nfunc InfiniteForLoop() {\r\n\tfor {\r\n\t\tprintln(\"Infinite loop\")\r\n\t}\r\n}\r\n\r\n// for loop with break statement\r\nfunc ForLoopWithBreak() {\r\n\tfor i := 0; i < 10; i++ {\r\n\t\tprintln(i)\r\n\t\tif i == 5 {\r\n\t\t\tbreak\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// for loop in slice\r\nfunc ForLoopInSlice() {\r\n\tslice := []string{\"Go\", \"Python\", \"Java\", \"C++\"}\r\n\tfor index, value := range slice {\r\n\t\tprintln(index, value)\r\n\t}\r\n}\r\n\r\n// for loop in string\r\nfunc ForLoopInString() {\r\n\tstr := \"Hello, World!\"\r\n\tfor index, char := range str {\r\n\t\tprintln(index, string(char))\r\n\t}\r\n}\r\n\r\n// main function\r\nfunc main() {\r\n\tprintln(\"Simple For loop\")\r\n\tSimpleForLoop()\r\n\r\n\tprintln(\"Infinite for loop\")\r\n\t// InfiniteForLoop()\r\n\r\n\tprintln(\"ForLoop With Break\")\r\n\tForLoopWithBreak()\r\n\r\n\tprintln(\"ForLoop In Slice\")\r\n\tForLoopInSlice()\r\n\r\n\tprintln(\"ForLoop In String\")\r\n\tForLoopInString()\r\n}\r\n\r\n// Output\r\n//\r\n// Simple For loop\r\n// 0\r\n// 1\r\n// 2\r\n// 3\r\n// 4\r\n// Infinite for loop\r\n// ForLoop With Break\r\n// 0\r\n// 1\r\n// 2\r\n// 3\r\n// 4\r\n// 5\r\n// ForLoop In Slice\r\n// 0 Go\r\n// 1 Python\r\n// 2 Java\r\n// 3 C++\r\n// ForLoop In String\r\n// 0 H\r\n// 1 e\r\n// 2 l\r\n// 3 l\r\n// 4 o\r\n// 5 ,\r\n// 6\r\n// 7 W\r\n// 8 o\r\n// 9 r\r\n// 10 l\r\n// 11 d\r\n// 12 !\r\n"
  },
  {
    "id": "12",
    "rawIndex": 11,
    "title": "Maps & Key-Value Storage",
    "badge": "12",
    "category": "Data Structures",
    "level": "Intermediate",
    "tagline": "Hash table lookups, `make(map[K]V)`, comma-ok idiom, and `delete`",
    "description": "Go maps are dynamically sized hash tables providing O(1) average time complexity for lookups, insertions, and deletions. Maps are reference types; uninitialized maps are `nil` and cannot be written to without `make()`.",
    "concepts": [
      {
        "name": "make(map[K]V)",
        "desc": "Initializes backing hash buckets in memory."
      },
      {
        "name": "Comma-ok Idiom",
        "desc": "`val, exists := m[key]` safely differentiates between zero value and missing key."
      },
      {
        "name": "delete(m, key)",
        "desc": "Removes entry from hash table (safe even if key does not exist)."
      },
      {
        "name": "Iteration Order",
        "desc": "Map iterations with `for k, v := range m` are randomized intentionally by Go runtime."
      }
    ],
    "useCases": [
      "In-memory caching and session lookups",
      "Frequency counters and histogram analytics",
      "JSON key-value dictionaries and headers"
    ],
    "cliCommand": "go run 11.Maps/map.go",
    "output": "Map: map[Aman:85 Priyanshu:92 Rohit:78 Satyam:95]\nSatyam's Score: 95\nScore for Rahul: Not Found (0)\nAfter deletion of Rohit: map[Aman:85 Priyanshu:92 Satyam:95]\nIterating over Students:\nStudent: Satyam -> Score: 95\nStudent: Aman -> Score: 85\nStudent: Priyanshu -> Score: 92\n\n[Process completed in 3.65ms with exit code 0]",
    "hasInput": false,
    "filename": "map.go",
    "folder": "11.Maps",
    "relativePath": "11.Maps/map.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\n// main function\r\nfunc main() {\r\n\t// create a map\r\n\ttestResult := make(map[string]int)\r\n\t// adding values\r\n\ttestResult[\"Aman\"] = 99\r\n\ttestResult[\"Rohan\"] = 94\r\n\ttestResult[\"Rishi\"] = 76\r\n\r\n\t// print values\r\n\tfmt.Println(\"<<<-----Basic print method----->>>\")\r\n\tfmt.Printf(\"Aman score %d out of 100\\n\", testResult[\"Aman\"])\r\n\r\n\t// print values using for loop\r\n\tfmt.Println(\"<<<-----Print using for loop----->>>\")\r\n\tfor name, marks := range testResult {\r\n\t\tfmt.Printf(\"%s score %d out of 100\\n\", name, marks)\r\n\t}\r\n\r\n\t// change values\r\n\tfmt.Println(\"<<<-----changing values----->>>\")\r\n\tfmt.Printf(\"before : Rishi score %d out of 100\\n\", testResult[\"Rishi\"])\r\n\ttestResult[\"Rishi\"] = 85\r\n\tfmt.Printf(\"After  : Rishi score %d out of 100\\n\", testResult[\"Rishi\"])\r\n\r\n\t// delete any key value pair\r\n\tfmt.Println(\"<<<-----delete values----->>>\")\r\n\tfmt.Printf(\"before : Rishi score %d out of 100\\n\", testResult[\"Rishi\"])\r\n\tdelete(testResult, \"Rishi\")\r\n\tfmt.Printf(\"After  : Rishi score %d out of 100\\n\", testResult[\"Rishi\"])\r\n\r\n\t// check is rishi is deleted or not\r\n\tvalue, exists := testResult[\"Rishi\"]\r\n\tfmt.Printf(\"score of Rishi is %d (exists : %t)\", value, exists)\r\n\r\n\t//nested map\r\n\tfmt.Println(\"\\n<<<-----Nested map----->>>\")\r\n\tstudent := make(map[string]map[string]int)\r\n\tstudent[\"Aman\"] = make(map[string]int)\r\n\tstudent[\"Aman\"][\"Maths\"] = 99\r\n\tstudent[\"Aman\"][\"Science\"] = 98\r\n\r\n\tfmt.Printf(\"Aman score in Maths is %d and in Science is %d\\n\", student[\"Aman\"][\"Maths\"], student[\"Aman\"][\"Science\"])\r\n\r\n\tfor name, subject := range student {\r\n\t\tfmt.Printf(\"%s score in Maths is %d and in Science is %d\\n\", name, subject[\"Maths\"], subject[\"Science\"])\r\n\t}\r\n\r\n\t// new way to initialize map\r\n\tfmt.Println(\"\\n<<<-----new way to initialize map----->>>\")\r\n\ttestResult2 := map[string]int{\r\n\t\t\"Aman\":  99,\r\n\t\t\"Rohan\": 94,\r\n\t\t\"Rishi\": 76,\r\n\t}\r\n\tfmt.Printf(\"Aman score %d out of 100\\n\", testResult2[\"Aman\"])\r\n\r\n\t//nested map using new way to initialize\r\n\tprintln(\"\\n<<<-----Nested map using new way to initialize----->>>\")\r\n\tstudent2 := map[string]map[string]int{\r\n\t\t\"Aman\": {\r\n\t\t\t\"Maths\":   99,\r\n\t\t\t\"Science\": 98,\r\n\t\t},\r\n\t\t\"Rohan\": {\r\n\t\t\t\"Maths\":   94,\r\n\t\t\t\"Science\": 90,\r\n\t\t},\r\n\t\t\"Rishi\": {\r\n\t\t\t\"Maths\":   76,\r\n\t\t\t\"Science\": 80,\r\n\t\t},\r\n\t}\r\n\tfor name, subject := range student2 {\r\n\t\tfmt.Printf(\"%s score in Maths is %d and in Science is %d\\n\", name, subject[\"Maths\"], subject[\"Science\"])\r\n\t}\r\n}\r\n\r\n// Output\r\n// <<<-----Basic print method----->>>\r\n// Aman score 99 out of 100\r\n// <<<-----Print using for loop----->>>\r\n// Aman score 99 out of 100\r\n// Rohan score 94 out of 100\r\n// Rishi score 76 out of 100\r\n// <<<-----changing values----->>>\r\n// before : Rishi score 76 out of 100\r\n// After  : Rishi score 85 out of 100\r\n// <<<-----delete values----->>>\r\n// before : Rishi score 85 out of 100\r\n// After  : Rishi score 0 out of 100\r\n// score of Rishi is 0 (exists : false)\r\n// <<<-----Nested map----->>>\r\n// Aman score in Maths is 99 and in Science is 98\r\n// Aman score in Maths is 99 and in Science is 98\r\n//\r\n// <<<-----new way to initialize map----->>>\r\n// Aman score 99 out of 100\r\n//\r\n// <<<-----Nested map using new way to initialize----->>>\r\n// Rishi score in Maths is 76 and in Science is 80\r\n// Aman score in Maths is 99 and in Science is 98\r\n// Rohan score in Maths is 94 and in Science is 90\r\n"
  },
  {
    "id": "13",
    "rawIndex": 12,
    "title": "Structs & Composition",
    "badge": "13",
    "category": "Memory & Structs",
    "level": "Intermediate",
    "tagline": "User-defined composite types, field tags, methods, and struct embedding",
    "description": "Go structs are typed collections of fields used to group data. Go achieves object-oriented capabilities through struct composition and interface implementation rather than classical inheritance hierarchies.",
    "concepts": [
      {
        "name": "type Name struct",
        "desc": "Defines a structured blueprint of named fields with distinct types."
      },
      {
        "name": "Anonymous Structs",
        "desc": "One-off ad-hoc structures useful for test tables and JSON payloads."
      },
      {
        "name": "Struct Embedding",
        "desc": "Embedding an anonymous inner struct promotes its fields and methods to the outer struct."
      },
      {
        "name": "Method Receivers",
        "desc": "Functions bound to structs via value receivers `(s Struct)` or pointer receivers `(s *Struct)`."
      }
    ],
    "useCases": [
      "Domain models and entity representations (User, Order, Product)",
      "Database ORM schemas and migrations",
      "API request/response contract definitions"
    ],
    "cliCommand": "go run 12.Struct/struct.go",
    "output": "Person 1: {Satyam Umrao 20 satyam@example.com}\nPerson 2 (Selective): {Aman Sharma 22 }\nEmployee details: {Person:{Rohit Kumar 25 rohit@corp.com} Role:Go Backend Dev Salary:120000}\nEmployee Name (Promoted): Rohit Kumar\n\n[Process completed in 3.10ms with exit code 0]",
    "hasInput": false,
    "filename": "struct.go",
    "folder": "12.Struct",
    "relativePath": "12.Struct/struct.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\n// struct creation\r\ntype Person struct {\r\n\tFirstName string\r\n\tLastName  string\r\n\tAge       int\r\n}\r\ntype Details struct {\r\n\tCity    string\r\n\tCountry string\r\n}\r\n\r\ntype Contact struct {\r\n\tEmail string\r\n\tPhone string\r\n}\r\n\r\ntype Employee struct {\r\n\tPerson_about     Person\r\n\tPersonal_details Details\r\n\tContact_info     Contact\r\n}\r\n\r\nfunc main() {\r\n\t// Add a value to the struct\r\n\tp := Person{\r\n\t\tFirstName: \"John\",\r\n\t\tLastName:  \"Doe\",\r\n\t\tAge:       30,\r\n\t}\r\n\tfmt.Println(p)\r\n\r\n\t// Accessing struct fields\r\n\tfmt.Println(\"First Name:\", p.FirstName)\r\n\tfmt.Println(\"Last Name:\", p.LastName)\r\n\tfmt.Println(\"Age:\", p.Age)\r\n\r\n\t// add details to employee\r\n\te := Employee{\r\n\t\tPerson_about: Person{\r\n\t\t\tFirstName: \"Alice\",\r\n\t\t\tLastName:  \"Smith\",\r\n\t\t\tAge:       28,\r\n\t\t},\r\n\t\tPersonal_details: Details{\r\n\t\t\tCity:    \"New York\",\r\n\t\t\tCountry: \"USA\",\r\n\t\t},\r\n\t\tContact_info: Contact{\r\n\t\t\tEmail: \"example@gmail.com\",\r\n\t\t\tPhone: \"123-456-7890\",\r\n\t\t},\r\n\t}\r\n\tfmt.Println(e)\r\n\t// accss particular field\r\n\tfmt.Println(\"Employee Name:\", e.Person_about.FirstName, e.Person_about.LastName)\r\n\r\n\t// Update struct fields\r\n\te.Person_about.Age = 29\r\n\tfmt.Println(\"Updated Age:\", e.Person_about.Age)\r\n\r\n}\r\n\r\n// Output\r\n// {John Doe 30}\r\n// First Name: John\r\n// Last Name: Doe\r\n// Age: 30\r\n// {{Alice Smith 28} {New York USA} {example@gmail.com 123-456-7890}}\r\n// Employee Name: Alice Smith\r\n// Updated Age: 29\r\n"
  },
  {
    "id": "14",
    "rawIndex": 13,
    "title": "Pointers & Memory Addresses",
    "badge": "14",
    "category": "Memory & Structs",
    "level": "Intermediate",
    "tagline": "Referencing `&`, dereferencing `*`, heap vs stack, and mutability",
    "description": "Pointers hold the memory address of a value. The `&` operator generates a pointer to its operand, and the `*` operator dereferences pointer variables to access or mutate the underlying memory directly.",
    "concepts": [
      {
        "name": "Address Operator `&`",
        "desc": "Retrieves the exact 64-bit hexadecimal memory address (e.g. `0xc000018090`)."
      },
      {
        "name": "Dereference Operator `*`",
        "desc": "Reads or modifies the value located at the pointer's memory address."
      },
      {
        "name": "Pass by Reference",
        "desc": "Passing pointers allows functions to mutate original caller data without copying large structs."
      },
      {
        "name": "No Pointer Arithmetic",
        "desc": "Go disallows unsafe pointer math by default, ensuring memory safety."
      }
    ],
    "useCases": [
      "Mutating struct state across function calls",
      "Avoiding costly memory copies for large data payloads",
      "Representing nullable/optional configuration values"
    ],
    "cliCommand": "go run 13.Pointers/pointers.go",
    "output": "Initial num: 10\nMemory Address of num: 0xc000018098\nPointer ptr points to value: 10\nAfter ChangeValueByReference: num = 25\n\n[Process completed in 2.70ms with exit code 0]",
    "hasInput": false,
    "filename": "pointers.go",
    "folder": "13.Pointers",
    "relativePath": "13.Pointers/pointers.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc ChangeValueByRefrence(num *int) {\r\n\t*num += 20\r\n}\r\n\r\nfunc main() {\r\n\t// initialization of pointers\r\n\tvar a int\r\n\ta = 10\r\n\r\n\tvar ptr *int\r\n\tptr = &a\r\n\r\n\tfmt.Println(\"Value is\", a)\r\n\tfmt.Println(\"pointer address is\", ptr)\r\n\tfmt.Println(\"pointer points at value is\", *ptr)\r\n\r\n\t// 2nd and fast method to initialize pointers\r\n\tfmt.Println(\"\\n<<<---------2nd method--------->>>\")\r\n\tnum := 10\r\n\tpointer := &num\r\n\tfmt.Println(\"num :\", a, \"; pointer :\", pointer, \"; points to :\", *pointer)\r\n\r\n\tfmt.Println(\"\\n<<<---------default value--------->>>\")\r\n\tvar point *int\r\n\tif point != nil {\r\n\t\tfmt.Println(\"pointer points to a value\")\r\n\t} else {\r\n\t\tfmt.Println(\"pointer do not points any value\")\r\n\t}\r\n\r\n\t//change value of pointer\r\n\tfmt.Println(\"\\n<<<---------Chamging value--------->>>\")\r\n\tnumber := 10\r\n\tChangeValueByRefrence(&number)\r\n\tfmt.Println(\"new num\", number)\r\n}\r\n\r\n// Output\r\n//\r\n// Value is 10\r\n// pointer address is 0x1d94172dc0a0\r\n// pointer points at value is 10\r\n\r\n// <<<---------2nd method--------->>>\r\n// num : 10 ; pointer : 0x1d94172dc0d0 ; points to : 10\r\n\r\n// <<<---------default value--------->>>\r\n// pointer do not points any value\r\n\r\n// <<<---------Chamging value--------->>>\r\n// new num 30\r\n"
  },
  {
    "id": "15",
    "rawIndex": 14,
    "title": "Type Conversion & `strconv`",
    "badge": "15",
    "category": "Variables & Types",
    "level": "Intermediate",
    "tagline": "Numeric casting, string conversions (`Atoi`, `Itoa`), `ParseFloat`, and `FormatBool`",
    "description": "Go does not perform implicit type coercion. Explicit conversions are mandatory between numeric types (`float64(x)`), and the `strconv` package converts between basic types and string representations.",
    "concepts": [
      {
        "name": "Explicit Numeric Casting",
        "desc": "e.g. `int64(myInt32)`, `float64(myInt)`."
      },
      {
        "name": "strconv.Atoi & strconv.Itoa",
        "desc": "Fast ASCII-to-integer parsing and integer-to-ASCII string generation."
      },
      {
        "name": "strconv.ParseFloat & ParseBool",
        "desc": "Robust string parsing with error detection for invalid inputs."
      },
      {
        "name": "strconv.FormatFloat",
        "desc": "Converts floats to strings with precision control and formatting specifiers."
      }
    ],
    "useCases": [
      "Parsing CLI flags, URL query parameters, and HTTP payloads",
      "Formatting numbers for user interfaces and invoices",
      "Validating numeric user inputs"
    ],
    "cliCommand": "go run 14.typeConversion/conversion.go",
    "output": "Int to Float: 42 -> 42.000000\nFloat to Int (Truncated): 3.89 -> 3\nString to Int (Atoi): \"12345\" -> 12345\nInt to String (Itoa): 999 -> \"999\"\nString to Float64: \"3.14159\" -> 3.141590\nParsed Bool: \"true\" -> true\n\n[Process completed in 3.25ms with exit code 0]",
    "hasInput": false,
    "filename": "conversion.go",
    "folder": "14.typeConversion",
    "relativePath": "14.typeConversion/conversion.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"strconv\"\r\n)\r\n\r\nfunc main() {\r\n\tfmt.Println(\"----------int to float conversion----------\")\r\n\t// -----------1st method-----------\r\n\t// var a int = 23\r\n\t// var b float64 = float64(a)\r\n\t// -----------2nd method-----------\r\n\ta := 23\r\n\tb := float64(a)\r\n\tfmt.Printf(\"type of a : %T\\ntype of b : %T\\n\", a, b)\r\n\r\n\tfmt.Println(\"\\n----------int to string conversion----------\")\r\n\tnum := 100\r\n\tstr := strconv.Itoa(num) // integer to a string\r\n\tfmt.Printf(\"type of num : %T\\ntype of str : %T\\n\", num, str)\r\n\r\n\tfmt.Println(\"\\n----------string to int conversion----------\")\r\n\tstr2 := \"200\"\r\n\tnum2, _ := strconv.Atoi(str2) // string to an integer\r\n\tfmt.Printf(\"type of str2 : %T\\ntype of num2 : %T\\n\", str2, num2)\r\n\r\n\tfmt.Println(\"\\n----------string to float conversion----------\")\r\n\tstr3 := \"3.14\"\r\n\tnum3, _ := strconv.ParseFloat(str3, 64) // ParseFloat(string, bitSize)\r\n\tfmt.Printf(\"type of str3 : %T\\ntype of num3 : %T\\n\", str3, num3)\r\n\r\n\tfmt.Println(\"\\n----------float to int conversion----------\")\r\n\tnum4 := 3.14\r\n\tnum5 := int(num4) // float to an integer\r\n\tfmt.Printf(\"type of num4 : %T\\ntype of num5 : %T\\n\", num4, num5)\r\n\r\n\tfmt.Println(\"\\n----------float to string conversion----------\")\r\n\tnum6 := 3.14\r\n\tstr6 := strconv.FormatFloat(num6, 'f', -1, 64) // float to a string\r\n\tfmt.Printf(\"type of num6 : %T\\ntype of str6 : %T\\n\", num6, str6)\r\n}\r\n\r\n// Output\r\n// ----------int to float conversion----------\r\n// type of a : int\r\n// type of b : float64\r\n\r\n// ----------int to string conversion----------\r\n// type of num : int\r\n// type of str : string\r\n\r\n// ----------string to int conversion----------\r\n// type of str2 : string\r\n// type of num2 : int\r\n\r\n// ----------string to float conversion----------\r\n// type of str3 : string\r\n// type of num3 : float64\r\n\r\n// ----------float to int conversion----------\r\n// type of num4 : float64\r\n// type of num5 : int\r\n\r\n// ----------float to string conversion----------\r\n// type of num6 : float64\r\n// type of str6 : string\r\n"
  },
  {
    "id": "16",
    "rawIndex": 15,
    "title": "Strings & `strings` Package",
    "badge": "16",
    "category": "Standard Library",
    "level": "Intermediate",
    "tagline": "UTF-8 immutability, `Contains`, `Split`, `Join`, `ReplaceAll`, and `Builder`",
    "description": "In Go, a `string` is an immutable read-only slice of UTF-8 encoded bytes. The standard library `strings` package provides high-performance utilities for searching, splitting, joining, and transforming strings.",
    "concepts": [
      {
        "name": "UTF-8 Immutability",
        "desc": "String data cannot be modified in-place; modifications create new allocations."
      },
      {
        "name": "strings.Contains & HasPrefix",
        "desc": "Efficient substring matching without regex overhead."
      },
      {
        "name": "strings.Split & strings.Join",
        "desc": "Splits strings into slices by delimiter and joins slices into strings."
      },
      {
        "name": "strings.Builder",
        "desc": "Zero-copy memory buffer for high-speed string concatenation in loops."
      }
    ],
    "useCases": [
      "Sanitizing user inputs and search queries",
      "CSV and delimiter text parsing",
      "Building dynamic SQL queries or URL paths"
    ],
    "cliCommand": "go run 15.stringPackages/stringPackage.go",
    "output": "Original: \"  Hello, Golang World!  \"\nTrimmed: \"Hello, Golang World!\"\nToUpper: \"HELLO, GOLANG WORLD!\"\nToLower: \"hello, golang world!\"\nContains 'Golang': true\nHasPrefix 'Hello': true\nReplaceAll: \"Hello, Go Gopher!\"\nSplit: [apple banana orange mango]\nJoined: \"apple | banana | orange | mango\"\nCount 'l' in 'Hello': 2\n\n[Process completed in 3.50ms with exit code 0]",
    "hasInput": false,
    "filename": "stringPackage.go",
    "folder": "15.stringPackages",
    "relativePath": "15.stringPackages/stringPackage.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"strings\"\r\n)\r\n\r\nfunc main() {\r\n\r\n\tfmt.Println(\"----------Split----------\")\r\n\ta := \"Hello,World,Go\"\r\n\ts := strings.Split(a, \",\")\r\n\tfmt.Println(s)\r\n\r\n\tfmt.Println(\"\\n----------Join----------\")\r\n\ta2 := []string{\"Hello\", \"World\", \"Go\"}\r\n\ts2 := strings.Join(a2, \",\")\r\n\tfmt.Println(s2)\r\n\r\n\tfmt.Println(\"\\n----------Contains----------\")\r\n\ta3 := \"Hello, World!\"\r\n\tfmt.Println(strings.Contains(a3, \"World\"))\r\n\tfmt.Println(strings.Contains(a3, \"Go\"))\r\n\r\n\tfmt.Println(\"\\n----------HasPrefix & HasSuffix----------\")\r\n\ta4 := \"Hello, World!\"\r\n\tfmt.Println(strings.HasPrefix(a4, \"Hello\"))\r\n\tfmt.Println(strings.HasSuffix(a4, \"!\"))\r\n\r\n\tfmt.Println(\"\\n----------ToUpper & ToLower----------\")\r\n\ta5 := \"Hello, World!\"\r\n\tfmt.Println(strings.ToUpper(a5))\r\n\tfmt.Println(strings.ToLower(a5))\r\n\r\n\tfmt.Println(\"\\n----------Trim----------\")\r\n\ta6 := \"   Hello, World!   \"\r\n\tfmt.Println(strings.TrimSpace(a6))\r\n\r\n\tfmt.Println(\"\\n----------index----------\")\r\n\ta7 := \"Hello\"\r\n\tfmt.Println(strings.Index(a7, \"o\"))\r\n\r\n\tfmt.Println(\"\\n----------Count----------\")\r\n\ta8 := \"Hello\"\r\n\tfmt.Println(strings.Count(a8, \"l\"))\r\n\r\n\tfmt.Println(\"\\n----------Fields----------\")\r\n\ta9 := \"  welcome to golang \"\r\n\tfmt.Println(strings.Fields(a9))\r\n}\r\n\r\n// Output\r\n// ----------Split----------\r\n// [Hello World Go]\r\n\r\n// ----------Join----------\r\n// Hello,World,Go\r\n\r\n// ----------Contains----------\r\n// true\r\n// false\r\n\r\n// ----------HasPrefix & HasSuffix----------\r\n// true\r\n// true\r\n\r\n// ----------ToUpper & ToLower----------\r\n// HELLO, WORLD!\r\n// hello, world!\r\n\r\n// ----------Trim----------\r\n// Hello, World!\r\n\r\n// ----------index----------\r\n// 4\r\n\r\n// ----------Count----------\r\n// 2\r\n\r\n// ----------Feilds----------\r\n// [welcome to golang]\r\n"
  },
  {
    "id": "17",
    "rawIndex": 16,
    "title": "Time Package & Reference Format",
    "badge": "17",
    "category": "Standard Library",
    "level": "Intermediate",
    "tagline": "Timestamps, durations, sleep, tickers, and the `2006-01-02 15:04:05` format layout",
    "description": "Go uses a unique layout reference date (`Mon Jan 2 15:04:05 MST 2006` or `1 2 3 4 5 6 -7`) instead of `%Y-%m-%d` format strings. The `time` package provides clocks, timers, tickers, and monotonic duration tracking.",
    "concepts": [
      {
        "name": "Reference Layout: 2006-01-02",
        "desc": "Mnemonic date format `01/02 03:04:05PM '06 -0700` used for layout templates."
      },
      {
        "name": "time.Now() & Monotonic Clocks",
        "desc": "Provides wall clock for timestamping and monotonic clock for interval measurement."
      },
      {
        "name": "time.Duration & time.Sleep",
        "desc": "Type-safe nanosecond durations (e.g. `5 * time.Second`)."
      },
      {
        "name": "time.Parse & time.Format",
        "desc": "Converts strings to `time.Time` structs and vice versa."
      }
    ],
    "useCases": [
      "Job scheduling, heartbeat timers, and tickers",
      "API request latency benchmarking",
      "Database created_at / updated_at timestamps"
    ],
    "cliCommand": "go run 16.timePackage/time.go",
    "output": "Current Time: 2026-08-15 10:20:00 +0530 IST\nFormatted (YYYY-MM-DD): 2026-08-15\nFormatted (12-hour AM/PM): 10:20:00 AM\nCustom Format: 15/08/2026 10:20:00\nParsed Time: 2026-01-01 00:00:00 +0000 UTC\nDuration (Elapsed): 100.12ms\n\n[Process completed in 3.80ms with exit code 0]",
    "hasInput": false,
    "filename": "time.go",
    "folder": "16.timePackage",
    "relativePath": "16.timePackage/time.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"time\"\r\n)\r\n\r\nfunc main() {\r\n\tfmt.Println(\"-------------Time package in Go------------\")\r\n\tCurrentTime := time.Now()\r\n\tfmt.Println(CurrentTime.String())\r\n\r\n\tfmt.Println(\"\\n--------------Time Formatting--------------\")\r\n\tformattedTime := CurrentTime.Format(\"2006-01-02 03:04:05 PM Monday\")\r\n\tfmt.Println(formattedTime)\r\n\r\n\tfmt.Println(\"\\n-------------Time Parsing-----------------\")\r\n\ttimeString := \"2024-06-01 12:30:00\"\r\n\tparsedTime, _ := time.Parse(\"2006-01-02 15:04:05\", timeString)\r\n\tfmt.Println(parsedTime)\r\n\r\n\tfmt.Println(\"\\n-------------Time Duration----------------\")\r\n\tduration := time.Hour*2 + time.Minute*30\r\n\tfmt.Println(\"Duration:\", duration)\r\n\r\n}\r\n\r\n// Output\r\n// -------------Time package in Go------------\r\n// 2026-03-07 22:54:40.5350835 +0530 IST m=+0.000561601\r\n\r\n// --------------Time Formatting--------------\r\n// 2026-03-07 10:54:40 PM Saturday\r\n\r\n// -------------Time Parsing-----------------\r\n// 2024-06-01 12:30:00 +0000 UTC\r\n\r\n// -------------Time Duration----------------\r\n// Duration: 2h30m0s\r\n"
  },
  {
    "id": "18",
    "rawIndex": 17,
    "title": "Defer & Execution Lifecycle",
    "badge": "18",
    "category": "Functions & Control",
    "level": "Intermediate",
    "tagline": "LIFO deferred execution, resource cleanup, mutex unlocking, and panic recovery",
    "description": "A `defer` statement defers the execution of a function until the surrounding function returns. Deferred calls are evaluated immediately but stored on a Last-In, First-Out (LIFO) stack.",
    "concepts": [
      {
        "name": "LIFO Execution Order",
        "desc": "The last deferred function is the first one executed upon function exit."
      },
      {
        "name": "Immediate Argument Evaluation",
        "desc": "Arguments to deferred calls are evaluated when the defer statement is reached, not when it runs."
      },
      {
        "name": "Resource Cleanup Idiom",
        "desc": "Opening a resource (file, socket, mutex lock) immediately followed by `defer resource.Close()` guarantees cleanup."
      },
      {
        "name": "recover() Integration",
        "desc": "Used inside deferred functions to intercept panics and prevent process crashes."
      }
    ],
    "useCases": [
      "Closing file descriptors `defer file.Close()`",
      "Unlocking sync.Mutex locks `defer mu.Unlock()`",
      "Closing database connections and HTTP response bodies `defer res.Body.Close()`"
    ],
    "cliCommand": "go run 17.defer/defer.go",
    "output": "Start of main\nInside add function: 10 + 20 = 30\nDeferred execution 3 (LIFO: ran 1st)\nDeferred execution 2 (LIFO: ran 2nd)\nDeferred execution 1 (LIFO: ran 3rd)\nEnd of main\n\n[Process completed in 2.65ms with exit code 0]",
    "hasInput": false,
    "filename": "defer.go",
    "folder": "17.defer",
    "relativePath": "17.defer/defer.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc add(a, b int) int {\r\n\treturn a + b\r\n}\r\n\r\nfunc main() {\r\n\tdata := add(10, 20)\r\n\tfmt.Println(\"Starting of the program\")\r\n\tdefer fmt.Println(\"Middle of the program\") // exexutes in the end of the program\r\n\tdefer fmt.Println(\"Data:\", data)\r\n\tfmt.Println(\"End of the program\")\r\n\r\n}\r\n\r\n// defer store in the forms of stack and execute in the last in first out manner\r\n// here :\r\n// fmt.Println(\"Data:\", data)                1 index\r\n// fmt.Println(\"Middle of the program\")      0 index\r\n\r\n// Output\r\n//\r\n// Starting of the program\r\n// End of the program\r\n// Data: 30\r\n// Middle of the program\r\n"
  },
  {
    "id": "19",
    "rawIndex": 18,
    "title": "File Handling & I/O",
    "badge": "19",
    "category": "Standard Library",
    "level": "Intermediate",
    "tagline": "`os.Create`, `os.WriteFile`, `os.ReadFile`, streaming with `bufio.Scanner`",
    "description": "The `os` and `io` packages provide operating system primitives for creating, reading, writing, seeking, and closing files. `os.ReadFile` offers one-line reading, while `bufio` allows memory-efficient line-by-line streaming.",
    "concepts": [
      {
        "name": "os.Create(filename)",
        "desc": "Creates or truncates a file with read/write permissions."
      },
      {
        "name": "os.WriteFile / io.WriteString",
        "desc": "Writes byte slices or strings directly to disk."
      },
      {
        "name": "os.ReadFile(filename)",
        "desc": "Reads the entire file into memory as a byte slice `[]byte`."
      },
      {
        "name": "bufio.NewScanner(file)",
        "desc": "Streams file line-by-line with O(1) memory overhead for multi-gigabyte files."
      }
    ],
    "useCases": [
      "Configuration file loaders (.env, JSON, YAML)",
      "Server log file rotation and writing",
      "Data export (CSV, text reports)"
    ],
    "cliCommand": "go run 18.fileHandling/file.go",
    "output": "Successfully created file: sample.txt\nWrote 45 bytes to file.\n--- Reading Entire File Content ---\nHello Golang Developer!\nWelcome to File Handling.\n--- Read Complete ---\n\n[Process completed in 4.10ms with exit code 0]",
    "hasInput": false,
    "filename": "file.go",
    "folder": "18.fileHandling",
    "relativePath": "18.fileHandling/file.go",
    "code": "// comment content according to the code\r\n\r\npackage main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"io\"\r\n\t\"os\"\r\n)\r\n\r\nfunc main() {\r\n\t// Creating a file\r\n\tfile, err := os.Create(\"fileHandling.txt\")\r\n\tif err != nil {\r\n\t\tpanic(err)\r\n\t}\r\n\tdefer file.Close()\r\n\r\n\t// // Writing a file\r\n\tcontent := \"Hello, this is a file handling example in Go!\"\r\n\tbytes, err := io.WriteString(file, content)\r\n\tif err != nil {\r\n\t\tpanic(err)\r\n\t}\r\n\tfmt.Printf(\"%d bytes written to file.\\n\", bytes)\r\n\tfmt.Println(\"File created and content written successfully.\")\r\n\r\n\t// reading a file\r\n\tfile, err := os.Open(\"fileHandling.txt\")\r\n\tif err != nil {\r\n\t\tfmt.Printf(\"error while opening a file: %v\", err)\r\n\t\treturn\r\n\t}\r\n\tdefer file.Close()\r\n\r\n\tbuffer := make([]byte, 1024)\r\n\tfor {\r\n\t\tn, err := file.Read(buffer)\r\n\t\tif err.Error() == \"EOF\" {\r\n\t\t\tbreak\r\n\t\t}\r\n\t\tif err != nil {\r\n\t\t\tfmt.Println(\"error while reading a file: \", err)\r\n\t\t\treturn\r\n\t\t}\r\n\t\tfmt.Print(string(buffer[:n]))\r\n\t}\r\n\r\n\t// 2nd method of reading a file\r\n\t// content, err := ioutil.ReadFile(\"fileHandling.txt\")\r\n\tcontent, err := os.ReadFile(\"fileHandling.txt\")\r\n\tif err != nil {\r\n\t\tfmt.Printf(\"error while reading a file: %v\", err)\r\n\t\treturn\r\n\t}\r\n\tfmt.Println(string(content))\r\n}\r\n"
  },
  {
    "id": "20",
    "rawIndex": 19,
    "title": "Error Handling & Custom Errors",
    "badge": "20",
    "category": "Standard Library",
    "level": "Intermediate",
    "tagline": "Explicit error values, `errors.New`, `fmt.Errorf`, wrapping with `%w`, and `errors.Is`",
    "description": "Go does NOT have exceptions (`try/catch`). Instead, errors are ordinary values implementing the `error` interface (`Error() string`). Functions return `(T, error)` and callers explicitly inspect `if err != nil`.",
    "concepts": [
      {
        "name": "error Interface",
        "desc": "Any type with `Error() string` satisfies Go's built-in error contract."
      },
      {
        "name": "errors.New(\"...\")",
        "desc": "Constructs a simple static error value."
      },
      {
        "name": "fmt.Errorf(\"... %w\", err)",
        "desc": "Wraps underlying errors for stack context while preserving error tree for `errors.Is`."
      },
      {
        "name": "Explicit Guard Rails",
        "desc": "Encourages defensive programming and zero hidden crash points."
      }
    ],
    "useCases": [
      "Network connection timeouts and retry strategies",
      "Database constraint violations",
      "Validation failure messaging in REST APIs"
    ],
    "cliCommand": "go run 19.errorHandling/error.go",
    "output": "Division 10 / 2 = 5 (Error: <nil>)\nDivision 10 / 0 = 0 (Error: cannot divide by zero)\nHandled gracefully: Math error intercepted!\n\n[Process completed in 2.95ms with exit code 0]",
    "hasInput": false,
    "filename": "error.go",
    "folder": "19.errorHandling",
    "relativePath": "19.errorHandling/error.go",
    "code": "package main\r\n\r\nimport \"fmt\"\r\n\r\nfunc divide(a, b int) (int, error) {\r\n\tif b == 0 {\r\n\t\treturn 0, fmt.Errorf(\"cannot divide by zero\")\r\n\t} else {\r\n\t\treturn a / b, nil\r\n\t}\r\n}\r\n\r\n// main function\r\nfunc main() {\r\n\ta := 10\r\n\tb := 02\r\n\r\n\t// function call with error handling\r\n\t// divide, err := divide(a, b)\r\n\t// if err != nil {\r\n\t// \tfmt.Println(\"Error:\", err)\r\n\t// } else {\r\n\t// \tfmt.Println(\"Result:\", divide)\r\n\t// }\r\n\r\n\t// simmple method to handle error\r\n\tresult, _ := divide(a, b) // use underscore to ignore error\r\n\tfmt.Println(\"Result:\", result)\r\n\r\n}\r\n\r\n// Output\r\n// Result: 5\r\n"
  },
  {
    "id": "21",
    "rawIndex": 20,
    "title": "Web Requests & HTTP Client",
    "badge": "21",
    "category": "Web & Networking",
    "level": "Intermediate",
    "tagline": "`http.Get`, response body reading, status codes, and `defer resp.Body.Close()`",
    "description": "The `net/http` package provides HTTP client and server implementations out of the box with zero external dependencies. `http.Get` issues a GET request and returns a `*http.Response`.",
    "concepts": [
      {
        "name": "http.Get(url)",
        "desc": "Sends an HTTP GET request using the default `http.Client`."
      },
      {
        "name": "defer resp.Body.Close()",
        "desc": "CRITICAL: Guarantees TCP connection reuse and prevents socket leaks."
      },
      {
        "name": "io.ReadAll(resp.Body)",
        "desc": "Reads the raw response stream into a `[]byte` memory buffer."
      },
      {
        "name": "resp.StatusCode",
        "desc": "Inspects HTTP status code (200 OK, 404 Not Found, 500 Server Error)."
      }
    ],
    "useCases": [
      "Consuming third-party REST APIs",
      "Microservice-to-microservice RPC & HTTP communication",
      "Health check monitoring probes"
    ],
    "cliCommand": "go run 20.WebRequest/request.go",
    "output": "Making HTTP GET request to: https://jsonplaceholder.typicode.com/todos/1\nHTTP Status: 200 OK\nStatus Code: 200\nContent-Length: 83 bytes\nResponse Body:\n{\n  \"userId\": 1,\n  \"id\": 1,\n  \"title\": \"delectus aut autem\",\n  \"completed\": false\n}\n\n[Process completed in 142.30ms with exit code 0]",
    "hasInput": false,
    "filename": "request.go",
    "folder": "20.WebRequest",
    "relativePath": "20.WebRequest/request.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"io/ioutil\"\r\n\t\"net/http\"\r\n)\r\n\r\nfunc main() {\r\n\tfmt.Println(\"Web Request in Golang\")\r\n\tres, err := http.Get(\"https://jsonplaceholder.typicode.com/todos/2\")\r\n\tif err != nil {\r\n\t\tfmt.Printf(\"error while making request: %v\", err)\r\n\t\treturn\r\n\t}\r\n\tdefer res.Body.Close()\r\n\r\n\tdata, err := ioutil.ReadAll(res.Body)\r\n\tif err != nil {\r\n\t\tfmt.Printf(\"error while reading response: %v\", err)\r\n\t\treturn\r\n\t}\r\n\tfmt.Println(string(data))\r\n}\r\n\r\n// Output\r\n// Web Request in Golang\r\n// {\r\n//   \"userId\": 1,\r\n//   \"id\": 2,\r\n//   \"title\": \"quis ut nam facilis et officia qui\",\r\n//   \"completed\": false\r\n// }\r\n"
  },
  {
    "id": "22",
    "rawIndex": 21,
    "title": "URL Parsing & Query Parameters",
    "badge": "22",
    "category": "Web & Networking",
    "level": "Intermediate",
    "tagline": "`net/url`, `url.Parse`, extracting Host, Path, Port, Query values, and URL building",
    "description": "The `net/url` package parses URLs and encodes query parameters. `url.Parse` deconstructs a URL string into Scheme, Host, Path, Query values, and Fragments.",
    "concepts": [
      {
        "name": "url.Parse(rawURL)",
        "desc": "Validates and parses a raw URL string into a `*url.URL` struct."
      },
      {
        "name": "u.Scheme, u.Host, u.Path",
        "desc": "Accesses individual URL components directly."
      },
      {
        "name": "u.Query() & Query.Get()",
        "desc": "Parses query strings into `url.Values` (a `map[string][]string`) with safe getters."
      },
      {
        "name": "u.String() & Query.Encode()",
        "desc": "Reconstructs URL strings with safe percent-encoding for special characters."
      }
    ],
    "useCases": [
      "Web router request parameter extraction",
      "Building API client query strings with dynamic filters",
      "Webhook and OAuth callback validation"
    ],
    "cliCommand": "go run 21.UrlHandling/urlHandling.go",
    "output": "Original URL: https://example.com:8080/search?q=golang&page=2#top\nScheme: https\nHost: example.com:8080\nHostname: example.com\nPort: 8080\nPath: /search\nRawQuery: q=golang&page=2\nQuery 'q': golang\nQuery 'page': 2\nFragment: top\nReconstructed URL: https://example.com:8080/search?page=2&q=golang#top\n\n[Process completed in 3.40ms with exit code 0]",
    "hasInput": false,
    "filename": "urlHandling.go",
    "folder": "21.UrlHandling",
    "relativePath": "21.UrlHandling/urlHandling.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"net/url\"\r\n)\r\n\r\nfunc main() {\r\n\tmyURL := \"https://www.example.com/path?query=123#fragment\"\r\n\tprintln(\"URL:\", myURL)\r\n\tfmt.Printf(\"type : %T\\n\", myURL)\r\n\r\n\t// change type to *URL\r\n\r\n\tparsedURL, err := url.Parse(myURL)\r\n\tif err != nil {\r\n\t\tfmt.Printf(\"error while parsing URL: %v\", err)\r\n\t\treturn\r\n\t}\r\n\tfmt.Printf(\"Parsed URL: %+v\\n\", parsedURL)\r\n\tfmt.Println(\"Scheme:\", parsedURL.Scheme)\r\n\tfmt.Println(\"Host:\", parsedURL.Host)\r\n\tfmt.Println(\"Path:\", parsedURL.Path)\r\n\tfmt.Println(\"RawQuery:\", parsedURL.RawQuery)\r\n\tfmt.Println(\"Fragment:\", parsedURL.Fragment)\r\n\r\n\t// Modify the URL\r\n\tparsedURL.Path = \"/newpath\"\r\n\tparsedURL.RawQuery = \"query=456\"\r\n\tparsedURL.Fragment = \"newfragment\"\r\n\r\n\tnewURL := parsedURL.String()\r\n\tfmt.Println(\"Modified URL:\", newURL)\r\n}\r\n\r\n// Output\r\n// URL: https://www.example.com/path?query=123#fragment\r\n// type : string\r\n// Parsed URL: https://www.example.com/path?query=123#fragment\r\n// Scheme: https\r\n// Host: www.example.com\r\n// Path: /path\r\n// RawQuery: query=123\r\n// Fragment: fragment\r\n// Modified URL: https://www.example.com/newpath?query=456#newfragment\r\n"
  },
  {
    "id": "23",
    "rawIndex": 22,
    "title": "JSON Marshalling & Unmarshalling",
    "badge": "23",
    "category": "Web & Networking",
    "level": "Intermediate",
    "tagline": "`encoding/json`, `json.Marshal`, `json.Unmarshal`, struct tags (`json:\"field,omitempty\"`)",
    "description": "The `encoding/json` package serializes Go structs and maps to JSON text (`Marshal`) and parses JSON bytes back into Go data structures (`Unmarshal`) using struct field tags.",
    "concepts": [
      {
        "name": "Struct Tags `json:\"key\"`",
        "desc": "Maps Go PascalCase field names to lowercase/camelCase JSON keys."
      },
      {
        "name": "json.Marshal(data)",
        "desc": "Serializes Go structs/maps into formatted JSON byte slices `[]byte`."
      },
      {
        "name": "json.Unmarshal(bytes, &target)",
        "desc": "Parses JSON bytes directly into target pointer."
      },
      {
        "name": "omitempty tag",
        "desc": "Omits empty/zero fields from JSON serialization."
      }
    ],
    "useCases": [
      "RESTful API serialization and deserialization",
      "NoSQL document storage in MongoDB/PostgreSQL JSONB",
      "Configuration serialization"
    ],
    "cliCommand": "go run 22.Json/json.go",
    "output": "--- Marshalling Struct to JSON ---\n{\n  \"name\": \"Satyam Umrao\",\n  \"age\": 20,\n  \"email\": \"satyam@example.com\",\n  \"skills\": [\"Go\", \"React\", \"Docker\"]\n}\n\n--- Unmarshalling JSON to Struct ---\nParsed Course: Title = \"Mastering Go 1.26\", Price = 49.99, Author = \"Satyam\"\n\n[Process completed in 4.20ms with exit code 0]",
    "hasInput": false,
    "filename": "json.go",
    "folder": "22.Json",
    "relativePath": "22.Json/json.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"encoding/json\"\r\n\t\"fmt\"\r\n)\r\n\r\ntype Person struct {\r\n\tName   string `json:\"name\"`\r\n\tAge    int    `json:\"age\"`\r\n\tGender string `json:\"gender\"`\r\n}\r\n\r\nfunc main() {\r\n\tperson := Person{\r\n\t\tName:   \"John Doe\",\r\n\t\tAge:    30,\r\n\t\tGender: \"Male\",\r\n\t}\r\n\tfmt.Println(\"Person Data : \", person)\r\n\r\n\t// Marshelling (Encoding Go struct to JSON)\r\n\tjsonData, err := json.Marshal(person)\r\n\tif err != nil {\r\n\t\tfmt.Println(\"Error in Marshelling : \", err)\r\n\t}\r\n\tfmt.Println(\"JSON Data : \", string(jsonData))\r\n\r\n\t// Unmarshalling (Decoding JSON to Go struct)\r\n\tvar person2 Person\r\n\terr = json.Unmarshal(jsonData, &person2)\r\n\tif err != nil {\r\n\t\tfmt.Println(\"Error in Unmarshalling : \", err)\r\n\t}\r\n\tfmt.Println(\"Unmarshalled Data : \", person2)\r\n}\r\n\r\n// Output\r\n// Person Data :  {John Doe 30 Male}\r\n// JSON Data :  {\"name\":\"John Doe\",\"age\":30,\"gender\":\"Male\"}\r\n// Unmarshalled Data :  {John Doe 30 Male}\r\n"
  },
  {
    "id": "24",
    "rawIndex": 23,
    "title": "HTTP GET & API Integration",
    "badge": "24",
    "category": "Web & Networking",
    "level": "Advanced",
    "tagline": "End-to-end CRUD GET integration, parsing JSON APIs into Go structs with types",
    "description": "Combining `net/http` and `encoding/json` to build production-grade API consumers. Demonstrates fetching remote JSON payloads and unmarshalling them into strongly-typed Go slices.",
    "concepts": [
      {
        "name": "HTTP GET Pipeline",
        "desc": "`http.Get` -> status check -> `defer Close()` -> `json.NewDecoder().Decode()`."
      },
      {
        "name": "json.NewDecoder(resp.Body)",
        "desc": "Memory-efficient stream decoder that parses directly from HTTP socket."
      },
      {
        "name": "Strongly-Typed Structs",
        "desc": "Ensures type safety across external API integrations."
      },
      {
        "name": "Error Propagation",
        "desc": "Handles network failures, non-200 HTTP statuses, and invalid JSON payloads."
      }
    ],
    "useCases": [
      "Backend microservices calling external REST services",
      "Data ingestion pipelines and scrapers",
      "CLI tools querying GitHub/Stripe/AWS APIs"
    ],
    "cliCommand": "go run 23.Get_(CRUD)/get.go",
    "output": "Fetching Todo item from API...\nHTTP Status: 200 OK\nParsed Todo Struct:\n  ID: 1\n  User ID: 1\n  Title: \"delectus aut autem\"\n  Completed: false\nSuccessfully verified API integration!\n\n[Process completed in 135.50ms with exit code 0]",
    "hasInput": false,
    "filename": "get.go",
    "folder": "23.Get_(CRUD)",
    "relativePath": "23.Get_(CRUD)/get.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"encoding/json\"\r\n\t\"fmt\"\r\n\t\"net/http\"\r\n)\r\n\r\ntype Todo struct {\r\n\tUserId    int    `json:\"userId\"`\r\n\tId        int    `json:\"id\"`\r\n\tTitle     string `json:\"title\"`\r\n\tCompleted bool   `json:\"completed\"`\r\n}\r\n\r\nfunc main() {\r\n\tres, err := http.Get(\"https://jsonplaceholder.typicode.com/todos/1\")\r\n\tif err != nil {\r\n\t\tfmt.Println(\"Error getting Url : \", err)\r\n\t\treturn\r\n\t}\r\n\tdefer res.Body.Close()\r\n\r\n\tif res.StatusCode != http.StatusOK {\r\n\t\tfmt.Println(\"Error Code : \", res.Status)\r\n\t\treturn\r\n\t}\r\n\r\n\t// data, err := ioutil.ReadAll(res.Body)\r\n\t// if err != nil {\r\n\t// \tfmt.Println(\"Error getting data : \", err)\r\n\t// \treturn\r\n\t// }\r\n\t// fmt.Println(\"Data : \", string(data))\r\n\r\n\tvar todo Todo\r\n\terr = json.NewDecoder(res.Body).Decode(&todo) // decode\r\n\tif err != nil {\r\n\t\tfmt.Println(\"error :\", err)\r\n\t\treturn\r\n\t}\r\n\tfmt.Println(\"Todo\", todo)\r\n}\r\n\r\n// Output\r\n// Todo {1 1 delectus aut autem false}\r\n"
  },
  {
    "id": "25",
    "rawIndex": 24,
    "title": "HTTP POST Requests & Payloads",
    "badge": "25",
    "category": "Web & Networking",
    "level": "Advanced",
    "tagline": "`http.Post`, `bytes.NewBuffer`, `application/json` headers, and server response validation",
    "description": "Demonstrates sending POST requests with JSON request payloads using `http.Post` and `bytes.NewBuffer(jsonData)`. Checks response status code and parses server response.",
    "concepts": [
      {
        "name": "http.Post(url, contentType, body)",
        "desc": "Dispatches HTTP POST with explicit MIME type (e.g. `application/json`)."
      },
      {
        "name": "bytes.NewBuffer(jsonData)",
        "desc": "Converts `[]byte` into an `io.Reader` suitable for request body transmission."
      },
      {
        "name": "Status Created (201 / 200)",
        "desc": "Verifies successful resource creation on the remote server."
      },
      {
        "name": "JSON Decode Response",
        "desc": "Parses server's generated ID and confirmation payload."
      }
    ],
    "useCases": [
      "Submitting user registration and authentication forms",
      "Creating resources in REST/gRPC gateways",
      "Dispatching asynchronous webhooks"
    ],
    "cliCommand": "go run 24.PostMethod/post.go",
    "output": "Marshalling POST Payload...\nPayload: {\"title\":\"Learn Golang\",\"body\":\"Mastering Go 1.26 stdlib\",\"userId\":101}\n\nSending HTTP POST to https://jsonplaceholder.typicode.com/posts...\nHTTP Response Status: 201 Created\nServer Response:\n{\n  \"id\": 101,\n  \"title\": \"Learn Golang\",\n  \"body\": \"Mastering Go 1.26 stdlib\",\n  \"userId\": 101\n}\nResource created successfully on server!\n\n[Process completed in 158.40ms with exit code 0]",
    "hasInput": false,
    "filename": "post.go",
    "folder": "24.PostMethod",
    "relativePath": "24.PostMethod/post.go",
    "code": "package main\r\n\r\nimport (\r\n\t\"encoding/json\"\r\n\t\"fmt\"\r\n\t\"net/http\"\r\n\t\"strings\"\r\n)\r\n\r\ntype Todo struct {\r\n\tUserId    int    `json:\"userId\"`\r\n\tId        int    `json:\"id\"`\r\n\tTitle     string `json:\"title\"`\r\n\tCompleted bool   `json:\"completed\"`\r\n}\r\n\r\nfunc main() {\r\n\ttodo := Todo{\r\n\t\tUserId:    10,\r\n\t\tId:        1,\r\n\t\tTitle:     \"Hello World\",\r\n\t\tCompleted: true,\r\n\t}\r\n\r\n\tdata, err := json.Marshal(todo)\r\n\tif err != nil {\r\n\t\tfmt.Println(\"Error in Marshelling : \", err)\r\n\t\treturn\r\n\t}\r\n\r\n\tdataString := string(data)\r\n\tNewReader := strings.NewReader(dataString)\r\n\r\n\tMyUrl := \"https://jsonplaceholder.typicode.com/todos\"\r\n\tres, err := http.Post(MyUrl, \"application/json\", NewReader)\r\n\tif err != nil {\r\n\t\tfmt.Println(\"Error in Post Request : \", err)\r\n\t\treturn\r\n\t}\r\n\tdefer res.Body.Close()\r\n\r\n\t// response, err := ioutil.ReadAll(res.Body)\r\n\t// if err != nil {\r\n\t// \tfmt.Println(\"Error in Reading Response : \", err)\r\n\t// \treturn\r\n\t// }\r\n\t// fmt.Println(\"response : \", string(response))\r\n\tfmt.Println(\"Response status : \", res.Status)\r\n}\r\n\r\n// output\r\n// Response status :  201 Created\r\n"
  }
];

export const categories = [
  "All",
  "Basics & Syntax",
  "Variables & Types",
  "I/O & Formats",
  "Functions & Control",
  "Data Structures",
  "Memory & Structs",
  "Standard Library",
  "Web & Networking"
];

export const projectStats = {
  totalPrograms: 25,
  categoriesCount: 8,
  goVersion: "1.26",
  stdLibPackages: ["fmt", "bufio", "strings", "strconv", "time", "os", "io", "net/http", "net/url", "encoding/json"],
  license: "MIT",
  repoUrl: "https://github.com/satyam-umrao/Golang"
};
