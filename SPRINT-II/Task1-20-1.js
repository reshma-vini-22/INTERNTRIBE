var arr= new Array(23,4,-6,23,-9,21,3,-45,-8)
var positive=new Array()
var negative = new Array()
console.log("The given List:")
for(let i=0;i<9;i=i+1){
    console.log(arr[i])
    
}
 
for(let i=0;i<9;i=i+1){
    if(arr[i]>0){
        positive.push(arr[i])
    }
    else if(arr[i]<0){
        negative.push(arr[i])
    }
}
console.log("Positive Numbers")
for(let i=0;i<positive.length;i=i+1){
    console.log(positive[i])
    
}
console.log("Negative Numbers")
for(let i=0;i<negative.length;i=i+1){
    console.log(negative[i])
}