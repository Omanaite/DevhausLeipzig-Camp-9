
An [[TS - Interfaces|interface]] in TypeScript defines a contract for objects. It specifies the properties and methods that an object must have to conform to the interface. Interfaces are similar to classes, but they do not provide any implementation. They only define the shape of an object. ^5c2079

## Defining an Interface

To define an interface in TypeScript, we use the `interface` keyword followed by the interface name and the definition of its properties and methods. 
Here is an example:

```TS
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}

```

## Optional Properties

In an interface, we can define properties as optional by adding a question mark `?` after the property name. 
Here is an example:

```TS
interface Book {
  title: string;
  author: string;
  pages?: number;
}
```

## Extending Interfaces

In TypeScript, we can extend an interface from another interface using the `extends` keyword. Here is an example:

```TS
interface Animal { 
name: string; 
age: number; 
} 
interface Dog extends Animal { 
breed: string; 
}
```

In the above example, we defined an interface named `Animal` with two properties: `name` and `age`. We then defined another interface named `Dog` that extends the `Animal` interface and adds a `breed` property.

## Index Signature

In TypeScript, index signatures allow for dynamic property definitions on objects. This means that you can create an object with properties that are not predefined in the type definition.

```TS
interface Person { 
	name: string; 
	age: number; 
	[key: string]: string | number; 
} 
const person: Person = { 
	name: "John", 
	age: 30, 
	city: "New York", 
	phone: "123-456-7890",
	postal: 80333
};
```