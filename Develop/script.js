// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function() {

 // var currentDateTime = dayjs().format('dddd, MMMM, DD');
    // $('#currentDay').text(currentDateTime);

  $(".saveBtn").on("click", function () {

    // traverse DOM to get the elements for time block and the user input value
    var tasks = $(this).siblings(".description").val();
    var thisHour = $(this).parent().attr("id")

    // save to local storage as key-value
    localStorage.setItem(thisHour, tasks);

    // apply background color depending on whether the time block is past/present/future.
     
      $("#block").each(function () {
        currentBlock = $(this).parent().attr("id");
        currentTime = dayjs().format(h);

        if (currentBlock === currentTime) {
          $(this).applyClass("present");
        }
        else if (currentBlock > currentTime) {
          $(this).applyClass("future");
        }
        else (currentBlock < currentTime) 
          $(this).applyClass("past");
        
      });
    
  });
});
