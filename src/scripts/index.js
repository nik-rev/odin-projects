import _ from "lodash";
// styles
import "../styles/hello.css";
import "../styles/goodbye.css";
import "../styles/background.css";
import "../styles/reset.css";

import Cat from "../assets/img/cat.jpg";
import printMe from "./print.js";
import print2 from "./print2.js";

print2();

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  element.classList.add("hello");

  const myCat = new Image();
  myCat.src = Cat;

  element.appendChild(myCat);

  return element;
}

document.body.appendChild(component());
