//function to build handlers for all buttons used in the example code
//these can be called by onLoad as needed
function setupPages(){	
	
$('#page3testAjaxButton').bind("click", function () {
			//window.alert("page 3 Button Clicked!");
    $('#page3Text').attr('innerHTML','<h4> 3, but two were very average !!!  </h4>');
});

$('#page3ListButton').bind("click", function () {
	//full commenting is provided in lab 4 solutions for question 3
			//window.alert("page 3 Button Clicked!");
for (y=0; y<10; y++){
	$('#page3ExampleList').append('<li><h3 style="white-space:normal">This is list item '+ y + '</h3></li>');
	}
	$('#page3ExampleList').listview( 'refresh' );
});




$('#page4ListButton').bind("click", function () {
	//full commenting is provided in lab 4 solutions for question 4
	//window.alert("page 4 Button Clicked!");
	var currentText= $('#page4TextInput').val();
			//pass them out to an alert to make sure they are correct
			//window.alert(currentText);
	$('#page4InputList').append('<li><h3 style="white-space:normal">This is list item '+ page4ListCounter + '</h3><p>' + currentText + '</p></li>');
	//increment the global list index variable
	page4ListCounter++;
	$('#page4InputList').listview( 'refresh' );
});

$('#page5AJAXButton').bind("click", function(){
	//window.alert("page 5 Button Clicked!");
	//set text box to loading message
	$('#page5Text').attr('innerHTML','Loading Data.....');
	//example URL for AJAX remote call taken from
	//http://www.jquery4u.com/demos/ajax/
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
{
  tags:"Marvel comics",
  tagmode: "any",
  format: "json"
},
function(data) {
	$('#page5Text').attr('innerHTML','');
  $.each(data.items, function(i,item){			  
	  $('#page5ImageList').append('<li><a><img src="' + item.media.m + '"/><p>This is list item '+ i + '</p></a></li>');
    if ( i == 10 ) return false;
  });
});//end of JSON Call

});//end of page5AJAXButton click handler

//new handlers for touch events, swap with mouseUp/mouseDown for
//development in Dreamweaver or a web browser
    $('#page5AJAXButton').bind('mouseDown', function () {
//    $('#page5AJAXButton').bind('touchstart', function () {
      //do something with your buttons here
                                });
    $('#page5AJAXButton').bind('mouseUp', function () {
//    $('#page5AJAXButton').bind('touchend', function () {
		//cleanout the tag to prevent results being duplicated
        //do something with your buttons here
                                });

}//end of setupPages()