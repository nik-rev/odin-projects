# What I learnt from doing the Etch-a-sketch project

# **I learnt to split my functions.**
Instead of relying on huge functions, to make my life easier I learnt to split functions. 

For example:
```javascript
function onStartUp() {
createCanvas();
addResetButtonEventListener();
}
```

# **I learnt basic DOM manipulation skills.**
Being good at the DOM is extremely useful to me, as that allows me to interact with the page using JavaScript.

- With ```document.querySelector(".class")```, I can now select elements from the DOM. 
- With ```element.style.["style-type"]```, I can now manage specific styles on elements.
- By using ```element.classList.toggle("class")``` I am able to manage specific styles on elements now.

# **I learnt proper function naming, 1 function does 1 thing only.**
Every function should be as simple as possible. It should do exactly what the name of the function describes.

For example:
```javascript
// Utility 
getConverterWidth() extractNumbersFromString()
calculateCellWidth() calculateCellHeight() 
addCellEventListener() setRandomColor() 

// Main functions 
deleteCanvas() createCells()
configureEachDiv() createCanvas() 
addResetButtonEventListener()
```

