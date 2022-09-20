const hole_height = 200
const pipe_width = 120
const pipe_interval = 1500
const pipe_speed = 0.75
let pipeCount 
let timeElapsed
let pipes = []


export function setupPipes(){
    document.documentElement.style.setProperty("--pipe-width",pipe_width)
    document.documentElement.style.setProperty("--hole-height",hole_height)
    pipes.forEach(pipe => pipe.remove())
    timeElapsed = pipe_interval
    pipeCount = 0

}

export function pipeCount(){
    return pipeCount
}

function createPipe(){
    const pipeEl = document.querySelector(".pipe")
    const topEl = document.querySelector(".top")
    pipeEl.style.setProperty("--hole-top", randomNumberBetween(hole_height * 1.5, window.innerHeight -hole_height*0.5))
    
    const pipe= {
                get left(){
                    return parseFloat(
                        getComputedStyle(pipeEl).getPropertyValue("--pipe-left"))
                },
                set left(value){
                    pipeEl.style.setProperty("--pipe-left", value)

                },
                remove(){
                    pipes = pipes.filter(p => p !== pipe)
                    pipeEl.remove
                        
                },
                rects(){
                    return [
                        topEl.getBoundingClientRect(),
                        bottomEl.getBoundingClientRect(),
                      ]
                },
    }
    pipe.left = window.innerWidth
    document.body.append(pipeEl)
    pipes.push(pipe)

}