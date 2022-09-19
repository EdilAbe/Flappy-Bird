import {updateBird, setUpBird, getBirdRect} from "./bird.js"

let img = document.getElementById("bird-1");
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let subtitle = document.querySelector(".subtitle")
let score_title = document.querySelector(".score_title");




// let background = document.querySelector(".background").getBoundingClientRect();
//console.log("background", background)





   

let lastTime
const updateLoop= (time) => {
    if(lastTime == null){
        lastTime = true
        window.requestAnimationFrame(updateLoop)
        return
    }

    if (lostGame())  return handleLose()

    const delta = time - lastTime
    updateBird(delta)
    lastTime = time
    window.requestAnimationFrame(updateLoop)

}

function lostGame(){
    const birdRect  = getBirdRect()

    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight
    return outsideWorld
}

const handleStart = () => {
    message.classList.add("hide");
    setUpBird()
    lastTime  = null
    window.requestAnimationFrame(updateLoop)
    }
    
    document.addEventListener("keypress", handleStart, { once: true })
    
const handleLose = () => {
    setTimeout(() => {
    message.classList.remove("hide");
    message.classList.add("hide");
    subtitle.textContent = "o pipes"
    document.addEventListener("keypress", handleStart, {once: true})
}, 100)

}