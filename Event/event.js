// Event Handlers from HTML //


var divNode = document.querySelector("div");
var buttonNode = document.querySelector("button");

var buttonClickHandler = function () {
    divNode.classList.toggle("lightColor");
}

buttonNode.addEventListener("click", buttonClickHandler);


var buttonNode2 = document.querySelector(".button2");

var turnOffHandler = function() {
    buttonNode.removeEventListener("click", buttonClickHandler);
}

buttonNode2.addEventListener("click", turnOffHandler);




