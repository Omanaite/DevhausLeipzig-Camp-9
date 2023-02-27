[[JS - Loops|Loops]] are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return `true` or `false`. A loop will continue running until the defined condition returns `false`. ^45c487

## for Loop
![[JS - for Loop#^9220a5]]

## while Loop
![[JS - While Loop#^edae65]]

---

## Loop Control Statements

Loop control statements allow you to control the flow of a loop. There are three types of loop control statements in JavaScript: `break`, `continue`, and `return`.

### The `break` Statement

The `break` statement is used to terminate a loop before its normal end.

```JS
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

In the example above, the loop will terminate when the value of `i` is 3, and only the numbers 1 and 2 will be printed.

---

### The `continue` Statement

The `continue` statement is used to skip an iteration of a loop.

```JS
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

In the example above, the loop will skip the iteration where the value of `i` is 3, and all the other numbers will be printed.

---

### The `return` Statement

The `return` statement is used to exit a function, which in turn will terminate any loop inside the function.

```JS
function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      return;
    }
    console.log(i);
  }
}
```

In the example above, the `printNumbers` function will terminate when the value of `i` is 3, and only the numbers 1 and 2 will be printed.

---

## Scope

![[JS - Scope#^1bbc10]]

Variables declared with the `let` and `const` keywords have block scope, which means that they are only accessible within the block in which they are declared, including loops. This can help prevent unintended side effects when using loops.

```JS
for (let j = 0; j < 5; j++) { 
console.log(j); 
} 
console.log(j); // ReferenceError: j is not defined
```



