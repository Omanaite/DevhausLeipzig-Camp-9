
In JavaScript, a [[JS - Functions|function]] is a block of code that performs a specific task or a set of tasks. Functions are reusable pieces of code that can be called multiple times throughout your program. This can help simplify your code and make it more organized. ^2675a0


## Creating a Function

You can create a function in JavaScript using the `function` keyword. Here's an example of a simple function that takes two arguments and returns their sum:

```JS
function addNumbers(num1, num2) {
  return num1 + num2;
}
```

In the example above, `addNumbers` is the name of the function, and `num1` and `num2` are the parameters. The function returns the sum of `num1` and `num2`

---

## Calling a Function

To call a function in JavaScript, you simply need to use the function name and provide any necessary arguments. Here's an example of how to call the `addNumbers` function we created earlier:

```JS
let sum = addNumbers(2, 3);
console.log(sum); // Output: 5
```

In this example, we call the `addNumbers` function with arguments `2` and `3`. The function returns the sum of these two values, which is assigned to the `sum` variable. We then log the value of `sum` to the console.

---

## Function Parameters

Functions in JavaScript can accept zero or more parameters, which are passed to the function as arguments. 
Here's an example of a function that takes three parameters:

```JS
function greet(name, message, punctuation) {
  console.log(`${message}, ${name}${punctuation}`);
}
```

In this example, `greet` is a function that takes three parameters: `name`, `message`, and `punctuation`. The function logs a message to the console that includes the values of these parameters.

---

## Default Parameters

In JavaScript, you can provide default values for function parameters. If a value is not provided for a parameter when the function is called, the default value will be used instead. 
Here's an example:

```JS
function greet(name = 'World', message = 'Hello', punctuation = '!') {
  console.log(`${message}, ${name}${punctuation}`);
}
```

In this example, the `greet` function takes three parameters, but each parameter also has a default value. If the function is called without any arguments, the default values will be used.

---

## Anonymous Functions

![[JS - Anonymous Functions#^9efa14]]

## Hoisting

![[JS - Hoisting#^63b736]]

## Scope
![[JS - Scope#^1bbc10]]

## Pure functions

A pure function always produces the same output with the same inputs

```JS
function add(x, y) {
  return x + y
}

console.log(add(1,2)) // => 3
console.log(add(1,2)) // => 3
```

## Impure functions

```JS
//Impure
let counter = 0
function add(x, y) {
  const result = x + y + counter
  counter ++
  return result
}

console.log(add(1,2)) // => 3
console.log(add(1,2)) // => 4
console.log(add(1,2)) // => 5
```

