
[[CSS - Selectors|CSS selectors]] are used to select and style HTML elements on a web page. They are used to target specific elements based on their tag name, class, id, attribute, and more. 

[[CSS - Specificity]] determines how the different selectors interact with each other, respectively which ones have a higher weighting. ^87b77e

## Simple Selectors

Simple selectors are used to select elements based on their tag name, class, id, and more. Here is a table of common simple selectors:

| Selector | Desccription |  Example |
| ---- | -------- | -------- |
| `*` | Selects all elements | `* {margin: 0; padding: 0}`|
| `element` | Selects elements of the specified type | `p { color: blue; }`|
| `.class` | Selects elements with the specified class | `.highlight { color: yellow; }`|
| `#id` | Selects the element with the specified id | `#header { background-color: green; }`|

## Combinators

| Name | Syntax | Selects |
| --- | --- | --- |
| Comma Combinator | p, span | Every instance specified in the list |
| Class Combinator | div.class | Every element of the specified type with the specified class |
| ID Combinator | span#id | Every element of the specified type with the specified id |
| Child | .container > p | Every element of specified type that is a direct child |
| Descendant | .container p | Every element that is nested somewhere in the parent (doesn't have to be a direct child) |
| General Sibling | div ~ p | Every sibling that comes somewhere after the first specified element |
| Adjacent Sibling | div + p | Every sibling that comes right after the first specified element |

## Pseudo Selectors

| Name | Syntax | Selects |
| --- | --- | --- |
| Hover | selector:hover | Specified selector when the mouse hovers over it |
| Active | selector:active | Specified selector when that element is currently clicked |
| Visited | selector:visited | Specified selector when we previously used it to navigate (works only on `a`) |
| First Child | :first-child | The first child of given parent element |
| Last Child | :last-child | The last child of given parent element |
| Nth Child | :nth-child(n) | The child at give postion n |
| Nth Child Odd | :nth-child(odd) | Every odd position child (e.g 1,3,5, ...) |
| Nth Child Even | :nth-child(even) | Every even position child (e.g 2,4,6, ...) |
| Nth Child Custom | :nth-child(2n+1) | Every child that matches position (e.g. every second child starting at 1) |
| Nth Last Child | :nth-last-child(n) | The child at give postion n starting from the last child |
| Only Child | :only-child | The child that is the only child of its parent |
| First of Type | p:first-of-type | The first occurence of given element in the parent |
| Last of Type | p:last-of-type | The last occurence of given element in the parent |
| Nth of Type | p:nth-of-type(n) | If n = 2 it selects the paragraph that it the second of its type in the parent |
| Only of Type | :only-of-type | The element if it's the only one of its type in the parent |
| Empty | div:empty | Empty element of given type (Empty means no children, no content) |
| Not | selector:not(selector) | Negates the give selector in parathesis |
| Attribute | \[attributeName\] | Every element that has given attribute |
| Attribute Value | \[attributeName="value"\]| Selects every element that has given attribute with given value |
| Attribute Value Starts with | \[attributeName^="value"\]| Selects every element that has given attribute and the value starts with given value |
| Attribute Value Ends with | \[attributeName$="value"\]| Selects every element that has given attribute and the value ends with given value |
| Attribute Value Includes | \[attributeName*="value"\]| Selects every element that has given attribute and the value includes given value |


### Only child

```html
<div>
	<!-- Gets selected -->
	<p>...</p>
</div>
<div>
	<h2>...</h2>
	<!-- Doesn't get selected -->
	<p>...</p>
</div>

<style>
	div > p:only-child
</style>
```

### Only of type

```html
<div>
	<h2>...</h2>
	<!-- Gets selected -->
	<p>...</p>
</div>
<div>
	<h2>...</h2>
	<!-- Doesn't get selected -->
	<p>...</p>
	<p>...</p>
</div>

<style>
	div > p:only-of-type
</style>
```

### Attribute Wildcard

```html
<p class="paragraph-1">...</p> <!-- selected -->
<p class="paragraph-2">...</p> <!-- selected -->
<p class="article">...</p> <!-- not selected -->

<style>
	[class^="p"]
</style>
```

```html
<p class="paragraph-1">...</p> <!-- selected -->
<p class="paragraph-2">...</p> <!-- not selected -->
<p class="article-1">...</p> <!-- selected -->
<p class="article-2">...</p> <!-- not selected -->

<style>
	[class$="1"]
</style>
```

```html
<p class="paragraph-1">...</p> <!-- not selected -->
<p class="paragraph-2">...</p> <!-- not selected -->
<p class="article-1">...</p> <!-- selected -->
<p class="article-2">...</p> <!-- selected -->

<style>
	[class*="tic"]
</style>
```

## Pseudo Elements

They create content in HTML from CSS. A pseudo element always requires the css property `content`, if you dont need text content, use `content: ""`

### Before

`::before`

```html
<p>content</p>
```

```css
p::before {
  content: "before";
}
```

Result:

```
beforecontent
```

### After

```html
<p>content</p>
```

`::after`

```css
p::after {
  content: "after";
}
```

Result:

```
contentafter
```

### Tooltip Example

```html
<p data-tooltip="This is my awesome tooltip">
	Lorem ipsum dolor sit amet.
</p>
<p data-tooltip="This is my second awesome tooltip">
	Lorem ipsum dolor sit amet.
</p>
```

The `p` element gets the `position: relative;`. Whenever we hover this element, we create a new element (tooltip), that would get `postion: absolute;`.  
`content: attr(data-tooltip);` evaluates to the value of the given attribute for our `content` property

```css
[data-tooltip] {
  position: relative;
}

[data-tooltip]:hover::after {
  position: absolute;
  top: -140%;
  left: 0;
  background-color: lightblue;
  content: attr(data-tooltip);
  padding: 0.4rem;
}
```