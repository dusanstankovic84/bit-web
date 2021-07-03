function getrandomDogImage() {
    var request = $.ajax({
        url:
        method:"GET"
    })

    request.done(function(responce){
        var img = $("<img/>").attr("src", response.message);
        $("body").append(img);
    })

    request.fail(error, status) {
        alert(error)
    }
}