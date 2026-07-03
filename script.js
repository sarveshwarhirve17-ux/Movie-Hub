let input = document.getElementById("input")
let search = document.getElementById("search")
let card = document.getElementsByClassName("movie-card")
let message = document.getElementById("message")

search.addEventListener("click",function(){
    if(input.value == ""){
        for(let i = 0; i < card.length;i++){
            card[i].style.display = "flex"
        }
    message.textContent = "";
    return    
    }      
    let movieName = input.value.toLowerCase();
    message.textContent = ""
    for(let i = 0; i < card.length;i++){              // this line will check movie 0 to movie 6 . it check movie card one by one
        let title = card[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
        console.log(title);

        if(title == movieName){
            card[i].style.display = "flex" ;    // this show the search movies only 
            message.textContent = "";
            break;      
        }
        else{
            card[i].style.display = "none";           
            message.textContent = "Movie not Found";        
        }   
    }

})

input.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        search.click();
    }
})

input.addEventListener("input", function(){
    if(input.value == ""){
        search.click();
    }
})
