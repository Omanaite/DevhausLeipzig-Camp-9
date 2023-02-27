One of the key features of TypeScript is [[TS - Type Narrowing|type narrowing]], which allows you to narrow the type of a variable or expression based on some condition. This can be very useful for writing more robust and expressive code. ^929d81

## Truthiness narrowing

In JavaScript, we can use any expression in conditionals, `&&`, `||`, `if` statements, Boolean negations (`!`), and more. As an example, `if` statements don’t expect their condition to always have the type `boolean`.

```TS
function getUsersOnlineMessage(numUsersOnline: number) {
if (numUsersOnline) {
	return `There are ${numUsersOnline} online now!`;
}
return "Nobody's here. :(";
}
```

---

## `typeof` Guard

One common way to narrow types in TypeScript is to use the `typeof` operator as a type guard. This allows us to check the type of a value at runtime and narrow the type of a variable based on the result.

```TS
function getLength(strOrArray: string | string[]) {
  if (typeof strOrArray === "string") {
    return strOrArray.length; // string type is narrowed here
  } else {
    return strOrArray.length; // array type is narrowed here
  }
}
```

---

## `in` Type Guards

Another way to narrow types in TypeScript is to use the `in` operator as a type guard. This allows us to check if a property exists on an object and narrow the type of a variable based on the result.

```TS
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function getArea(shape: Shape) {
  if ("size" in shape) {
    return shape.size ** 2; // Square type is narrowed here
  } else {
    return shape.width * shape.height; // Rectangle type is narrowed here
  }
}
```

---

## Using Type Predicates

Type predicates are user-defined functions that return a boolean value and act as a type guard. They allow us to define our own custom logic for narrowing types based on some condition.

```TS
function isString(value: any): value is string {
  return typeof value === "string";
}

function getLength(value: string | string[]) {
  if (isString(value)) {
    return value.length; // string type is narrowed here
  } else {
    return value.length; // string[] type is narrowed here
  }
}

```

This function takes an input value value of any type, and returns a type predicate value of type boolean. The value is string part of the function signature is what tells TypeScript that this function is a type predicate. It means that if the isString function returns true for a particular input value, TypeScript will treat that value as a string type going forward.

In the getLength function that uses the isString type predicate, we can see how the is keyword is used to narrow the type of the value parameter to either string or string[]:

---

## Using the `in` operator

The `in` operator is a JavaScript operator that allows us to check if a property exists in an object. In TypeScript, we can use the `in` operator as a type guard to narrow the type of an object based on the presence of a property.

Here is an example:

```TS
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2; // Circle type is narrowed here
  } else {
    return shape.sideLength ** 2; // Square type is narrowed here
  }
}
```

In this example, we have two interfaces, `Circle` and `Square`, that represent different shapes. We also have a union type `Shape` that represents either a `Circle` or a `Square`. The `getArea` function takes a `Shape` parameter and returns the area of that shape.

We use the `in` operator as a type guard to narrow the type of the `shape` parameter based on the presence of the `radius` property. If `shape` has a `radius` property, we know that it must be a `Circle`, so we can safely calculate the area using the formula for a circle. If `shape` doesn't have a `radius` property, we know that it must be a `Square`, so we can safely calculate the area using the formula for a square.

The `in` operator can also be used to check for the presence of index signatures in an object:

```TS
interface User {
  name: string;
  [key: string]: any;
}

function getUserInfo(user: User) {
  if ("age" in user) {
    return `Name: ${user.name}, Age: ${user.age}`; // user has an age property
  } else {
    return `Name: ${user.name}`; // user doesn't have an age property
  }
}
```

---

## Discriminated Unions

A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type. For example, we’re going to create a union of three types which have a single shared field.

```TS
type NetworkLoadingState = {
state: "loading";
};

type NetworkFailedState = {
state: "failed";
code: number;
};

type NetworkSuccessState = {
state: "success";
response: {
	title: string;
	duration: number;
	summary: string;
	};
};

// Create a type which represents only one of the above types

// but you aren't sure which it is yet.

type NetworkState =
| NetworkLoadingState
| NetworkFailedState
| NetworkSuccessState;
```

