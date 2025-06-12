import { useState } from "react";

export function HelpMarkdown() {
  const [show, setShow] = useState(false);

  const togglePopup = () => setShow(!show);
  const closePopup = () => setShow(false);

  return (
    <>
      <button
        onClick={togglePopup}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Markdown Help
      </button>

      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white shadow-xl border border-gray-300 p-6 rounded w-[90%] max-w-2xl max-h-[90%] overflow-y-auto text-sm relative"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do popup
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close popup"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-3">Markdown Syntax Guide</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Heading</h3>
                <ul className="ml-4 list-disc">
                  <li><code># H1</code></li>
                  <li><code>## H2</code></li>
                  <li><code>### H3</code></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Bold</h3>
                <p><code>**bold text**</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Italic</h3>
                <p><code>*italicized text*</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Blockquote</h3>
                <p><code>&gt; blockquote</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Ordered List</h3>
                <pre className="bg-gray-100 p-2 rounded">
1. First item
2. Second item
3. Third item
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Unordered List</h3>
                <pre className="bg-gray-100 p-2 rounded">
- First item
- Second item
- Third item
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Code</h3>
                <p><code>`code`</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Horizontal Rule</h3>
                <p><code>---</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Link</h3>
                <p><code>[title](https://www.example.com)</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Image</h3>
                <p><code>![alt text](image.jpg)</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Table</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
{`| Syntax    | Description |
|-----------|-------------|
| Header    | Title       |
| Paragraph | Text        |`}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Fenced Code Block</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
{`\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\``}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Footnote</h3>
                <p>
                  <code>Here's a sentence with a footnote. [^1]</code><br />
                  <code>[^1]: This is the footnote.</code>
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Heading ID</h3>
                <p><code>### My Great Heading {`{#custom-id}`}</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Definition List</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs">
term
: definition
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Strikethrough</h3>
                <p><code>~~The world is flat.~~</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Task List</h3>
                <pre className="bg-gray-100 p-2 rounded text-xs">
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
                </pre>
              </div>

              <div>
                <h3 className="font-semibold">Emoji</h3>
                <p><code>:joy:</code> → 😂</p>
              </div>

              <div>
                <h3 className="font-semibold">Highlight</h3>
                <p><code>I need to highlight these ==very important words==.</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Subscript</h3>
                <p><code>H~2~O</code></p>
              </div>

              <div>
                <h3 className="font-semibold">Superscript</h3>
                <p><code>X^2^</code></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}