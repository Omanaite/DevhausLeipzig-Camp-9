
The [[CSS - Box Model| Box Model]] is a concept in CSS that describes the rectangular boxes that are generated for each HTML element. It consists of four parts: the content, padding, border, and margin.
Via the [[CSS - Box Model Properties|Box Model Properties]] you are able to change the size of the box model. ^14bc23

-   `width` and `height`: Specify the width and height of an element.
-   `padding`: Specifies the padding inside an element.
-   `border`: Specifies the border around an element.
-   `margin`: Specifies the margin around an element.

## Content

The content is the actual content of the HTML element, such as text or images.

## Padding

The padding is the space between the content and the border. It can be set using the `padding` property or by specifying individual values for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

```CSS
p {   padding: 20px; }
```

## Border

The border surrounds the padding and content. It can be set using the `border` property or by specifying individual values for `border-top`, `border-right`, `border-bottom`, and `border-left`.

```CSS
p {   border: 1px solid black; }
```

## Margin

The margin is the space outside the border. It can be set using the `margin` property or by specifying individual values for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

```CSS
p {   margin: 20px; }
```

The box model properties can be used to control the size and spacing of elements on a page. For example, you can increase the padding to separate the content from the border, or you can add a margin to create space between elements.
