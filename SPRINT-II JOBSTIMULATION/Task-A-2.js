//This Digital clock displays the live time including seconds.
//And  it displays the message like "Good Morning" based on the time.


function print(){
    var myDate=new Date();
    var hour=myDate.getHours();
    var minute=paddZero(myDate.getMinutes());
    var second=paddZero(myDate.getSeconds());
    var pm=document.getElementById("ampm")
    if(hour>12){
        ampm.innerHTML="PM"
    }
    var after=document.getElementById("display")
    if(hour>7 && hour<12){
        after.innerHTML="Good Morning 🌅"
    }
    else if(hour>11 && hour<18){
        after.innerHTML="Good Afternoon 😀"
    }
    else if(hour>17 && hour<21){
        after.innerHTML="Good Evening ☕"
    }
    else if(hour>20 && hour<6){
        after.innerHTML="Good Night 😴"
    }
    
    
    if(hour>12){
        hour=hour-12  
    }

    hour=paddZero(hour)
    document.getElementById("hr1").innerHTML=hour
    document.getElementById("min1").innerHTML=minute
    document.getElementById("sec1").innerHTML=second
    var pm=document.getElementById("ampm")
   
   
}
function paddZero(num){
   return num<10 ? "0"+num : num;
}
setInterval(print,1000)
