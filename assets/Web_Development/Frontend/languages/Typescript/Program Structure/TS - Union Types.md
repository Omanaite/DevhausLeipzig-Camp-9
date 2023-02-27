
Type aliases can also be used to define [[TS - Union Types|union types]]. Union types are types that can represent multiple types at once. For example, suppose you have a function that can take either a string or a number. ^7be988

```TS
function printValue(value: string | number) { console.log(value); }
```

```TS
type StringOrNumber = string | number;

function printValue(value: StringOrNumber) {
  console.log(value);
}
```
