
CSS provides several [[CSS - Units|units]] to express lengths. These units determine the size of elements on a web page. ^f95892

## Pixel (px)

A pixel is a physical dot on a computer screen. In CSS, `px` represents one pixel on the screen. It is the most commonly used unit and is considered to be an absolute unit, meaning that it does not change based on the user's screen resolution or font size.
More about CSS Pixels and Device Pixels [[Frontend#^a6efaa|here]]

Example:

```CSS
body {   
	font-size: 16px;   
	margin: 20px; 
}
```

## Em (em)

An `em` unit is relative to the font-size of the element. 1 `em` is equal to the font-size of the element. The font-size of an element can be set using `px`, `em`, or `%`.

**Example:**

```CSS
body {   font-size: 16px; }  
h1 {   font-size: 2em;   margin-bottom: 0.5em; }`
```

## Rem (rem)

`rem` is similar to `em`, but it is relative to the root (`<html>`) element instead of the parent element. This makes it easier to maintain consistent sizes across an entire document.

**Example:**

```CSS
html {   font-size: 16px; }  
body {   font-size: 1.2rem; }  
h1 {   font-size: 2rem;   margin-bottom: 0.5rem; }
```

## Percentage (%)

The `%` unit is a relative unit and is based on the parent element's size. It is commonly used to size elements in relation to their parent containers.

**Example:**

```CSS
body {   width: 80%;   margin: 0 auto; }  
img {   width: 100%; }
```

## Viewport Units (vw, vh, vmin, vmax)

Viewport units are based on the size of the viewport (the visible portion of the web page).

-   `vw`: 1/100th of the viewport width
-   `vh`: 1/100th of the viewport height
-   `vmin`: **Viewport Minimum**  This unit is based on the **smaller dimension of the viewport**. If the _viewport height is smaller_ than the width, the value of `1vmin` will be equal to 1% of the viewport height
-   `vmax`: -   **Viewport Maximum** This unit is based on the **larger dimension of the viewport**. If the _viewport height is larger_ than the width, the value of `1vmax` will be equal to 1% of viewport height. Similarly, if the _viewport width is larger_ than the height, the value of `1vmax` will be equal to 1% of hte viewport width.

**Example:**
```CSS
body {   height: 100vh;   font-size: 10vw; }  
img {   width: 50vmin;   height: 50vmin; }
```

[more about vmin and vmax](https://www.sitepoint.com/css-viewport-units-quick-start/#:~:text=Viewport%20Minimum%20(vmin).,1%25%20of%20the%20viewport%20height.)

In conclusion, each CSS unit has its own purpose and use case, and choosing the right unit depends on the specific requirements of the project. It's essential to understand the difference between each unit to make informed decisions while styling a website.