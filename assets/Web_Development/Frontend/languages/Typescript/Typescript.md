[[Typescript|TypeScript]] is a statically typed superset of JavaScript that compiles to plain JavaScript. It was created by Microsoft to address the shortcomings of JavaScript, particularly its lack of strong typing and support for object-oriented programming.

TypeScript adds features like classes, interfaces, and type annotations to JavaScript, making it easier to build and maintain large-scale applications. Because TypeScript is a superset of JavaScript, any valid JavaScript code is also valid TypeScript code, so existing codebases can be gradually migrated to TypeScript.


## Type Inference

![[TS - Type Inference#^1a326c]]


## Type annotation

![[TS - Type annotation#^6fe0e9]]


## Primitive Types in TypeScript

![[TS - Primitive Types in TypeScript#^db339c]]

## Literal Types

Fixed values can also be assigned to a parameter or a variable. This is done with the help of so-called literal types. In the example below, the binding number2 may point either to any number or a string with the value "Hello". All other string values would not be allowed for this binding.

```TS
let number2: number | "Hallo" = 12;

number2 = "Hallo"
```

## Arrays

![[TS - Arrays]]

## Enums 

![[TS - Enums#^717422]]

## Type Aliases

![[TS - Type Aliases#^8c3125]]


## Union Types

![[TS - Union Types#^7be988]]

## Intersection Types

![[TS - Intersection Types#^713950]]

## Interfaces

![[TS - Interfaces#^5c2079]]

## Type Narrowing

![[TS - Type Narrowing#^929d81]]