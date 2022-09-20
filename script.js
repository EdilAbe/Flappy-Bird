import {updateBird, setUpBird, getBirdRect} from "./bird.js"

let img = document.getElementById("bird-1");
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let subtitle = document.querySelector(".subtitle")
let score_title = document.querySelector(".score_title");
let lastTime


// let background = document.querySelector(".background").getBoundingClientRect();
//console.log("background", background)

   
// this is the last time that we went through our update loop


function lostGame(){
    const birdRect  = getBirdRect()

    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight
    return outsideWorld
}

const handleStart = () => {
    message.classList.add("hide");
    //sets up the position of the bird on start 
    setUpBird()
    lastTime  = null
    window.requestAnimationFrame(updateLoop) // call requestAnimationFrame and pass into it animation function

    }
    
    document.addEventListener("keypress", handleStart, { once: true })
    
const handleLose = () => {
    setTimeout(() => {
    message.classList.remove("hide");
    subtitle.classList.remove("hide");
    subtitle.textContent = "o pipes"
    document.addEventListener("keypress", handleStart, {once: true})
}, 100)

}

const updateLoop= (time) => {
    if(lastTime == null){
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return 
    }

      //DELTA is the difference between different animation frames
      const delta = time - lastTime
      updateBird(delta)
      console.log("delta", delta)
      console.log("last time",lastTime)
      console.log("time", time)
    if (lostGame()) return handleLose()
  
    lastTime = time
    // call requestAnimationFrame again to animate next frame
    window.requestAnimationFrame(updateLoop)

}
