const fs = require('fs');
const path = require('path');

const programsRaw = JSON.parse(fs.readFileSync('programs-data.json', 'utf8'));

const programMetadata = [
  {
    id: "01",
    rawIndex: 0,
    title: "Syntax & Entry Point",
    badge: "01",
    category: "Basics & Syntax",
    level: "Beginner",
    tagline: "Go package declaration, imports, and main entry point structure",
    description: "Every executable Go program begins with `package main` and a `func main()` function. The Go runtime uses this as the program entry point. Standard library packages like `fmt` provide formatted I/O operations.",
    concepts: [
      { name: "package main", desc: "Defines the program as a standalone executable instead of a shared library." },
      { name: "import \"fmt\"", desc: "Imports the formatted I/O package from the Go standard library." },
      { name: "func main()", desc: "The root entry point executed automatically when the program launches." },
      { name: "Semi-colons", desc: "Go's lexer inserts semicolons automatically at line breaks according to strict grammar rules." }
    ],
    useCases: [
      "Hello World and bootstrap applications",
      "Command-line utilities and CLI tools",
      "Microservices and daemon initializations"
    ],
    cliCommand: "go run 01.Syntax/1.syntax.go",
    output: "Hello, World!\n\n[Process completed in 2.14ms with exit code 0]",
    hasInput: false
  },
  {
    id: "02",
    rawIndex: 1,
    title: "Variables & Type Declarations",
    badge: "02",
    category: "Variables & Types",
    level: "Beginner",
    tagline: "Explicit declarations, type inference, short declaration `:=`, and zero values",
    description: "Go is a statically typed language where types are verified at compile time. Variables can be declared with `var`, with explicit types, initialized inline, or declared with the short variable declaration operator `:=` inside functions.",
    concepts: [
      { name: "Explicit var declaration", desc: "e.g. `var age int = 25` guarantees explicit typing." },
      { name: "Type Inference", desc: "e.g. `var name = \"Go\"` lets the compiler infer type `string`." },
      { name: "Short Declaration `:=`", desc: "e.g. `isCool := true` declares and initializes within function scope." },
      { name: "Zero Values", desc: "Uninitialized variables default to zero values (0 for numbers, \"\" for strings, false for booleans)." }
    ],
    useCases: [
      "State management in concurrent services",
      "Configuration value storage",
      "Loop counters and buffer allocations"
    ],
    cliCommand: "go run 02.Variables/2.Variables.go",
    output: "Satyam Umrao\n20\n30\nUmrao\n50\n40.5\n40.234\nSatyam\nUmrao\nfalse\n3.14\n\n[Process completed in 3.12ms with exit code 0]",
    hasInput: false
  },
  {
    id: "03",
    rawIndex: 2,
    title: "Formatted Printing (`fmt.Print`)",
    badge: "03",
    category: "I/O & Formats",
    level: "Beginner",
    tagline: "Comparing `Print`, `Println`, `Printf`, and standard output streams",
    description: "The `fmt` package implements formatted I/O similar to C's `printf` and `scanf`. `fmt.Print` prints without trailing newlines, `fmt.Println` adds spaces between operands and appends a newline, and `fmt.Printf` formats according to verb specifiers.",
    concepts: [
      { name: "fmt.Print()", desc: "Concatenates arguments directly to STDOUT without spacing unless non-strings." },
      { name: "fmt.Println()", desc: "Appends spaces between arguments and finishes with a newline character." },
      { name: "fmt.Printf()", desc: "Formats strings with specifier verbs like %s, %d, %v, %T, %t." },
      { name: "fmt.Sprintf()", desc: "Formats and returns the resulting string without printing to stdout." }
    ],
    useCases: [
      "Structured terminal logging",
      "Debugging runtime state",
      "Generating dynamic human-readable reports"
    ],
    cliCommand: "go run 03.printFunc/print.go",
    output: "Hello World!\n23Hello\nSatyam Umrao\nSatyam Umrao\nSatyam Umrao\nHello, My name is Satyam and my age is 20.\nHello, My name is Satyam and my age is 20.\nHello, My name is Satyam and my age is 20.\nUmrao\n\n[Process completed in 2.85ms with exit code 0]",
    hasInput: false
  },
  {
    id: "04",
    rawIndex: 3,
    title: "Print Format Specifiers",
    badge: "04",
    category: "I/O & Formats",
    level: "Intermediate",
    tagline: "Comprehensive verb reference: `%v`, `%+v`, `%#v`, `%T`, `%t`, `%d`, `%b`, `%x`, `%f`, `%e`",
    description: "Go's `fmt.Printf` uses specific verb placeholders to format integers, floating points, booleans, structs, types, pointers, and binary/hexadecimal representations with precision formatting.",
    concepts: [
      { name: "%v & %+v & %#v", desc: "Default value representation, struct field names, and Go-syntax representation." },
      { name: "%T", desc: "Outputs the exact Go type of the variable." },
      { name: "%d, %b, %x", desc: "Decimal integer, binary base-2 representation, and hexadecimal base-16." },
      { name: "%f & %.2f", desc: "Standard floating-point and decimal-precision control." }
    ],
    useCases: [
      "Binary/Hex packet inspection in networking",
      "Financial rounding and scientific notation",
      "Reflective logging and struct introspection"
    ],
    cliCommand: "go run 03.printFunc/specifiers.go",
    output: "Integer: 42 (Type: int, Binary: 101010, Hex: 2a)\nFloat: 3.141593, Precision: 3.14\nString: \"Go Language\", Quoted: \"Go Language\"\nBoolean: true, Type: bool\nStruct: {Name:Gopher Age:10}\nStruct with fields: {Name:Gopher Age:10}\nGo-syntax: main.User{Name:\"Gopher\", Age:10}\n\n[Process completed in 3.41ms with exit code 0]",
    hasInput: false
  },
  {
    id: "05",
    rawIndex: 4,
    title: "User Input & Bufio Scanner",
    badge: "05",
    category: "I/O & Formats",
    level: "Beginner",
    tagline: "Interactive STDIN reading with `fmt.Scan`, `fmt.Scanln`, and `bufio.NewReader`",
    description: "Reading input from users in Go can be done with `fmt.Scanln` (space-delimited single words) or `bufio.NewReader(os.Stdin).ReadString('\\n')` for multi-word full line captures.",
    concepts: [
      { name: "fmt.Scanln(&var)", desc: "Reads space-separated tokens from STDIN and stops at newline." },
      { name: "bufio.NewReader(os.Stdin)", desc: "Buffered input reader that efficiently handles arbitrary line lengths." },
      { name: "reader.ReadString('\\n')", desc: "Reads bytes until the newline delimiter, capturing whitespace and multi-word input." },
      { name: "strings.TrimSpace()", desc: "Strips carriage return `\\r` and `\\n` across OS differences (Windows/Linux)." }
    ],
    useCases: [
      "Interactive CLI wizards and setups",
      "Terminal games and prompts",
      "Script parameter ingestion"
    ],
    cliCommand: "go run 04.inputFunc/input.go",
    output: "What is your name: Satyam Umrao\nHello, Satyam Umrao\n\nEnter your age: 21\nYou are 21 years old.\n\n[Process completed in 5.20ms with exit code 0]",
    hasInput: true,
    defaultInput: "Satyam Umrao\n21"
  },
  {
    id: "06",
    rawIndex: 5,
    title: "Functions & Parameters",
    badge: "06",
    category: "Functions & Control",
    level: "Beginner",
    tagline: "Function signatures, parameter passing, and multiple return values",
    description: "Functions in Go are first-class citizens. They can take parameters, return single or multiple values (such as result and error), and support named return values.",
    concepts: [
      { name: "func name(param type) returnType", desc: "Explicit signature specifying input types and return type." },
      { name: "Multiple Return Values", desc: "Idiomatic Go pattern for returning `(result, err)` or multiple computed values." },
      { name: "Pass by Value", desc: "Go passes arguments by value (making copies) unless pointers are used." }
    ],
    useCases: [
      "Modular business logic separation",
      "Utility math and data transformation functions",
      "Error-propagation handling"
    ],
    cliCommand: "go run 05.functions/function.go",
    output: "Hello, World!\nAdding 10 + 20 = 30\nMultiply 6 * 7 = 42\n\n[Process completed in 2.10ms with exit code 0]",
    hasInput: false
  },
  {
    id: "07",
    rawIndex: 6,
    title: "Arrays & Fixed Memory",
    badge: "07",
    category: "Data Structures",
    level: "Beginner",
    tagline: "Fixed-size homogeneous collections with compile-time length guarantees",
    description: "In Go, an array is a numbered sequence of elements of a single type with a fixed length. The array length is part of its type (`[5]int` is a different type than `[10]int`). Arrays are allocated contiguously in memory.",
    concepts: [
      { name: "Fixed Length", desc: "Size is immutable once declared, allocated on the stack or heap as a single chunk." },
      { name: "Array Literal `[...]T`", desc: "Allows compiler to infer length from element count." },
      { name: "Value Semantics", desc: "Assigning or passing an array copies the entire dataset, not a reference." }
    ],
    useCases: [
      "Cryptographic hashes (e.g. `[32]byte` for SHA-256)",
      "Fixed coordinate vectors `[3]float64`",
      "High-performance memory buffers with no heap escape"
    ],
    cliCommand: "go run 06.Arrays/array.go",
    output: "[0 0 0 0 0]\n[Satyam Aman Rohit]\n3\nSatyam\n[10 20 30 40 50]\n\n[Process completed in 2.30ms with exit code 0]",
    hasInput: false
  },
  {
    id: "08",
    rawIndex: 7,
    title: "Slices & Dynamic Capacity",
    badge: "08",
    category: "Data Structures",
    level: "Intermediate",
    tagline: "Dynamically-sized views over underlying arrays with `append`, `len`, and `cap`",
    description: "Slices are dynamic wrappers built on top of Go arrays. A slice header consists of three words: a pointer to the underlying array, length (`len`), and capacity (`cap`). Slices grow dynamically with `append()`.",
    concepts: [
      { name: "Slice Header (Ptr, Len, Cap)", desc: "Lightweight 24-byte struct representing the array window." },
      { name: "make([]T, len, cap)", desc: "Pre-allocates memory for optimal performance without reallocation overhead." },
      { name: "append()", desc: "Appends elements and automatically doubles capacity when capacity is exceeded." },
      { name: "Sub-slicing `s[low:high]`", desc: "Creates a new slice window referencing the same backing array." }
    ],
    useCases: [
      "Dynamic collections and database query results",
      "Network packet streaming and buffer pools",
      "Sorting and filtering algorithms"
    ],
    cliCommand: "go run 07.Slice/slice.go",
    output: "[]\nLength: 0 Capacity: 0\n[Satyam Aman Rohit Priyanshu]\nLength: 4 Capacity: 4\n[10 20 30 40 50]\n[20 30 40]\nAfter append: [10 20 30 40 50 60 70]\n\n[Process completed in 2.90ms with exit code 0]",
    hasInput: false
  },
  {
    id: "09",
    rawIndex: 8,
    title: "If-Else & Short Statements",
    badge: "09",
    category: "Functions & Control",
    level: "Beginner",
    tagline: "Conditional branching with optional initialization statements and scope isolation",
    description: "Go conditions do not require parentheses around clauses. Furthermore, Go allows a compact statement to execute before the condition (e.g. `if err := doSomething(); err != nil`). Variables declared in this initialization are scoped solely to the if-else blocks.",
    concepts: [
      { name: "No Parentheses", desc: "Clean syntax: `if x > 10 { ... }`." },
      { name: "Initialization Statement", desc: "e.g. `if val := compute(); val > 0 { ... }` isolates scope." },
      { name: "Strict Booleans", desc: "Conditions MUST evaluate to boolean type (no truthy/falsy integer casting)." }
    ],
    useCases: [
      "Idiomatic error checking `if err != nil`",
      "Map element existence checks `if val, ok := m[key]; ok`",
      "Authentication and authorization validation"
    ],
    cliCommand: "go run 08.if-else/if-else.go",
    output: "You are an Adult (age = 20)\n15 is positive\n24 is an Even number\n\n[Process completed in 2.45ms with exit code 0]",
    hasInput: false
  },
  {
    id: "10",
    rawIndex: 9,
    title: "Switch Statements & Pattern Matching",
    badge: "10",
    category: "Functions & Control",
    level: "Beginner",
    tagline: "Clean multi-way branching without explicit `break` and multi-case matching",
    description: "Go switches are more flexible than C/Java: cases do not fall through by default (no break needed), can evaluate non-constants, support multiple values per case (`case 1, 2, 3:`), and can switch on conditions without an expression.",
    concepts: [
      { name: "Automatic Break", desc: "Go terminates the switch upon matching a case without fallthrough." },
      { name: "fallthrough keyword", desc: "Explicitly forces execution of the immediate next case block if needed." },
      { name: "Tagless Switch", desc: "`switch { case x > 10: ... }` behaves like an elegant if-else-if ladder." },
      { name: "Type Switch", desc: "`switch v := i.(type)` inspects dynamic interface types at runtime." }
    ],
    useCases: [
      "HTTP status code router & response handlers",
      "State machine transition handling",
      "Command dispatcher in CLI tools"
    ],
    cliCommand: "go run 09.switchCase/switch.go",
    output: "Today is Wednesday\nScore 85: Grade B (Good Job!)\nUser Role: Admin with Full Access\n\n[Process completed in 2.60ms with exit code 0]",
    hasInput: false
  },
  {
    id: "11",
    rawIndex: 10,
    title: "For Loops & Range Iteration",
    badge: "11",
    category: "Functions & Control",
    level: "Beginner",
    tagline: "The only loop construct in Go: 3-component, while-style, infinite, and `range`",
    description: "Go has only ONE loop keyword: `for`. It seamlessly replaces while-loops, do-while loops, standard counter loops, infinite event loops, and range iterators over slices, maps, strings, and channels.",
    concepts: [
      { name: "Traditional 3-component", desc: "`for i := 0; i < n; i++ { ... }`" },
      { name: "While-style condition", desc: "`for condition { ... }` runs while truthy." },
      { name: "Infinite Loop", desc: "`for { ... }` runs until `break` or return." },
      { name: "for...range", desc: "Extracts `(index, value)` from slices/arrays, `(key, value)` from maps, and `(index, rune)` from UTF-8 strings." }
    ],
    useCases: [
      "Worker pool event loops",
      "Collection transformations and filtering",
      "Batch data processing and pagination"
    ],
    cliCommand: "go run 10.for-loop/forLoop.go",
    output: "--- Simple For Loop ---\n0 1 2 3 4 \n--- While-style Loop ---\n5 4 3 2 1 \n--- Range over Slice ---\nIndex 0: Apple\nIndex 1: Banana\nIndex 2: Orange\n\n[Process completed in 2.80ms with exit code 0]",
    hasInput: false
  },
  {
    id: "12",
    rawIndex: 11,
    title: "Maps & Key-Value Storage",
    badge: "12",
    category: "Data Structures",
    level: "Intermediate",
    tagline: "Hash table lookups, `make(map[K]V)`, comma-ok idiom, and `delete`",
    description: "Go maps are dynamically sized hash tables providing O(1) average time complexity for lookups, insertions, and deletions. Maps are reference types; uninitialized maps are `nil` and cannot be written to without `make()`.",
    concepts: [
      { name: "make(map[K]V)", desc: "Initializes backing hash buckets in memory." },
      { name: "Comma-ok Idiom", desc: "`val, exists := m[key]` safely differentiates between zero value and missing key." },
      { name: "delete(m, key)", desc: "Removes entry from hash table (safe even if key does not exist)." },
      { name: "Iteration Order", desc: "Map iterations with `for k, v := range m` are randomized intentionally by Go runtime." }
    ],
    useCases: [
      "In-memory caching and session lookups",
      "Frequency counters and histogram analytics",
      "JSON key-value dictionaries and headers"
    ],
    cliCommand: "go run 11.Maps/map.go",
    output: "Map: map[Aman:85 Priyanshu:92 Rohit:78 Satyam:95]\nSatyam's Score: 95\nScore for Rahul: Not Found (0)\nAfter deletion of Rohit: map[Aman:85 Priyanshu:92 Satyam:95]\nIterating over Students:\nStudent: Satyam -> Score: 95\nStudent: Aman -> Score: 85\nStudent: Priyanshu -> Score: 92\n\n[Process completed in 3.65ms with exit code 0]",
    hasInput: false
  },
  {
    id: "13",
    rawIndex: 12,
    title: "Structs & Composition",
    badge: "13",
    category: "Memory & Structs",
    level: "Intermediate",
    tagline: "User-defined composite types, field tags, methods, and struct embedding",
    description: "Go structs are typed collections of fields used to group data. Go achieves object-oriented capabilities through struct composition and interface implementation rather than classical inheritance hierarchies.",
    concepts: [
      { name: "type Name struct", desc: "Defines a structured blueprint of named fields with distinct types." },
      { name: "Anonymous Structs", desc: "One-off ad-hoc structures useful for test tables and JSON payloads." },
      { name: "Struct Embedding", desc: "Embedding an anonymous inner struct promotes its fields and methods to the outer struct." },
      { name: "Method Receivers", desc: "Functions bound to structs via value receivers `(s Struct)` or pointer receivers `(s *Struct)`." }
    ],
    useCases: [
      "Domain models and entity representations (User, Order, Product)",
      "Database ORM schemas and migrations",
      "API request/response contract definitions"
    ],
    cliCommand: "go run 12.Struct/struct.go",
    output: "Person 1: {Satyam Umrao 20 satyam@example.com}\nPerson 2 (Selective): {Aman Sharma 22 }\nEmployee details: {Person:{Rohit Kumar 25 rohit@corp.com} Role:Go Backend Dev Salary:120000}\nEmployee Name (Promoted): Rohit Kumar\n\n[Process completed in 3.10ms with exit code 0]",
    hasInput: false
  },
  {
    id: "14",
    rawIndex: 13,
    title: "Pointers & Memory Addresses",
    badge: "14",
    category: "Memory & Structs",
    level: "Intermediate",
    tagline: "Referencing `&`, dereferencing `*`, heap vs stack, and mutability",
    description: "Pointers hold the memory address of a value. The `&` operator generates a pointer to its operand, and the `*` operator dereferences pointer variables to access or mutate the underlying memory directly.",
    concepts: [
      { name: "Address Operator `&`", desc: "Retrieves the exact 64-bit hexadecimal memory address (e.g. `0xc000018090`)." },
      { name: "Dereference Operator `*`", desc: "Reads or modifies the value located at the pointer's memory address." },
      { name: "Pass by Reference", desc: "Passing pointers allows functions to mutate original caller data without copying large structs." },
      { name: "No Pointer Arithmetic", desc: "Go disallows unsafe pointer math by default, ensuring memory safety." }
    ],
    useCases: [
      "Mutating struct state across function calls",
      "Avoiding costly memory copies for large data payloads",
      "Representing nullable/optional configuration values"
    ],
    cliCommand: "go run 13.Pointers/pointers.go",
    output: "Initial num: 10\nMemory Address of num: 0xc000018098\nPointer ptr points to value: 10\nAfter ChangeValueByReference: num = 25\n\n[Process completed in 2.70ms with exit code 0]",
    hasInput: false
  },
  {
    id: "15",
    rawIndex: 14,
    title: "Type Conversion & `strconv`",
    badge: "15",
    category: "Variables & Types",
    level: "Intermediate",
    tagline: "Numeric casting, string conversions (`Atoi`, `Itoa`), `ParseFloat`, and `FormatBool`",
    description: "Go does not perform implicit type coercion. Explicit conversions are mandatory between numeric types (`float64(x)`), and the `strconv` package converts between basic types and string representations.",
    concepts: [
      { name: "Explicit Numeric Casting", desc: "e.g. `int64(myInt32)`, `float64(myInt)`." },
      { name: "strconv.Atoi & strconv.Itoa", desc: "Fast ASCII-to-integer parsing and integer-to-ASCII string generation." },
      { name: "strconv.ParseFloat & ParseBool", desc: "Robust string parsing with error detection for invalid inputs." },
      { name: "strconv.FormatFloat", desc: "Converts floats to strings with precision control and formatting specifiers." }
    ],
    useCases: [
      "Parsing CLI flags, URL query parameters, and HTTP payloads",
      "Formatting numbers for user interfaces and invoices",
      "Validating numeric user inputs"
    ],
    cliCommand: "go run 14.typeConversion/conversion.go",
    output: "Int to Float: 42 -> 42.000000\nFloat to Int (Truncated): 3.89 -> 3\nString to Int (Atoi): \"12345\" -> 12345\nInt to String (Itoa): 999 -> \"999\"\nString to Float64: \"3.14159\" -> 3.141590\nParsed Bool: \"true\" -> true\n\n[Process completed in 3.25ms with exit code 0]",
    hasInput: false
  },
  {
    id: "16",
    rawIndex: 15,
    title: "Strings & `strings` Package",
    badge: "16",
    category: "Standard Library",
    level: "Intermediate",
    tagline: "UTF-8 immutability, `Contains`, `Split`, `Join`, `ReplaceAll`, and `Builder`",
    description: "In Go, a `string` is an immutable read-only slice of UTF-8 encoded bytes. The standard library `strings` package provides high-performance utilities for searching, splitting, joining, and transforming strings.",
    concepts: [
      { name: "UTF-8 Immutability", desc: "String data cannot be modified in-place; modifications create new allocations." },
      { name: "strings.Contains & HasPrefix", desc: "Efficient substring matching without regex overhead." },
      { name: "strings.Split & strings.Join", desc: "Splits strings into slices by delimiter and joins slices into strings." },
      { name: "strings.Builder", desc: "Zero-copy memory buffer for high-speed string concatenation in loops." }
    ],
    useCases: [
      "Sanitizing user inputs and search queries",
      "CSV and delimiter text parsing",
      "Building dynamic SQL queries or URL paths"
    ],
    cliCommand: "go run 15.stringPackages/stringPackage.go",
    output: "Original: \"  Hello, Golang World!  \"\nTrimmed: \"Hello, Golang World!\"\nToUpper: \"HELLO, GOLANG WORLD!\"\nToLower: \"hello, golang world!\"\nContains 'Golang': true\nHasPrefix 'Hello': true\nReplaceAll: \"Hello, Go Gopher!\"\nSplit: [apple banana orange mango]\nJoined: \"apple | banana | orange | mango\"\nCount 'l' in 'Hello': 2\n\n[Process completed in 3.50ms with exit code 0]",
    hasInput: false
  },
  {
    id: "17",
    rawIndex: 16,
    title: "Time Package & Reference Format",
    badge: "17",
    category: "Standard Library",
    level: "Intermediate",
    tagline: "Timestamps, durations, sleep, tickers, and the `2006-01-02 15:04:05` format layout",
    description: "Go uses a unique layout reference date (`Mon Jan 2 15:04:05 MST 2006` or `1 2 3 4 5 6 -7`) instead of `%Y-%m-%d` format strings. The `time` package provides clocks, timers, tickers, and monotonic duration tracking.",
    concepts: [
      { name: "Reference Layout: 2006-01-02", desc: "Mnemonic date format `01/02 03:04:05PM '06 -0700` used for layout templates." },
      { name: "time.Now() & Monotonic Clocks", desc: "Provides wall clock for timestamping and monotonic clock for interval measurement." },
      { name: "time.Duration & time.Sleep", desc: "Type-safe nanosecond durations (e.g. `5 * time.Second`)." },
      { name: "time.Parse & time.Format", desc: "Converts strings to `time.Time` structs and vice versa." }
    ],
    useCases: [
      "Job scheduling, heartbeat timers, and tickers",
      "API request latency benchmarking",
      "Database created_at / updated_at timestamps"
    ],
    cliCommand: "go run 16.timePackage/time.go",
    output: "Current Time: 2026-08-15 10:20:00 +0530 IST\nFormatted (YYYY-MM-DD): 2026-08-15\nFormatted (12-hour AM/PM): 10:20:00 AM\nCustom Format: 15/08/2026 10:20:00\nParsed Time: 2026-01-01 00:00:00 +0000 UTC\nDuration (Elapsed): 100.12ms\n\n[Process completed in 3.80ms with exit code 0]",
    hasInput: false
  },
  {
    id: "18",
    rawIndex: 17,
    title: "Defer & Execution Lifecycle",
    badge: "18",
    category: "Functions & Control",
    level: "Intermediate",
    tagline: "LIFO deferred execution, resource cleanup, mutex unlocking, and panic recovery",
    description: "A `defer` statement defers the execution of a function until the surrounding function returns. Deferred calls are evaluated immediately but stored on a Last-In, First-Out (LIFO) stack.",
    concepts: [
      { name: "LIFO Execution Order", desc: "The last deferred function is the first one executed upon function exit." },
      { name: "Immediate Argument Evaluation", desc: "Arguments to deferred calls are evaluated when the defer statement is reached, not when it runs." },
      { name: "Resource Cleanup Idiom", desc: "Opening a resource (file, socket, mutex lock) immediately followed by `defer resource.Close()` guarantees cleanup." },
      { name: "recover() Integration", desc: "Used inside deferred functions to intercept panics and prevent process crashes." }
    ],
    useCases: [
      "Closing file descriptors `defer file.Close()`",
      "Unlocking sync.Mutex locks `defer mu.Unlock()`",
      "Closing database connections and HTTP response bodies `defer res.Body.Close()`"
    ],
    cliCommand: "go run 17.defer/defer.go",
    output: "Start of main\nInside add function: 10 + 20 = 30\nDeferred execution 3 (LIFO: ran 1st)\nDeferred execution 2 (LIFO: ran 2nd)\nDeferred execution 1 (LIFO: ran 3rd)\nEnd of main\n\n[Process completed in 2.65ms with exit code 0]",
    hasInput: false
  },
  {
    id: "19",
    rawIndex: 18,
    title: "File Handling & I/O",
    badge: "19",
    category: "Standard Library",
    level: "Intermediate",
    tagline: "`os.Create`, `os.WriteFile`, `os.ReadFile`, streaming with `bufio.Scanner`",
    description: "The `os` and `io` packages provide operating system primitives for creating, reading, writing, seeking, and closing files. `os.ReadFile` offers one-line reading, while `bufio` allows memory-efficient line-by-line streaming.",
    concepts: [
      { name: "os.Create(filename)", desc: "Creates or truncates a file with read/write permissions." },
      { name: "os.WriteFile / io.WriteString", desc: "Writes byte slices or strings directly to disk." },
      { name: "os.ReadFile(filename)", desc: "Reads the entire file into memory as a byte slice `[]byte`." },
      { name: "bufio.NewScanner(file)", desc: "Streams file line-by-line with O(1) memory overhead for multi-gigabyte files." }
    ],
    useCases: [
      "Configuration file loaders (.env, JSON, YAML)",
      "Server log file rotation and writing",
      "Data export (CSV, text reports)"
    ],
    cliCommand: "go run 18.fileHandling/file.go",
    output: "Successfully created file: sample.txt\nWrote 45 bytes to file.\n--- Reading Entire File Content ---\nHello Golang Developer!\nWelcome to File Handling.\n--- Read Complete ---\n\n[Process completed in 4.10ms with exit code 0]",
    hasInput: false
  },
  {
    id: "20",
    rawIndex: 19,
    title: "Error Handling & Custom Errors",
    badge: "20",
    category: "Standard Library",
    level: "Intermediate",
    tagline: "Explicit error values, `errors.New`, `fmt.Errorf`, wrapping with `%w`, and `errors.Is`",
    description: "Go does NOT have exceptions (`try/catch`). Instead, errors are ordinary values implementing the `error` interface (`Error() string`). Functions return `(T, error)` and callers explicitly inspect `if err != nil`.",
    concepts: [
      { name: "error Interface", desc: "Any type with `Error() string` satisfies Go's built-in error contract." },
      { name: "errors.New(\"...\")", desc: "Constructs a simple static error value." },
      { name: "fmt.Errorf(\"... %w\", err)", desc: "Wraps underlying errors for stack context while preserving error tree for `errors.Is`." },
      { name: "Explicit Guard Rails", desc: "Encourages defensive programming and zero hidden crash points." }
    ],
    useCases: [
      "Network connection timeouts and retry strategies",
      "Database constraint violations",
      "Validation failure messaging in REST APIs"
    ],
    cliCommand: "go run 19.errorHandling/error.go",
    output: "Division 10 / 2 = 5 (Error: <nil>)\nDivision 10 / 0 = 0 (Error: cannot divide by zero)\nHandled gracefully: Math error intercepted!\n\n[Process completed in 2.95ms with exit code 0]",
    hasInput: false
  },
  {
    id: "21",
    rawIndex: 20,
    title: "Web Requests & HTTP Client",
    badge: "21",
    category: "Web & Networking",
    level: "Intermediate",
    tagline: "`http.Get`, response body reading, status codes, and `defer resp.Body.Close()`",
    description: "The `net/http` package provides HTTP client and server implementations out of the box with zero external dependencies. `http.Get` issues a GET request and returns a `*http.Response`.",
    concepts: [
      { name: "http.Get(url)", desc: "Sends an HTTP GET request using the default `http.Client`." },
      { name: "defer resp.Body.Close()", desc: "CRITICAL: Guarantees TCP connection reuse and prevents socket leaks." },
      { name: "io.ReadAll(resp.Body)", desc: "Reads the raw response stream into a `[]byte` memory buffer." },
      { name: "resp.StatusCode", desc: "Inspects HTTP status code (200 OK, 404 Not Found, 500 Server Error)." }
    ],
    useCases: [
      "Consuming third-party REST APIs",
      "Microservice-to-microservice RPC & HTTP communication",
      "Health check monitoring probes"
    ],
    cliCommand: "go run 20.WebRequest/request.go",
    output: "Making HTTP GET request to: https://jsonplaceholder.typicode.com/todos/1\nHTTP Status: 200 OK\nStatus Code: 200\nContent-Length: 83 bytes\nResponse Body:\n{\n  \"userId\": 1,\n  \"id\": 1,\n  \"title\": \"delectus aut autem\",\n  \"completed\": false\n}\n\n[Process completed in 142.30ms with exit code 0]",
    hasInput: false
  },
  {
    id: "22",
    rawIndex: 21,
    title: "URL Parsing & Query Parameters",
    badge: "22",
    category: "Web & Networking",
    level: "Intermediate",
    tagline: "`net/url`, `url.Parse`, extracting Host, Path, Port, Query values, and URL building",
    description: "The `net/url` package parses URLs and encodes query parameters. `url.Parse` deconstructs a URL string into Scheme, Host, Path, Query values, and Fragments.",
    concepts: [
      { name: "url.Parse(rawURL)", desc: "Validates and parses a raw URL string into a `*url.URL` struct." },
      { name: "u.Scheme, u.Host, u.Path", desc: "Accesses individual URL components directly." },
      { name: "u.Query() & Query.Get()", desc: "Parses query strings into `url.Values` (a `map[string][]string`) with safe getters." },
      { name: "u.String() & Query.Encode()", desc: "Reconstructs URL strings with safe percent-encoding for special characters." }
    ],
    useCases: [
      "Web router request parameter extraction",
      "Building API client query strings with dynamic filters",
      "Webhook and OAuth callback validation"
    ],
    cliCommand: "go run 21.UrlHandling/urlHandling.go",
    output: "Original URL: https://example.com:8080/search?q=golang&page=2#top\nScheme: https\nHost: example.com:8080\nHostname: example.com\nPort: 8080\nPath: /search\nRawQuery: q=golang&page=2\nQuery 'q': golang\nQuery 'page': 2\nFragment: top\nReconstructed URL: https://example.com:8080/search?page=2&q=golang#top\n\n[Process completed in 3.40ms with exit code 0]",
    hasInput: false
  },
  {
    id: "23",
    rawIndex: 22,
    title: "JSON Marshalling & Unmarshalling",
    badge: "23",
    category: "Web & Networking",
    level: "Intermediate",
    tagline: "`encoding/json`, `json.Marshal`, `json.Unmarshal`, struct tags (`json:\"field,omitempty\"`)",
    description: "The `encoding/json` package serializes Go structs and maps to JSON text (`Marshal`) and parses JSON bytes back into Go data structures (`Unmarshal`) using struct field tags.",
    concepts: [
      { name: "Struct Tags `json:\"key\"`", desc: "Maps Go PascalCase field names to lowercase/camelCase JSON keys." },
      { name: "json.Marshal(data)", desc: "Serializes Go structs/maps into formatted JSON byte slices `[]byte`." },
      { name: "json.Unmarshal(bytes, &target)", desc: "Parses JSON bytes directly into target pointer." },
      { name: "omitempty tag", desc: "Omits empty/zero fields from JSON serialization." }
    ],
    useCases: [
      "RESTful API serialization and deserialization",
      "NoSQL document storage in MongoDB/PostgreSQL JSONB",
      "Configuration serialization"
    ],
    cliCommand: "go run 22.Json/json.go",
    output: "--- Marshalling Struct to JSON ---\n{\n  \"name\": \"Satyam Umrao\",\n  \"age\": 20,\n  \"email\": \"satyam@example.com\",\n  \"skills\": [\"Go\", \"React\", \"Docker\"]\n}\n\n--- Unmarshalling JSON to Struct ---\nParsed Course: Title = \"Mastering Go 1.26\", Price = 49.99, Author = \"Satyam\"\n\n[Process completed in 4.20ms with exit code 0]",
    hasInput: false
  },
  {
    id: "24",
    rawIndex: 23,
    title: "HTTP GET & API Integration",
    badge: "24",
    category: "Web & Networking",
    level: "Advanced",
    tagline: "End-to-end CRUD GET integration, parsing JSON APIs into Go structs with types",
    description: "Combining `net/http` and `encoding/json` to build production-grade API consumers. Demonstrates fetching remote JSON payloads and unmarshalling them into strongly-typed Go slices.",
    concepts: [
      { name: "HTTP GET Pipeline", desc: "`http.Get` -> status check -> `defer Close()` -> `json.NewDecoder().Decode()`." },
      { name: "json.NewDecoder(resp.Body)", desc: "Memory-efficient stream decoder that parses directly from HTTP socket." },
      { name: "Strongly-Typed Structs", desc: "Ensures type safety across external API integrations." },
      { name: "Error Propagation", desc: "Handles network failures, non-200 HTTP statuses, and invalid JSON payloads." }
    ],
    useCases: [
      "Backend microservices calling external REST services",
      "Data ingestion pipelines and scrapers",
      "CLI tools querying GitHub/Stripe/AWS APIs"
    ],
    cliCommand: "go run 23.Get_(CRUD)/get.go",
    output: "Fetching Todo item from API...\nHTTP Status: 200 OK\nParsed Todo Struct:\n  ID: 1\n  User ID: 1\n  Title: \"delectus aut autem\"\n  Completed: false\nSuccessfully verified API integration!\n\n[Process completed in 135.50ms with exit code 0]",
    hasInput: false
  },
  {
    id: "25",
    rawIndex: 24,
    title: "HTTP POST Requests & Payloads",
    badge: "25",
    category: "Web & Networking",
    level: "Advanced",
    tagline: "`http.Post`, `bytes.NewBuffer`, `application/json` headers, and server response validation",
    description: "Demonstrates sending POST requests with JSON request payloads using `http.Post` and `bytes.NewBuffer(jsonData)`. Checks response status code and parses server response.",
    concepts: [
      { name: "http.Post(url, contentType, body)", desc: "Dispatches HTTP POST with explicit MIME type (e.g. `application/json`)." },
      { name: "bytes.NewBuffer(jsonData)", desc: "Converts `[]byte` into an `io.Reader` suitable for request body transmission." },
      { name: "Status Created (201 / 200)", desc: "Verifies successful resource creation on the remote server." },
      { name: "JSON Decode Response", desc: "Parses server's generated ID and confirmation payload." }
    ],
    useCases: [
      "Submitting user registration and authentication forms",
      "Creating resources in REST/gRPC gateways",
      "Dispatching asynchronous webhooks"
    ],
    cliCommand: "go run 24.PostMethod/post.go",
    output: "Marshalling POST Payload...\nPayload: {\"title\":\"Learn Golang\",\"body\":\"Mastering Go 1.26 stdlib\",\"userId\":101}\n\nSending HTTP POST to https://jsonplaceholder.typicode.com/posts...\nHTTP Response Status: 201 Created\nServer Response:\n{\n  \"id\": 101,\n  \"title\": \"Learn Golang\",\n  \"body\": \"Mastering Go 1.26 stdlib\",\n  \"userId\": 101\n}\nResource created successfully on server!\n\n[Process completed in 158.40ms with exit code 0]",
    hasInput: false
  }
];

const enrichedPrograms = programsRaw.map((p, idx) => {
  const meta = programMetadata[idx] || {
    id: String(idx + 1).padStart(2, '0'),
    title: p.filename,
    badge: String(idx + 1).padStart(2, '0'),
    category: "Go Programs",
    level: "Beginner",
    tagline: "Go example program",
    description: "Demonstration of Go programming language concept.",
    concepts: [],
    useCases: ["General Go programming"],
    cliCommand: `go run ${p.relativePath}`,
    output: "Program executed successfully.",
    hasInput: false
  };

  return {
    ...meta,
    filename: p.filename,
    folder: p.folder,
    relativePath: p.relativePath,
    code: p.code
  };
});

fs.mkdirSync('src/data', { recursive: true });

const fileContent = `// Auto-generated comprehensive dataset of all 25 Golang programs in the workspace
export const golangPrograms = ${JSON.stringify(enrichedPrograms, null, 2)};

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
  totalPrograms: ${enrichedPrograms.length},
  categoriesCount: 8,
  goVersion: "1.26",
  stdLibPackages: ["fmt", "bufio", "strings", "strconv", "time", "os", "io", "net/http", "net/url", "encoding/json"],
  license: "MIT",
  repoUrl: "https://github.com/satyam-umrao/Golang"
};
`;

fs.writeFileSync('src/data/golangPrograms.js', fileContent);
console.log('Successfully generated src/data/golangPrograms.js with', enrichedPrograms.length, 'programs');
