$(document).ready(function() {

// Start your code from here
let temas = ["the weeknd", "space", "funny", "hello", "tesla"]

temas.forEach(createButton);

let addTopicButton = $("#add-topic");

function createButton(topic) {
    let newButton = $("<button>");
    newButton.text(topic)
    $("#topic-buttons").prepend(newButton);
}

function addTopic(e) {
    e.preventDefault();
    let topic = $("#topic-input")
    let text = topic.val()
    topic.val("")

    let newButton = $("<button>");
    newButton.text(text)
    $("#topic-buttons").prepend(newButton);
}

function toggleAnimate(){
    let animateURL = $(this).attr("data-animate");
    let stillURL = $(this).attr("data-still");
    let currentState = $(this).attr("state");

    if(currentState === "still") {
        $(this).attr("src", animateURL);
        $(this).attr("state", "animate");
        return
    }
    $(this).attr("src", stillURL);
    $(this).attr("state", "still");

}

function createGif(rating, stillUrl, url) {





    let container = $("<div>");
    let text = $("<h2>");
    let gif = $("<img>");


    text.text(`Rating: ${rating}`);

    gif.attr("data-still", stillUrl);
    gif.attr("data-animate", url);
    gif.attr("state", "still");
    gif.attr("src", stillUrl);
    gif.attr("alt", "amazing gif");
    gif.addClass("gif-item")
    container.addClass("gif");

    container.append(text);
    container.append(gif);

    $("#gifs").append(container);

}

function search() {
    let searchTerm = $(this).text()
    console.log(searchTerm)
    const limit = 10
    let request = {
        url:`https://api.giphy.com/v1/gifs/search?api_key=VBkziX5N5cXNrCe5fSIVU8N1BY0pb3Y8&q=${searchTerm}&limit=${limit}`,
        success: function (response) {
            console.log(response)
            let data = response.data
            $("#gifs").html("");
            for(let i = 0; i < data.length; i++) {
                createGif(data[i].rating, data[i].images.fixed_height_still.url, data[i].images.fixed_height.url);
            }
        } ,
        error: function () {
            console.log("No se ha podido obtener la información")
        }
    }

    $.ajax(request);

}

$("#gifs").on("click", ".gif-item", toggleAnimate);

addTopicButton.on("click", addTopic);

$("#topic-buttons").on("click", "button", search);

});

