console.log("Square pattern :")
for(let i=1;i<=3;i=i+1){
    let row=""
    for(let j=1;j<=3;j=j+1){
        row+="* "
    }
    console.log(row)
}
console.log("Triangle Pattern :")
for(let i=1;i<=5;i=i+1){
    let row=""
    for(j=1;j<=i;j=j+1){
        row+="* "
    }
    console.log(row)
}
console.log("Diamond Pattern :")
for(let i=1;i<=5;i=i+1){
    let row=""
    for(let j=1;j<=5-i;j=j+1){
        row+=" "
    }
    for(let k=1;k<=2*i-1;k=k+1){
        row+="*"

    }
    console.log(row)
}
for(let i=5-1;i>=1;i=i-1){
    let row=""
    for(let j=1;j<=5-i;j=j+1){
        row+=" "
    }
    for(let k=1;k<=2*i-1;k=k+1){
        row+="*"
    }
    console.log(row)
}