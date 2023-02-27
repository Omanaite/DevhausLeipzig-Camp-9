
In JavaScript, [[JS - classList|classList]] is a property that is used to manipulate the class attributes of an element. It allows you to add, remove, toggle, and check the presence of CSS classes on an element. ^8c5770

## Accessing classList

To access the `classList` property, you first need to select the element you want to manipulate. This can be done using one of the many DOM selection methods available in JavaScript, such as `querySelector` or `getElementById`. Once you have selected the element, you can access its `classList` property as follows:

```JS
const element = document.querySelector('.my-element');
const classList = element.classList;
```

## Adding and Removing Classes

To add a class to an element, you can use the `add` method of the `classList` property:

```JS
element.classList.add('new-class');
```

To remove a class from an element, you can use the `remove` method:

```JS
element.classList.remove('old-class');
```

You can also add or remove multiple classes at once by passing them as separate arguments:

```JS
element.classList.add('class1', 'class2', 'class3'); element.classList.remove('class1', 'class2', 'class3');
```

## Toggling Classes

To toggle a class on an element, you can use the `toggle` method. This method adds the class if it is not present on the element, and removes it if it is already present:

```JS
element.classList.toggle('active');
```

You can also use the `toggle` method with a second argument to explicitly add or remove a class:

```JS
element.classList.toggle('active', true); // adds the 'active' class
element.classList.toggle('active', false); // removes the 'active' class
```

## Checking for the Presence of Classes

To check whether an element has a certain class, you can use the `contains` method:

```JS
if (element.classList.contains('my-class')) { // do something }
```

