
## Arrays

^ef0004

[[JS - Complex Data Types#^ef0004|Arrays]] are used to store and manipulate a collection of data. Arrays in JavaScript are dynamically sized, meaning that they can grow or shrink as needed. ^775400

### Creating an Array

In JavaScript, you can create an array using the `[]` syntax.

```JS
// using []
const myArray = [1, 2, 3, 4];

// using Array constructor
const myArray = new Array(1, 2, 3, 4);
```

### Accessing Array Elements

You can access array elements using their index. In JavaScript, array indices start at 0.

```JS
const myArray = ['apple', 'banana', 'cherry'];

console.log(myArray[0]); // output: "apple"
console.log(myArray[1]); // output: "banana"
console.log(myArray[2]); // output: "cherry"
```

### Modifying Array Elements

You can modify array elements by assigning a new value to the index.

```JS
const myArray = ['apple', 'banana', 'cherry'];

myArray[1] = 'pear';

console.log(myArray); // output: ["apple", "pear", "cherry"]
```

## Objects

^0fa35d

In JavaScript, [[JS - Complex Data Types#^0fa35d|objects]] are a fundamental data type that allows you to store data as key-value pairs. Objects are used to represent entities or concepts, and they can contain properties and methods. Objects are created using object literals, constructor functions, or the `class` syntax. ^76fe35

### Object Literals

Object literals are a concise way to create objects in JavaScript. An object literal is a comma-separated list of key-value pairs enclosed in curly braces.

```JS
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
```

In the example above, `person` is an object with three properties: `name`, `age`, and `city`. The values of these properties are strings or numbers. Object literals can also contain nested objects and arrays.

```JS
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  hobbies: ["reading", "running", "cooking"]
};
```

## Accessing Object Properties

Object properties can be accessed using dot notation or bracket notation. Dot notation is used when the property name is a valid identifier.

```JS
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name); // "John"
console.log(person.age); // 30
console.log(person.city); // "New York"
```

Bracket notation is used when the property name is not a valid identifier or when the property name is stored in a variable.

```JS
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person["name"]); // "John"
console.log(person["age"]); // 30
console.log(person["city"]); // "New York"
```