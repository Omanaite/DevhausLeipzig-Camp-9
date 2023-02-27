
We can type [[TS - Arrays|Arrays]] in two different ways: ^b0ede0

**`type[]`**

```ts
let myArray: number[] = []

myArray.push(2) // valid

myArray.push('hello') // error
```

**`Array<type>`**

```ts
let myArray: Array<number> = []

myArray.push(2) // valid

myArray.push('hello') // error
```

If you want to create a Array that can only hold number arrays, you can specify that by using the `Array<>` syntax, for a more readable result

```ts
let myNestedArray: Array<number[]> = []
// eqauls
let myNestedArrayUnreadable = number[][]

myNestedArray = [[2], [2,3]]
```

## Tuples

Tuples are similar to arrays, but they allow you to specify the type of each element in the collection. This is useful when you need to ensure that the elements of the collection have a specific type and order. In TypeScript, tuples are declared using square brackets `[]` with the types of each element separated by commas. 

Here is an example:

```TS
let person: [string, number] = ['Alice', 30];
```





