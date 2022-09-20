const bird_speed = 0.7
const bird = document.querySelector(".bird")
//jump_duration is how long our jump is going to last
const jump_duration = 125
let timeElapsed = Number.POSITIVE_INFINITY

export function setUpBird(){
    setTop(window.innerHeight / 2)
    document.removeEventListener("keydown", handleJump)
    document.addEventListener("keydown", handleJump)
}

export function updateBird(delta){
    if(timeElapsed < jump_duration){
        //moves bird up
        setTop(getTop() - bird_speed*delta)
    }else{
        //moves bird down
        setTop(getTop() + bird_speed*delta)
    }
    console.log("timeElapsed", timeElapsed)
    console.log("jump duration", jump_duration)
    timeElapsed += delta
}

//this gives us the top, right, left and bottom of our bird so we can use those position to determine if the bird has gone off of our screen
export function getBirdRect(){
    return bird.getBoundingClientRect
}
function setTop(top){
    bird.style.setProperty("--bird-top", top)
}

function getTop(){
    return parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top"))
}

//console.log(getComputedStyle(bird).getPropertyValue("--bird-top"))

export function OnStartBird(){
    setTop(window.innerHeight /2 )
}

function handleJump(e){
    if(e.code != "space") 
    return timeElapsed = 0
}