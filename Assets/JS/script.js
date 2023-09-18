var divContainer = $(".container-fluid");
var UserDescription = $("textarea");

var hour9Grab = $("#hour-09");
var hour10Grab = $("#hour-10");
var hour11Grab = $("#hour-11");
var hour12Grab = $("#hour-12");
var hour13Grab = $("#hour-13");
var hour14Grab = $("#hour-14");
var hour15Grab = $("#hour-15");
var hour16Grab = $("#hour-16");
var hour17Grab = $("#hour-17");

divContainer.on("click", ".saveBtn", function(event){
  event.preventDefault();

  var hourlyNotes = {
    hour9Note: hour9Grab.children().eq(1).val(),
    hour10Note: hour10Grab.children().eq(1).val(),
    hour11Note: hour11Grab.children().eq(1).val(),
    hour12Note: hour12Grab.children().eq(1).val(),
    hour13Note: hour13Grab.children().eq(1).val(),
    hour14Note: hour14Grab.children().eq(1).val(),
    hour15Note: hour15Grab.children().eq(1).val(),
    hour16Note: hour16Grab.children().eq(1).val(),
    hour17Note: hour17Grab.children().eq(1).val(),
  };
    console.log(hourlyNotes);
    function storeNotes(){
    localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));
    // retrieveNotes();
    };
  function retrieveNotes() {
    hourlyNotes = JSON.parse(localStorage.getItem("hourlyNotes"));
  };
  // changeBackground();
  storeNotes();
  retrieveNotes();
});

var currentTime = dayjs().format("H"); // string

var headerDate = dayjs().format("dddd MMMM, D");
$("#currentDay").text(headerDate);

function changeBackground(){
  var rows = $(".row")

for (i = 0; i < rows.length; i++)
{
  var hour = rows[i].dataset.hour;
 
  if (hour < currentTime) {
    $(`#hour-${hour}`).addClass("past")
    // $('#hour-' + hour).addClass("past")
  }
  if (hour === currentTime) {
    $(`#hour-${hour}`).addClass("present")
  }
  if (hour > currentTime) {
    $(`#hour-${hour}`).addClass("future")
  }
}
};

// function init(){
  changeBackground();
//   storeNotes();
//   retrieveNotes();
// };

// function retrieveNotes() {
//   hourlyNotes = JSON.parse(localStorage.getItem("hourlyNotes"));
//   };

// function storeNotes(){
//   localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));
//   retrieveNotes();
//   console.log(retrieveNotes);
//   };


// init();



  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

  

  // TODO: Add code to display the current date in the header of the page.
