
Of course, a Dom Node element can be [[JS - Query the DOM|queried]] via the children key. However, this can be a bit cumbersome. ^589ebe

```JS
document.body.children[0].children[2].children[1]
```

## Accessing Elements in the DOM

To access an element in the DOM, you can use the `document` object and call various methods to select the element you want. The most common methods are:

-   `getElementById(id)`: Selects an element with a specific ID.
-   `getElementsByClassName(className)`: Selects all elements with a specific class.
-   `getElementsByTagName(tagName)`: Selects all elements with a specific tag name.
-   `querySelector(selector)`: Selects the first element that matches a specific CSS selector.
-   `querySelectorAll(selector)`: Selects all elements that match a specific CSS selector.

```JS
document.querySelector(".controls h1");
```

