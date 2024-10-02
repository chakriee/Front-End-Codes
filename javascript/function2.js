//rest parameter is function:
//only one rest parameter for each function
//rest parameter should always be in last position
//it will convert parameters into an array
let f3=(...param1)=>{
    console.log(param1);
}
f3();
f3(10,20);
f3(10);
f3(10,"sheela",true,"mala");
f3(null,null);
f3(undefined);

//function f4(...param1,...param2)
//A rest parameter must be in last in a parameter list.
function f5(param1,...param2){
    console.log(param1);
    console.log(...param2);
}
f5(10);
f5(10,20,30);
f5(null,undefined);

//function f4(...param1,...param2)
//A rest parameter must be last in parameter list
function f5(param1,...param2){
    console.log(param1);
    console.log(...param2);
}
f5(10);
f5(10,20,30);
f5(null,undefined);

function f6(param1,param2,...param3){
    console.log(param1,param2);
    console.log(...param3);
}
f6();
f6(100,200);
f6(100,200,300);
f6(100,200,300,400,500,600);

let f7=(param1,param2,...param3)=>{
    console.log(param1,param2,param3);
}
f7();
f7(100,200);
f7(100,200,300);
f7(100,200,300,400,500);
f7(undefined,undefined,undefined);
f7(null,null,null);

//default parameter
let f8=(param1="r1",param2="r2",param3="r3")=>{
    console.log(param1,param2,param3);
}
f8();
f8(undefined,undefined,undefined);
f8(null,null,null);
f8("hrllo","hello","hello");
f8(undefined,"hii",null);
