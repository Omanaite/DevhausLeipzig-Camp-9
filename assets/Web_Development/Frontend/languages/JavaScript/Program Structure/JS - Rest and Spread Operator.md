
In JavaScript, the [[JS - Rest and Spread Operator|Rest and Spread operators]] are used to manipulate arrays and objects. They were introduced in ECMAScript 6 (ES6) and have become an essential part of modern JavaScript programming. In this guide, we will discuss what these operators are, how to use them, and the differences between them. ^5d012e

## Spread Operator

The Spread operator ( `...` ) is used to expand an iterable object, such as an array, string, or object, into individual elements. It is often used to create a new array or object that contains the elements of the original iterable.

```JS
// Example 1: Expanding an array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Expanding a string
const string1 = 'hello';
const string2 = [...string1];

console.log(string2); // Output: ['h', 'e', 'l', 'l', 'o']

// Example 3: Expanding an object
const object1 = { a: 1, b: 2 };
const object2 = { ...object1, c: 3, d: 4 };

console.log(object2); // Output: { a: 1, b: 2, c: 3, d: 4 }

```

## Rest Operator

The Rest operator ( `...` ) is used to collect multiple elements into an array or object. It is often used in function parameters to collect any number of arguments into an array.

```JS
// Example 1: Collecting function arguments into an array
function myFunction(...args) {
  console.log(args);
}

myFunction(1, 2, 3); // Output: [1, 2, 3]

// Example 2: Collecting remaining array elements
const [a, b, ...c] = [1, 2, 3, 4, 5];

console.log(c); // Output: [3, 4, 5]

// Example 3: Collecting remaining object properties
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

console.log(z); // Output: { a: 3, b: 4 }
```

## Differences Between Spread and Rest Operators

The main difference between the Spread and Rest operators is in their use cases. The Spread operator is used to expand an iterable object into individual elements, while the Rest operator is used to collect multiple elements into an array.

Another difference is that the Spread operator can only be used in function calls, array literals, and object literals, while the Rest operator can be used in function parameters, destructuring assignments, and object literals