<div align="center">

  <img src="https://raw.githubusercontent.com/golang/go/master/doc/gopher/frontpage.png" alt="Go Gopher" width="130" />

  # ⚡ GoDocHub: Interactive Go 1.26 Documentation & Runtime Simulator

  **A modern, production-grade learning platform and interactive documentation hub for mastering Go (Golang).**  
  *Featuring 25 curated exercises, live terminal simulators, syntax deep-dives, and an in-browser code scratchpad.*

  <br />

  [![Go Version](https://img.shields.io/badge/Go-1.18%20--%201.26+-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://go.dev/)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Theme](https://img.shields.io/badge/Design-Corona%20Dark-00d25b?style=for-the-badge&logo=material-design&logoColor=white)](#-design-system--corona-dark-theme)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/satyam-umrao/Golang/pulls)

  <br />

  [🌐 Live Web Preview](#-quick-start) • [📚 25 Programs Catalog](#-curriculum--exercises-catalog) • [⚡ Toolchain Setup](#-development-toolchains) • [🛠️ Contributing](#-contributing)

</div>

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🚀 Quick Start](#-quick-start)
  - [1. Interactive Web Documentation (Vite)](#1-interactive-web-documentation-vite)
  - [2. Standalone Single-File Viewer](#2-standalone-single-file-viewer)
  - [3. Native Go CLI Execution](#3-native-go-cli-execution)
  - [4. Zero-Install Docker Environment](#4-zero-install-docker-environment)
- [📚 Curriculum & Exercises Catalog (25 Modules)](#-curriculum--exercises-catalog)
- [🎛️ Architecture & Interactive Workbench](#️-architecture--interactive-workbench)
- [📁 Repository File Tree](#-repository-file-tree)
- [🎨 Design System & Aesthetics](#-design-system--aesthetics)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🧪 **25 Production Exercises** | Step-by-step Go programs from fundamental syntax and pointers to JSON serialization and CRUD HTTP clients. |
| 💻 **Interactive Runtime Simulator** | Simulated Go runtime execution directly inside the browser with input fields, formatted stdout, and exit codes. |
| ⚡ **Live Browser Playground** | Editable code runner scratchpad to experiment with Go snippets and observe instant execution. |
| 🔍 **Global Search (`Ctrl + K`)** | Instant fuzzy search modal indexing all 25 modules, code snippets, language constructs, and file paths. |
| 📱 **100% Fluid Responsive** | High-contrast **Corona Dark Theme** optimized for mobile, tablet, laptop, and 4K desktop screens. |
| 📦 **Dual Toolchain Guides** | Complete local setup workflows for native Go toolchain (`go run`) and containerized Docker environments. |
| 📄 **Zero-Dependency Standalone** | Self-contained single-file HTML bundle (`golang-docs.html`) with zero external network dependencies. |

---

## 🚀 Quick Start

### 1. Interactive Web Documentation (Vite)

Run the full interactive documentation application locally:

```bash
# Clone the repository
git clone https://github.com/satyam-umrao/Golang.git

# Enter project directory
cd Golang

# Install web app dependencies
npm install

# Start Vite live development server
npm run dev
```

Open [**http://localhost:5173/**](http://localhost:5173/) in your browser.

---

### 2. Standalone Single-File Viewer

If you don't have Node.js installed, open the bundled single-file build directly:

- Double-click or open [`golang-docs.html`](./golang-docs.html) in any web browser.
- Generates fully offline with all 25 exercises, syntax highlights, and terminal simulators bundled into a single file!

To rebuild the standalone file after code modifications:
```bash
npm run docs:bundle
```

---

### 3. Native Go CLI Execution

Run any exercise directly on your system with standard Go tools (Go 1.18+ recommended):

```bash
# Syntax & Basic Output
go run 01.Syntax/1.syntax.go

# Structs & Composition
go run 12.Struct/struct.go

# Pointers & Memory Address Mutation
go run 13.Pointers/pointers.go

# HTTP POST Request with JSON Payloads
go run 24.PostMethod/post.go
```

---

### 4. Zero-Install Docker Environment

Run Go programs in an isolated container without installing the Go SDK locally:

```bash
# Run any exercise inside official Go 1.26 Alpine container
docker run -it --rm -v $(pwd):/app -w /app golang:1.26-alpine go run 01.Syntax/1.syntax.go

# Or run with live file-watching using Air
docker run -it --rm -v $(pwd):/app -w /app cosmtrek/air
```

---

## 📚 Curriculum & Exercises Catalog

A comprehensive 25-module curriculum covering the complete Go programming landscape:

```
┌───────────────────────┬─────────────────────────────────┬──────────────────────────────────────────┬──────────────┐
│ ID  │ Category        │ Topic / Module                  │ Key Language Concepts                    │ Level        │
├───────────────────────┼─────────────────────────────────┼──────────────────────────────────────────┼──────────────┤
│ #01 │ Syntax          │ Package Main & Entry Point      │ package main, import fmt, main()         │ Beginner     │
│ #02 │ Variables       │ Types & Variable Declaration    │ var, := inference, default zero-values   │ Beginner     │
│ #03 │ I/O             │ Formatted Printing & Verbs      │ fmt.Print, fmt.Println, fmt.Printf (%v)  │ Beginner     │
│ #04 │ I/O             │ Format Specifiers & Verbs       │ %T types, %+v struct fields, %#v         │ Intermediate │
│ #05 │ User Input      │ Standard Input & Scanning       │ bufio.NewReader, os.Stdin, fmt.Scanln    │ Beginner     │
│ #06 │ Functions       │ Signatures & Multiple Returns   │ Named returns, multiple return values    │ Beginner     │
│ #07 │ Data Structures │ Fixed-Size Arrays               │ [N]Type, fixed capacity, contiguous mem  │ Beginner     │
│ #08 │ Data Structures │ Dynamic Slices & Allocation     │ append, make, len, cap, slicing [:]      │ Intermediate │
│ #09 │ Control Flow    │ Conditional Branching           │ if-else, short statement initialization  │ Beginner     │
│ #10 │ Control Flow    │ Pattern Matching & Switch       │ expression switch, fallthrough, types    │ Beginner     │
│ #11 │ Control Flow    │ Loops & Range Iterators         │ for loops, while-idiom, range over maps  │ Beginner     │
│ #12 │ Data Structures │ Hash Maps & Dictionaries        │ map[K]V, make, delete, comma-ok idiom    │ Intermediate │
│ #13 │ OOP / Structs   │ Custom Structs & Composition    │ type Struct, exported vs unexported      │ Intermediate │
│ #14 │ Memory          │ Pointers & Dereferencing        │ & address-of, * dereference, mutability  │ Intermediate │
│ #15 │ Standard Lib    │ Type Conversions (strconv)      │ strconv.Atoi, Itoa, ParseFloat, casting  │ Beginner     │
│ #16 │ Standard Lib    │ String Manipulation             │ strings.Contains, Split, Join, ToUpper   │ Beginner     │
│ #17 │ Standard Lib    │ Time & Date Formatting          │ time.Now, reference layout 2006-01-02    │ Intermediate │
│ #18 │ Control Flow    │ Deferred Resource Cleanup       │ defer LIFO execution, resource closing   │ Intermediate │
│ #19 │ OS / Filesystem │ File I/O Operations             │ os.Create, os.ReadFile, io.WriteString   │ Intermediate │
│ #20 │ Error Handling  │ Explicit Error Propagation      │ error interface, errors.New, fmt.Errorf  │ Intermediate │
│ #21 │ Error Handling  │ Custom Error Structs            │ Custom Error() string implementations    │ Advanced     │
│ #22 │ Networking      │ HTTP GET Client Requests        │ http.Get, resp.Body, io.ReadAll, status  │ Intermediate │
│ #23 │ Networking      │ URL Parsing & Query Parameters  │ url.Parse, Query(), Scheme, Host, Path   │ Intermediate │
│ #24 │ Serialization   │ JSON Marshal & Unmarshal        │ json.Marshal, json.Unmarshal, struct tags│ Intermediate │
│ #25 │ Web & CRUD API  │ HTTP POST Requests & Payloads   │ http.Post, bytes.NewBuffer, Content-Type │ Advanced     │
└───────────────────────┴─────────────────────────────────┴──────────────────────────────────────────┴──────────────┘
```

---

## 🎛️ Architecture & Interactive Workbench

Each exercise inside the web documentation includes a **Dual-Pane Side-by-Side Workbench**:

```
┌───────────────────────────────────────────┬───────────────────────────────────────────┐
│        Production Source Code (Go)        │     Interactive Go Runtime Simulator      │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ package main                              │ $ go run 24.PostMethod/post.go            │
│                                           │                                           │
│ import (                                  │ [GO SIMULATOR] Compiling package main...  │
│     "bytes"                               │ [HTTP POST] Dispatched payload:           │
│     "encoding/json"                       │ {"title":"GoDocHub","author":"Satyam"}    │
│     "net/http"                            │                                           │
│ )                                         │ [RESPONSE 201 Created] ID: 101            │
│                                           │ ───────────────────────────────────────── │
│ func main() {                             │ [Status: 0 OK] Duration: 142ms            │
│     // Payload & Dispatch                 │                                           │
│ }                                         │ [ ▶ Run Program ]  [ ↺ Reset ]            │
└───────────────────────────────────────────┴───────────────────────────────────────────┘
```

- **Live Code Syncing**: Browse clean, syntax-highlighted production Go source code.
- **Parametric Inputs**: Provide custom simulation arguments and standard inputs.
- **Accurate Runtime Metrics**: Displays compilation output, standard output streams, and execution duration.

---

## 📁 Repository File Tree

```
📦 Golang
 ┣ 📁 01.Syntax/               # Entry point, package main & fmt.Println
 ┣ 📁 02.Variables/            # Variable declarations, types & := inference
 ┣ 📁 03.printFunc/            # fmt.Print, fmt.Println, fmt.Printf
 ┣ 📁 04.inputFunc/            # bufio.NewReader & fmt.Scanln user input
 ┣ 📁 05.functions/            # Function signatures & multiple return values
 ┣ 📁 06.Arrays/               # Fixed-size arrays & contiguous memory
 ┣ 📁 07.Slice/                # Dynamic slices, append, len & cap
 ┣ 📁 08.if-else/              # Conditional branching & short statements
 ┣ 📁 09.switchCase/           # Pattern matching, expression & fallthrough
 ┣ 📁 10.for-loop/             # Loops, while-idioms & range iterators
 ┣ 📁 11.Maps/                 # Hash maps, make, delete & comma-ok idiom
 ┣ 📁 12.Struct/               # Custom types, methods & composition
 ┣ 📁 13.Pointers/             # Memory addresses, dereferencing & pointers
 ┣ 📁 14.typeConversion/       # strconv (Atoi, Itoa, ParseFloat) & casting
 ┣ 📁 15.stringPackages/       # strings module (Contains, Split, Join)
 ┣ 📁 16.timePackage/          # time module & 2006-01-02 format layout
 ┣ 📁 17.defer/                # LIFO deferred execution & resource safety
 ┣ 📁 18.fileHandling/         # os.Create, os.ReadFile, io.WriteString
 ┣ 📁 19.errorHandling/        # Explicit error propagation & errors.New
 ┣ 📁 20.WebRequest/           # http.Get, HTTP clients & response decoding
 ┣ 📁 21.UrlHandling/          # net/url URL parsing & query strings
 ┣ 📁 22.Json/                 # json.Marshal, json.Unmarshal & struct tags
 ┣ 📁 23.Get_(CRUD)/           # REST API client & response unmarshaling
 ┣ 📁 24.PostMethod/           # http.Post JSON payload transmission
 ┣ 📁 src/                     # React 19 interactive documentation hub source
 ┃ ┣ 📁 components/            # UI components (Navbar, Workbench, Terminal, etc.)
 ┃ ┣ 📁 data/                  # golangPrograms.js (embedded dataset & code)
 ┃ ┣ 📄 App.jsx                # Root documentation application
 ┃ ┣ 📄 index.css              # High-contrast Corona Dark theme stylesheet
 ┃ ┗ 📄 main.jsx               # React entry point
 ┣ 📄 golang-docs.html         # Self-contained standalone single-file documentation (300KB)
 ┣ 📄 generate-standalone.cjs  # Inliner bundler for standalone HTML build
 ┣ 📄 package.json             # NPM dependencies & build scripts
 ┣ 📄 vite.config.js           # Vite bundler configuration
 ┗ 📄 README.md                # Repository documentation
```

---

## 🎨 Design System & Aesthetics

The web documentation is styled using the **Corona Dark Theme Specification**:

| Color Token | Hex Code | Purpose |
|---|---|---|
| **Midnight Obsidian** | `#000000` / `#0d0e12` | High-contrast zero eye-strain background surfaces |
| **Elevated Surface** | `#191c24` | Container cards, modal windows, and code blocks |
| **Graphite Border** | `#2c2e33` | Hairline grid borders and structural dividers |
| **Corona Emerald** | `#00d25b` | Primary actions, execution buttons, and success tags |
| **Go Cyan** | `#00ADD8` | Official Go brand accents, headers, and active links |
| **Electric Blue** | `#0090e7` | Interactive focus rings, search accents, and tags |
| **Royal Violet** | `#8f5fe8` | Source code highlights and playground badges |
| **Crimson Coral** | `#e44c65` | Announcements and error logs |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'feat: add new concurrency pattern'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a **Pull Request**

---

## 📜 License

This project is open-sourced under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<div align="center">
  <sub>Built with ❤️ for the Go developer community by <a href="https://github.com/satyam-umrao">Satyam Umrao</a>.</sub>
</div>
