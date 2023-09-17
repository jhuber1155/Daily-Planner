var containerDiv = (document.body.children[1]);
var divEl = document.createElement("div");
var divEl2 = document.createElement("div");
var textAreaEl = document.createElement("textarea");
var buttonEl = document.createElement("button");
var iEl = document.createElement("i");



var currentTime = dayjs();

var hourList = [9, 10, 11, 12, 1, 2, 3, 4, 5];

function createHourBlock() {
containerDiv.appendChild(divEl);
divEl.setAttribute("id", "hourId")
divEl.setAttribute("class", "row time-block past")
divEl.appendChild(divEl2);
divEl2.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
divEl2.textContent = " ";
divEl.appendChild(textAreaEl);
textAreaEl.setAttribute("class", "col-8 col-md-10 description");
textAreaEl.setAttribute("rows", "3");
divEl.appendChild(buttonEl);
buttonEl.setAttribute("class", "btn saveBtn col-2 col-md-1");
buttonEl.setAttribute("aria-label", "save");
buttonEl.appendChild(iEl);
iEl.setAttribute("class", "fas fa-save");
iEl.setAttribute("aria-hidden", "true");
};

for (var i = 0; i < hourList.length; i++){
  createHourBlock();
  divEl2.textContent = hourList[i];
};


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
});

var headerDate = dayjs().format("dddd MMMM, D");
  $("#currentDay").text(headerDate);




//write a function using > = < when it comes to dayjs and make it equivalent to the time past present future. An example would be if hour<currentimehour then set class past. If hour===currenttimehour the set present. If hour>currenttimehour then set class future.

//class hour =

  