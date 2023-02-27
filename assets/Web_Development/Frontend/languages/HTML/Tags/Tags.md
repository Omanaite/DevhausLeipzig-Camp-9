
 Each part of a website, including text, images, and other elements, can be described by [[Tags]] . ^8e00a8

## Opening and Closing Tags

Every HTML Element is built by using a tag
The structure of a tag is:
```html
<tagname>...</tagname>
```
We can also use self-closing tags if the tag has no content or no children:
```html
<self-closing-tag />
```
A tag can also have [[HTML - Attributes|Attributes]]
```html
<tagname attributeName="value">...</tagname>
```

## Nested HTML Tags

HTML Tags can be nested to create more complex structures. Here is an example:

```HTML
<body>   
	<h1>Heading</h1>   
	<p>This is a paragraph with <strong>bold text</strong>.</p> 
</body>
```

In this example, the `<body>` tag is the parent container, and the `<h1>` and `<p>` tags are the nested elements. This nesting is important to correctly represent the structure and meaning of the content on a website.

---

## Understanding Parent, Child, and Sibling Elements in HTML

In HTML, elements can be related to each other in a parent-child relationship or as siblings.

### ## Parent Elements

A parent element is an HTML element that contains other HTML elements. For example, in the following code, the `<body>` tag is the parent element, and the `<h1>` and `<p>` tags are the child elements:

```HTML
<body>   
	<h1>Heading</h1>   
	<p>This is a paragraph.</p> 
</body>
```

### Child Elements

Child elements are HTML tags that are contained within a parent element. In the above example, the `<h1>` and `<p>` tags are the child elements.

### Sibling Elements

Sibling elements are HTML tags that are on the same level, with the same parent. For example, in the following code, the `<h1>` and `<p>` tags are sibling elements:

```HTML
<body>   
	<h1>Heading</h1>  
	<p>This is a paragraph.</p> 
</body>
```

----

## HTML Block and Inline Elements

HTML elements can be categorized into two types: block elements and inline elements.

### Block Elements

Block elements take up the full width available and are displayed on a new line. For example, `<div>`, `<h1>`, `<p>`, `<ul>`, and `<li>` are block elements.

### Inline Elements

Inline elements take up only as much space as the content requires and are displayed on the same line as other content elements. For example, `<span>`, `<a>`, `<img>`, and `<strong>` are inline elements.

---

## Most common HTML Tags 
![[Tag List]]