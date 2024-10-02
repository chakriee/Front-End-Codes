function inner(){
    console.log("inner block will be executed ");
    return function outer(){
        console.log("inner return outer function");
    }
}
inner()()