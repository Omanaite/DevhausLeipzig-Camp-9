
In Javascript, a **[[JS - Truthy Falsy|truthy]]** value is a value that is considered `true` when encountered in a Boolean context. All values are truthy unless they are defined as [[JS - Truthy Falsy|falsy]]. That is, all values are _truthy_ except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. ^6dcda8

## Truthy

```JavaScript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## Falsy

```JavaScript
if (false) 
if (0)
if ('')
if (null) 
if (undefined)
if (NaN)
```

