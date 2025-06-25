export const cssTopicsData = [
  {
    group: "CSS Tutorial",
    topics: [
      {
        id: "css-home",
        title: "CSS HOME",
        emoji: "🎨",
        description: "Welcome to your CSS journey! CSS, which stands for Cascading Style Sheets, is the language we use to style an HTML document. It's responsible for the visual presentation of web pages, controlling everything from colors and fonts to the layout of complex multi-column pages. Alongside HTML (for structure) and JavaScript (for interactivity), CSS is one of the three core technologies of the World Wide Web. Use the sidebar to explore topics from the fundamentals to advanced responsive design and animation.",
        code: null,
        output: null,
        proTip: "Bookmark this page for quick reference. As you learn, try to experiment with the code examples directly in your browser's developer tools.",
        didYouKnow: "CSS was first proposed by Håkon Wium Lie on October 10, 1994. At the time, he was working with Tim Berners-Lee at CERN."
      },
      {
        id: "css-intro",
        title: "CSS Introduction",
        emoji: "👋",
        description: "CSS stands for Cascading Style Sheets. It's a stylesheet language that describes how HTML elements are to be displayed on screen, paper, or in other media. The 'cascading' part is crucial: it means that styles can fall (or cascade) from multiple sources, and there's a defined hierarchy to resolve conflicts. CSS allows for the separation of presentation and content, which makes your code cleaner, more maintainable, and easier to update.",
        code: `/* Select the h1 element and apply styles */
h1 {
  color: #2c3e50; /* A dark blue color */
  font-size: 2.5rem; /* rem is a unit relative to the root font size */
  text-align: center;
}

/* Select all paragraph elements */
p {
  color: #34495e; /* A slightly lighter dark blue */
  line-height: 1.6; /* Improves readability */
}`,
        output: `
      +---------------------------------+
      |                                 |
      |      This Is A Big Title        |
      |                                 |
      |  This is a paragraph of text    |
      |  with extra line spacing for    |
      |  better readability. The color  |
      |  is a subtle dark blue.         |
      |                                 |
      +---------------------------------+
      (Title is centered, larger, and dark blue. 
       Paragraph has more vertical space between lines.)
        `,
        proTip: "For larger projects, always use external stylesheets (.css files). This practice, known as 'separation of concerns', makes your website easier to maintain and scale.",
        whatsNext: "Let's learn the fundamental rules of CSS syntax."
      },
      {
        id: "css-syntax",
        title: "CSS Syntax",
        emoji: "🔤",
        description: "A CSS rule is composed of two main parts: a selector and a declaration block. The selector 'selects' the HTML element(s) you want to style. The declaration block is enclosed in curly braces `{}` and contains one or more declarations, separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.",
        code: `/* 'p' is the selector */
p {
  /* 'color: green;' is the first declaration */
  color: green;      /* 'color' is the property, 'green' is the value */
  
  /* 'font-size: 16px;' is the second declaration */
  font-size: 16px;   /* 'font-size' is the property, '16px' is the value */
}`,
        output: `
      +--------------------------------+
      |                                |
      |  [This text will be green and  |
      |   16 pixels tall.]             |
      |                                |
      +--------------------------------+
        `,
        proTip: "Always end each declaration with a semicolon, even the last one. This prevents errors when you add a new declaration later.",
        whatsNext: "Selectors are how you target specific HTML elements."
      },
      {
        id: "css-selectors",
        title: "CSS Selectors",
        emoji: "🎯",
        description: "Selectors are patterns used to select and style HTML elements. They are one of the most important parts of CSS. The most common types are element selectors (e.g., `p`), class selectors (e.g., `.my-class`), and ID selectors (e.g., `#unique-id`). Classes can be used on multiple elements, while IDs must be unique to a single element on the page.",
        code: `/* Element selector: targets all <p> elements */
p {
  color: green;
}

/* ID selector: targets the single element with id="main-title" */
#main-title {
  font-size: 2rem;
  border-bottom: 2px solid orange;
}

/* Class selector: targets all elements with class="highlight" */
.highlight {
  background-color: yellow;
  font-weight: bold;
}`,
        output: `
Given this HTML:
<h1 id="main-title">Main Title</h1>
<p>A regular paragraph.</p>
<p class="highlight">An important paragraph.</p>

Result:
- The <h1> will be large with an orange line below it.
- Both <p> tags will have green text.
- The second <p> will ALSO have a yellow background and bold text.
        `,
        proTip: "Use classes for reusable styles (e.g., buttons, alerts) and IDs for unique page landmarks (e.g., main header, footer). IDs have higher specificity than classes.",
        whatsNext: "Now, let's see how to actually add these CSS rules to your HTML document."
      },
      {
        id: "css-howto",
        title: "How To Add CSS",
        emoji: "➕",
        description: "There are three ways to insert CSS into an HTML document: External, Internal, and Inline. \n1. **External CSS**: The best method. You write your CSS in a separate `.css` file and link it in the HTML `<head>`. \n2. **Internal CSS**: You place your CSS rules within a `<style>` tag, also inside the HTML `<head>`. \n3. **Inline CSS**: You apply styles directly to an HTML element using the `style` attribute. This method has the highest priority but is the least recommended due to poor maintainability.",
        code: `<!-- 1. Inline CSS (Applied directly to an element) -->
<p style="color: red; font-size: 12px;">This is an inline style.</p>

<!-- 2. Internal CSS (Inside the <head> tag) -->
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>

<!-- 3. External CSS (Best practice, link in <head>) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
`,
        output: `
1. Inline: The paragraph text will be red.
2. Internal: Any paragraph on the page will have blue text.
3. External: Any paragraph will be styled by the rules in 'styles.css'.

(Note: Inline styles override internal and external styles.)
        `,
        proTip: "External stylesheets are the industry standard. They allow you to style multiple pages with a single file and are better for caching and performance.",
        whatsNext: "Comments are crucial for documenting your CSS and making it understandable."
      },
      {
        id: "css-comments",
        title: "CSS Comments",
        emoji: "💬",
        description: "CSS comments are used to explain your code and can help when you edit the source code at a later date. Comments are ignored by browsers. A CSS comment starts with `/*` and ends with `*/`. They can span multiple lines and are also useful for temporarily disabling lines of code for debugging purposes.",
        code: `/* 
  This is a multi-line comment.
  It's useful for providing detailed explanations
  or for creating sections in your stylesheet.
*/

p {
  color: blue; /* This is a single-line comment */
  /* font-size: 20px; */ /* This line is 'commented out' for debugging */
}`,
        output: null,
        proTip: "Use comments to organize your stylesheet into logical sections, such as 'Header Styles', 'Navigation', 'Footer Styles', etc. It makes large files much easier to navigate.",
        whatsNext: "Time for the fun part: let's add some color!"
      },
      {
        id: "css-colors",
        title: "CSS Colors",
        emoji: "🌈",
        description: "CSS provides multiple ways to specify colors. You can use predefined color names, or for more control, use HEX, RGB, or HSL values. The 'A' in RGBA and HSLA stands for 'alpha' and controls the opacity/transparency of the color, ranging from 0 (fully transparent) to 1 (fully opaque).",
        code: `/* Predefined color name */
.el1 { color: tomato; }

/* HEX value (RRGGBB) */
.el2 { color: #4CAF50; }

/* RGB value (Red, Green, Blue) */
.el3 { color: rgb(0, 0, 255); }

/* RGBA value (with alpha/transparency) */
.el4 { background-color: rgba(0, 0, 255, 0.5); }

/* HSL value (Hue, Saturation, Lightness) */
.el5 { color: hsl(240, 100%, 50%); }`,
        output: `
[Text in tomato color]
[Text in green color]
[Text in blue color]
+----------------------+
| A semi-transparent   |
| blue background box  |
+----------------------+
[Text in a vibrant blue color]
        `,
        proTip: "Use RGBA or HSLA for background colors when you want text on top to remain fully opaque. The `opacity` property affects the entire element, including its children.",
        didYouKnow: "There are 140 standard color names supported by all browsers. Names like 'rebeccapurple' have interesting backstories!"
      },
      {
        id: "css-backgrounds",
        title: "CSS Backgrounds",
        emoji: "🖼️",
        description: "CSS background properties are used to define the background effects for elements. You can set a solid color, use an image, control its repetition and position, and more. Key properties include `background-color`, `background-image`, `background-repeat`, `background-position`, and `background-size`.",
        code: `body {
  /* Set a fallback color */
  background-color: #f0f0f0;
  /* Add a background image */
  background-image: url('images/bg-pattern.png');
  /* Prevent the image from tiling */
  background-repeat: no-repeat;
  /* Make the image cover the entire element */
  background-size: cover;
  /* Center the image */
  background-position: center;
  /* Fix the background so it doesn't scroll with the page */
  background-attachment: fixed;
}

/* Shorthand version */
.shorthand {
  background: #f0f0f0 url('images/bg.png') no-repeat center/cover fixed;
}`,
        output: `
+------------------------------------------+
| Entire page background would be covered  |
| by the 'bg.png' image. The image would   |
| be centered, scaled to fill the screen,  |
| and would not move when the user scrolls.|
|                                          |
|  [ Content on top ]                      |
|                                          |
+------------------------------------------+
        `,
        proTip: "The `background` shorthand property is very efficient. The order is generally: `color image repeat attachment position / size`. You don't need to include all properties.",
        whatsNext: "Spacing is key to good design. Let's look at margins for outside spacing."
      },
      {
        id: "css-margins",
        title: "CSS Margins",
        emoji: "📏",
        description: "Margins are used to create space *around* an element, outside of any defined borders. You can control the margin for each side individually (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`) or use the shorthand `margin` property. Be aware of 'margin collapsing,' where the top and bottom margins of two adjacent block elements combine into a single margin.",
        code: `div {
  /* Shorthand: top, right, bottom, left */
  margin: 10px 20px 15px 5px;
}

/* Center a block-level element horizontally */
.container {
  width: 80%;
  margin: 0 auto;
}`,
        output: `
(Space around the box is the MARGIN)
      
       (10px top margin)
<----->+-----------------+<------>
(5px   |                 | (20px
 left  |      BOX        |  right
margin)|                 | margin)
       +-----------------+
       (15px bottom margin)
       
The '.container' would be centered horizontally on the page.
        `,
        proTip: "A very common and powerful trick is `margin: 0 auto;` on an element with a defined width. This will center the element horizontally within its parent container.",
        whatsNext: "Padding is similar to margin, but it adds space *inside* the element's border."
      },
      {
        id: "css-padding",
        title: "CSS Padding",
        emoji: "🧸",
        description: "Padding is used to create space *within* an element, between the content and the border. Like margins, you can control each side individually (`padding-top`, etc.) or use the `padding` shorthand. Padding is included in the total width of an element, which can be tricky. This is where the `box-sizing` property becomes very helpful.",
        code: `div {
  border: 1px solid black;

  /* Shorthand: top, right, bottom, left */
  padding: 10px 20px 15px 5px;
}`,
        output: `
(Space inside the border is the PADDING)

+--------------------------------+
| (10px top padding)             |
| <-> (Content Here) <---------> |
| (5px left)         (20px right)|
| (15px bottom padding)          |
+--------------------------------+
        `,
        proTip: "Adding padding to buttons and links increases their clickable area, which significantly improves user experience, especially on touch devices.",
        whatsNext: "Let's learn about borders, which sit between the padding and the margin."
      },
      {
        id: "css-borders",
        title: "CSS Borders",
        emoji: "🖊️",
        description: "The `border` property allows you to specify the style, width, and color of an element's border. You can style each side individually. A very popular related property is `border-radius`, which is used to create rounded corners on elements.",
        code: `div {
  /* Shorthand: width, style, color */
  border: 2px solid #333;

  /* Style just one side */
  border-bottom: 4px dotted blue;
}

.rounded-box {
  border: 1px solid steelblue;
  /* Create rounded corners */
  border-radius: 15px;
}

.circle {
  /* Make a perfect circle from a square element */
  border-radius: 50%;
}`,
        output: `
+--------------------------------+   .-----------------.
| Box with a solid top, left,    |  /                   \\
| and right border.              | | A box with rounded  |
|                                | |      corners.       |
++++++++++++++++++++++++++++++++++  \\                   /
(Bottom border is a dotted blue)   '-----------------'
        `,
        proTip: "You can create shapes like circles and ovals by applying a `border-radius` of `50%` to a square or rectangular element, respectively.",
        whatsNext: "Understanding width and height is crucial for managing the size of your elements."
      },
      {
        id: "css-width-height",
        title: "CSS Width & Height",
        emoji: "📐",
        description: "The `width` and `height` properties set the size of an element's content area. You can use absolute units like pixels (`px`) or relative units like percentages (`%`). For responsive design, it's often better to use `max-width` and `min-width` to allow elements to be flexible while preventing them from becoming too large or too small.",
        code: `.box {
  width: 500px;  /* A fixed width */
  height: 250px; /* A fixed height */
}

.responsive-image {
  width: 100%; /* Make the image as wide as its container */
  max-width: 800px; /* But don't let it get wider than 800px */
  height: auto; /* Maintain aspect ratio */
}`,
        output: `
.box -> A rectangle that is exactly 500px wide and 250px tall.

.responsive-image -> An image that scales down to fit small screens but will never grow larger than 800px wide, maintaining its proportions.
        `,
        proTip: "Setting `height: auto;` on an image is essential when you're setting its `width` to be responsive. This ensures the image scales proportionally and doesn't get distorted.",
        whatsNext: "The box model is an essential concept that ties together content, padding, border, and margin."
      },
      {
        id: "css-boxmodel",
        title: "CSS Box Model",
        emoji: "📦",
        description: "Every element on a web page is a rectangular box. The CSS box model describes how this box is composed of four parts: the content, padding, border, and margin. By default (`box-sizing: content-box`), the `width` and `height` you set applies only to the content area. A modern and more intuitive approach is to use `box-sizing: border-box`, where the `width` and `height` properties include the content, padding, and border.",
        code: `/* By default, total width = width + padding + border */
.content-box {
  box-sizing: content-box; /* The default */
  width: 200px;
  padding: 20px;
  border: 10px solid red;
  /* Actual visible width: 200 + 20*2 + 10*2 = 260px */
}

/* Total width = width (padding and border are inside) */
.border-box {
  box-sizing: border-box; /* A more intuitive model */
  width: 200px;
  padding: 20px;
  border: 10px solid green;
  /* Actual visible width: 200px */
}`,
        output: `
Content-Box (Red):
Total width is 260px.
<--10px border-->
  <--20px pad-->
    [200px content]
  <--20px pad-->
<--10px border-->

Border-Box (Green):
Total width is 200px.
<--10px border-->
  <--20px pad-->
    [140px content]
  <--20px pad-->
<--10px border-->
        `,
        proTip: "It's a common best practice to apply `box-sizing: border-box;` to all elements for a more predictable layout system. `*, *::before, *::after { box-sizing: border-box; }`",
        whatsNext: "With layout fundamentals covered, let's move on to styling text."
      },
      {
        id: "css-text",
        title: "CSS Text",
        emoji: "🔠",
        description: "CSS provides a wide range of properties for styling text. You can control alignment, decoration (like underlines), transformation (like uppercase), spacing between letters and words, and the height of each line to improve readability and match your design aesthetic.",
        code: `p {
  color: #333;
  text-align: justify;       /* Aligns text to both left and right margins */
  text-transform: capitalize;/* Capitalizes the first letter of each word */
  letter-spacing: 0.5px;     /* Adds space between characters */
  line-height: 1.5;          /* Space between lines of text */
}`,
        output: `
+--------------------------------------+
| This Text Would Be Capitalized. The  |
| l e t t e r s would be spaced out a  |
| little. The text lines up neatly on  |
| both the left and the right sides.   |
|                                      |
| There is extra vertical space        |
| between each line of text.           |
+--------------------------------------+
        `,
        proTip: "Use a unitless `line-height` value, like `1.5`. This allows the line height to scale proportionally if the `font-size` of the element or its children changes.",
        whatsNext: "Fonts can dramatically change the look and feel of your site."
      },
      {
        id: "css-fonts",
        title: "CSS Fonts",
        emoji: "✍️",
        description: "The `font` properties in CSS allow you to control the typeface, weight, style, and size of text. The `font-family` property should include a 'font stack'—a list of fonts that the browser will try to use in order, ending with a generic family name like `sans-serif` or `serif` as a fallback.",
        code: `h1 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
}

/* The 'font' shorthand property */
p {
  font: italic 700 16px/1.5 Arial, sans-serif;
}`,
        output: `
h1 -> A large, bold, and italic heading in a serif font like Georgia.
      (Elegant, traditional look)

p -> A paragraph in a sans-serif font like Arial, also bold and italic.
     (Clean, modern look)
        `,
        proTip: "Use `rem` units for `font-size`. `rem` is relative to the root `<html>` element's font size, making it easier to scale all text on your site consistently for different devices or user preferences.",
        whatsNext: "Links are essential for navigation. Let's see how to style them."
      },
      {
        id: "css-links",
        title: "CSS Links",
        emoji: "🔗",
        description: "Links (`<a>` tags) can be styled differently depending on their state using pseudo-classes. The most common states are `:link` (unvisited), `:visited` (visited), `:hover` (when the mouse is over it), `:active` (when it's being clicked), and `:focus` (when selected via keyboard).",
        code: `a {
  color: #007BFF;
  text-decoration: none; /* Remove the default underline */
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: #0056b3;
  text-decoration: underline; /* Add underline on hover for clarity */
}

a:focus {
  outline: 2px solid #0056b3;
}`,
        output: `
A blue link with no underline.

- On hover: The color darkens and an underline appears smoothly.
- On keyboard focus: A blue outline appears around the link.
        `,
        proTip: "Always provide a visible `:focus` style for links and other interactive elements. This is crucial for accessibility, as it allows users who navigate with a keyboard to see which element is currently selected.",
        whatsNext: "Lists are great for navigation and organizing content."
      },
      {
        id: "css-lists",
        title: "CSS Lists",
        emoji: "📝",
        description: "HTML lists, both unordered (`<ul>`) and ordered (`<ol>`), can be styled to fit your design. You can change the bullet or number style with `list-style-type`, use an image as a marker with `list-style-image`, or remove the markers entirely, which is common when using lists to build navigation menus.",
        code: `/* Style an unordered list */
ul {
  list-style-type: square;
}

/* Style an ordered list */
ol {
  list-style-type: upper-roman;
}`,
        output: `
Unordered List:
■ First item
■ Second item
■ Third item

Ordered List:
I. First item
II. Second item
III. Third item
        `,
        proTip: "When you remove list styling with `list-style: none`, browsers often still apply default padding or margin. It's good practice to reset these to `0` as well for full control.",
        whatsNext: "Tables are a powerful tool for displaying structured, tabular data."
      },
      {
        id: "css-tables",
        title: "CSS Tables",
        emoji: "📊",
        description: "CSS can greatly improve the readability of HTML tables. You can style borders, headers (`<th>`), and data cells (`<td>`). A common technique is 'zebra-striping'—applying a background color to every other row—which makes large tables much easier to scan.",
        code: `table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
}

th {
  background-color: #4CAF50;
  color: white;
}

/* Zebra-striping for rows */
tr:nth-child(even) {
  background-color: #f2f2f2;
}`,
        output: `
+----------------+----------------+
| [Header 1]     | [Header 2]     |  (Green background)
+----------------+----------------+
| Data A1        | Data A2        |  (White background)
+----------------+----------------+
| [Data B1]      | [Data B2]      |  (Light gray background)
+----------------+----------------+
| Data C1        | Data C2        |  (White background)
+----------------+----------------+
        `,
        proTip: "Use `border-collapse: collapse;` on your `table` element to create clean, single-pixel borders instead of the default double borders.",
        whatsNext: "The `display` property is one of the most fundamental concepts for controlling layout."
      },
      {
        id: "css-display",
        title: "CSS Display",
        emoji: "🖥️",
        description: "The `display` property is one of the most important in CSS, as it dictates how an element renders. Key values include:\n- `block`: Starts on a new line and takes up the full width available (e.g., `<div>`, `<p>`).\n- `inline`: Does not start on a new line and only takes up as much width as necessary (e.g., `<span>`, `<a>`). `width` and `height` have no effect.\n- `inline-block`: Like `inline`, but `width` and `height` are respected.\n- `none`: The element is completely removed from the page.",
        code: `span { display: inline; }
div { display: block; }
button { display: inline-block; width: 150px; }
.hidden-element { display: none; }`,
        output: `
DIV (block):
+--------------------------------------+
| Takes up the full width              |
+--------------------------------------+

SPAN (inline): This is some text and [this is a span] right in the middle.

BUTTON (inline-block): 
[Button 1] [+--150px--+] [Button 2]
(Sits inline but respects width/height)

.hidden-element: [This element would be completely invisible]
        `,
        proTip: "Modern layouts are built almost exclusively with `display: flex` (Flexbox) and `display: grid` (Grid). They provide powerful and flexible ways to align and distribute items.",
        whatsNext: "Positioning elements precisely is crucial for creating layered designs."
      },
      {
        id: "css-position",
        title: "CSS Position",
        emoji: "📍",
        description: "The `position` property specifies the type of positioning method used for an element, which works in tandem with the `top`, `right`, `bottom`, and `left` properties. \n- `static`: The default value. Element is in the normal document flow.\n- `relative`: Element is positioned relative to its normal position. It also becomes a positioning context for absolute children.\n- `absolute`: Element is removed from the normal flow and positioned relative to its nearest *positioned* ancestor.\n- `fixed`: Element is positioned relative to the viewport (the browser window). It stays in the same place even when scrolled.\n- `sticky`: A hybrid of relative and fixed. It toggles between the two based on the user's scroll position.",
        code: `.relative-box { position: relative; left: 30px; }
.absolute-box { position: absolute; top: 10px; right: 10px; }
.fixed-banner { position: fixed; bottom: 0; width: 100%; }
.sticky-header { position: sticky; top: 0; }`,
        output: `
+--------------------------------[absolute-box]+
| Viewport                                     |
|                                              |
|   [Original Spot]--->[relative-box (shifted)]|
|                                              |
|                                [sticky-header]|<- Stays here when scrolling
|                                              |
+----------------------------------------------+
|[fixed-banner stays at the bottom of the screen]|
+----------------------------------------------+
        `,
        proTip: "For `position: absolute` to work as expected, its parent element needs a position value other than `static` (e.g., `position: relative`). This is a very common source of layout bugs.",
        whatsNext: "When elements overlap, `z-index` controls their stacking order."
      },
      {
        id: "css-zindex",
        title: "CSS Z-Index",
        emoji: "🔢",
        description: "The `z-index` property specifies the stack order of a positioned element. An element with a greater stack order is always in front of an element with a lower stack order. `z-index` only works on elements with a `position` value other than `static` (e.g., `relative`, `absolute`, `fixed`, or `sticky`).",
        code: `.behind {
  position: absolute;
  z-index: 1; /* Lower value */
  background: red;
}
.in-front {
  position: absolute;
  z-index: 2; /* Higher value */
  background: blue;
}`,
        output: `
+-----------------+
|      (Red Box)  |
|   +-------------+----+
|   | (Blue Box)       |
+---|                  |
    |   is in front    |
    +------------------+
        `,
        proTip: "You can use negative `z-index` values to place an element behind its parent, but be careful as this can make the element unclickable.",
        whatsNext: "What happens when content is too big for its container? `overflow` has the answer."
      },
      {
        id: "css-overflow",
        title: "CSS Overflow",
        emoji: "🌊",
        description: "The `overflow` property controls how content is handled when it extends beyond an element's box. \n- `visible`: Default. The overflow is not clipped and renders outside the element's box. \n- `hidden`: The overflow is clipped, and the rest of the content is invisible. \n- `scroll`: The overflow is clipped, but scrollbars are added to see the rest of the content. \n- `auto`: Adds scrollbars only when necessary.",
        code: `.box.hidden { overflow: hidden; }
.box.scrollable { overflow: scroll; }
.box.automatic { overflow: auto; }`,
        output: `
hidden:
+----------------+
| This text is   |
| very long and  |
+----------------+

scrollable:
+----------------+↕
| This text is   |
| very long and..|
+----------------+

auto (with overflow):
+----------------+↕
| This text is   |
| very long and..|
+----------------+
(auto without overflow would have no scrollbar)
        `,
        proTip: "Use `overflow: auto;` instead of `overflow: scroll;` in most cases. It provides a cleaner look by only showing scrollbars when they are actually needed.",
        whatsNext: "Floating elements was a classic way to create layouts, and is still useful today."
      },
      {
        id: "css-float",
        title: "CSS Float",
        emoji: "🏊",
        description: "The `float` property is used for positioning and formatting content, such as letting text wrap around an image. An element can be floated to the left or right. Floated elements are taken out of the normal document flow, which can cause their container to collapse. This is why the `clear` property is often used with `float`.",
        code: `img.profile-pic {
  float: left;
  margin-right: 15px;
}`,
        output: `
+-------+ This is a paragraph of text that
|       | will wrap around the floated
| Image | image. The text flows into the
|       | available space to the right of
+-------+ the image, creating a layout
often seen in newspapers and magazines.
        `,
        proTip: "While `float` was historically used for entire page layouts, modern CSS has better tools like Flexbox and Grid. Today, `float` is best used for its original purpose: wrapping text around images.",
        whatsNext: "Clearing floats is an essential technique for controlling layouts that use the `float` property."
      },
      {
        id: "css-clear",
        title: "CSS Clear",
        emoji: "🧹",
        description: "The `clear` property specifies what should happen with the element that is next to a floating element. It can take values of `left`, `right`, or `both`. A common problem is that a container with only floated children will have a height of zero. The 'clearfix hack' is a popular technique to solve this by using a pseudo-element to clear the float after the content.",
        code: `.footer {
  clear: both;
}

/* The modern 'clearfix' hack */
.container::after {
  content: "";
  display: block;
  clear: both;
}`,
        output: `
+-------+ Some text next to a float.
| Float |
+-------+

+-------------------------------------+
| This footer element (with clear:    |
| both) is forced to move below the   |
| floated element above.              |
+-------------------------------------+
        `,
        proTip: "An even simpler way to contain floats is to set `display: flow-root` on the parent container. This creates a new block formatting context, forcing it to contain its floated children.",
        whatsNext: "Let's dive into Flexbox, a powerful modern tool for layout design."
      },
      {
        id: "css-flexbox",
        title: "CSS Flexbox",
        emoji: "🤸",
        description: "The Flexible Box Layout Module, or Flexbox, is a one-dimensional layout model that offers powerful capabilities for distributing space and aligning items. A flex container (`display: flex`) can control the alignment, direction, and order of its children (flex items) with properties like `justify-content` (for horizontal alignment) and `align-items` (for vertical alignment).",
        code: `.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}`,
        output: `
+---------------------------------------------+
|                                             |
|   +-------+   +-------+   +-------+   |     |
|   |       |   |       |   |       |   | Vertically
|   | Item1 |   | Item2 |   | Item3 |   | Centered
|   |       |   |       |   |       |   |     |
|   +-------+   +-------+   +-------+   V     |
|                                             |
|   <--Equally Spaced Horizontally-->         |
|                                             |
+---------------------------------------------+
        `,
        proTip: "Use Flexbox for one-dimensional layouts (a single row or column). For more complex, two-dimensional layouts (rows AND columns), CSS Grid is the better tool.",
        didYouKnow: "Flexbox made vertical centering trivial with `align-items: center;`. This was notoriously difficult to achieve with older CSS techniques."
      },
      {
        id: "css-grid",
        title: "CSS Grid",
        emoji: "🔲",
        description: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex, responsive layouts straightforward. You define a grid container with `display: grid` and then specify the structure with properties like `grid-template-columns` and `grid-template-rows`.",
        code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.item-1 {
  grid-column: 1 / 3; /* Span 2 columns */
}`,
        output: `
(gap) = 20px space
+-----------------+---+-----------+
|                 |gap|           |
|     Item 1      |   |  Item 2   |
| (spans 2 cols)  |   |           |
+-----------------+- -+-----------+
|                 |gap|           |
|      Item 3     |   |  Item 4   |
|                 |   |           |
+-----------------+---+-----------+
        `,
        proTip: "The `fr` unit (fractional unit) is unique to CSS Grid and is incredibly powerful. It allows you to distribute available space proportionally among grid tracks.",
        whatsNext: "Media queries are the key to making your Flexbox and Grid layouts responsive."
      },
      {
        id: "css-mediaqueries",
        title: "CSS Media Queries",
        emoji: "📱",
        description: "Media queries are a cornerstone of responsive web design. They allow you to apply CSS rules only when certain conditions are met, such as the viewport width being above or below a certain size. This enables you to create different layouts for different devices like phones, tablets, and desktops.",
        code: `/* Default styles (Mobile-First approach) */
.container { flex-direction: column; }

/* Styles for tablets and larger */
@media (min-width: 768px) {
  .container { flex-direction: row; }
}`,
        output: `
Narrow Screen (< 768px):
+-------+
| Item 1|
+-------+
| Item 2|
+-------+

Wide Screen (>= 768px):
+-------+ +-------+
| Item 1| | Item 2|
+-------+ +-------+
        `,
        proTip: "Adopting a 'mobile-first' strategy is highly recommended. Design your base styles for the smallest screens, then use `min-width` media queries to add complexity for larger screens.",
        whatsNext: "Responsive design is a mindset that combines several CSS techniques."
      },
      {
        id: "css-responsive",
        title: "CSS Responsive",
        emoji: "📏",
        description: "Responsive Web Design (RWD) is an approach that makes your web pages look good on all devices. It uses a combination of flexible grids and layouts (like Flexbox/Grid with relative units), images (`max-width: 100%`), and CSS media queries. A crucial first step is adding the viewport meta tag to your HTML to control the page's dimensions and scaling.",
        code: `img {
  max-width: 100%;
  height: auto;
}`,
        output: "An image that will always fit within its container's width, shrinking as needed on smaller screens without becoming distorted.",
        proTip: "Test your responsive designs not just by resizing the browser window, but by using the device emulation tools available in all modern browsers' developer tools.",
        whatsNext: "CSS Variables make managing values in responsive designs much easier."
      },
      {
        id: "css-variables",
        title: "CSS Variables",
        emoji: "🔧",
        description: "CSS variables, officially called Custom Properties, allow you to define reusable values in your stylesheet. They are defined with a double-hyphen prefix (e.g., `--main-color`) and accessed using the `var()` function. They are extremely useful for theming, maintaining consistency, and simplifying responsive design.",
        code: `:root {
  --primary-color: #3498db;
}
body {
  color: var(--primary-color);
}`,
        output: `
All text inside the <body> will be a specific shade of blue (#3498db), as defined by the --primary-color variable. If you change the variable, all text changes color instantly.
        `,
        proTip: "Use CSS variables for values that you reuse often, like brand colors, font sizes, and spacing units. This makes global changes incredibly easy—just update the variable once.",
        whatsNext: "Animations can bring your design to life and provide valuable user feedback."
      },
      {
        id: "css-animations",
        title: "CSS Animations",
        emoji: "🎬",
        description: "CSS animations make it possible to animate transitions from one CSS style configuration to another. An animation is defined using the `@keyframes` at-rule, which specifies the intermediate steps. This animation is then applied to an element using the `animation` property and its sub-properties.",
        code: `@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.element-to-animate {
  animation: fadeIn 1s ease-out;
}`,
        output: `
An element starts invisible and 20px lower than its final position. Over 1 second, it will fade into view while moving up to its final spot.
        `,
        proTip: "For the smoothest performance, limit your animations to the `transform` and `opacity` properties. Animating these properties can be offloaded to the GPU and avoids costly browser repaints.",
        whatsNext: "Transitions are a simpler way to animate property changes between states."
      },
      {
        id: "css-transitions",
        title: "CSS Transitions",
        emoji: "⏩",
        description: "CSS transitions provide a way to control the speed of property changes when an element changes state (e.g., on `:hover` or `:focus`). Instead of happening instantly, the change occurs smoothly over a specified duration, creating a more pleasant user experience.",
        code: `button {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}`,
        output: `
A blue button. When you hover your mouse over it, its background color smoothly animates to a darker blue over 0.3 seconds, instead of changing instantly.
        `,
        proTip: "You can transition multiple properties by separating them with a comma in the `transition` property. Using `transition: all 0.3s;` is easy but can have performance implications if you're transitioning layout properties.",
        whatsNext: "Transforms allow you to manipulate elements in 2D and 3D space."
      },
      {
        id: "css-transforms",
        title: "CSS Transforms",
        emoji: "🔄",
        description: "The `transform` property lets you modify the coordinate space of an element. You can rotate, scale, skew, or translate an element in 2D or 3D space without affecting the layout of other elements. This is ideal for animations and interactive UI effects.",
        code: `.box:hover {
  transform: translateX(50px) rotate(20deg) scale(1.2);
}`,
        output: `
On hover, a box will:
1. Move 50px to the right.
2. Rotate 20 degrees clockwise.
3. Grow to 120% of its original size.
(All at the same time)
        `,
        proTip: "Use `transform: translate(-50%, -50%)` in combination with `position: absolute; top: 50%; left: 50%;` to perfectly center an element of any size within its parent container.",
        whatsNext: "Shadows can add depth and a sense of realism to your elements."
      },
      {
        id: "css-shadows",
        title: "CSS Shadows",
        emoji: "🌑",
        description: "CSS provides two types of shadow properties: `box-shadow` for element boxes and `text-shadow` for text. `box-shadow` can create both outer and inner shadows, and you can apply multiple shadows to a single element to create complex depth effects.",
        code: `.box {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
}

h1 {
  text-shadow: 2px 2px 4px #888;
}`,
        output: `
      +-----------------+
      |                 |
      |       BOX       |
      |                 |
      +-----------------+.........
       ........................... (A soft, blurry shadow)

      [Text with a subtle drop shadow]
        `,
        proTip: "Create more realistic, subtle shadows by using a low-opacity color (like `rgba(0,0,0,0.1)`) and a larger blur radius. You can layer multiple `box-shadow` properties (separated by commas) for a softer, more natural look.",
        whatsNext: "Filters let you apply graphical effects like blur and color shifting."
      },
      {
        id: "css-filters",
        title: "CSS Filters",
        emoji: "🔍",
        description: "The `filter` property lets you apply graphical effects like blur, brightness, contrast, and saturation to an element. Filters are commonly used on images to create interesting visual treatments without needing an image editor. Multiple filters can be applied at once.",
        code: `img:hover {
  filter: grayscale(100%) brightness(1.2);
}

.blur { filter: blur(5px); }`,
        output: `
img: A color image that turns black-and-white and slightly brighter on hover.
.blur: An element that appears blurry, as if looking through frosted glass.
        `,
        proTip: "The `filter: drop-shadow()` function is different from `box-shadow`. `drop-shadow` respects the transparency of an image (e.g., a PNG), creating a shadow for the actual content shape, not the rectangular box.",
        whatsNext: "Gradients can create stunning, modern backgrounds."
      },
      {
        id: "css-gradients",
        title: "CSS Gradients",
        emoji: "🌅",
        description: "CSS gradients let you display smooth transitions between two or more specified colors. There are three main types: `linear-gradient()` (transitions along a straight line), `radial-gradient()` (transitions from a center point outwards), and `conic-gradient()` (transitions around a center point). Gradients are treated as images and can be used anywhere an image can, like in `background-image`.",
        code: `.linear {
  background-image: linear-gradient(to right, #3498db, #2c3e50);
}

.radial {
  background-image: radial-gradient(circle, #f1c40f, #e67e22);
}`,
        output: `
Linear Gradient:
+------------------------------------------+
| (Blue) >>>>>>>>>> (Dark Blue)            |
+------------------------------------------+

Radial Gradient:
+------------------------------------------+
|      (Orange)                            |
|  (Yellow)   (Orange)                     |
|      (Orange)                            |
+------------------------------------------+
        `,
        proTip: "You can create striped patterns by setting adjacent color stops to the same position. For example, `linear-gradient(red 50%, blue 50%)` creates a hard line between red and blue.",
        whatsNext: "Cursors can be customized to provide better user experience feedback."
      },
      {
        id: "css-cursors",
        title: "CSS Cursors",
        emoji: "🖱️",
        description: "The `cursor` property specifies the mouse cursor to be displayed when the mouse pointer is over an element. While `pointer` is common for clickable items, there are many other options like `wait`, `help`, `move`, and `not-allowed` that provide semantic feedback to the user. You can even use your own custom image for a cursor.",
        code: `button { cursor: pointer; }
.draggable { cursor: move; }
.disabled { cursor: not-allowed; }`,
        output: `
- button: The cursor changes from an arrow (↑) to a hand (👆).
- .draggable: The cursor changes to a four-way arrow (✥).
- .disabled: The cursor changes to a circle with a slash (🚫).
        `,
        proTip: "When using custom cursors, always provide a fallback keyword (like `pointer` or `auto`) in case the image fails to load. Keep custom cursor images small for better performance.",
        whatsNext: "Even the browser's scrollbar can be styled for a more cohesive design."
      },
      {
        id: "css-scrollbar",
        title: "CSS Scrollbar",
        emoji: "🖲️",
        description: "While not part of the official CSS standard, most modern browsers provide ways to style scrollbars. Firefox uses the `scrollbar-width` and `scrollbar-color` properties. WebKit-based browsers (Chrome, Safari, Edge) use the `::-webkit-scrollbar` pseudo-element and related pseudo-elements to style the track, thumb, and other parts.",
        code: `/* Works on Chrome, Edge, Safari */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: #888; }`,
        output: `
Instead of the default browser scrollbar, a scrollable element will show a thinner, custom-colored scrollbar. The track (the background) will be light gray, and the thumb (the part you drag) will be a darker gray.
        `,
        proTip: "When styling scrollbars, ensure they remain high-contrast and easy to use. Overly subtle or thin scrollbars can be an accessibility issue for some users.",
        whatsNext: "Go beyond web-safe fonts by loading your own custom fonts."
      },
      {
        id: "css-customfonts",
        title: "CSS Custom Fonts",
        emoji: "🆕",
        description: "The `@font-face` at-rule allows you to load and use your own font files on a web page. This gives you complete creative control over your typography. You need to provide the font file(s) and define a `font-family` name that you can then use throughout your CSS. The `font-display` property is important for controlling how the font renders while it's loading.",
        code: `@font-face {
  font-family: 'MyCustomFont';
  src: url('MyCustomFont.woff2') format('woff2');
}

body {
  font-family: 'MyCustomFont', sans-serif;
}`,
        output: `
All text on the page will be rendered using the 'MyCustomFont' font file, giving the page a unique typographic style that isn't reliant on the fonts installed on the user's computer.
        `,
        proTip: "Always provide font files in `woff2` format, as it offers the best compression. Include `woff` as a fallback for older browsers. Use services like Google Fonts to easily embed a wide variety of custom fonts without hosting them yourself.",
        whatsNext: "Icons are a universal language that can enhance your UI."
      },
      {
        id: "css-icons",
        title: "CSS Icons",
        emoji: "🎯",
        description: "Icons are a vital part of modern user interfaces. There are two primary methods for including them: Icon Fonts (like Font Awesome) and SVG (Scalable Vector Graphics) icons. SVGs are now the recommended approach as they are more performant, accessible, and can be styled directly with CSS for things like color and stroke width.",
        code: `<!-- Method 1: Font Awesome Icon Font -->
<i class="fas fa-camera"></i>

<!-- Method 2: Inline SVG (Recommended) -->
<svg class="icon-camera" ... > ... </svg>`,
        output: `
A small camera icon (📷) appears on the page. Using SVG allows this icon to be sharp at any size and its color can be changed easily with CSS.
        `,
        proTip: "When using inline SVGs, set `fill: currentColor;` to make the icon's color match the text color of its parent element. This makes it easy to have icons that match the color of buttons or links.",
        whatsNext: "Create newspaper-like layouts with CSS Multi-Column."
      },
      {
        id: "css-multicolumn",
        title: "CSS Multi-Column",
        emoji: "📰",
        description: "The CSS Multi-column Layout Module provides a way to flow content into multiple columns, like in a newspaper. You can control the number of columns (`column-count`), the width of columns (`column-width`), the gap between them (`column-gap`), and even add a decorative rule between them (`column-rule`).",
        code: `.newspaper {
  column-count: 3;
  column-gap: 40px;
  column-rule: 2px solid #eee;
}`,
        output: `
A long block of text will automatically flow into three vertical columns.

+----------+ | +----------+ | +----------+
| Text     | | | continues| | | here.    |
| starts   | | | here...  | | | And so   |
| here.    | | |          | | | on.      |
+----------+ | +----------+ | +----------+
             ^
          (A decorative line runs between columns)
        `,
        proTip: "To prevent elements like images or headings from being split across two columns, apply `break-inside: avoid;` to them. This greatly improves readability.",
        whatsNext: "The `clamp()` function provides a modern way to create fluidly responsive values."
      },
      {
        id: "css-clamp",
        title: "CSS Clamp",
        emoji: "📏",
        description: "The `clamp()` CSS function is a powerful tool for fluid design. It 'clamps' a value between an upper and lower bound. It takes three arguments: a minimum value, a preferred value, and a maximum allowed value. The preferred value is often a responsive unit like `vw`, allowing a property like `font-size` or `width` to scale with the viewport, but not become too small or too large.",
        code: `h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}`,
        output: `
The font size of the <h1> is fluid.
- On a small phone, it stops shrinking at 2rem.
- On a huge monitor, it stops growing at 4rem.
- In between, it scales smoothly with the screen width (5vw).
        `,
        proTip: "`clamp()` is especially powerful for 'fluid typography', allowing headings to scale smoothly between mobile and desktop views without complex media queries.",
        whatsNext: "Create stunning visual effects with `mix-blend-mode`."
      },
      {
        id: "css-mix-blend",
        title: "CSS Mix Blend",
        emoji: "🧪",
        description: "The `mix-blend-mode` property sets how an element's content should blend with the content of the element's parent and background. It brings Photoshop-like blending capabilities directly into CSS, allowing for creative effects with overlapping text, images, and colored backgrounds. Common modes include `multiply`, `screen`, and `overlay`.",
        code: `.container h1 {
  color: white;
  mix-blend-mode: screen;
}`,
        output: `
Imagine white text over a colorful photo. With 'screen' blend mode, the text won't just be white; it will take on the colors of the photo behind it, creating a vibrant, "knockout" text effect.
        `,
        proTip: "Experiment with `mix-blend-mode` on text that overlaps images to create dynamic and visually interesting header effects. The results can be quite striking.",
        whatsNext: "The `backdrop-filter` property takes blending to the next level."
      },
      {
        id: "css-backdrop",
        title: "CSS Backdrop",
        emoji: "🪟",
        description: "The `backdrop-filter` CSS property lets you apply graphical effects (like `blur` or `grayscale`) to the area *behind* an element. To see the effect, the element itself must be made at least partially transparent. This is commonly used to create 'frosted glass' effects for modal dialogs, headers, or sidebars.",
        code: `header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}`,
        output: `
A semi-transparent header is fixed at the top of the page. As you scroll content behind it, the content becomes blurred, as if viewed through frosted glass.
        `,
        proTip: "`backdrop-filter` is performance-intensive, so use it sparingly. It creates a modern, layered look that is very popular in UI design today.",
        whatsNext: "Create smooth, app-like scrolling experiences with CSS Scroll Snap."
      },
      {
        id: "css-scrollsnap",
        title: "CSS Scroll Snap",
        emoji: "📸",
        description: "CSS Scroll Snap provides a way to control the scrolling experience by 'snapping' the viewport to certain points within a scrollable container. This is perfect for creating image carousels, full-page slides, or any interface where you want the user to land precisely on an element after scrolling.",
        code: `.scroll-container {
  scroll-snap-type: x mandatory;
}
.scroll-item {
  scroll-snap-align: start;
}`,
        output: `
Imagine a horizontal image gallery. When you scroll, instead of stopping at an awkward in-between point, the scroll view will automatically "snap" to the beginning of the next image, providing a clean, precise user experience.
        `,
        proTip: "Use `scroll-padding` on the scroll container to add an offset, ensuring that snapped items don't appear right at the edge of the container or underneath a fixed header.",
        whatsNext: "Break out of the box with CSS Shapes."
      },
      {
        id: "css-shapes",
        title: "CSS Shapes",
        emoji: "🔷",
        description: "CSS Shapes allow you to define a geometric shape that inline content (like text) can wrap around. Instead of text flowing around a rectangular box, it can flow around a circle, an ellipse, or a custom polygon. This is typically used with the `shape-outside` property on a floated element.",
        code: `.floated-image {
  float: left;
  shape-outside: circle(50%);
  clip-path: circle(50%);
}`,
        output: `
       , - ~ ~ ~ - ,  This text will wrap
    , '             ' , perfectly around the
  ,   (Circular Img)    , circular shape of the
 ,                       , image, creating a much
  ,                   , more organic and visually
    ,               ,   pleasing layout than
      ' - , _ , - '     wrapping a rectangle.
        `,
        proTip: "Browser developer tools often have a shape editor that lets you visually create and modify `shape-outside` and `clip-path` values, which is much easier than writing polygon coordinates by hand.",
        whatsNext: "Masks provide another powerful way to control element visibility."
      },
      {
        id: "css-masks",
        title: "CSS Masks",
        emoji: "🎭",
        description: "CSS masking provides a way to control the visibility of an element by using another image or gradient as a luminance or alpha mask. Where the mask image is transparent or black, the element will be hidden. Where the mask is opaque or white, the element will be visible. This allows for far more complex shapes than `clip-path`.",
        code: `.masked-element {
  background: linear-gradient(to right, red, blue);
  mask-image: url('star-mask.svg');
}`,
        output: `
Imagine a rectangle with a red-to-blue gradient. If you apply a star-shaped mask, the gradient will only be visible in the shape of a star. The rest of the rectangle becomes transparent.
        `,
        proTip: "You can create animated text-reveal effects by using a gradient as a `mask-image` and animating its `mask-position`.",
        whatsNext: "The `clip-path` property is a simpler way to create custom shapes."
      },
      {
        id: "css-clip-path",
        title: "CSS Clip-Path",
        emoji: "✂️",
        description: "The `clip-path` property creates a clipping region that defines what portion of an element is visible. The part inside the region is shown, while the part outside is hidden. You can use basic shapes like `circle()` or `inset()`, or create complex custom shapes with `polygon()`.",
        code: `.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}`,
        output: `
A regular square element will be "clipped" so that it appears as a triangle.
          +
         / \\
        /   \\
       /     \\
      +-------+
        `,
        proTip: "The `clip-path` property is animatable! You can create stunning transitions by changing the `clip-path` value between states, as long as the number of points in a polygon remains the same.",
        whatsNext: "The `calc()` function is a must-know for creating dynamic and responsive layouts."
      },
      {
        id: "css-calc",
        title: "CSS Calc()",
        emoji: "🧮",
        description: "The `calc()` CSS function lets you perform calculations when specifying property values. Its real power comes from being able to mix different units, such as combining a percentage-based width with a fixed pixel subtraction. This is incredibly useful for creating layouts that need to account for fixed-size elements like gutters or sidebars.",
        code: `.main-content {
  width: calc(100% - 250px);
}`,
        output: `
A layout with a fixed 250px sidebar. The main content area will responsively fill the remaining space, whatever the screen size.

+-----------+--------------------------------+
|           |                                |
| Sidebar   |   Main Content (100% - 250px)  |
| (250px)   |                                |
+-----------+--------------------------------+
        `,
        proTip: "You can use all four basic arithmetic operators: `+`, `-`, `*`, and `/`. Remember to put a space around the `+` and `-` operators.",
        whatsNext: "Now, let's dive into some more advanced CSS concepts."
      },
    ],
  },
  {
    group: "CSS Advanced",
    topics: [
      {
        id: "css-advanced-selectors",
        title: "Advanced Selectors",
        emoji: "🕵️",
        description: "Beyond basic selectors, CSS offers powerful advanced selectors to target elements with precision. Attribute selectors target elements based on the presence or value of their HTML attributes. Combinators allow you to target elements based on their relationship to other elements (e.g., children, siblings).",
        code: `a[target="_blank"] { ... }
nav > ul > li { ... }
h1 + p { ... }`,
        output: `
- a[target="_blank"]: Selects only links that open in a new tab.
- nav > ul > li: Selects only list items that are DIRECT children of a <ul> which is a DIRECT child of a <nav>.
- h1 + p: Selects only the single paragraph that IMMEDIATELY follows a heading.
        `,
        proTip: "Attribute selectors like `[aria-current='page']` are excellent for styling the 'active' link in a navigation menu in an accessible way.",
        whatsNext: "Pseudo-classes let you style elements based on their state or position."
      },
      {
        id: "css-pseudo-classes",
        title: "Pseudo-classes",
        emoji: "🎭",
        description: "A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). They let you apply styles that aren't based on the document tree, like user actions (`:hover`), structural position (`:nth-child`), or input states (`:checked`).",
        code: `li:nth-child(3) { font-weight: bold; }
tr:nth-child(even) { background-color: #f2f2f2; }
p:not(.special) { color: grey; }`,
        output: `
- li:nth-child(3): The 3rd item in any list will be bold.
- tr:nth-child(even): The 2nd, 4th, 6th, etc. rows of a table get a gray background.
- p:not(.special): All paragraphs that DO NOT have the class "special" will have gray text.
        `,
        proTip: "The `:nth-child()` pseudo-class is incredibly versatile. You can use formulas like `(2n+1)` for odd elements or `(n+3)` to select from the third element onwards.",
        whatsNext: "Pseudo-elements let you style parts of an element that aren't in the DOM."
      },
      {
        id: "css-pseudo-elements",
        title: "Pseudo-elements",
        emoji: "👻",
        description: "A pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, `::first-line` can be used to style the first line of a paragraph, and `::before` and `::after` can be used to insert generated content before or after an element's content.",
        code: `p::first-letter { font-size: 2em; }
blockquote::before { content: "“"; }`,
        output: `
   T his is a paragraph where the
   first letter is much larger,
   creating a "drop cap" effect.

 “ This is a blockquote with a
   large decorative quote mark added
   before the content via CSS.
        `,
        proTip: "The `::before` and `::after` pseudo-elements are essential for many modern CSS techniques, from creating tooltips and custom shapes to implementing the clearfix hack.",
        whatsNext: "Specificity is the algorithm that determines which CSS styles are applied to an element."
      },
      {
        id: "css-specificity",
        title: "Specificity & Cascade",
        emoji: "🏆",
        description: "Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. It's a weighting system. If two selectors apply to the same element, the one with higher specificity wins. The hierarchy is roughly: Inline Styles > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements. The 'Cascade' refers to the fact that style rules 'cascade' down, with source order and importance also playing a role.",
        code: `#my-element { color: red; } /* High specificity */
.my-class { color: blue; }  /* Medium specificity */
div { color: green; }       /* Low specificity */

<div id="my-element" class="my-class">Text</div>`,
        output: `
The text will be RED.
Even though rules for blue and green also apply, the ID selector (#my-element) has the highest specificity and therefore wins.
        `,
        proTip: "Avoid using IDs in selectors for general styling, as their high specificity can make them difficult to override. Prefer using classes and keeping specificity as low and flat as possible.",
        whatsNext: "The `!important` rule is a way to break the cascade and override specificity."
      },
      {
        id: "css-important",
        title: "!important",
        emoji: "❗",
        description: "The `!important` rule in CSS is used to add more importance to a property than normal. In fact, if you use the `!important` rule, it will override ALL previous styling rules for that specific property on that element, regardless of specificity. It is a powerful tool, but it should be used sparingly as it disrupts the natural cascade and can make debugging very difficult.",
        code: `#my-id { color: blue; }
p {
  color: red !important;
}`,
        output: `
The paragraph text will be RED.
The \`!important\` rule overrides the more specific ID selector, which would normally make the text blue. Use with caution!
  `,
        proTip: "Avoid using `!important` in your own stylesheets. Its main legitimate use case is to override styles from third-party libraries or in user-agent stylesheets for accessibility purposes.",
        whatsNext: "Let's explore some tips for writing performant CSS."
      },
      {
        id: "css-performance",
        title: "Performance Tips",
        emoji: "⚡",
        description: "Efficient CSS leads to faster page rendering and a smoother user experience. Key performance considerations include: \n- Minimizing reflows and repaints by animating `transform` and `opacity` instead of properties like `width` or `left`. \n- Keeping selectors simple and avoiding overly complex ones that the browser has to work hard to match. \n- Using the `will-change` property as a hint to the browser about upcoming transformations, but using it sparingly.",
        code: `/* GOOD: Animating transforms is fast */
.modal {
  transition: transform 0.5s;
}`,
        output: null,
        proTip: "Use browser developer tools like the Performance tab in Chrome or Firefox to record and analyze rendering performance. You can identify which parts of your CSS are causing performance bottlenecks.",
        whatsNext: "Good CSS is also accessible CSS. Let's look at accessibility."
      },
      {
        id: "css-accessibility",
        title: "CSS & Accessibility (A11y)",
        emoji: "♿",
        description: "CSS plays a huge role in making websites accessible to all users, including those with disabilities. Key considerations include: \n- **Color Contrast**: Ensuring text is readable against its background. \n- **Focus Indicators**: Making sure interactive elements have a clear `:focus` state for keyboard users. \n- **Hiding Content**: Using the correct technique to hide content visually while keeping it available to screen readers. \n- **Respecting User Preferences**: Using media queries like `prefers-reduced-motion`.",
        code: `a:focus-visible {
  outline: 3px solid dodgerblue;
}
.visually-hidden { ... }`,
        output: `
- When a user navigates to a link using the Tab key, a highly visible blue outline appears around it.
- An element with the class '.visually-hidden' is not visible on screen, but a screen reader will still read its content aloud.
        `,
        proTip: "Use the `:focus-visible` pseudo-class to show focus rings only for keyboard navigation, preventing them from appearing on mouse clicks for a cleaner look without sacrificing accessibility.",
        whatsNext: "Following best practices will make your CSS scalable and maintainable."
      },
      {
        id: "css-bestpractices",
        title: "Best Practices",
        emoji: "🌟",
        description: "Writing good CSS is about more than just making things look right; it's about writing code that is clean, maintainable, and scalable. Best practices include: \n- **Using a Naming Convention**: Methodologies like BEM (Block, Element, Modifier) help create logical, self-documenting class names. \n- **Organizing Files**: Splitting your CSS into smaller, component-based files. \n- **Commenting**: Explaining complex or non-obvious code. \n- **Linting**: Using a tool like Stylelint to enforce consistency and catch errors.",
        code: `/* BEM Naming Convention */
.card {}
.card__title {}
.card--featured {}`,
        output: null,
        proTip: "Adopt a consistent code style guide for your projects regarding things like indentation, property order, and commenting. This makes it much easier for multiple developers to work on the same codebase.",
        whatsNext: "Even with best practices, you'll need to know how to debug CSS."
      },
      {
        id: "css-debugging",
        title: "Debugging CSS",
        emoji: "🪲",
        description: "Debugging CSS can be tricky, but modern browsers provide powerful tools to help. The most essential tool is the browser's Element Inspector. It allows you to view and edit CSS live, see the box model, understand specificity, and trace which styles are being applied from which rules. Another simple but effective trick is to add a conspicuous `outline` to elements to see their actual size and position.",
        code: `* {
  outline: 1px solid red;
}`,
        output: `
+----------------------------------------+
| Every single element on the page, from |
| +-------+  to  +-----------+           |
| |buttons|      |paragraphs| gets a red |
| +-------+      +-----------+           |
| outline, letting you see its exact     |
| boundaries and how it affects layout.  |
+----------------------------------------+
        `,
        proTip: "When a style isn't applying, the first thing to check in the inspector is if it's being overridden by a more specific selector. The browser will show the overridden style with a strikethrough.",
        whatsNext: "Let's look at some classic CSS hacks and tricks."
      },
      {
        id: "css-hacks",
        title: "CSS Hacks & Tricks",
        emoji: "🧙",
        description: "CSS hacks are bits of code used to target specific browser versions or to overcome rendering bugs. In the past, they were common for dealing with inconsistencies in browsers like Internet Explorer. While modern, standards-compliant browsers have made most hacks obsolete, it's useful to recognize them in older codebases. They are generally considered a last resort and bad practice in modern development.",
        code: `/* A modern alternative: Feature Queries */
@supports (display: grid) {
  /* These styles only apply if the browser supports CSS Grid */
}`,
        output: null,
        proTip: "A modern alternative to browser hacks is the `@supports` at-rule (feature query), which allows you to apply styles only if the browser supports a specific CSS feature. For example, `@supports (display: grid) { ... }`.",
        whatsNext: "Let's find some inspiration for your next project.",
        didYouKnow: "The 'Box Model Hack' was one of the most famous early hacks, used to make Internet Explorer 5 behave more like other browsers regarding the box model. The `box-sizing` property made this hack obsolete."
      },
      {
        id: "css-inspiration",
        title: "CSS Inspiration",
        emoji: "💡",
        description: "The best way to get better at CSS is to see what's possible and try to recreate it. There are many websites dedicated to showcasing innovative and beautiful web design and CSS effects. Exploring these sites can spark new ideas and expose you to new techniques.",
        code: `.inspired-button:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  transform: translateY(-4px);
}`,
        output: `

A button that appears to lift off the page when you hover over it. Its shadow becomes larger and it moves up slightly, creating a pleasing 3D effect.
        `,
        proTip: "When you find a design you like, don't just copy the code. Challenge yourself to rebuild it from scratch. This process of deconstruction and reconstruction is one of the most effective ways to learn.",
        whatsNext: "Congratulations! You've covered a huge range of CSS topics. The journey to mastery is ongoing. Keep building, keep experimenting, and keep learning.",
        didYouKnow: "The CSS Zen Garden (csszengarden.com), launched in 2003, played a pivotal role in promoting web standards by showing thousands of designers that a single HTML file could look radically different just by switching the CSS file."
      },
    ],
  },
];