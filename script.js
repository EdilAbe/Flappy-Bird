import {updateBird, setUpBird, getBirdRect} from "./bird.js"
import {updatePipes, setupPipes, getPipeCount, getPipeRects} from "./pipe.js"


let score_title = document.querySelector(".score_title");
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let subtitle = document.querySelector(".subtitle");
let sound_die = new Audio("./Sound/sounds effect_die.mp3");
let sound_point = new Audio("./Sound/sounds effect_point.mp3");
let lastTime


   
// this is the last time that we went through our update loop


function lostGame(){
    const birdRect  = getBirdRect()

    const insidePipe  = getPipeRects().some(rect => isCollision(birdRect, rect))//some returns true if any of the value here returns true
    console.log(insidePipe)
    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight
    console.log(outsideWorld)
    return outsideWorld || insidePipe
}

function isCollision(rect1, rect2){
    return(
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top
    )
}


const handleStart = () => {
    message.classList.add("hide");
    //sets up the position of the bird on start 
    setUpBird()
    setupPipes()
    lastTime  = null
    window.requestAnimationFrame(updateLoop) // call requestAnimationFrame and pass into it animation function
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';

    }
   
    // starts the game
    document.addEventListener("keypress", handleStart, { once: true })
    
const handleLose = () => {
    setTimeout(() => {
    sound_die.play();
    message.classList.remove("hide");
    subtitle.classList.remove("hide");
    score_val.innerHTML = `${getPipeCount()} Pipes`
    subtitle.textContent = `${getPipeCount()} Pipes`
    document.addEventListener("keypress", handleStart, {once: true})
}, 100)
}

const handleWin = () => {
    setTimeout(() => {
    message.classList.remove("hide");
    subtitle.classList.remove("hide");
    score_val.innerHTML = `${getPipeCount()} Pipes`
    subtitle.textContent = `You win!`
    document.addEventListener("keypress", handleStart, {once: true})
}, 300)
}




const updateLoop = (time) => {
    if(lastTime == null){
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return 
    }



      //DELTA is the difference between different animation frames
      const delta = time - lastTime
      console.log("time", time)
      console.log("lastime", lastTime)
      console.log("delta", delta)
      updateBird(delta)
      updatePipes(delta)


    // score_val.innerHTML = `${gameLevel} Pipes`

    //   console.log("delta", delta)
    //   console.log("last time",lastTime)
    //   console.log("time", time)
        console.log("pipe count", getPipeCount())
    if (getPipeCount()===5) return handleWin()
    if (lostGame()) return handleLose()
  
    lastTime = time
    // call requestAnimationFrame again to animate next frame
    window.requestAnimationFrame(updateLoop)

}


