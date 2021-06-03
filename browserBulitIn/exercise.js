

(function exercise() {
        console.log("Dusan Stankovic");
})();


// window.navigator


function winNav() {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.appName);
}
winNav()

function isOnline() {
    if (window.navigator.onLine) {
        console.log("online");
    } else {
        console.log("offline");
    }
}
isOnline()


// window.screen

function winScreen() {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    console.log(window.screen.height);
}
winScreen()


// window.location

function winLocation() {
    console.log(window.location.href);
    console.log(window.location.host);
    console.log(window.location.protocol);
    console.log(window.location.search);
}
winLocation()

function winReload() {
    window.location.reload;
}

function redirectToWebsite(){
    window.location.replace("https://www.wikipedia.org/")
}


// window.localStorage

function storesData() {
    window.localStorage.setItem("lastName", "Stankovic");
    window.localStorage.setItem("firstName", "Dusan");
}


function readData() {
    var data = localStorage.getItem("firstName");
    if (!data) {
        return "there is no data";
    } else {
        return data;
    }
}
console.log(readData());

function removeData () {
    lacalStorage.removeItem("firstName")
}

console.log(removeData());



// sessionStorage

function sessionData() {
    window.sessionStorage.setItem("Pet", "Cat");
}
sessionData();
  
  
function setSesName() {
    window.sessionStorage.setItem("Name", "Dusan");
    window.sessionStorage.setItem("Age", "36");
}
setSesName();

  
function getSesName() {
    console.log(window.sessionStorage.getItem("Name"));
}
getSesName();

  
function removeSessInfo(a) {
    window.sessionStorage.removeItem("Name");
}
removeSessInfo("Name");


function getSessName() {
    if (window.sessionStorage.getItem("Name")) {
      console.log(window.sessionStorage.getItem("Name"));
    } else {
      console.log("There is no data");
    }
}
getSessName()



// window.history

function goBack() {
    window.history.go(-2);
}
goBack();
  
  
window.history.forward();
window.history.back();




// Window Methods

function submitAnswer() {
    alert("Hello dear user!");
  
    var userAnswer = prompt("Please enter your name:");
    var getUserAnswerLength = userAnswer.length;
  
    //Making sure that prompt() can't be empty
    if (getUserAnswerLength > 0) {
      userAnswer;
    } else if (getUserAnswerLength === 0) {
      submitAnswer();
    }
    //
  
    var userConfirmation = confirm(
      "We will submit this answer now!" + "\nYour answer: " + userAnswer
    );
    if (userConfirmation === true) {
      alert("You have successfully submitted the answer.");
    }
}
  
submitAnswer();











