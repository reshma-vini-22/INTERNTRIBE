function factorial(n){
    let fact=1
    for(let i=1;i<=n;i++)
    {
        fact=fact*i
    }
    return fact
}

var result=factorial(5)
console.log("Factorial using factorial() function : "+result)

