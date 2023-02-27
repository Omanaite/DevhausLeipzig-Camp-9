
The [[JS - While Loop|while loop]] is used to execute a block of code while a specified condition is true. ^edae65

### Syntax

```js
while (condition) {
  // statement
}
```

The `while` loop starts by evaluating `condition`. If `condition` evaluates to `true`, the code in the code block gets executed. If `condition` evaluates to `false`, the code in the code block is not executed and the loop ends.

### Examples:

1.  While a variable is less than 10, log it to the console and increment it by 1:

```js
let i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

## `do...while` loop

### Syntax:

```js
do {
  // statement
} while (condition);
```

The `do...while` loop is closely related to `while` loop. In a `do...while` loop, `condition` is checked at the end of each iteration of the loop, rather than at the beginning before the loop runs.

This means that code in a `do...while` loop is guaranteed to run at least once, even if the `condition` expression already evaluates to `true`.

### Example:

1.  While a variable is less than 10, log it to the console and increment it by 1:

```js
let i = 1;

do {
  console.log(i);
  i++;
} while (i < 10);

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```