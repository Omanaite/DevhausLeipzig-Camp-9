
In JavaScript, function declarations are also hoisted to the top of their respective scopes. This means that you can call a function before it is declared within a scope. ^63b736

```JS
myFunction();

function myFunction() {
  console.log("Hello, world!");
}
```

In the example above, we call the function `myFunction` before it is declared. However, because function declarations are hoisted, this code will still run without error.

## Hoisting Caveats

Although hoisting can be helpful in some situations, it can also lead to unexpected behavior if you're not careful. For example, if you declare a variable with the same name as a function, the variable declaration will overwrite the function declaration, which can cause errors.

```JS
myFunction(); // TypeError: myFunction is not a function

var myFunction = function() {
  console.log("Hello, world!");
};
```

In the example above, we first call `myFunction` before it is declared, which would normally be okay because function declarations are hoisted. However, we also declare a variable `myFunction` with the same name, which overwrites the function declaration. When we try to call `myFunction` again, we get a `TypeError` because the variable is not a function.