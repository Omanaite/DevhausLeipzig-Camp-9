

### Expression 
A fragment of code that produces a value is called an **[[JS - Expression vs Statement|expression]]**. Every value that is written literally (such as 22 or "psychoanalysis") is an expression. An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one. ^d16ecb

```Javascript
10 + 89634 - ((34 / 434 / 2) % 21); // is an expression
```

### Statement

A **[[JS - Expression vs Statement|statement]]** is a piece of code that can be executed and performs some kind of action.
For example a function declaration. ^250da8

```Javascript
function twice(x){
	return x + x
}
```

>[!TIP] These actions (statements) have "side-effects", e.g. writing to hard disk, sending a network message, moving something in memory, changing a data structure, etc... That is, they change something about the world.

