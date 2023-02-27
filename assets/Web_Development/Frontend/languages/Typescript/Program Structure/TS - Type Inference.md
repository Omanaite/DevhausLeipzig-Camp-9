
[[TS - Type Inference|Type inference]] is the process of automatically determining the type of a variable based on its usage. In other words, instead of explicitly declaring the type of a variable, TypeScript can infer the type based on the value that is assigned to it. ^1a326c

## Basic Type Inference

TypeScript performs basic type inference by analyzing the value that is assigned to a variable. For example, consider the following code:

```TS
let x = 10;
```

In this case, TypeScript can infer that the type of `x` is number, based on the fact that `10` is a number literal.

Similarly, TypeScript can infer the type of a variable based on the type of the expression that is assigned to it. 

For example:

```TS
let y = "hello";
let z = y.toUpperCase();
```

In this example, TypeScript infers that the type of `y` is string, and therefore the type of `z` is also string.

## Type Inference with Functions

Type inference is not limited to simple variable assignments. It can also be applied to function arguments and return types.

Consider the following function:

```TS
function add(x: number, y: number) { return x + y; }
```

The function `add` takes two arguments of type `number` and returns a value of type `number`. If we call the function and assign the result to a variable, TypeScript can infer the type of that variable:

```TS
let result = add(1, 2); // result has type number
```

