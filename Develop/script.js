// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

$(".time-block").each(function (){
  currentBlock = parseInt($(this).attr("id"));
  currentTime = parseInt(dayjs().format('h'));

  if(currentBlock == currentTime) {
    $(this).addClass("present");
  }
  else if(currentBlock > currentTime) {
    $(this).addClass("future");
  } 
  else{
  $(this).addClass("past");
 };

});

  
$(".saveBtn").on('click', function (){

  var tasks = $(this).siblings(".description").val();
  var thisHour = $(this).parent().attr("id");

  localStorage.setItem(thisHour, tasks);
});




});
