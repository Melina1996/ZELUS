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

allGlasses = document.querySelectorAll(".my-glass")

for (let i = 0; i < allGlasses.length; i++) {
  allGlasses[i].addEventListener("click",()=>{
    myDiv.style.height = allGlasses[i].getAttribute("data-target")
    for (let y = 0; y <= i; y++) {
      console.log(allGlasses[y])
      if(allGlasses[y].classList.contains("change-color") == false){
      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];
        //brauche ein Loop von dem geklicketn bis ersten Glas um die Farbe anzuwenden oder nicht 
      allGlasses[y].classList.add("change-color")
    } else if(allGlasses[y].classList.contains("change-color") == true){
      //muss removing auf erstes Glas bis aktuelles anweden
      allGlasses[y].classList.remove("change-color")
    }
    }
  })
}

