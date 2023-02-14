# JavaScript DOM Practice 1

Clone this repository and open it in Visual Studio Code.

Open the index.html file in your browser and open the JavaScript console: `Cmd+Alt+J` or `Ctrl+Alt+J`. You can also find the JavaScript console via the dev tools by hitting the `F12` button.

In the console type these commands. Each line you run is a JavaScript statement. You can leave out the semicolon at the end for convenience.

After running each command notice what is happening and try to understand what the command does. Feel also free to try out other variations by yourself and experiment.

```js
alert("Stay alert!");
document.URL;
document.charset;
document.title;
document.title = "Where am I?";
document.write("I wrote this");
document;
document.write;

window.visualViewport;
window;

document.querySelector("body");
document.querySelector("#dark-mode-button");
document.querySelector(".controls h1");

const heading = document.querySelector("h1");
heading.nextElementSibling;
heading.nextElementSibling.nextElementSibling;

heading.textContent = "New Heading!!!";
document.querySelector("h1").textContent = "This works???";

const currentTextContent = heading.textContent;
heading.textContent = "Yet another new Heading";
currentTextContent;

const main = document.querySelector("main");
main.innerHTML = "<h2>We can insert HTML inside an element</h2>";
main.classList.add("dark");
main.classList.remove("dark");
main.classList.toggle("dark");
main.classList.toggle("dark");
```

Refresh the page to reset it before you go on to the next step.

## Styling Functions

Take a look at the `style.css` file. It defines some classes that change some aspect of the styling and could be applied to the main section.

Inside the `main.js` file we will now define some functions that will toggle theses classes on and off.
First we'll create a binding that refers to the main section using the `document.querySelector`

```js
const mainElement = document.querySelector("main");
```

Here is the statement that would toggle the class `dark` on that element.

```js
mainElement.classList.toggle("dark");
```

This is a relatively complex expression. We can wrap this statement inside a function to give it a memorable name and also make it executable from the console. The syntax looks like this.

```js
const toggleDarkMode = function() {
  mainElement.classList.toggle("dark");
};
```

To test that this is working go to the Browser's Javascript Console and call this function by typing

```js
toggleDarkMode();
```

You should see the main section changing colors from a white background to a black background and when you call the function again you should see it jumping back to white.

Go ahead and create similar functions for the other classes.

## Buttons & Event Listeners

Now it's time to actually connect these functions to the buttons on the page.
First we need a reference to the buttons them selves. Each button has been given an id attribute in the html file, so we can use a simple query selector to get a hold of it. Here's the example for the dark mode button.

```js
const darkModeButton = document.querySelector("#dark-mode-button");
```

Next up we will use the `addEventListener` method on the `darkModeButton`. This is an extremely important function, which gives us the oportunity to register a javascript function to be executed whenever a certain event is happening. In this example we are _listening_ to the `"click"` event.
The `addEventListener` method takes two arguments: first the name of the event we are interested in hooking up to (which in this case is called `"click"`) and secondly a function, which should be executed whenever that event occurs. We also call this function a **callback function** because it's a function that we don't call ourselves, but which will be called at a later point in time by the Javascript runtime, more precisely it will be called when the "click" event occurs on that element.

Here's the code snippet for the dark mode button:

```js
darkModeButton.addEventListener("click", toggleDarkMode);
```

Now go to the website and click on the button to see if it actually will trigger a call to `toggleDarkMode`.

If that works fill in the code for the other 5 buttons.

## OPTIONAL: DRY Refactoring

You have written a lot of repetitive code now. There's a rule in Programming that dictates to stay DRY: Don't Repeat Yourself.

JavaScript has a lot of tools to reduce repetition in your code, which almost all are based on functions. Here we can use function parameters to abstract the buttonId and the className from the repetitive code. Here is a function that will combine all the steps. Notice how the parenthesis after the functionName now list two identifiers. These are the function parameters.

```js
const setupToggleClassButton = function(buttonId, className) {
  const mainElement = document.querySelector("main");
  const toggleClass = function() {
    mainElement.classList.toggle(className);
  };
  const button = document.querySelector(buttonId);
  button.addEventListener("click", toggleClass);
};
```

And here's how you could call that function to setup the dark mode button.

```js
setupToggleClassButton("#dark-mode-button", "dark");
```

With this function available, refactor your code for all the buttons. Why do you think programmers came up with DRY as a best practice. It's not just about having to type less.

## OPTIONAL: Extra Credit

Come up with new CSS classes which change some part of the styling and create buttons to toggle them on and off.

You can also emulate more complex CSS selectors to target specific elements of the page, e.g.

```css
.blue-headings h1,
.blue-headings h2 {
  color: blue;
}
```

but using JavaScript instead.
