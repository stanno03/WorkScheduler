// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
// traverse the DOM and use a for each loop to run code that will apply a specific class to an element..
// depending on whether the time block is past,present,future. 
// could use data-number?
  $(".time-block").each(function () {
    currentBlock = parseInt($(this).attr("id"));
    currentTime = parseInt(dayjs().format('h'));

    // remove a class if there is one already applied then apply the correct one.
    if (currentBlock === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");

    }
    else if (currentBlock > currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");

    };

  });

// add a listner to the save button 
  $(".saveBtn").on('click', function () {

    //traverse dom using 'this' keyword to point to the element (save button) that was clicked then traverse dom to get 
    // the id for the time block and then store the input value of the text area element
    var tasks = $(this).siblings(".description").val();
    var thisHour = $(this).parent().attr("id");

    // save to local storage using the time id as key and user input as value. 
    localStorage.setItem(thisHour, tasks);
  });

  // use dayjs to get the current time and then change the format to the required format and then display.
  var currentDateTime = dayjs().format('dddd, MMMM, DD');
  $('#currentDay').text(currentDateTime);

  // get the user input that was save in localstorage and set the values of the corresponding textarea elements.
  // when the page is refreshed the user input should stay in the realtiv textarea.
  // use a specific id so the user input saves to the correct block
  $('#block9 .description').val(localStorage.getItem("9"));
  $('#block10 .description').val(localStorage.getItem("10"));
  $('#block11 .description').val(localStorage.getItem("11"));
  $('#block12 .description').val(localStorage.getItem("12"));
  $('#block1 .description').val(localStorage.getItem("1"));
  $('#block2 .description').val(localStorage.getItem("2"));
  $('#block3 .description').val(localStorage.getItem("3"));
  $('#block4 .description').val(localStorage.getItem("4"));
  $('#block5 .description').val(localStorage.getItem("5"));

});
