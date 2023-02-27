
[[HTML - Attributes|HTML Attributes ]]provide additional information about HTML elements. They are used to configure the appearance and behavior of an HTML element. ^21d115


## Common Attributes

The following are some common HTML Attributes that are used across multiple elements:

-   `class`: Specifies a class name for an HTML element, which can be used to select the element [[CSS]] with  or [[Javascript]].
-   `id`: Specifies a unique id for an HTML element, which can be used to select the element with [[CSS]] or [[Javascript]].
-   `style`: Specifies inline styling information for an HTML element.
-   `width`: Specifies the width of an HTML element.
-   `height`: Specifies the height of an HTML element.
-   `src`: Specifies the source URL of an embedded content, such as an image.
-   `href`: Specifies the target URL of a hyperlink.

```HTML
<img src="image.jpg" alt="An example image" width="300" height="200">
<a href="https://www.example.com">Visit Example.com</a>
```

## class Attribute

The `class` attribute allows you to specify one or more class names for an HTML element. Classes can be used to select elements with [[CSS]] and [[Javascript]] and to apply styles to them.

```HTML
<p class="highlight important">This is a highlighted paragraph.</p> 
<p class="important">This is an important paragraph.</p>
```



```CSS
.highlight {   background-color: yellow; }  
.important {   font-weight: bold; }
```

## id Attribute

The `id` attribute allows you to specify a unique id for an HTML element. IDs can be used to select specific elements with [[CSS]] and [[Javascript]].

```HTML
<h1 id="header">This is a header.</h1> 
<p id="description">This is a description.</p>
```


```CSS
#header {   font-size: 36px; }  
#description {   font-style: italic; }
```

>[!WARNING] Note: The difference between `class` and `id` is that a class can be used to select multiple elements, while an id can only be used to select a single, unique element.

#### Alternative Attribute

The `alt` attribute has multiple responsibilities:
- Image descriptiion
- [[SEO]]
- Screen readers

Also the alt text gets displayed when the image link is broken

```html
<img src="http://link-to-my-img.jpg" alt="My fancy image" />
```