//This Calculator takes two input from the user and perform operation between them based on the button which the user pressed,
// If the user pressed Addition it adds the two number and returns the value in the screen.
//For division if the user enters 0 as the denominator it displays an error message.
//And it also has a clear button which clears the numbers in the reult and both the input fields. 

function Clicked1() {
    let box1 = document.getElementById("ione")
    let num1 = Number(box1.value)
   
    let box2 = document.getElementById("itwo")
    let num2 = Number(box2.value)
    let result = num1 + num2
   
    document.getElementById("display").innerHTML=result
}
function Clicked2(){
    let box1 = document.getElementById("ione")
    let num1 = Number(box1.value)
   
    let box2 = document.getElementById("itwo")
    let num2 = Number(box2.value)
    let result = num1 - num2
   
    document.getElementById("display").innerHTML=result
}
function Clicked3(){
    let box1 = document.getElementById("ione")
    let num1 = Number(box1.value)
   
    let box2 = document.getElementById("itwo")
    let num2 = Number(box2.value)
    let result = num1 * num2
   
    document.getElementById("display").innerHTML=result
}

function Clicked4(){
    let box1 = document.getElementById("ione")
    let num1 = Number(box1.value)
   
    let box2 = document.getElementById("itwo")
    let num2 = Number(box2.value)
    if(num2==0){
        alert("Error : Division by 0 is not allowed.")
        return;
    }
    
    let result = num1/num2;
   
    document.getElementById("display").innerHTML=result
}
function Clicked5(){
    let box1 = document.getElementById("ione")
    let box2 = document.getElementById("itwo")
    box1.value=""
    box2.value=""
    let v=document.getElementById("display")
    v.innerHTML="";
}