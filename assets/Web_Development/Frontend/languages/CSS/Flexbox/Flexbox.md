[[Flexbox]] is a powerful layouting tool, that enables us to layout in __one__ dimension ^ecaea7

```css
div {
	display: flex;
}
```

When we set `display: flex;` on an element, that element becomes the `flex container`.
All direct children of that element become the `flex items`

#### flex-direction

The flex direction determines the `main axis` and the `cross axis`.
If we set it to `row`, which is the defaullt, the horizontal axis is the `main axis` and the vertical axis is the `cross axis`.
![[flex-row.png]]
On the other hand if we set it to `column`, the the vertical axis is the `main axis` and the horizontal axis is the `cross axis`.
![[flex-col.png]]

```css
div {
	display: flex;
	flex-direction: 'column' /* row | column | row-reverse | column-reverse */
}
```

By setting the `flex-direction` property to a reverse value. We flip the direction of the `main axis`.

#### justify-content

`justify-content` aligns the `flex items` along the `main axis`

```css
div {
	display: flex;
	justify-content: 'space-between' /* flex-start | flex-end | center | space-between | space-around | space-evenly */
}
```

#### align-items

`align-items` aligns the `flex items` along the `cross axis`

```css
div {
	display: flex;
	align-items: 'center' /* stretch | flex-start | flex-end | center | baseline */
}
```

#### flex-wrap

When we don't specify `flex-wrap`, all `flex items` will try to fit into the `flex-contaienr`s row. If we set it to `wrap` the `items` will respect their space and wrap to a new line when they can not fit.

```css
div {
	display: flex;
	flex-wrap: 'wrap' /* nowrap | wrap | wrap-reverse */
}
```

#### Flex item specific properties

##### order

We can use `order` to reorder the `items` in our `container`. The default value is `0`. The highest number will be the last `item`.

```css
.container {
	display: flex;
}

.item {
	order: 1 /* 0 - any integer */
}
```

##### flex-grow

`flex-grow` allows the element to take up all the available space, but if we set `flex-grow` on multiple elements it needs to share (based on the proportion)

```css
.container {
	display: flex;
}

.item {
	flex-grow: 1 /* 0 - any integer */
}
```

##### flex-shrink

If you set `flex-shrink` to 0 you tell the element to try to not shrink. This is useful in combination with `flex-basis` to maintain a minimum size.

```css
.container {
	display: flex;
}

.item {
	flex-shrink: 0 /* 0 - any integer */
}
```

##### flex-basis

It tells the element what its initial size is. In combination with `flex-shrink: 0;`, we can tell an element not to shrink past its minimum size.

```css
.container {
	display: flex;
}

.item {
	flex-basis: 200px /* any valid unit based value */
}
```

##### align-self

`align-self` can be used to override the specified behaviour of the other `flex items` (break out of the alignment).

```css
.container {
	display: flex;
}

.item {
	align-self: 'center' /* stretch | flex-start | flex-end | center | baseline */
}
```


### Useful links about Flexbox
[Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
