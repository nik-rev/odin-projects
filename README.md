## Features
- Mobile compatible (Responsive design!)
- Can create todos, edit title, description and date, mark as complete, mark as favorite, each todo also has 1 of 3 priorities and color coded to show which priority it is 
- Todos are stored and saved on the device's local storage
- Light and dark theme

## Screenshots
<img src="https://github.com/nikitarevenco/todo/assets/154856872/0aac5874-e7c8-4f51-a838-8dca14b4513a" height="350px" width="auto">
<img src="https://github.com/nikitarevenco/todo/assets/154856872/f8344ca4-ad2f-465a-8d8b-618a3ed7adb3" height="350px" width="auto">

## Difficulties encountered
- Synchronise each todo across the entire project without using classes, had to store them purely as objects in localstorage, with each project representing a key and each todo relating to that project representing the value
- Having so many files made navigation easier but it was also more difficult to organise everything
- Working with JSON-type data for the first time was more confusing than I initally thought, having to use `JSON.parse()` and `JSON.stringify()` all the time was pretty annoying
- When making logic for the responsive design I had to implement some logic specifically that turned the sidebar into a menu button that opens when clicked and closes when navigating to another tab, it sounds simple but it was more difficult for me than I imagined initially

## Estimations
- Time to complete project (estimated): ~7-10 days
- Time to complete project (actual): 3 days
Overall, I was very happy with the pace I was going at, the first two days I focused on features and on the third day I mostly focused on adding small changes such as hover effects, dark/light theme and general UI optimisations

## Tools used
<p align="left">
  <img src="https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript" height="30" />
  <img src="https://img.shields.io/badge/-HTML5-000?&logo=html5" height="30" />
  <img src="https://img.shields.io/badge/-CSS3-000?&logo=css3" height="30" />
  <img src="https://img.shields.io/badge/-npm-000?&logo=npm" height="30" />
  <img src="https://img.shields.io/badge/-Webpack-000?&logo=webpack" height="30" />
</p>
