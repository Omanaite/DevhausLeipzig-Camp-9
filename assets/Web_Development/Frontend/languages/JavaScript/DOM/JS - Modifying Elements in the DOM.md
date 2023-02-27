
Once you have selected an element in the DOM, you can [[JS - Modifying Elements in the DOM|modify]] its content, attributes, and style using various properties and methods. Some of the most commonly used properties and methods are: ^e9240d

-   `innerHTML`: Gets or sets the HTML content of an element.
-   `textContent`: Gets or sets the text content of an element.
-   `setAttribute(name, value)`: Sets the value of an attribute on an element.
-   `getAttribute(name)`: Gets the value of an attribute on an element.
-   `classList.add(className)`: Adds a class to an element.
-   `classList.remove(className)`: Removes a class from an element.
-   `style.property = value`: Sets the value of a style property on an element.

For example, to change the text content of an element with an ID of "myElement", you can use the following code:

```JS
const myElement = document.getElementById("myElement"); myElement.textContent = "New text content";
```

## classList

![[JS - classList#^8c5770]]

