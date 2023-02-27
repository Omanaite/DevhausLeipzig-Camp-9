
[[TS - Type annotation|Type annotations]] in TypeScript enable developers to explicitly define the types of variables, function parameters, and function return types. This can help catch type-related errors at compile-time instead of runtime, making the code more reliable and easier to maintain. ^6fe0e9

## Basic Syntax

Type annotations in TypeScript are denoted by a colon `:` followed by the type name. For example, consider the following variable declaration:

```TS
let age: number = 30;
```

In this example, the variable `age` is declared as a number with an initial value of 30. TypeScript will enforce the type `number` on the variable `age` and throw an error if it is assigned a value of a different type.

## Function Parameters and Return Types

Type annotations can also be used for function parameters and return types. For example, consider the following function:

```TS
function addNumbers(a: number, b: number): number { return a + b; }
```

In this example, the function `addNumbers` takes two parameters of type `number` and returns a value of type `number`. TypeScript will throw an error if the function is called with arguments of a different type or if the function does not return a value of the specified type.


## Function Type

```TS
type Bird = {
  name: string
  fly: () => void
}

const bird: Bird = {
  name: "Birdie",
  fly: function (): void {
    console.log('Im flying')
  }
}

bird.fly()
```

