
[[JS - Scope|Scope]] is an important concept in JavaScript that determines the accessibility of variables and functions within a program. ^1bbc10

## Global Scope

The global scope in JavaScript is the outermost scope, and any variable or function declared outside of a function or block is automatically in the global scope. Global variables and functions can be accessed from anywhere in a program, including within other functions or blocks.

```JS
let globalVariable = "I'm in the global scope";

function globalFunction() {
  console.log(globalVariable); // logs "I'm in the global scope"
}

globalFunction();
```

In the example above, the `globalVariable` is declared outside of any function, so it's in the global scope. The `globalFunction` can access the `globalVariable` because it's in the same scope.

---

## Local Scope

Local scope is the scope inside a function or block. Any variable declared inside a function or block is in its own local scope and can only be accessed from within that function or block.

```JS
function localFunction() {
  let localVariable = "I'm in the local scope";
  console.log(localVariable); // logs "I'm in the local scope"
}

localFunction();
console.log(localVariable); // throws an error because localVariable is not defined in this scope
```

In the example above, `localVariable` is declared inside the `localFunction`, so it's in the local scope. The `console.log` statement inside the function can access `localVariable`, but the `console.log` statement outside of the function throws an error because `localVariable` is not defined in that scope.

---


