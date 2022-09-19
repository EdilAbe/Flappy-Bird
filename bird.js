const bird_speed = 0.7
const bird = document.querySelector(".bird")


export function setUpBird(){
    setTop(window.innerHeight / 2)
    document.removeEventListener("keydown", handleJump)
    document.addEventListener("keydown", handleJump)
}

export function updateBird(delta){
    if(timeElapsed < jum_duration){
        setTop(getTop() - bird_speed*delta)
    }else{
        setTop(getTop() + bird_speed*delta)
    }
    timeElapsed += delta
}

//this gives us the top, right, left and bottom of our bird so we can use those position to determine if the bird has gone off of our screen
export function getBirdRect(){
    return bird.getBoundingClientRect
}
function setTop(top){
    bird.getElementsByClassName.setProperty("--bird-top", top)
}

function getTop(){
    return parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top"))
}

export function OnStartBird(){
    setTop(window.innerHeight /2 )
}