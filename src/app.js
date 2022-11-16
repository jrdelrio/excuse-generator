/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let whoList = ["My cat", "My dog", "My dad", "My iguana", "My grandfather"];
  let actionList = ["ate", "watched", "broke", "pee", "vomit"];
  let whatList = ["my bed", "the kitchen", "my house", "my cellphone"];
  let whenList = ["yestaday", "last night"];

  let who = whoList[Math.floor(Math.random() * whoList.length)];
  let action = actionList[Math.floor(Math.random() * actionList.length)];
  let what = whatList[Math.floor(Math.random() * whatList.length)];
  let when = whenList[Math.floor(Math.random() * whenList.length)];

  const excusa = document.querySelector("#js-excuse");
  excusa.innerHTML = `${who} ${action} ${what} ${when}.`;
};