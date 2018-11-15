var member = [
    {"name": "Harry Potter", "profilePic": "https://image.afcdn.com/story/20180903/trois-nouveaux-livres-harry-potter-1298096_w767h767c1cx252cy106.jpg", "index": 1} 
    
]

var meetup = [
	
]

var input = document.getElementById("")

/*
var complexData = [
  {'title': 'Needfinding', 'profilePic': 'images/lorempixel.city.1.jpeg', 'index': 2},
  {'title': 'Prototyping', 'profilePic': 'images/lorempixel.technics.1.jpeg', 'index': 3},
  {'title': 'Heuristic Evaluation', 'profilePic': 'images/lorempixel.abstract.1.jpeg', 'index': 4},
  {'title': 'Visualization', 'profilePic': 'images/lorempixel.abstract.8.jpeg', 'index': 5},
  {'title': 'Social design', 'profilePic': 'images/lorempixel.people.2.jpeg', 'index': 6},
  {'title': 'Gestural interaction', 'profilePic': 'images/lorempixel.technics.2.jpeg', 'index': 7},
  {'title': 'Design tools', 'profilePic': 'images/lorempixel.city.2.jpeg', 'index': 8}
]*/



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedProjects");
  var meetupArray = JSON.parse(localStorage.getItem('meetupArray'));
  for(var i = 0; i<meetupArray.length;i++){
    var curData = meetupArray[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
  // compile the template
  // BEGIN - STEP 1
  });

var suggest = document.getElementById("suggest");
suggest.onclick = function(){
  var location = document.getElementById("location-name").value;
//  localStorage.setItem('newLocation',location);
  var time = document.getElementById("time-input").value;
  //localStorage.setItem('newTime',time);
  var comment = document.getElementById("message-text").value;
  //localStorage.setItem('newComment',comment);

  location.value = localStorage.getItem('location-name');
  time.value = localStorage.getItem('time-input');
  comment.value = localStorage.getItem('message-text');
  
  localStorage.setItem('location-name',location.value);
  localStorage.setItem('time-input',time.value);
  localStorage.setItem('message-text',comment.value);
  

  var suggestion={"location":location,"time":time,"comment":comment};
  console.log(suggestion);
  //var suggestionObj = JSON.parse(suggestion);
  //var html = template(suggestion);
  //var parentDiv = $("#templatedProjects");
  //parentDiv.append(html);
  localStorage.setItem("newSuggestion",JSON.stringify(suggestion));
  var existingItems = JSON.parse(localStorage.getItem('meetupArray'));
  if(existingItems == null){
    existingItems = [];
  }
  existingItems.push(suggestion);
  localStorage.setItem('meetupArray',JSON.stringify(existingItems));

  window.location.reload();
   /* $('.modal').removeClass('in');
   $('.modal').css("display", "none");
   */
   // $(".modal").hide();
   // $('.modal').attr("aria-hidden","true");  
   // $("modal-fade").modal();
   // $('.modal-backdrop').hide();
   // $('body').removeClass('modal-open');
  //var suggestion = $("#templatedProjects");
  //suggestion.append(html);
}

var splitSuggest = document.getElementById("splitsuggest");
splitSuggest.onclick = function(){
  var location = document.getElementById("location-name").value;
//  localStorage.setItem('newLocation',location);
  var time = document.getElementById("time-input").value;
  //localStorage.setItem('newTime',time);
  var comment = document.getElementById("message-text").value;
  //localStorage.setItem('newComment',comment);
  var suggestion={"location":location,"time":time,"comment":comment};
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var html = template(suggestion);
  var parentDiv = $("#templatedProjects");
  var currDiv = parentDiv.append(html);
}

var edit = document.getElementById("saveEdits");
edit.onclick = function(){
  var location = document.getElementById("location-name").value;
  //localStorage.setItem('newLocation',location);
  var time = document.getElementById("time-input").value;
  //localStorage.setItem('newTime',time);
  var comment = document.getElementById("message-text").value;
  //localStorage.setItem('newComment',comment);
  var suggestion={"location":location,"time":time,"comment":comment};
  var source = $("#entry-template").html();

  var template = Handlebars.compile(source);
  var edited = template(suggestion);
  var parentDiv = $("#templatedProjects");
}


function going(){
  var name = "Going: You, Harry Potter, Tony Stark, Rey"
  $("#going").html(name);
  localStorage.setItem('rsvpgoing',name);
}

function notgoing(){
  var name = "Not Going: You, Harry Potter, Tony Stark, Rey"
  $("#notgoing").html(name);
  localStorage.setItem('rsvpnotgoing',name);
}

//document.getElementById("submit").addEventListener("click")
/*function submit(){
  var source   = $("#entry-template").html();
  $("form#suggest-form :input").each(function(){
    var input = $(this);
  })
  var template = Handlebars.compile(source);
  var html = template(meetup);
  var suggestion = $("#templatedProjects");
  suggestion.append(html);
}*/
  // start with a simple template
  /*var html = template(meetup);
  console.log(html);
  var parentDiv = $("#templatedProjects");

  parentDiv.append(html);
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < meetup.length; i++) {
    var curData = meetup[i];
    var curHtml = template(curData);
    //parentDiv.append(curHtml);
  })*/
  
  // END - STEP 1


  // BEGIN - STEP 2
  /*
  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#myName").html(name);
  }
  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#myName").html(newName);
      localStorage.setItem('customName', newName);
    }
  });
  */
  // END - STEP 2


  // BEGIN - STEP 3
  /*
  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var queryParams = new URLSearchParams(window.location.search);
  var projectTitle = queryParams.get('project');
  console.log('query for', projectTitle);
  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }
  */
  // END - STEP 3
//});