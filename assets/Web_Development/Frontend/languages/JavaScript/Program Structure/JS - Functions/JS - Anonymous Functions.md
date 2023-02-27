
An [[JS - Anonymous Functions|anonymous function]] is a function that is declared without any identifier. Instead, it is defined as an expression, usually as an argument to another function, or assigned to a variable. ^9efa14

## Syntax

The syntax for defining an anonymous function is as follows:

```JS
// as an argument to another function
someFunction(function() {
  // function body
});

// assigned to a variable
const myFunction = function() {
  // function body
};
```

## Arrow Functions

In addition to traditional functions, JavaScript also supports arrow functions, which provide a shorter syntax for writing functions. Here's an example of an arrow function that returns the square of a number:

```JS
const square = (num) => num * num;
```

