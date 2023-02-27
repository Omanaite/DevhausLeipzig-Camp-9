There are five [[JS - Simple data types|simple data types]] in Javascript. These data types can be assigned as value to a binding. The data type of a value can be read out via the **typeof** operator. ^41e4f4

```Javascript
let myName = typeof "Julian"; // the sored value of myName is now "string"
```

**The following data types can be passed to a variable.**

-   Boolean
-   String
-   Number
-   Undefined
-   Null

>[!Tip] To be precise, there are two more data types in Javascript BigInt and Symbol. These will be discussed in a later chapter.

## Boolean

A Boolean is a Simple Data Type it knows only two values true or false.

```JavaScript
let isLoggedInUser = true;
```

---

## String

A string is nothing more than a string of characters. This can be written either in single or double quotes.  
A string can also be written with backticks ( \`\ ). These are so-called template literals which allow string interpolation.

```JavaScript
let myName = "Julian";
// interpolation Syntax =D
let phrase = `Hallo mein Name ist ${myName}.`;
```

With the Plus operator it is also possible to concat strings

```Javascript
let myName = "Julian";

let phrase = "Hallo mein Name ist";

const result = phrase + " " + myName + ".";
```


>[!TIP] String Concatenation in JavaScript simply means appending one or more strings to the end of another string.

---
## Number

The Number data type is needed to represent and manipulate numbers.  

The following operators can be used in Javascript.

-   Add ( + )
-   Subtract ( - )
-   Multiply ( * )
-   Divide ( / )
-   Modulo calculations ( % )

```JavaScript
const result = 13 % 5  // expected result 3
```

There is a special value of type number. This is the NaN (not a number) value. For example, this is obtained when a calculation fails.

```JavaScript
const result = 5 * "unicorn"; // result will be NaN
```

---

## Undefined

As the name suggests, **undefined** indicates that no value is assigned. A variable that is declared but not assigned a value is of type **undefined**.

```JavaScript
let myString; // Hellou I'm undefined =D
```

---
## Null

Technically, **null** and **undefined** are very similar. However, **null** stands for an explicit lack of a value.

```JavaScript
let users = null;
```

