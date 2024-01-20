
//declaration of all of my variables

allGlasses = document.querySelectorAll(".my-glass")

let myDiv = document.querySelector(".glass-fill")

let remaining = document.querySelector("#remaining")

let countLiters = document.querySelector("#count")

let subTitle = document.querySelector("#sub-title")

let input = document.querySelector("input")

let fish = document.querySelector(".fa-fish-fins")

let myBtn = document.querySelector("button")

let inputValue

let title = document.querySelector(".my-title")


for (let i = 0; i < allGlasses.length; i++) {
  allGlasses[i].addEventListener("click",()=>{

    //set title always back to ask for name for fish
    title.innerText = "Fill your fish tank!"

    if(allGlasses[i].id != "eight-glass"){
      fish.classList.add("hide")
    } else {
      fish.classList.remove("hide")
    }

    //thanks to a transition in my class of the "filling div", all of the height modification's take 3s --> animation
    //set several attributes on my HTML-elements that I read here (e.g. the div's height, the percentage to be shown, etc.)
    myDiv.style.height = allGlasses[i].getAttribute("data-pixel")

    countLiters.innerText = allGlasses[i].getAttribute("percentage")

    remaining.style.fontSize = "30px"
    remaining.style.top = allGlasses[i].getAttribute("top-one")
    remaining.innerText = allGlasses[i].getAttribute("remaining")

    subTitle.innerText = allGlasses[i].getAttribute("textP")
    subTitle.style.top = allGlasses[i].getAttribute("top-two")
    

    for(let i = 0; i < allGlasses.length; i++){
      allGlasses[i].classList.remove("change-color")
    }
    for(let y = 0; y<=i;y++){
      allGlasses[y].classList.add("change-color")
    }

    //read the input of my text-field
    inputValue = input.value
    console.log(inputValue)
    //if 8th glass is clicked: change text of header 
    if(allGlasses[i].id == "eight-glass"){
      title.innerText = `Yeah, look, your friend ${inputValue} is happy!`
    }
  })
}

//integrated a button to reset everything
myBtn.addEventListener("click",()=>{
  myDiv.style.height = "0px"
  remaining.innerHTML = "2 liters<br>remaining"
  remaining.style.top = "120px"
  subTitle.innerText = ""
  countLiters.innerText = ""
  fish.classList.add("hide")
  for(let i = 0; i < allGlasses.length; i++){
    allGlasses[i].classList.remove("change-color")
  }
})


//intent to create my HTML in JS, but decided to opt for HTML in the end

// let smallGlassesDiv = document.querySelector(".small-glasses")

// for (let i = 0; i <= 7; i++) {
//   let myGlass = document.createElement("div") 
//   myGlass.setAttribute("class","my-glass")
//   smallGlassesDiv.appendChild(myGlass)
// }

// let pOne = document.createElement("p") 
// pOne.innerText = "1l"

// let pTwo = document.createElement("p") 
// pTwo.innerText = "1l"

// let pThree = document.createElement("p") 
// pThree.innerText = "1l"

// let pFour = document.createElement("p") 
// pFour.innerText = "1l"

// let pFive = document.createElement("p") 
// pFive.innerText = "1l"

// let pSix = document.createElement("p") 
// pSix.innerText = "1l"

// let pSeven = document.createElement("p") 
// pSeven.innerText = "1l"

// let pEight = document.createElement("p") 
// pEight.innerText = "1l"

// let firstGlass = {
//   dataPixel : "37.5px",
//   percentage : "12.5%",
//   remaining : "1.75l",
//   id : "first-glass",
//   topOne : "120px",
//   topTwo : "150px",
//   textP : "remaining"
// }

// let secondGlass = {
//   dataPixel : "75px",
//   percentage : "25%",
//   remaining : "1.5l",
//   id : "second-glass",
//   topOne : "120px",
//   topTwo : "150px",
//   textP : "remaining"
// }

// let thirdGlass = {
//   dataPixel : "112.5px",
//   percentage : "37.5%",
//   remaining : "1.25l",
//   id : "third-glass",
//   topOne : "120px",
//   topTwo : "150px",
//   textP : "remaining"
// }

// let fourthGlass = {
//   dataPixel : "150px",
//   percentage : "50%",
//   remaining : "1l",
//   id : "fourth-glass",
//   topOne : "60px",
//   topTwo : "90px",
//   textP : "remaining"
// }

// let fifthGlass = {
//   dataPixel : "187.5px",
//   percentage : "62.5%",
//   remaining : "0.75l",
//   id : "fifth-glass",
//   topOne : "40px",
//   topTwo : "70px",
//   textP : "remaining"
// }

// let sixthGlass = {
//   dataPixel : "225px",
//   percentage : "75%",
//   remaining : "0.5l",
//   id : "sixth-glass",
//   topOne : "15px",
//   topTwo : "45px",
//   textP : "remaining"
// }

// let seventhGlass = {
//   dataPixel : "262.5px",
//   percentage : "87.5%",
//   remaining : "0.25l",
//   id : "seventh-glass",
//   topOne : "2px",
//   topTwo : "10px",
//   textP : ""
// }

// let eightGlass = {
//   dataPixel : "300px",
//   percentage : "100%",
//   remaining : "",
//   id : "eight-glass",
//   topOne : "60px",
//   topTwo : "",
//   textP : ""
// }

// function setAttributes(glass, attributes) {
//   for(var key in attributes) {
//     glass.setAttribute(key, attributes[key]);
//   }
//   return
// }


// setAttributes(document.querySelectorAll(".my-glass")[0],firstGlass)
// setAttributes(document.querySelectorAll(".my-glass")[1],secondGlass)
// setAttributes(document.querySelectorAll(".my-glass")[2],thirdGlass)
// setAttributes(document.querySelectorAll(".my-glass")[3],fourthGlass)
// setAttributes(document.querySelectorAll(".my-glass")[4],fifthGlass)
// setAttributes(document.querySelectorAll(".my-glass")[5],sixthGlass)
// setAttributes(document.querySelectorAll(".my-glass")[6],seventhGlass)
// setAttributes(document.querySelectorAll(".my-glass")[7],eightGlass)

// document.querySelectorAll(".my-glass")[0].appendChild(pOne)
// document.querySelectorAll(".my-glass")[1].appendChild(pTwo)
// document.querySelectorAll(".my-glass")[2].appendChild(pThree)
// document.querySelectorAll(".my-glass")[3].appendChild(pFour)
// document.querySelectorAll(".my-glass")[4].appendChild(pFive)
// document.querySelectorAll(".my-glass")[5].appendChild(pSix)
// document.querySelectorAll(".my-glass")[6].appendChild(pSeven)
// document.querySelectorAll(".my-glass")[7].appendChild(pEight)
// console.log(myFirstGlass)// document.querySelectorAll(".my-glass")[0].setAttribute("data-pixel","37.5px")


