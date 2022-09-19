let bird_speed = "";
let bird = document.querySelector(".bird");
let img = document.getElementById("bird-1");
//sound effects
let sound_point = new Audio("sounds effect/point.mp3");
let sound_die = new Audio("sounds effect/die.mp3");

//The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
//  returns top, right, bottom, left, x, y, width and height
 
let bird_props = bird.getBoundingClientRect();
console.log("bird", bird_props)

let background = document.querySelector(".background").getBoundingClientRect();
console.log("background", background)
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let score_title = document.querySelector(".score_title");

let game_state = "Start";
img.style.display = "none";

document.addEventListener("keypress",//call a function to start
)
    // img.style.display = "block";
    // bird.style.top = "50vh";
    // game_state = "Play";
    // message.innerHTML = "";
    // score_title.innerHTML = "Score : ";
    // score_val.innerHTML = "0";
    //call a function to play
  

