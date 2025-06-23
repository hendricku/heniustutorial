"use client";

import { useState, useMemo } from "react";
// Assuming Navbar is in a parent directory. Comment out if you don't have one.
import Navbar from "../Navbar";
import Sidebar from "./Sidebar"; // adjust path if needed

// --- COMPLETE TOPICS DATA ---
// Each topic is an object containing all necessary information.
const topicsData = [
  {
    id: "html-home",
    title: "HTML HOME",
    description: "Welcome to your HTML adventure! This is your launchpad for building web pages. HTML provides the fundamental structure for everything you see online. Use the sidebar to navigate through lessons, from basic building blocks to advanced techniques. Let's get started!",
    code: null,
    proTip: "Bookmark this page! As you learn, you'll want to come back to review concepts. Repetition is key to mastery.",
    didYouKnow: "The first-ever website, created by Tim Berners-Lee in 1991, is still online today! It explains the basics of the World Wide Web project.",
  },
  {
    id: "html-introduction",
    title: "HTML Introduction",
    description: "HTML stands for HyperText Markup Language. It's the skeleton of every web page. Think of it like the frame of a house. It doesn't look pretty on its own, but it's essential for holding everything together. You'll use 'tags' to define elements like headings, paragraphs, and links.",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`,
    proTip: "The `<!DOCTYPE html>` declaration is not an HTML tag. It's an instruction to the web browser about what version of HTML the page is written in. Always include it!",
    whatsNext: "Now that you know the basic structure, let's look at the tools you'll use to write your code.",
  },
  {
    id: "html-editors",
    title: "HTML Editors",
    description: "You can write HTML in any simple text editor (like Notepad), but using a code editor will make your life much easier! Modern editors offer syntax highlighting, autocompletion, and other powerful features.",
    code: `<!-- Popular Code Editors -->
<!-- Visual Studio Code (VS Code) is highly recommended! -->
<!-- Sublime Text -->
<!-- Atom -->
<!-- Just save your file with a .html extension! -->`,
    proTip: "Install the 'Live Server' extension in VS Code. It automatically reloads your webpage in the browser whenever you save your file, speeding up development immensely.",
    didYouKnow: "Syntax highlighting (the different colors you see for code) was invented to reduce errors by making the code structure more visually obvious to humans.",
  },
  {
    id: "html-basic",
    title: "HTML Basic",
    description: "Every HTML document has a required basic structure. It starts with the DOCTYPE, followed by `<html>`, `<head>`, and `<body>` tags. The `<head>` contains meta-information, and the `<body>` contains the visible content.",
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`,
    proTip: "The content inside the `<title>` tag is what appears on the browser tab. Make it descriptive!",
    whatsNext: "Let's break down the individual pieces that make up this structure: HTML Elements.",
  },
  {
    id: "html-elements",
    title: "HTML Elements",
    description: "An HTML element is usually made up of a start tag, some content, and an end tag. For example, `<p>This is the content.</p>` is a paragraph element. The tags tell the browser how to display the content.",
    code: `<h1>This is a heading element.</h1>
<p>This is a paragraph element.</p>
<br> <!-- Some elements, like line breaks, are 'empty' and don't need a closing tag. -->`,
    proTip: "Always 'nest' your tags correctly. If you open a `<b>` tag inside a `<p>` tag, you must close the `<b>` tag before you close the `<p>` tag. Example: `<p><b>Correct!</b></p>`",
    whatsNext: "Elements are great, but attributes are what give them superpowers!",
  },
  {
    id: "html-attributes",
    title: "HTML Attributes",
    description: "Attributes provide extra information about an element. They are always specified in the start tag and come in name/value pairs like `name=\"value\"`. They can change an element's behavior or provide useful metadata.",
    code: `<a href="https://www.example.com">This link has an href attribute.</a>

<img src="image.jpg" alt="This image has src and alt attributes.">`,
    proTip: "The `alt` attribute on an `<img>` tag is crucial for accessibility. It describes the image for screen readers and is displayed if the image fails to load.",
    didYouKnow: "The `href` in an `<a>` tag stands for 'hypertext reference'.",
  },
  {
    id: "html-headings",
    title: "HTML Headings",
    description: "HTML provides six levels of headings, `<h1>` through `<h6>`. They are used to create a document outline and are vital for both readability and Search Engine Optimization (SEO).",
    code: `<h1>This is the most important heading</h1>
<h2>This is a sub-heading</h2>
<h3>And so on...</h3>
<h6>This is the least important heading</h6>`,
    proTip: "Use only one `<h1>` per page. Think of it as the main title of your document. Use the other headings to structure the sections logically.",
    whatsNext: "After headings, the most common text element you'll use is the paragraph.",
  },
  {
    id: 'html-paragraphs',
    title: 'HTML Paragraphs',
    description: 'The HTML `<p>` element defines a paragraph. Browsers automatically add a blank line (a margin) before and after each `<p>` element, separating blocks of text.',
    code: `<p>This is the first paragraph. It can contain a lot of text and will wrap automatically based on the screen size.</p>

<p>This is the second paragraph. Using separate paragraph tags is important for structure and styling.</p>`,
    proTip: 'Never use empty paragraph tags `<p></p>` to add space. Use CSS `margin` or `padding` properties for styling and layout instead.',
    whatsNext: 'Let\'s learn how to apply basic styles to our text.'
  },
  {
    id: 'html-styles',
    title: 'HTML Styles',
    description: 'The `style` attribute allows you to add inline CSS (Cascading Style Sheets) to an element. You can change things like color, font size, alignment, and much more.',
    code: `<p style="color:blue; font-size:18px; text-align:center;">
  This paragraph is blue, has a larger font, and is centered.
</p>`,
    proTip: 'While the `style` attribute is quick for testing, it\'s best practice to put your styles in a separate CSS file for better organization and reusability, which you\'ll learn about in the "HTML CSS" topic.',
    didYouKnow: 'CSS was first proposed in 1994 to separate the document content (HTML) from its presentation (the styles).'
  },
  {
    id: 'html-formatting',
    title: 'HTML Formatting',
    description: 'HTML has several elements for defining text with a special meaning, which also affects its visual presentation. These are called formatting tags.',
    code: `<b>This text is bold.</b>
<strong>This text is important (and usually bold).</strong>
<i>This text is italic.</i>
<em>This text is emphasized (and usually italic).</em>
<u>This text is underlined.</u>
<mark>This text is marked/highlighted.</mark>
<code>This is a piece of computer code.</code>
`,
    proTip: 'Prefer `<strong>` over `<b>` and `<em>` over `<i>`. The "strong" and "em" tags carry semantic meaning about importance, which is better for accessibility and SEO, while "b" and "i" are purely visual.',
  },
  // ... and so on for all topics. I'll continue filling them out.
  { id: 'html-quotations', title: 'HTML Quotations', description: 'Use `<blockquote>` for long, multi-line quotations that should be indented, and `<q>` for short, inline quotations that will be enclosed in quotation marks.', code: `<blockquote cite="http://www.worldwildlife.org/who/index.html"> For 50 years, WWF has been protecting the future of nature. </blockquote>\n<p>As she said, <q>I am learning HTML!</q></p>`, proTip: 'The `cite` attribute is optional but highly recommended. It provides a URL to the source of the quotation, which is great for attribution.' },
  { id: 'html-comments', title: 'HTML Comments', description: 'Comments are notes you can leave in your code that are ignored by the browser. They are essential for explaining complex parts of your code to yourself and other developers.', code: `<!-- This is a comment. It will not be displayed on the page. -->\n<p>This paragraph will be displayed.</p>\n<!-- You can also use comments to temporarily hide code! -->`, proTip: 'Use comments to explain the "why" of your code, not the "what". Good code often explains what it does, but comments can explain why it was necessary.' },
  { id: 'html-colors', title: 'HTML Colors', description: 'Color breathes life into a webpage. In HTML and CSS, you can specify colors in several ways: by name ("red"), by HEX code ("#FF0000"), by RGB ("rgb(255,0,0)"), or HSL.', code: `<h1 style="color:tomato;">I am a Tomato-colored heading</h1>\n<p style="background-color:dodgerblue; color:white;">This paragraph has a cool blue background.</p>`, proTip: 'While you can use color names, HEX or RGB values give you access to over 16 million colors, offering much more precise control over your design!', didYouKnow: 'The "dodgerblue" color name comes from the color of the Los Angeles Dodgers baseball team uniforms.' },
  { id: 'html-css', title: 'HTML CSS', description: 'CSS (Cascading Style Sheets) is the language used to style an HTML document. It can be added to HTML in three ways: inline (style attribute), internal (<style> tag in <head>), or external (<link> to a .css file).', code: `<head>\n  <style>\n    body { background-color: linen; }\n    h1 { color: maroon; }\n  </style>\n</head>\n<body>\n  <h1>Styled Page</h1>\n</body>`, proTip: 'External style sheets are the best method for styling a real website. It keeps your HTML clean and allows you to reuse the same styles across multiple pages.', whatsNext: 'Let\'s create some links to navigate between pages.' },
  { id: 'html-links', title: 'HTML Links', description: 'Links, or hyperlinks, are what make the web a "web"! The `<a>` (anchor) tag creates a link to other web pages, files, or locations within the same page.', code: `<a href="https://www.google.com" target="_blank">Visit Google in a new tab</a>`, proTip: 'Use `target="_blank"` for links to external sites. This keeps users on your site while they check out the other link, improving user experience.', whatsNext: 'Now that you can link pages, let\'s learn how to display images.' },
  { id: 'html-images', title: 'HTML Images', description: 'Images are crucial for making pages visually engaging. The `<img>` tag is used to embed an image. It is an "empty" tag, meaning it has no closing tag.', code: `<img src="https://via.placeholder.com/300x150" alt="A placeholder image" width="300" height="150">`, proTip: 'Always specify the `width` and `height` attributes. This helps the browser reserve space for the image before it loads, preventing the page layout from jumping around.', didYouKnow: 'The first image ever uploaded to the web was a picture of the band "Les Horribles Cernettes", a parody pop group founded by employees of CERN.' },
  { id: 'html-favicon', title: 'HTML Favicon', description: 'A favicon is the small icon that appears in the browser tab, bookmarks, and other places. It\'s a key part of your site\'s branding.', code: `<head>\n  <title>My Page</title>\n  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">\n</head>`, proTip: 'You can use `.png` or `.svg` files for favicons for better quality and transparency. Just change the `type` attribute accordingly (e.g., `type="image/png"`).', didYouKnow: 'The word "favicon" is a blend of "favorite" and "icon", as it was originally used for the icon in Internet Explorer\'s "Favorites" (bookmarks) menu.' },
  { id: 'html-page-title', title: 'HTML Page Title', description: 'The `<title>` element defines the title of the document. It is required in all HTML documents and is crucial for SEO and user experience.', code: `<head>\n  <meta charset="UTF-8">\n  <title>My Awesome Page Title</title>\n</head>`, proTip: 'Keep your page titles concise but descriptive. Search engines typically display the first 50–60 characters of a title tag.' },
  { id: 'html-tables', title: 'HTML Tables', description: 'Tables are used to display data in rows and columns. Use `<table>` to create the table, `<tr>` for rows, `<th>` for headers, and `<td>` for data cells.', code: `<table border="1">\n  <tr>\n    <th>Name</th>\n    <th>Role</th>\n  </tr>\n  <tr>\n    <td>Ada Lovelace</td>\n    <td>First Programmer</td>\n  </tr>\n</table>`, proTip: 'Do not use tables for page layout! They are meant for tabular data. For layout, use modern CSS techniques like Flexbox or Grid, and semantic HTML like `<header>`, `<main>`, etc.' },
  { id: 'html-lists', title: 'HTML Lists', description: 'HTML offers two main types of lists: unordered (`<ul>`), which uses bullet points, and ordered (`<ol>`), which uses numbers. Each list item is defined with an `<li>` tag.', code: `<h4>Grocery List</h4>\n<ul>\n  <li>Milk</li>\n  <li>Bread</li>\n</ul>\n\n<h4>To-Do List</h4>\n<ol>\n  <li>Learn HTML</li>\n  <li>Build a website</li>\n</ol>`, proTip: 'Lists are excellent for creating navigation menus. You can use CSS to remove the bullets/numbers and style them horizontally.', didYouKnow: 'You can change the list marker type with the CSS `list-style-type` property (e.g., `square`, `lower-roman`).' },
  { id: 'html-block-inline', title: 'HTML Block & Inline', description: 'Block-level elements (like `<div>`, `<p>`, `<h1>`) always start on a new line and take up the full available width. Inline elements (like `<span>`, `<a>`, `<img>`) do not start on a new line and only take up as much width as necessary.', code: `<div style="background-color:lightblue;">A block-level div.</div>\n<p>The word <span style="border:1px solid red;">span</span> is an inline element.</p>`, proTip: 'The `<div>` element is a generic block-level container, while `<span>` is a generic inline container. They are perfect for grouping elements for styling purposes when no other semantic element is appropriate.' },
  { id: 'html-classes', title: 'HTML Classes', description: 'The `class` attribute is used to specify one or more class names for an HTML element. You can then use this class name in CSS to select and style all elements with that class.', code: `<style>\n  .city { background-color: tomato; color: white; padding: 10px; }\n</style>\n<h2 class="city">London</h2>\n<p class="city">London is the capital of England.</p>`, proTip: 'You can assign multiple classes to an element by separating them with a space, like `class="important-text main-content"`. This is a powerful way to combine styles.' },
  { id: 'html-id', title: 'HTML Id', description: 'The `id` attribute specifies a unique ID for an HTML element. An ID must be unique within the entire page. It can be used by CSS to style a specific element or by JavaScript to manipulate it.', code: `<h1 id="main-title">My Unique Header</h1>\n<style>\n  #main-title { color: blue; }\n</style>`, proTip: 'Use `id` for elements that are one-of-a-kind on a page, like the main header or a contact form. For styling multiple elements, use `class` instead.' },
  { id: 'html-iframes', title: 'HTML Iframes', description: 'An `iframe` (Inline Frame) is used to embed another HTML document within the current page. It\'s commonly used for embedding maps, videos, or ads.', code: `<iframe src="https://www.openstreetmap.org/export/embed.html" width="400" height="300"></iframe>`, proTip: 'Always include a `title` attribute for `<iframe>`s for accessibility. It helps screen reader users understand what the iframe contains.', didYouKnow: 'The `sandbox` attribute can be added to an `<iframe>` to increase security by restricting the actions the embedded content can perform.' },
  { id: 'html-javascript', title: 'HTML JavaScript', description: 'JavaScript makes web pages interactive. You can add JS directly with a `<script>` tag or link to an external file. It can manipulate HTML content and react to user events.', code: `<button onclick="this.innerHTML = 'You clicked me!'">Click me</button>\n\n<script>\nfunction greet() {\n  alert('Hello from JavaScript!');\n}\n</script>`, proTip: 'For larger applications, always place your JavaScript in external `.js` files and link them at the end of the `<body>` tag. This improves page load speed.' },
  { id: 'html-file-paths', title: 'HTML File Paths', description: 'File paths tell the browser where to find external resources like images, stylesheets, and scripts. They can be absolute (full URL) or relative (to the current page).', code: `<!-- Relative path to an image in the same folder -->\n<img src="picture.jpg">\n\n<!-- Relative path to an image in an "images" subfolder -->\n<img src="images/picture.jpg">\n\n<!-- Relative path to an image in the parent folder -->\n<img src="../picture.jpg">`, proTip: 'Relative file paths are almost always preferred for your own site\'s assets. It makes your site portable—you can move the entire project folder without breaking all the links.' },
  { id: 'html-head', title: 'HTML Head', description: 'The `<head>` element is a container for metadata (data about data). It\'s not displayed on the page but contains crucial information like the page `<title>`, character set, styles, scripts, and other meta information.', code: `<head>\n  <meta charset="UTF-8">\n  <meta name="description" content="Free Web tutorials">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>About The Head Element</title>\n</head>`, proTip: 'The `<meta name="viewport" ...>` tag is essential for responsive web design. It tells the browser how to control the page\'s dimensions and scaling on different devices.' },
  { id: 'html-layout', title: 'HTML Layout', description: 'HTML5 introduced semantic elements that define the different parts of a web page, making your code more readable and accessible.', code: `<header>Page Header (logo, nav)</header>\n<nav>Main Navigation</nav>\n<main>\n  <article>Main content of the page</article>\n</main>\n<aside>Sidebar content</aside>\n<footer>Page Footer</footer>`, proTip: 'Using these semantic layout tags is much better for SEO and accessibility than using generic `<div>` tags for everything. Search engines and screen readers understand their meaning.' },
  { id: 'html-responsive', title: 'HTML Responsive', description: 'Responsive Web Design is about creating web pages that look good on all devices (desktops, tablets, phones). This is achieved using a mix of flexible grids, layouts, and CSS media queries.', code: `<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<!-- CSS media queries do the rest of the work! -->`, proTip: 'Adopt a "mobile-first" approach. Design your site for small screens first, and then add styles for larger screens. This often leads to a cleaner and more focused design.' },
  { id: 'html-computercode', title: 'HTML Computercode', description: 'HTML has special tags for displaying different types of computer code and output, which are typically rendered in a monospaced font.', code: `<p>Use the <code>let x = 5;</code> command.</p>\n<pre>\n// The pre tag preserves\n// whitespace and line breaks.\n</pre>\n<p>Program output: <samp>File not found.</samp></p>`, proTip: 'Wrap a `<code>` tag inside a `<pre>` tag (`<pre><code>...</code></pre>`) to represent a block of code while preserving formatting and getting the correct semantic meaning.' },
  { id: 'html-semantics', title: 'HTML Semantics', description: 'Semantic HTML means using tags that accurately describe the content they contain. This gives better context to browsers, search engines, and assistive technologies.', code: `<article>\n  <h1>The Importance of Semantics</h1>\n  <p>Using tags like <time>2023-10-27</time> instead of a generic <span> gives meaning to the content.</p>\n</article>`, proTip: 'Ask yourself: "What does this content *represent*?" If it\'s a self-contained piece of content, use `<article>`. If it\'s a figure with a caption, use `<figure>` and `<figcaption>`. Don\'t just use `<div>`s!', didYouKnow: 'Search engines like Google give a slight ranking boost to pages with well-structured, semantic HTML.' },
  { id: 'html-style-guide', title: 'HTML Style Guide', description: 'A style guide establishes a set of rules for writing code, ensuring it is consistent, readable, and maintainable, especially when working in a team.', code: `<!-- A good style guide might include: -->\n<!-- 1. Always use lowercase tag names. -->\n<!-- 2. Use 2 spaces for indentation. -->\n<!-- 3. Always include the alt attribute for images. -->\n<!-- 4. Never use inline styles. -->`, proTip: 'Many companies publish their HTML/CSS style guides online (e.g., Google, Airbnb). Reading them can give you great ideas for establishing your own best practices.' },
  { id: 'html-entities', title: 'HTML Entities', description: 'Some characters are reserved in HTML, like the less-than (`<`) sign which starts a tag. To display these characters as text, you must use character entities.', code: `To write <p> you must type &lt;p&gt;.\n\nThe copyright symbol is ©.`, proTip: 'The most common entities are `<` (<), `>` (>), and `&` (&). Memorizing these three will cover 99% of your use cases.' },
  { id: 'html-symbols', title: 'HTML Symbols', description: 'You can include many mathematical, technical, and currency symbols in HTML that are not present on a normal keyboard by using entity names or numbers.', code: `Euro: € or €\nHeart: ♥ or ♥\nPi: π or π`, proTip: 'Using UTF-8 as your character set (`<meta charset="UTF-8">`) allows you to just type or paste many of these symbols directly into your HTML, but entities are a foolproof way to ensure they render correctly everywhere.' },
  { id: 'html-emojis', title: 'HTML Emojis', description: 'Emojis are characters from the UTF-8 character set. If your page has the correct charset declaration, you can use them just like any other character!', code: `<p>I am happy! </p>\n<p>Let's go to the moon! </p>`, proTip: 'Emojis can be styled with CSS just like text! You can change their `font-size` to make them bigger or smaller.', didYouKnow: 'The "Face with Tears of Joy" emoji (😂) was the Oxford Dictionaries Word of the Year in 2015.' },
  { id: 'html-charsets', title: 'HTML Charsets', description: 'To display an HTML page correctly, a web browser must know the character set (character encoding) used. The `UTF-8` character set can handle almost any character and symbol.', code: `<head>\n  <meta charset="UTF-8">\n</head>`, proTip: 'Always set `UTF-8` as your character set. It is the dominant character encoding for the Web and will prevent many strange character rendering issues.' },
  { id: 'html-url-encode', title: 'HTML URL Encode', description: 'URLs can only be sent over the internet using the ASCII character set. If a URL contains characters outside this set (like spaces or special symbols), it must be encoded.', code: `A space is encoded as %20.\nAn exclamation mark ! is encoded as %21.\n\nOriginal URL:\nhttps://example.com/my test page.html\n\nEncoded URL:\nhttps://example.com/my%20test%20page.html`, proTip: 'You usually don\'t have to do this manually. Browsers and programming languages will automatically encode URLs when you make requests. It\'s just good to know what\'s happening under the hood!' },
  { id: 'html-vs-xhtml', title: 'HTML vs. XHTML', description: 'XHTML (Extensible HyperText Markup Language) is a stricter, more XML-based version of HTML. It enforces stricter syntax rules.', code: `<!-- In XHTML, all tags must be lowercase and closed. -->\n<!-- Wrong: <P>Some text<br> -->\n<!-- Right: <p>Some text<br /></p> -->\n\n<!-- All attribute values must be quoted. -->\n<!-- Wrong: <td width=100> -->\n<!-- Right: <td width="100"> -->`, proTip: 'While XHTML was important in the past, HTML5 is the current standard. HTML5 is more forgiving and has a simpler syntax, so you should focus on learning and writing standard HTML5.', didYouKnow: 'The main benefit of XHTML was that it could be parsed by standard XML tools. However, this benefit was not compelling enough for most web developers to switch.' },
];


// --- Reusable UI Components (can be moved to separate files) ---

const InfoBox = ({ type, title, children }: { type: 'tip' | 'info' | 'next'; title: string; children: React.ReactNode }) => {
  const styles = {
    tip: { bg: "bg-blue-50", border: "border-blue-400", icon: "💡", titleColor: "text-blue-800" },
    info: { bg: "bg-yellow-50", border: "border-yellow-400", icon: "✨", titleColor: "text-yellow-800" },
    next: { bg: "bg-green-50", border: "border-green-400", icon: "➡️", titleColor: "text-green-800" },
  };
  const currentStyle = styles[type];
  return (
    <div className={`mt-6 p-4 rounded-lg border-l-4 ${currentStyle.bg} ${currentStyle.border} shadow-sm`}>
      <h4 className={`flex items-center gap-2 font-bold text-lg ${currentStyle.titleColor}`}>
        <span>{currentStyle.icon}</span>
        {title}
      </h4>
      <div className="mt-2 text-gray-700 prose prose-sm max-w-none">{children}</div>
    </div>
  );
};

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden my-4">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-700 text-xs font-mono">
        <span className="text-gray-400">EXAMPLE: HTML</span>
        <button onClick={handleCopy} className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-sm">
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-green-400" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
              Copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-white overflow-x-auto text-sm leading-relaxed">{code}</pre>
    </div>
  );
};

const LivePreview = ({ code }: { code: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden my-4">
      <div className="px-4 py-2 bg-gray-200 text-xs font-mono font-semibold text-gray-600">
        LIVE PREVIEW
      </div>
      <iframe title="Live Preview" className="w-full h-48 md:h-full border-t border-gray-300" srcDoc={code} sandbox="allow-scripts allow-same-origin"/>
    </div>
  );
};

// --- The Main Page Component ---
export default function HtmlTutorialPage() {
  const [selectedTopicId, setSelectedTopicId] = useState(topicsData[0].id);

  const currentTopic = useMemo(
    () => topicsData.find(t => t.id === selectedTopicId) || topicsData[0],
    [selectedTopicId]
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
        <Sidebar
          topics={topicsData}
          selectedTopicId={selectedTopicId}
          onSelect={setSelectedTopicId}
        />
        <main className="flex-1 p-6 sm:p-8 md:p-12">
          <div key={currentTopic.id} className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-fade-in w-full max-w-5xl mx-auto">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-4 text-slate-800 tracking-tight">{currentTopic.title}</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{currentTopic.description}</p>
            
            <hr className="my-8 border-slate-200"/>

            {currentTopic.code && (
              <div>
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Example & Preview</h2>
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <CodeBlock code={currentTopic.code} />
                  <LivePreview code={currentTopic.code} />
                </div>
              </div>
            )}
            
            {/* Special visual examples for specific topics */}
            {currentTopic.id === 'html-headings' && (
              <div className="mt-6 p-6 rounded-lg bg-slate-100 border border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-700">Rendered Headings:</h3>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">h1: The Page Title</h1>
                  <h2 className="text-2xl font-semibold">h2: A Major Section</h2>
                  <h3 className="text-xl font-semibold">h3: A Sub-Section</h3>
                  <h4 className="text-lg font-medium">h4: A Sub-Sub-Section</h4>
                  <h5 className="text-base font-medium">h5: A Grouping Title</h5>
                  <h6 className="text-sm font-medium text-slate-500">h6: Minor Annotation</h6>
                </div>
              </div>
            )}
             {currentTopic.id === 'html-lists' && (
              <div className="mt-6 p-6 rounded-lg bg-slate-100 border border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-slate-700">Rendered Lists:</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-600 mb-2">Unordered List (`ul`)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700"><li>Milk</li><li>Bread</li><li>Eggs</li></ul>
                  </div>
                   <div>
                    <h4 className="font-semibold text-slate-600 mb-2">Ordered List (`ol`)</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-slate-700"><li>Wake up</li><li>Code</li><li>Sleep</li></ol>
                  </div>
                </div>
              </div>
            )}
            {currentTopic.id === 'html-tables' && (
              <div className="mt-6 p-6 rounded-lg bg-slate-100 border border-slate-200 overflow-x-auto">
                <h3 className="font-bold text-lg mb-3 text-slate-700">Rendered Table:</h3>
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-200">
                    <tr>
                      <th className="p-3 font-semibold border border-slate-300">Name</th>
                      <th className="p-3 font-semibold border border-slate-300">Contribution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border border-slate-300">Ada Lovelace</td>
                      <td className="p-3 border border-slate-300">First Programmer</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border border-slate-300">Grace Hopper</td>
                      <td className="p-3 border border-slate-300">Pioneered COBOL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Motivational Info Boxes */}
            {currentTopic.proTip && <InfoBox type="tip" title="Pro Tip">{currentTopic.proTip}</InfoBox>}
            {currentTopic.didYouKnow && <InfoBox type="info" title="Did You Know?">{currentTopic.didYouKnow}</InfoBox>}
            {currentTopic.whatsNext && <InfoBox type="next" title="What's Next?">{currentTopic.whatsNext}</InfoBox>}
          </div>
        </main>
      </div>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Simple prose styles for InfoBox content */
        .prose p { margin-top: 0.5rem; }
        .prose code { 
          background-color: rgba(0,0,0,0.05);
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
}