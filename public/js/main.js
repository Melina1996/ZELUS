//all of my glasses

let myFirstGlass = document.querySelector("#first-glass")

let mySecondGlass = document.querySelector("#second-glass")

let myThirdGlass = document.querySelector("#third-glass")

let myFourthGlass = document.querySelector("#fourth-glass")

let myFifthGlass = document.querySelector("#fifth-glass")

let mySixthGlass = document.querySelector("#sixth-glass")

let mySeventhGlass = document.querySelector("#seventh-glass")

let myEightGlass = document.querySelector("#eight-glass")

let myDiv = document.querySelector(".glass-fill")

let remaining = document.querySelector("#remaining")

let countLiters = document.querySelector("#count")

let subTitle = document.querySelector("#sub-title")

allGlasses = document.querySelectorAll(".my-glass")

for (let i = 0; i < allGlasses.length; i++) {
  allGlasses[i].addEventListener("click",()=>{
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
  })
}