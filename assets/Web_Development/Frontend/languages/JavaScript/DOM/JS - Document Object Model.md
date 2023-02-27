
The [[JS - Document Object Model|Document Object Model (DOM)]] is a programming interface that allows JavaScript to access and manipulate HTML documents. The DOM represents a hierarchical structure that represents the HTML document in the form of a tree, where each element of the HTML document is represented as a node in the tree. JavaScript can access these nodes to make changes to the HTML page. ^1502fb

## Connection with HTML files

The DOM and HTML are closely related. When a browser loads an HTML page, it parses the HTML code and creates a DOM tree from it. The DOM then represents the HTML document that the browser loaded. Using the DOM, JavaScript can access and manipulate the various elements of the HTML document.

## DOM node element

A DOM node element is an object in JavaScript that represents a specific HTML element. DOM node elements can have properties and methods that allow modification of attributes and content of the element and respond to events.

DOM node elements are organized by a tree structure, where the document as a whole represents the root and the various HTML elements represent the branches and leaves. Each DOM node element can have child nodes, which can be DOM node elements as well. For example, a `<ul>` element can have multiple `<li>` elements as child nodes.

## Traversing the DOM

![[JS - Traversing the DOM#^febd49]]

## Modifying Elements in the DOM

![[JS - Modifying Elements in the DOM#^e9240d]]




