
Not all Programs are straight roads. We may for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called [[JS - Conditional Execution|Conditional Execution]] ^5ccf99

Conditional exexuten is created with the `if` keyword in Javascript.
The `if` statement is used to execute a block of code only if a certain condition is true. The syntax for an `if` statement is as follows:

```Javascript
if (condition) {  
	// code to be executed if the condition is true
}
```

Here, `condition` is any expression that returns a boolean value (true or false). If the value of the condition is true, the code block inside the curly braces will be executed. If the value is false, the code block will be skipped.

## Using `if` with `else`

Often, we want to execute one block of code if the condition is true, and a different block of code if the condition is false. This can be achieved with an `if` statement in conjunction with an `else` statement. The syntax is as follows:

```javaScript
if (condition) {   
	// code to be executed if the condition is true 
} else {   
	// code to be executed if the condition is false 
}
```

In this case, if the value of the condition is true, the code block inside the first set of curly braces will be executed. If the value is false, the code block inside the second set of curly braces will be executed.

## Using `if` with `else if`

Sometimes, we may want to check for multiple conditions and execute different blocks of code depending on which condition is true. This can be achieved using an `if` statement with multiple `else if` statements. The syntax is as follows:

```Javascript
if (condition1) {
	// code to be executed if condition1 is true 
} else if (condition2) {
	// code to be executed if condition2 is true 
} else { 
	// code to be executed if all conditions are false 
}
```

In this case, the conditions are evaluated in the order they appear in the code. If `condition1` is true, the first code block will be executed and the rest of the `else if` and `else` statements will be skipped. If `condition1` is false but `condition2` is true, the second code block will be executed, and so on. If all conditions are false, the code block inside the final set of curly braces will be executed.