
/* let dhlDusan = new XMLHttpRequest();

dhlDusan.open("GET", "url.json", true);

dhlDusan.send();

dhlDusan.onreadystatechange = function() {
    if (dhlDusan.readyState === 4  && dhlDusan.status === 200) {
          let jsonPaket = dhlDusan.responseText;
          let jsPaket = JSON.parse(jsonPaket);
          console.log(jsPaket);
    } else {;
        console.log(dhlDusan.status);
    }
} */



// Variables //
const userInput = $("input");
const cardSection = $("#cardSection");
const url = "https://api.github.com/search/users?q=";
const button = $("#buttonUsers");


function setUserCards() {
    let xml = $.ajax({
        url: `${url}${userInput.val()}`,
        method: "GET"
    })

    xml.done(function (data) {
        console.log(data);
        cardSection.html = "";
        let cards = $(`
        <div class="card" style="width: 18rem;">
        <img src="${data.items[0].avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.items[0].login}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `)
    });
}








