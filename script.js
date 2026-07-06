alert("Welcome to Movie Hub")
let input = document.getElementById("input");
let search = document.getElementById("search");
let card = document.getElementsByClassName("movie-card");
let message = document.getElementById("message");
let movieName = document.getElementById("movieName");

let movies = [];

fetch("http://127.0.0.1:8000/movies")
.then(response => response.json())
.then(data => {
    movies = data;
});

search.addEventListener("click", function () {

    if (input.value == "") {
        for (let i = 0; i < card.length; i++) {
            card[i].style.display = "flex";
        }
        message.textContent = "";
        movieName.textContent = "";
        return;
    }

    let userMovie = input.value.toLowerCase();

    let foundMovie = movies.find(function(movie){
        return movie.name.toLowerCase() == userMovie;
    });

    if(foundMovie){
        movieName.textContent = foundMovie.name + " ⭐ " + foundMovie.rating;
    }
    else{
        movieName.textContent = "Movie Not Found";
    }

    for (let i = 0; i < card.length; i++) {

        let title = card[i]
            .getElementsByTagName("h3")[0]
            .textContent
            .toLowerCase();

        if (title == userMovie) {
            card[i].style.display = "flex";
            message.textContent = "";
        } else {
            card[i].style.display = "none";
        }
    }

});

input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        search.click();
    }
});

input.addEventListener("input", function () {
    if (input.value == "") {
        search.click();
    }
});