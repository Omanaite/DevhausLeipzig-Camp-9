
[[JS - Array and Object Destructuring in JavaScript|Array and Object destructuring]] is a powerful feature in JavaScript that allows you to extract values from arrays and objects and assign them to variables in a concise and readable way. This feature is particularly useful when working with complex data structures, as it simplifies the process of accessing and manipulating their contents. ^60d1c7

## Array Destructuring

Array destructuring allows you to extract individual elements from an array and assign them to variables. To destructure an array, you simply enclose the variable names you want to assign the array elements to in square brackets on the left-hand side of an assignment expression, and the array you want to destructure on the right-hand side.

```JS
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
```

You can also skip over elements that you don't need by using a comma in the corresponding position in the list of variables. 
For example:

```JS
const numbers = [1, 2, 3];
const [, second, third] = numbers;

console.log(second); // Output: 2
console.log(third); // Output: 3
```

Array destructuring is particularly useful when working with functions that return arrays. For example, the `Object.entries()` method returns an array of key-value pairs from an object, which you can destructure to get the individual keys and values:

```JS
const person = { name: 'Alice', age: 30 };
const entries = Object.entries(person);

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: Alice
// age: 30
```

## Object Destructuring

Object destructuring is similar to array destructuring, but instead of extracting elements from an array, it extracts properties from an object. To destructure an object, you simply enclose the property names you want to extract in curly braces on the left-hand side of an assignment expression, and the object you want to destructure on the right-hand side.

```JS
const person = { name: 'Alice', age: 30 };
const { age, name } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

You can also assign the extracted properties to new variable names by using the `property:variable` syntax:

```JS
const person = { name: 'Alice', age: 30 }; 
const { name: fullName, age: yearsOld } = person; 
console.log(fullName); 
// Output: Alice 
console.log(yearsOld); // Output: 30
```

Object destructuring can also be used to extract properties from nested objects:

```JS
const person = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

const { name: FirstName, address: { city: myCity } } = person;

console.log(FirstName); // Output: Alice
console.log(myCity); // Output: Anytown
```

