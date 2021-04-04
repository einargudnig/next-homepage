// As the months pass by the more I know about React, in this article I just want to go through a *trick* I use when a component starts to get a little confusing with conditionals. Let us take a look at a simple dummy few functions to run a `console.log`:

// ```javascript
// function start() {
//   console.log("Starting...");
// }

// function pause() {
//   console.log("Pausing...");
// }

// function stop() {
//   console.log("Stopping!");
// }
// ```

// Alright, if we call each function we should get a console log with the respective content:

// ```js
// start(); // Starting...
// pause(); // Pausing...
// stop(); // Stopping!
// ```

// Looking good!

// > These are simple functions, if you're writing complex functions I don't advice using what we're about to use in this article.

// ---

// # Array array array

// Since these are simple functions we can use an array to use the functions instead of having individual functions, such as:

// ```js
// const actions = {
//   start: () => console.log("Starting..."),
//   pause: () => console.log("Pausing..."),
//   stop: () => console.log("Stopping!")
// }
// ```

// Now we can call it by using:

// ```js
// actions["pause"](); // Pausing...
// ```

// We still go a little further and make sure our action names are always the same by creating an object with it:

// ```js
// const actionNames = {
//   START: "start",
//   PAUSE: "pause",
//   STOP: "stop"
// }
// ```

// Let us change our `actions` array to make sure it reflects with our brand new `actionNames`:

// ```js
// const actions = {
//   [actionNames.START]: () => console.log("Starting..."),
//   [actionNames.PAUSE]: () => console.log("Pausing..."),
//   [actionNames.STOP]: () => console.log("Stopping!")
// }
// ```

// Now instead of calling `actions["stop"]();` we can use our `actionNames`:

// ```js
// actions[actionNames.STOP](); // Stopping!
// ```

// ---

// # Without functions

// Let me give you one more examples, say we want to display an online presence, it can either be **online**, **offline** or away, both content and background should change, we can also use an associative array to accomplish that, take a look:

// ```js
// const status = {
//   ONLINE: {
//     background: "#09ded8",
//     title: "User is online 🎉"
//   },
//   OFFLINE: {
//     background: "#fe564c",
//     title: "Oh bummer, user is offline 😔"
//   },
//   AWAY: {
//     background: "#fac82b",
//     title: "User is away, should be right back 👀"
//   }
// }
// ```

// As an example if you call `status["ONLINE"]` you'll get the following in return:

// ```js
// {
//   background: "#09ded8",
//   title: "User is online 🎉"
// }
// ```

// That's it! You can play around with the code [here](https://codesandbox.io/s/silly-dhawan-c5qpz?file=/src/index.js)

// ANOTHER ONE

// ---
// title: "Dark and light mode with CSS and JavaScript"
// date: "2020-04-22"
// og:
//   description: "Implement dark mode with only CSS and JavaScript"
//   image: "https://telmo.im/og/darkmodecssjs.png"
// author:
//   twitter: "telmo"
//   name: "Telmo Goncalves"
// ---

// I've implemented dark/light mode before using `styled-components`
// as well as `SCSS`, but this time I wanted to do it just using `CSS`,
// so gave it a go, and it's so simple.

// ## The CSS

// First of all lets create a `style.css` file, it can be in the root
// of our project, we'll keep this simple and straight to the point.

// Open your command line, navigate to whatever folder you keep your projects
// and run the following:

// ```bash
// take dark-light-mode && touch style.css
// ```

// > If you're wondering what `take` does, it'll create a new directory for you and auto navigate to it.

// Now, in our `style.css` file lets put the following code, this will be the variables for the default (light) theme:

// ```css
// :root {
//   --bg-color: #fff;
//   --text-color: #000;
// }
// ```

// In order to see this working, we need to create a `HTML` file, so lets do
// that, in your command line run:

// ```bash
// touch index.html
// ```

// And put the following code, you can notice we're already importing our
// `style.css` file:

// ```html:5
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Light and Dark Mode</title>
//   <link rel="stylesheet" type="text/css" href="style.css">
// </head>
// <body>
//   <h1>Our own dark / light app!</h1>
// </body>
// </html>
// ```

// If you go ahead and open `index.html` in your browser you should see
// a title **"Our own dark / light app!"**.

// <br />

// Now let us start adding some styling. We'll be using `var(--variable-name)`, that's
// the way you can re-use and call variables in css:

// ```css:6-9
// :root {
//   --bg-color: #fff;
//   --text-color: #000;
// }

// body {
//   background-color: var(--bg-color);
//   color: var(--text-color);
// }
// ```

// If you go ahead and refresh your page it should look exactly the same, and that's alright.

// <br />

// Before jumping into the **JavaScript** part, we can add our variables for the dark
// theme already:

// ```css:6-9
// :root {
//   --bg-color: #fff;
//   --text-color: #000;
// }

// [data-theme="dark"] {
//   --bg-color: #000;
//   --text-color: #fff;
// }

// body {
//   background-color: var(--bg-color);
//   color: var(--text-color);
// }
// ```

// What are we doing here?

// - Using `[data-theme="dark"]` that we'll cover in the JavaScript section;
// - Swaping the background and the text colors from white to black and vice-versa;

// ---

// ## The JavaScript

// Alright, now we just need a small JavaScript code to get this working, in
// your `index.html` file add the following code:

// ```html:7-12
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Light and Dark Mode</title>
//   <link rel="stylesheet" type="text/css" href="style.css">

//   <script type="text/javascript">
//     // Wait for document to load
//     document.addEventListener("DOMContentLoaded", function(event) {
//       document.documentElement.setAttribute("data-theme", "dark");
//     });
//   </script>
// </head>
// <body>
//   <h1>Our own dark / light app!</h1>
// </body>
// </html>
// ```

// Now, if you refresh the page you'll see that it switched to a `#000` background
// and `#fff` text. Cool beans right?

// Lets break this down, what `document.documentElement` gets is the `html` tag from
// our `index.html`, so even without the JavaScript code we could do:

// ```html:!2
// <!DOCTYPE html>
// <html data-theme="dark">

// <!-- Rest of the code -->
// ```

// This would have exactly the same effect, but we want to use JavaScript so we
// can change it dynamically.

// <br />

// ## The Switch

// Lets make some changes to our JavaScript and also add a button to our `index.html` that will trigger the theme change:

// > Check the comments in the code, it might be easier to keep track of what's happening

// ```html:31,!-12-26
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Light and Dark Mode</title>
//   <link rel="stylesheet" type="text/css" href="style.css">

//   <script type="text/javascript">
//     // Wait for document to load
//     document.addEventListener("DOMContentLoaded", function(event) {
//       document.documentElement.setAttribute("data-theme", "light");

//       // Get our button switcher
//       var themeSwitcher = document.getElementById("theme-switcher");

//       // When our button gets clicked
//       themeSwitcher.onclick = function() {
//         // Get the current selected theme, on the first run
//         // it should be `light`
//         var currentTheme = document.documentElement.getAttribute("data-theme");

//         // Switch between `dark` and `light`
//         var switchToTheme = currentTheme === "dark" ? "light" : "dark"

//         // Set our currenet theme to the new one
//         document.documentElement.setAttribute("data-theme", switchToTheme);
//       }
//     });
//   </script>
// </head>
// <body>
//   <button id="theme-switcher">Switch themes!</button>
//   <h1>Our own dark / light app!</h1>
// </body>
// </html>
// ```

// <br />

// And that's it! Try it out, it should go from `light` to `dark` and vice-versa.

// <hr />

// If you have any questions you can always drop me a message on Twitter 👇
