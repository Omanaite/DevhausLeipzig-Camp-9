
[[CSS - Specificity|CSS Specificity]] determines which style rule is applied to an element. The more specific the selector is, the higher its specificity value will be and it will have greater precedence over other less specific rules. ^764165

## Understanding Specificity

Specificity is a numeric value assigned to each selector and each style rule. It is calculated based on the number of each type of selector in the rule. The types of selectors and their specificity weight are as follows:

1.  Inline styles: 1000 points
2.  IDs: 100 points
3.  Classes, attributes, and pseudo-classes: 10 points
4.  Elements and pseudo-elements: 1 point

For example, consider the following two CSS rules:

```CSS
#header h2 {   color: blue; }  
h2 {   color: red; }
```

Here, the first rule has a specificity of `100` (1 ID selector) and the second rule has a specificity of `1` (1 element selector). Since the first rule is more specific, its styles will be applied to the `h1` element inside the `#header` element and the text will be displayed in blue, not red.

## Calculating Specificity

To calculate the specificity of a selector, you can simply add up the specificity weights of its components. For example, consider the following selector:

```HTML
<body>
	<main id="main">
		<div class="header">
			<p>Hello there</p>
		</div>
	</main>
	<p>hellou</p>
</body>
```

```CSS
body #main .header p:first-child{color: green}
body p {color: red}
```

The specificity of this selector would be `100 (ID selector) + 10 (class selector) + 1 (element selector) + 1 (element selector) = 112`.

## Overriding Styles

When multiple rules apply to the same element, the one with the highest specificity will take precedence. If two or more rules have the same specificity, the last rule defined in the CSS will be applied.

It is possible to override styles by using a more specific selector. For example, if you have the following styles:

```CSS
p {   color: red; }  
.highlight {   color: blue; }
```

You can override the style for a specific `p` element by using the class `.highlight` in its HTML:

```HTML
<p class="highlight">This text will be blue.</p>
```

