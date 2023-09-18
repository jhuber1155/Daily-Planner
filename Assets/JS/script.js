var saveNoteButton = $(".saveBtn");
var UserDescription = $("textarea");

var pastPresentFuture = (document.body.children[1].children[0])

var hour9Grab = $("#hour-9");
hour9Grab.attr("data-hour", "9");
var hour10Grab = $("#hour-10");
hour10Grab.attr("data-hour", "10");
var hour11Grab = $("#hour-11");
hour11Grab.attr("data-hour", "11");
var hour12Grab = $("#hour-12");
hour12Grab.attr("data-hour", "12");
var hour13Grab = $("#hour-13");
hour13Grab.attr("data-hour", "13");
var hour14Grab = $("#hour-14");
hour14Grab.attr("data-hour", "14");
var hour15Grab = $("#hour-15");
hour15Grab.attr("data-hour", "15");
var hour16Grab = $("#hour-16");
hour16Grab.attr("data-hour", "16");
var hour17Grab = $("#hour-17");
hour17Grab.attr("data-hour", "17");

var currentTime = dayjs().format("H");
console.log(currentTime);

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

saveNoteButton.on("click", function(event){
  event.preventDefault();
  var element = event.target

    var hourlyNotes = {
    hour9Note: hour9Grab.UserDescription.value,
    hour10Note: hour10Grab.UserDescription.value,
    hour11Note: hour11Grab.UserDescription.value,
    hour12Note: hour12Grab.UserDescription.value,
    hour13Note: hour13Grab.UserDescription.value,
    hour14Note: hour14Grab.UserDescription.value,
    hour15Note: hour15Grab.UserDescription.value,
    hour16Note: hour16Grab.UserDescription.value,
    hour17Note: hour17Grab.UserDescription.value,
  };

  function storeNotes(){
  localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));
  retrieveNotes();
  };
//NOT THIS RIGHT? BECAUSE THIS IS A LOT AND SEEMS WRONG
    if(element.matches ($("#hour-9".children().eq(2)))){
    localStorage.setItem("hour9Note", JSON.stringify (this.hour9Note));
    }else if(element.matches ($("#hour-10".children().eq(2)))){
      localStorage.setItem("hour10Note", JSON.stringify (this.hour10Note));
    }else if(element.matches ($("#hour-11".children().eq(2)))){
      localStorage.setItem("hour11Note", JSON.stringify (this.hour11Note));
    }else if(element.matches ($("#hour-12".children().eq(2)))){
      localStorage.setItem("hour12Note", JSON.stringify (this.hour12Note));
    }else if(element.matches ($("#hour-13".children().eq(2)))){
      localStorage.setItem("hour13Note", JSON.stringify (this.hour13Note));
    }else if(element.matches ($("#hour-14".children().eq(2)))){
      localStorage.setItem("hour14Note", JSON.stringify (this.hour14Note));
    }else if(element.matches ($("#hour-15".children().eq(2)))){
      localStorage.setItem("hour15Note", JSON.stringify (this.hour15Note));
    }else if(element.matches ($("#hour-16".children().eq(2)))){
      localStorage.setItem("hour16Note", JSON.stringify (this.hour16Note));
    }else if(element.matches ($("#hour-17".children().eq(2)))){
      localStorage.setItem("hour17Note", JSON.stringify (this.hour17Note));
  };
});
});

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function changeBackground(){
  var hour = pastPresentFuture.getAttribute("data-hour");
  if (hour<currentTime){
    pastPresentFuture.removeAttribute("class", "present");
    pastPresentFuture.setAttribute("class", "past");
  }else if(hour>currentTime){
    pastPresentFuture.removeAttribute("class", "present");
    pastPresentFuture.setAttribute("class", "future");
  };
};

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function retrieveNotes() {
    var storedNotes = JSON.parse(localStorage.getItem("hourlyNotes"));
  };
  //NOT THIS RIGHT? BECAUSE THIS IS A LOT AND SEEMS WRONG
  if(element.matches($("#hour-9".children().eq(2)))){
    JSON.parse(localStorage.getItem("hour9Note"));
  }else if(element.matches($("#hour-10".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour10Note"));
  }else if(element.matches($("#hour-11".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour11Note"));
  }else if(element.matches($("#hour-12".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour12Note"));
  }else if(element.matches($("#hour-13".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour13Note"));
  }else if(element.matches($("#hour-14".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour14Note"));
  }else if(element.matches($("#hour-15".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour15Note"));
  }else if(element.matches($("#hour-16".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour16Note"));
  }else if(element.matches($("#hour-17".children().eq(2)))){
  JSON.parse(localStorage.getItem("hour17Note"));
  };

  // TODO: Add code to display the current date in the header of the page.
  var headerDate = dayjs().format("dddd MMMM, D");
  $("#currentDay").text(headerDate);

  

  

// var containerDiv = (document.body.children[1]);
// var divEl = document.createElement("div");
// var divEl2 = document.createElement("div");
// var textAreaEl = document.createElement("textarea");
// var buttonEl = document.createElement("button");
// var iEl = document.createElement("i");

// function createHourBlock() {
// containerDiv.appendChild(divEl);
// divEl.setAttribute("id", "hourId")
// divEl.setAttribute("class", "row time-block present")
// divEl.appendChild(divEl2);
// divEl2.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
// divEl2.textContent = " ";
// divEl.appendChild(textAreaEl);
// textAreaEl.setAttribute("class", "col-8 col-md-10 description");
// textAreaEl.setAttribute("rows", "3");
// divEl.appendChild(buttonEl);
// buttonEl.setAttribute("class", "btn saveBtn col-2 col-md-1");
// buttonEl.setAttribute("aria-label", "save");
// buttonEl.appendChild(iEl);
// iEl.setAttribute("class", "fas fa-save");
// iEl.setAttribute("aria-hidden", "true");
// };

// for (var i = 0; i < hourList.length; i++){
//   createHourBlock();
// };