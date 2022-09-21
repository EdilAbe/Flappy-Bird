const hole_height = 250
const pipe_width = 100
const pipe_interval = 900
const pipe_speed = 0.75
let timeElapsed
let pipes = []
let pipeCount


export function setupPipes(){
    document.documentElement.style.setProperty("--pipe-width",pipe_width)
    document.documentElement.style.setProperty("--hole-height",hole_height)
    pipes.forEach(pipe => pipe.remove())
    timeElapsed = pipe_interval
    pipeCount = 0

}

console.log("pipes", pipes)



export function getPipeCount(){
    return pipeCount
}


export function getPipeRects(){
    //flat map get the array of arrays and covert it to one dimensional array 
    return pipes.flatMap(pipe => pipe.rects())
}

function createPipe(){
    const pipeEl = document.createElement("div")
    const topEl = createPipeSegment("top")
  const bottomEl = createPipeSegment("bottom")
    pipeEl.append(topEl)
    pipeEl.append(bottomEl)
    pipeEl.classList.add("pipe")
    pipeEl.style.setProperty("--hole-top", randomNumberBetween(hole_height * 1.5, window.innerHeight - hole_height*0.5))
    
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
                    pipeEl.remove()
                        
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
    console.log( topEl.getBoundingClientRect())
}

export function updatePipes(delta){
    timeElapsed += delta 


    if(timeElapsed > pipe_interval){
        timeElapsed -= pipe_interval
        createPipe()
    }


    pipes.forEach(pipe => { 
        if(pipe.left + pipe_width < 0){
            pipeCount ++
            return pipe.remove()
        }
        pipe.left = pipe.left - delta * pipe_speed
        console.log("pipe left", pipe.left)
    })
}


function createPipeSegment(position){
    const segment = document.createElement("div")
    segment.classList.add("segment", position)
    return segment
}


function randomNumberBetween(min, max){
    return (Math.random()* (max-min + 1) + min)
}