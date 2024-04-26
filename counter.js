const navbar = document.querySelector("#navbar")
let empty = document.querySelector(".empty")
let resultBmi = document.querySelector("#resultBmi")
const yogaBtn = document.querySelector(`#yogaBtn`)
const groupBtn = document.querySelector(`#groupBtn`)
const soloBtn = document.querySelector(`#soloBtn`)
const stretchingBtn = document.querySelector(`#stretchingBtn`)
let btnHeader = document.querySelector("#btnHeader")
let classesBtnText = document.querySelector("#lower-text")
let classesImg = document.querySelector(".btnContainer img")


// Our Classes Button effeckt
yogaBtn.addEventListener("click",()=>{    
    btnHeader.textContent= "Why are your yoga?";
    classesBtnText.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat minima impedit excepturi iure, doloremque ipsum! Ullam exercitationem ex odio? ";
    classesImg.setAttribute("src","assets/yoga.jpg")
})
groupBtn.addEventListener("click",()=>{
    btnHeader.textContent= "Why are your group?";
    classesBtnText.textContent ="Lorem ipsum dolor sit amet  impedit excepturi iure, doloremque ipsum! Ullam exercitationem ex odio? ";
    classesImg.setAttribute("src","assets/group.webp")
})
soloBtn.addEventListener("click", ()=>{
    btnHeader.textContent= "Why are your solo?";
    classesBtnText.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat minima impedit excepturi iure, doloremque ipsum! Ullam exercitationem ex odio? ";
    classesImg.setAttribute("src","assets/solo.jpg")
})
stretchingBtn.addEventListener("click",()=>{
    btnHeader.textContent= "Why are your stretching?";
    classesImg.setAttribute("src","assets/stret.webp")
    classesBtnText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia maxime fugiat repudiandae et! Totam, magnam sed consequuntur vero dolorem expedita quis odit. Sunt iusto quos dolores eligendi fuga accusamus ea sapiente explicabo, obcaecati dolor?";
})


// Background change event when navigation bar moves

window.addEventListener("scroll",(event) => {
    const scroll = window.scrollY;
    if(scroll > 80){
        navbar.setAttribute("style", "background-color: var(--blue-color)")
    }else{
        navbar.setAttribute("style", "background-color: transparent")
    }
})


// BMI CALCULATER FUNCTİON

// I've added a array to record the BMI results.
// If the array is empty, the function will not work on the first click
 
let bmiResults = [20.8];  

document.addEventListener("input",()=>{
    // I saved the initial value to move the arrow
    let left = 20;
    let bmi;
    
    // I took the values from the input and calculated the BMI
    let height =parseFloat( document.querySelector("#inputHeight").value);
    let weight = parseFloat(document.querySelector("#inputWeight").value);
    bmi = (weight/ Math.pow((height/100),2)).toFixed(1);
    
    // I saved it to the array and printed it in HTML
    resultBmi.textContent = bmi;
    bmiResults.push(parseFloat(bmi));

    // console.log(bmiResults)

    for(let i=1 ;i<=999999; i++ ){

        if(bmiResults[i] <= bmiResults[i-1]){
            if(left >= 4){
                left = left - 1;
                empty.style.left = left - 1 + "%";
            }
        }
        else if(bmiResults[i] >= bmiResults[i-1]){
            if(left <= 80){
                left = left + 1;
                empty.style.left = left + 1 + "%";
            }
        }
    }
})



  



