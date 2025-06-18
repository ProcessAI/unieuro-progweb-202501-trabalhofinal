import { useState } from "react";
import "./HelpMarkdown.css";

export function HelpMarkdown() {
  const [show, setShow] = useState(false);

  const togglePopup = () => setShow(!show);
  const closePopup = () => setShow(false);

  return (
    <>
      <button
        onClick={togglePopup}
        className="help-button"
      >
        Markdown Help
      </button>

      {show && (
        <div
          className="modal-overlay"
          onClick={closePopup}
        >
          <div
            className="help-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="close-button"
              aria-label="Close popup"
            >
              ✕
            </button>

            <h2 className="modal-title">Markdown Syntax Guide</h2>

            <div className="content-container">
              <div className="section">
                <h3 className="section-title">Heading</h3>
                <p><code># H1</code></p>
                <p><code>## H2</code></p>
                <p><code>### H3</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Bold</h3>
                <p><code>**bold text**</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Italic</h3>
                <p><code>*italicized text*</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Blockquote</h3>
                <p><code>&gt; blockquote</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Ordered List</h3>
                <pre className="code-block">
1. First item
2. Second item
3. Third item
                </pre>
              </div>

              <div className="section">
                <h3 className="section-title">Unordered List</h3>
                <pre className="code-block">
- First item
- Second item
- Third item
                </pre>
              </div>

              <div className="section">
                <h3 className="section-title">Code</h3>
                <p><code>`code`</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Horizontal Rule</h3>
                <p><code>---</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Link</h3>
                <p><code>[title](https://www.example.com)</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Image</h3>
                <p><code>![alt text](image.jpg)</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Table</h3>
                <pre className="code-block small-text">
{`| Syntax    | Description |
|-----------|-------------|
| Header    | Title       |
| Paragraph | Text        |`}
                </pre>
              </div>

              <div className="section">
                <h3 className="section-title">Fenced Code Block</h3>
                <pre className="code-block small-text">
{`\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\``}
                </pre>
              </div>

              <div className="section">
                <h3 className="section-title">Footnote</h3>
                <p>
                  <code>Here's a sentence with a footnote. [^1]</code><br />
                  <code>[^1]: This is the footnote.</code>
                </p>
              </div>

              <div className="section">
                <h3 className="section-title">Heading ID</h3>
                <p><code>### My Great Heading {`{#custom-id}`}</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Definition List</h3>
                <pre className="code-block small-text">
term
: definition
                </pre>
              </div>

              <div className="section">
                <h3 className="section-title">Strikethrough</h3>
                <p><code>~~The world is flat.~~</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Task List</h3>
                <pre className="code-block small-text">
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
                </pre>
              </div>

              <div className="section">
                <h3 className="section-title">Emoji</h3>
                <p><code>:joy:</code> → 😂</p>
              </div>

              <div className="section">
                <h3 className="section-title">Highlight</h3>
                <p><code>I need to highlight these ==very important words==.</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Subscript</h3>
                <p><code>H~2~O</code></p>
              </div>

              <div className="section">
                <h3 className="section-title">Superscript</h3>
                <p><code>X^2^</code></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}