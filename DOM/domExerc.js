// selecting one-multiple elements

function background() {
    return document.getElementById('nesto').className = "classWithBackgroundColor";
};

background();

function background() {
    return document.querySelector('section').className = "classWithBackgroundColor";
};

background();


// traversing

function bgColor() {
    var myList = document.querySelector("div").nextElementSibiling.firstElementChild.firstElementChild;
    myList.className = "active";
}
bgColor();

function removeClass() {
    var classRemove = document.getElementsByClassName("active");
    classReove[0].classList.remove("active");
}
removeClass();

function changeClass() {
    var firstLi = document.querySelector("div").firstElementChild.firstElementChild.childElementCount;
    firstLi.className = "active";
}
changeClass();



///// zadnja u prvoj, traversing, acces/update /////

document.addEventListener('DOMContentLoaded', function () {
    console.log(document.querySelectorAll("body ul"))
    var ul1 = document.querySelectorAll("body ul")[0];
    //ul1.setAttribute("id", "secondList")//
    
    updateListElements(ul1.querySelectorAll("li"), "list-element", false);
    var ul2 = document.querySelectorAll("body ul")[2];
    updateListElements(ul2.querySelectorAll("li"), "third-list-element", true)
});

var listItem = document.createElement('li');
var text = document.createTextNode('some text');



function updateListElements(elements, className, toUpperCase) {
    var length = elements.length;
    console.log(elements);
    console.log(length);
    for (var i = 0; i < length; i++) {
        var li = elements[i];
        console.log(li);
        li.className = className;
        if (toUpperCase) {
            li.innerHTML = li.innerHTML.toUpperCase();
        }
    }
}
