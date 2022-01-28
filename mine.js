let text = document.querySelector("h1")
let parafraph = document.querySelector("p")

let buttonCreated = document.getElementById("button")
let buttonbackground = document.getElementById("backG")
let buttonText = document.getElementById("TextFor")

let divBackground = document.getElementById("div")


let divDisplay = document.querySelector(".block")
let divDisplayy = document.querySelector(".block")
let divDisplayytext = document.querySelector(".newtext")
let divDisp = document.querySelector(".textForResume")


function Created(){
    text.style.color = "black"
    divBackground.style.backgroundColor = "silver"
    divDisplay.style.display = "block"
    text.style.textAlign = "center"
}
buttonCreated.addEventListener("click", Created)      


function Create(){
    parafraph.style.color = "white"
    divBackground.style.backgroundColor = "wheat"
    divDisplayy.style.display = "block"
    divDisp.style.display = "block"
}
buttonbackground.addEventListener("click", Create )      

function Creat(){
    parafraph.style.color = "black"
    divDisplayytext.style.display = "block"
}
buttonText.addEventListener("click", Creat )  