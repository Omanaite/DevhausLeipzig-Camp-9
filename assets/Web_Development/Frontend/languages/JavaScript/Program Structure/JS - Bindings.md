To catch and hold values, JavaScript provides a thing called a  **[[JS - Bindings|binding]]** or **variable**. ^1946cc

- `var`
- `let`
- `const`

>[!WARNING] A binding name must not start with a number. Special characters such as "-" are also not allowed in the name. It must also be ensured that the variable name is not a reservedkeyword. A list of reserved words can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).  

Binding is a pointer. A binding declared with 'const' cannot be re-assigned (you can't point it at a different anymore). A binding declared with 'let' can be re-assigned (you can point it at different stuff as much as you want).

```Javascript
let a = 5;
a = 12; // allowed
a = "three"; // allowed

console.log(b) // dont do dat
const b = "hello";
b = "bye"; // not allowed
```