(()=>{
    console.log("immediate invokable function expression executed");
})()

let result=((num1,num2)=>{
    return num1+num2;
})(10,20)
console.log("addition of two numbers :"+result);