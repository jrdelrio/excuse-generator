/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let whoList = [
    "My wife ",
    "My dog ",
    "My neighbord ",
    "My grandma ",
    "My little sister ",
    "The priest of my church "
  ];
  let who = whoList[Math.floor(Math.random() * whoList.length)];

  let actionList = ["eated ", "kicked ", "broke ", "vomited ", "burned "];
  let action = actionList[Math.floor(Math.random() * actionList.length)];

  let thingList = [
    "my clock ",
    "my homework ",
    "my house ",
    "my car ",
    "the kitchen ",
    "my bed "
  ];
  let thing = thingList[Math.floor(Math.random() * thingList.length)];

  let whenList = [
    "yesterday",
    "this morning",
    "while I was getting a shower",
    "during the diner",
    "last night",
    "during my nap",
    "in my dreams"
  ];
  let when = whenList[Math.floor(Math.random() * whenList.length)];

  let excuse = who + action + thing + when;

  document.write(excuse);
  console.log("Hello Rigo from the console!");
};
