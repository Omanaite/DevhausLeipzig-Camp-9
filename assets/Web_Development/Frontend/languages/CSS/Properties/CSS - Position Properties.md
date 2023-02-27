[[CSS - Position Properties]] allows you to control the layout and positioning of elements on a web page. There are four main position values in CSS: `static`, `relative`, `fixed`, and `absolute`. ^9eab61

## Static Positioning

`Static` is the default position value and is used when no other position value is specified. Elements with a static position are not affected by top, bottom, left, or right properties and will simply flow in the order they appear in the HTML.

```CSS
.static-element {   position: static; }
```

## Relative Positioning

`Relative` positioning is used to position an element relative to its normal position. When an element is set to `relative`, it can be moved away from its normal position using the `top`, `bottom`, `left`, and `right` properties.

```CSS
.relative-element {   position: relative;   top: 20px;   left: 30px; }
```

## Fixed Positioning

`Fixed` positioning is used to position an element relative to the browser window and will remain in that position even if the page is scrolled. This type of positioning is useful for creating elements like headers or footers that need to stay in place while the rest of the page scrolls.

```CSS
.fixed-element {   position: fixed;   bottom: 0;   right: 0; }
```

## Absolute Positioning

`Absolute` positioning is used to position an element relative to its nearest positioned ancestor. If no positioned ancestor is found, the element will be positioned relative to the initial containing block (usually the body element).

```CSS
.relative-container {   position: relative; }  
.absolute-element {   position: absolute;   top: 20px;   left: 30px; }
```

In the example above, the `.absolute-element` will be positioned 20px from the top and 30px from the left of the nearest positioned ancestor, which is the `.relative-container` element.

It is important to understand the different position values in CSS in order to create the layout and positioning of elements on a web page.