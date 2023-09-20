var divContainer = $(".container-fluid");
var UserDescription = $("textarea");

//These variables are grabbing the corresponding id in the HTML and allowing me to correctly assign the appropriate time to the planner later with my object.
var hour9Grab = $("#hour-09");
var hour10Grab = $("#hour-10");
var hour11Grab = $("#hour-11");
var hour12Grab = $("#hour-12");
var hour13Grab = $("#hour-13");
var hour14Grab = $("#hour-14");
var hour15Grab = $("#hour-15");
var hour16Grab = $("#hour-16");
var hour17Grab = $("#hour-17");

//This variable is the dayjs current time formatted to be a 24 hour clock which will be used to compare to the hourly planner and used as a metric if the planner is in the past, present or future.

var currentTime = dayjs().format("H");

//This is the variable for the header clock, displaying the correct format as seen in the demonstration.
var headerDate = dayjs().format("dddd MMMM, D");
$("#currentDay").text(headerDate);

//This will be the first function running. It will pull any stored notes from local storage and parse them. Then it will store any notes the user saves when click the save function. It will also change the background to the appropriate color based on the time.
function init(){
    retrieveNotes();
    storeNotes();
    changeBackground();
};
//This function will change the background color of the planner hour by comparing the saved hour with the currentTime variable. It will create a variable rows which is grabbing the row class. It then runs a for loop for the length of rows. It takes that array and then looks for the dataset, specifically the hour value. It then compares that hour value to that of currentTime. The use of a string literal is letting us use the literal number to insert itself into the hour id to compare to the current time. It will then add the appropriate class depending on whether that number is smaller, denoting the past, if it is equal, which then indicates the present, or if it is greater which designates it as the future compared to the current time.
function changeBackground(){
  var rows = $(".row")

for (i = 0; i < rows.length; i++)
{
  var hour = rows[i].dataset.hour;
 
  if (hour < currentTime) {
    $(`#hour-${hour}`).addClass("past")
  }
  if (hour === currentTime) {
    $(`#hour-${hour}`).addClass("present")
  }
  if (hour > currentTime) {
    $(`#hour-${hour}`).addClass("future")
  };
};
};
  changeBackground();

  //This is a click button event that creates an object when the save button is clicked on the right hand side.
divContainer.on("click", ".saveBtn", function(event){
  event.preventDefault();
//When the save button is clicked, it will create an array of variables into an object, one that corresponds with the appropriate hour in which the text was typed into.
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
    //This function will take the notes typed into each hour and put them into the object hourlyNotes and then stringify them with JSON to save them in local storage to be stored and retrieved later.
    function storeNotes(){
    localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));
    };
    //This function will take the stored notes in local storage, parse them using JSON, and then distribute them into the hourlyNotes object to align with the corresponding hour.
  function retrieveNotes() {
    hourlyNotes = JSON.parse(localStorage.getItem("hourlyNotes"));
  };

  storeNotes();
  retrieveNotes();
});

init();

