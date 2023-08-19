// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
window.onload = function (){
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  //
  function renderSavedTasks(){
    var storedTasks = localStorage.getItem("savedTask");
    console.log(storedTasks)
    $(".description").text(storedTasks);
  }


  function saveBtnClick (){
    $(".saveBtn").on("click", function(event){
      localStorage.getItem("savedTask")
      alert("Button was clicked")
      var savedTask = $(".description").val()
      // console.log(savedTask)
      localStorage.setItem("savedTask", savedTask);
    
    })
  }

  saveBtnClick()
  renderSavedTasks()


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
 // Display the current date in the header
 $('#currentDay').text(dayjs().format('MMMM D, YYYY'));

 // Iterate through each time block and set its class based on the current time
//  $('.time-block').each(function () {
//    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
//    var currentHour = dayjs().hour();

//    $(this).removeClass('past present future'); // Reset classes first

//    if (hourBlock < currentHour) {
//      $(this).addClass('past');
//    } else if (hourBlock === currentHour) {
//      $(this).addClass('present');
//    } else {
//      $(this).addClass('future');
//    }

//    // Retrieve saved data from localStorage
//    var savedData = localStorage.getItem('hour-' + hourBlock);
//    if (savedData) {
//      $(this).find('.description').val(savedData);
//    }
//  });

//  // Listener for click events on the save button
//  $('.saveBtn').click(function () {
//    var timeBlock = $(this).closest('.time-block');
//    var hourId = timeBlock.attr('id');
//    var userInput = timeBlock.find('.description').val();

//    // Use the id in the containing time-block as a key to save the user input in local storage
//    localStorage.setItem(hourId, userInput);
//  });
}