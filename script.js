let color = "black"
let click = false


document.addEventListener("DOMContentLoaded", function(){
createBoard(16)

document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click
        let paint = document.querySelector("#paint")
        if (click) {
            paint.innerHTML = "You can"
        }
    }
    else paint.innerHTML = "You can't"
})

let btn = document.querySelector(".popup")
btn.addEventListener('click', function(){
    let size = getSize()
    createBoard(size)
}) 
})

function createBoard(size) {
    let board = document.querySelector(".board")

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for(i = 0; i < numDivs; i++){
        let div = document.createElement("div")
        div.addEventListener('mouseover', colorDiv
        )
        board.insertAdjacentElement("beforeend", div)
    }
}

function getSize() {
    let input = prompt("What size?")
    let message = document.querySelector("message")
    if (input == "") {
    message.innerHTML = "please type a number"
} else if (input < 0 || input > 100) {
    message.innerHTML("Please a number beten 1 and 99")
} else {
    message.innerHTML("Paint!")
    return input
}


}
function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = "black"
    }
}


function setColor(colorChoice) {
     color = colorChoice
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}