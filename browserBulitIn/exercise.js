

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


// window.history











