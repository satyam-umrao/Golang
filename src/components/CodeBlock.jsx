import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export default function CodeBlock({ code, filename = "main.go", language = "go" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="corona-codeblock">
      <div className="corona-codeblock-header">
        <div className="corona-traffic-lights">
          <span className="corona-traffic-dot red" />
          <span className="corona-traffic-dot yellow" />
          <span className="corona-traffic-dot green" />
        </div>
        <span className="corona-codeblock-filename">{filename}</span>
        <button 
          className={`corona-codeblock-copy ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="corona-codeblock-content">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
}
