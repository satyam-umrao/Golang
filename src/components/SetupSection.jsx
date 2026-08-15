import React, { useState } from 'react';
import { Terminal, Container, CheckCircle2, FolderTree, Cpu, ArrowRight } from 'lucide-react';
import CodeBlock from './CodeBlock';

export default function SetupSection() {
  const [activeTab, setActiveTab] = useState('both'); // 'both' | 'bare' | 'docker'

  const bareCliCommands = `# 1. Clone the repository
git clone https://github.com/satyam-umrao/Golang.git

# 2. Enter project directory
cd Golang

# 3. Check Go version (1.18+ recommended)
go version

# 4. Run any exercise file directly
go run 01.Syntax/1.syntax.go
go run 12.Struct/struct.go
go run 23.Get_\\(CRUD\\)/get.go`;

  const dockerCommands = `# Run Go in an isolated container without installing locally
docker run -it --rm -v $(pwd):/app -w /app golang:1.26-alpine go run 01.Syntax/1.syntax.go

# Or run with live file-watching using Air
air`;

  const repoTree = `📦 Golang
 ┣ 📁 01.Syntax/           -> 1.syntax.go (Entry point, fmt)
 ┣ 📁 02.Variables/        -> 2.Variables.go (Types, :=, inference)
 ┣ 📁 03.printFunc/        -> print.go, specifiers.go (Verbs %v, %T)
 ┣ 📁 04.inputFunc/        -> input.go (bufio.NewReader, Scanln)
 ┣ 📁 05.functions/        -> function.go (Signatures, returns)
 ┣ 📁 06.Arrays/           -> array.go (Fixed-size memory)
 ┣ 📁 07.Slice/            -> slice.go (Dynamic arrays, append, cap)
 ┣ 📁 08.if-else/          -> if-else.go (Conditionals & scope)
 ┣ 📁 09.switchCase/       -> switch.go (Pattern match, fallthrough)
 ┣ 📁 10.for-loop/         -> forLoop.go (Loops & range iterators)
 ┣ 📁 11.Maps/             -> map.go (Hash tables & comma-ok idiom)
 ┣ 📁 12.Struct/           -> struct.go (Custom types & composition)
 ┣ 📁 13.Pointers/         -> pointers.go (Memory addresses, & and *)
 ┣ 📁 14.typeConversion/   -> conversion.go (strconv, Atoi, Itoa)
 ┣ 📁 15.stringPackages/   -> stringPackage.go (strings module)
 ┣ 📁 16.timePackage/      -> time.go (2006-01-02 format layout)
 ┣ 📁 17.defer/            -> defer.go (LIFO cleanup execution)
 ┣ 📁 18.fileHandling/     -> file.go (os.Create, os.ReadFile)
 ┣ 📁 19.errorHandling/    -> error.go (Custom errors, errors.New)
 ┣ 📁 20.WebRequest/       -> request.go (http.Get client)
 ┣ 📁 21.UrlHandling/      -> urlHandling.go (net/url query parsing)
 ┣ 📁 22.Json/             -> json.go (Marshal & Unmarshal)
 ┣ 📁 23.Get_(CRUD)/       -> get.go (API integration & decoding)
 ┣ 📁 24.PostMethod/       -> post.go (http.Post JSON payloads)
 ┗ 📄 README.md`;

  return (
    <section className="corona-setup-section" id="setup-section">
      <div className="corona-container">
        <div className="corona-setup-header">
          <span className="corona-index-badge" style={{ marginBottom: '8px' }}>DEVELOPMENT WORKFLOWS</span>
          <h2>Dual Environment Setup Guide</h2>
          <p>
            Choose between native local Go toolchain execution or containerized Docker execution with zero local installation overhead.
          </p>
        </div>

        {/* Mobile Segmented Switcher */}
        <div className="corona-setup-switcher">
          <button 
            className={`corona-setup-switch-btn ${activeTab === 'both' ? 'active' : ''}`}
            onClick={() => setActiveTab('both')}
          >
            Both (Side by Side)
          </button>
          <button 
            className={`corona-setup-switch-btn ${activeTab === 'bare' ? 'active' : ''}`}
            onClick={() => setActiveTab('bare')}
          >
            Go CLI Toolchain
          </button>
          <button 
            className={`corona-setup-switch-btn ${activeTab === 'docker' ? 'active' : ''}`}
            onClick={() => setActiveTab('docker')}
          >
            Docker / Container
          </button>
        </div>

        {/* Dual Cards Grid */}
        <div className="corona-setup-grid">
          {/* Card 1: Bare Go CLI Toolchain */}
          {(activeTab === 'both' || activeTab === 'bare') && (
            <div className="corona-setup-card green">
              <div className="corona-setup-card-head">
                <div className="corona-setup-card-title-wrap">
                  <div className="corona-setup-card-icon green">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h3>Bare Go CLI & Toolchain</h3>
                    <span style={{ color: 'var(--color-corona-muted)', fontSize: '0.84rem' }}>
                      Native compiler, sub-millisecond execution
                    </span>
                  </div>
                </div>
                <span className="corona-setup-card-badge green">Recommended</span>
              </div>

              {/* Dependencies List */}
              <div>
                <div className="corona-setup-block-title">
                  <Cpu size={14} />
                  <span>Required System Dependencies</span>
                </div>
                <ul className="corona-dep-list">
                  <li className="corona-dep-item">
                    <CheckCircle2 size={15} />
                    <span>Go compiler version 1.18+ (Go 1.26 recommended)</span>
                  </li>
                  <li className="corona-dep-item">
                    <CheckCircle2 size={15} />
                    <span>Git CLI for repository cloning</span>
                  </li>
                  <li className="corona-dep-item">
                    <CheckCircle2 size={15} />
                    <span>VS Code with official <code>golang.go</code> extension (optional)</span>
                  </li>
                </ul>
              </div>

              {/* Timeline Walkthrough */}
              <div>
                <div className="corona-setup-block-title">
                  <span>Step-by-Step CLI Walkthrough</span>
                </div>
                <div className="corona-timeline">
                  <div className="corona-timeline-step">
                    <span className="corona-step-badge">1</span>
                    <div className="corona-step-content">
                      <strong>Clone & Navigate:</strong> Clone the repo and enter root folder.
                    </div>
                  </div>
                  <div className="corona-timeline-step">
                    <span className="corona-step-badge">2</span>
                    <div className="corona-step-content">
                      <strong>Run Any Program:</strong> Execute with <code>go run &lt;folder&gt;/&lt;file&gt;.go</code>.
                    </div>
                  </div>
                  <div className="corona-timeline-step">
                    <span className="corona-step-badge">3</span>
                    <div className="corona-step-content">
                      <strong>Format Code:</strong> Keep idiomatic style using <code>go fmt ./...</code>.
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Codeblock */}
              <div>
                <div className="corona-setup-block-title">
                  <span>Terminal Quickstart Commands</span>
                </div>
                <CodeBlock 
                  code={bareCliCommands} 
                  filename="terminal-quickstart.sh"
                  language="bash"
                />
              </div>
            </div>
          )}

          {/* Card 2: Docker & Containerized Environment */}
          {(activeTab === 'both' || activeTab === 'docker') && (
            <div className="corona-setup-card purple">
              <div className="corona-setup-card-head">
                <div className="corona-setup-card-title-wrap">
                  <div className="corona-setup-card-icon purple">
                    <Container size={22} />
                  </div>
                  <div>
                    <h3>Docker & Dev Containers</h3>
                    <span style={{ color: 'var(--color-corona-muted)', fontSize: '0.84rem' }}>
                      Zero-install isolated Linux environment
                    </span>
                  </div>
                </div>
                <span className="corona-setup-card-badge purple">Containerized</span>
              </div>

              {/* Dependencies List */}
              <div>
                <div className="corona-setup-block-title">
                  <Cpu size={14} />
                  <span>Required Tools</span>
                </div>
                <ul className="corona-dep-list">
                  <li className="corona-dep-item">
                    <CheckCircle2 size={15} color="#8f5fe8" />
                    <span>Docker Desktop or Podman container runtime</span>
                  </li>
                  <li className="corona-dep-item">
                    <CheckCircle2 size={15} color="#8f5fe8" />
                    <span>Standard terminal (PowerShell, Bash, or Zsh)</span>
                  </li>
                </ul>
              </div>

              {/* Terminal Codeblock */}
              <div>
                <div className="corona-setup-block-title">
                  <span>Docker CLI Execution</span>
                </div>
                <CodeBlock 
                  code={dockerCommands} 
                  filename="docker-run.sh"
                  language="bash"
                />
              </div>

              {/* Architecture Directory Tree */}
              <div>
                <div className="corona-setup-block-title">
                  <FolderTree size={14} />
                  <span>Repository Architecture Tree</span>
                </div>
                <div className="corona-tree-block">
                  <pre>{repoTree}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
