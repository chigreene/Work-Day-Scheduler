window.onload = function (){

  function hour9(){
  function renderSavedTasks(){
    var storedTasks = localStorage.getItem("hour9SavedTask");
    console.log(storedTasks)
    $("#hour-9").children().eq(1).text(storedTasks);
  }


  function saveBtnClick (event){
    
    $(".saveBtn").on("click", function(event){
      event.preventDefault()
      event.target;
      localStorage.getItem("hour9SavedTask")
      
      var hour9SavedTask = $("#hour-9").children().eq(1).val()
      // console.log(savedTask)
      localStorage.setItem("hour9SavedTask", hour9SavedTask);
    
    })
  }

  saveBtnClick()
  renderSavedTasks()
}
hour9()



function hour10(){
  function renderSavedTasks10(){
    var storedTasks10 = localStorage.getItem("hour10SavedTask");
    
    $("#hour-10").children().eq(1).text(storedTasks10);
  }


  function saveBtnClick10 (){
    
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour10SavedTask");
      var savedTask10 = $("#hour-10").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour10SavedTask", savedTask10);
    
    })
  }

  saveBtnClick10()
  renderSavedTasks10()
}
hour10()

function hour11(){
  function renderSavedTasks11(){
    var storedTasks11 = localStorage.getItem("hour11SavedTask");
    // console.log(storedTasks)
    $("#hour-11").children().eq(1).text(storedTasks11);
  }


  function saveBtnClick11 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour11SavedTask")
      var savedTask11 = $("#hour-11").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour11SavedTask", savedTask11);
    
    })
  }

  saveBtnClick11()
  renderSavedTasks11()
}
hour11()

function hour12(){
  function renderSavedTasks12(){
    var storedTasks12 = localStorage.getItem("hour12SavedTask");
    // console.log(storedTasks)
    $("#hour-12").children().eq(1).text(storedTasks12);
  }


  function saveBtnClick12 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour12SavedTask")
      var savedTask12 = $("#hour-12").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour12SavedTask", savedTask12);
    
    })
  }

  saveBtnClick12()
  renderSavedTasks12()
}
hour12()

function hour13(){
  function renderSavedTasks13(){
    var storedTasks13 = localStorage.getItem("hour13SavedTask");
    // console.log(storedTasks)
    $("#hour-13").children().eq(1).text(storedTasks13);
  }


  function saveBtnClick13 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour13SavedTask")
      var savedTask13 = $("#hour-13").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour13SavedTask", savedTask13);
    
    })
  }

  saveBtnClick13()
  renderSavedTasks13()
}
hour13()

function hour14(){
  function renderSavedTasks14(){
    var storedTasks14 = localStorage.getItem("hour14SavedTask");
    // console.log(storedTasks)
    $("#hour-14").children().eq(1).text(storedTasks14);
  }


  function saveBtnClick14 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour14SavedTask")
      var savedTask14 = $("#hour-14").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour14SavedTask", savedTask14);
    
    })
  }

  saveBtnClick14()
  renderSavedTasks14()
}
hour14()

function hour15(){
  function renderSavedTasks15(){
    var storedTasks15 = localStorage.getItem("hour15SavedTask");
    // console.log(storedTasks)
    $("#hour-15").children().eq(1).text(storedTasks15);
  }


  function saveBtnClick15 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour15SavedTask")
      var savedTask15 = $("#hour-15").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour15SavedTask", savedTask15);
    
    })
  }

  saveBtnClick15()
  renderSavedTasks15()
}
hour15()

function hour16(){
  function renderSavedTasks16(){
    var storedTasks16 = localStorage.getItem("hour16SavedTask");
    // console.log(storedTasks)
    $("#hour-16").children().eq(1).text(storedTasks16);
  }


  function saveBtnClick16 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour16SavedTask")
      var savedTask16 = $("#hour-16").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour16SavedTask", savedTask16);
    
    })
  }

  saveBtnClick16()
  renderSavedTasks16()
}
hour16()

function hour17(){
  function renderSavedTasks17(){
    var storedTasks17 = localStorage.getItem("hour17SavedTask");
    // console.log(storedTasks)
    $("#hour-17").children().eq(1).text(storedTasks17);
  }


  function saveBtnClick17 (){
    $(".saveBtn").on("click", function(event){
      event.preventDefault();
      event.target;
      localStorage.getItem("hour17SavedTask")
      var savedTask17 = $("#hour-17").children().eq(1).val();
      // console.log(savedTask)
      localStorage.setItem("hour17SavedTask", savedTask17);
    
    })
  }

  saveBtnClick17()
  renderSavedTasks17()
}
hour17()
  
  var timeClasses = {
    past: 'past',
    present: 'present',
    future: 'future'
  };

  $('#currentDay').text(dayjs().format('MMMM D, YYYY'));

  // Example usage of the object to assign classes to time blocks
  $('.time-block').each(function () {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
    var currentHour = dayjs().hour();
  
    // Determine the appropriate class based on the current time
    var classToAdd;
    if (hourBlock < currentHour) {
      classToAdd = timeClasses.past;
    } else if (hourBlock === currentHour) {
      classToAdd = timeClasses.present;
    } else {
      classToAdd = timeClasses.future;
    }
  
    // Add the class to the element
    $(this).addClass(classToAdd);
  });
}
