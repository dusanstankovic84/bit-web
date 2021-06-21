
// intro

$(document).ready(function() {
    console.log("Hello, world");
});


$(window).on("load", function(){
    console.log("Hello, world")
});


// selecting

$("ul li:first").css("border-bottom", "solid 1px");

$("li").css("text-transform", "uppercase");

$("li.active").css("color", "red");

$("li:nth-child(4)").css("background-color", "yellow");

//$('li:not(:first-child):not(:last-child)').css('color', 'red');
