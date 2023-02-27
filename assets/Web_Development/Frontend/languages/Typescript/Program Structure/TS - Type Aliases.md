[[TS - Type Aliases|Type aliases]] in TypeScript provide a way to define your own custom types that can be used throughout your codebase. ^8c3125

## What is a Type Alias?

A type alias is a way to give a name to a type. It allows you to define a custom type that can be used in place of other types throughout your code. Type aliases are especially useful when you need to use a complex or verbose type in several places in your code.

In TypeScript, type aliases are created using the `type` keyword followed by the name of the alias and the definition of the type. 
For example:

```TS
type MyString = string;
```

## Using Type Aliases

Once you've created a type alias, you can use it in place of other types throughout your code. For example, suppose you have a function that takes a string and returns an array of strings:

```TS
function splitString(str: string): string[] { return str.split(''); }
```

If you wanted to use a type alias for the string array, you could define it like this:

```TS
type StringArray = string[];
```

Now, wherever you use `StringArray`, it will be equivalent to `string[]`.

## Creating Complex Types

One of the biggest advantages of type aliases is that they allow you to create complex types that are easier to read and understand. For example, suppose you have an object that contains several properties:

```TS
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};
```

You could create a type alias for this object like so:

```TS
type User = {
  name: string;
  age: number;
  email: string;
};
```

