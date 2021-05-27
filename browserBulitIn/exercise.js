

(function exercise() {
        console.log("Dusan Stankovic");
})();

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

function winScreen() {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    console.log(window.screen.height);
}
winScreen()


function winLoc() {
    console.log(window.location.href);
    console.log(window.location.host);
    console.log(window.location.protocol);
    console.log(window.location.search);
}
winLoc()

function winReload() {
    window.location.reload;
}

function redirectToWebsite(){
    window.location.replace("https://www.wikipedia.org/")
}






