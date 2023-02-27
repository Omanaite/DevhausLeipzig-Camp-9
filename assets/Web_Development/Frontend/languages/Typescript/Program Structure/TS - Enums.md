
[[TS - Enums|Enums]] allow you to define a set of named constants that represent a fixed set of values. This makes it easier to work with these values in your code, as you can refer to them by name instead of by value. In TypeScript, enums are declared using the `enum` keyword.  ^717422

Here is an example:

```TS
enum Color {
  Red,
  Green,
  Blue
}
```

In this example, `Color` is an enum with three named constants: `Red`, `Green`, and `Blue`. The values of these constants are 0, 1, and 2 by default, but you can assign your own values if you want:

```TS
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
```