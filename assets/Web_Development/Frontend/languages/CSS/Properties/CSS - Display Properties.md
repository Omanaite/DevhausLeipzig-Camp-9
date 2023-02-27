
The [[CSS - Display Properties]] determines how an element behaves in relattion to its neighnors ^fc18ef

## Block

Elements with a `display` property of `block` have two main traits:
- It takes the full width of the page, unless you set a specific width
- It pushes the next element on a new "line"

```css
div {
	display: block;
}
```

---

## Inline

Elements with a `display` property of `inline` don't foce their neighbors onto a new line. It takes only the space it needs to display its content. It can not take `width` and `height`

```css
div {
	display: inline;
}
```

---

## Inline-block

Elements with a `display` property of `inline-block` behave like `inline` elements, but can take a `widht` and `height`

```css
div {
	display: inline-block;
}
```

---

## flex

![[Flexbox#^ecaea7]]

---
## grid

