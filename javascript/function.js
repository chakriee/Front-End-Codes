//by using function declaration
function first(){
    document.write("this is function declaration ", "<br>");
}
first();
first();
first();
first();

function second(param1,param2){
    document.write(param1,param2,"<br>");
}
second(10,20);//10 20
second();//undefined undefined
second(10);//10 undefined
second(null,null);//null null

let temp=function(){
    document.write("function expression ", "<br>");
}

temp();
temp();
temp();

let f2=function(param1,param2,param3){
    document.write(param1,param2,param3,"<br>");
}
f2(10,20,30);
f2("react","mern","mean");
f2("mala");
f2(undefined,undefined,10);
f2(null,null,null);
f2(10,20);

let a1= ()=>{
    document.write("arrow function", "<br>");
}

a1();
a1();
a1();
a1();

let add=(param1,param2)=>{
    let result=param1+param2;
    document.write("addition of two numbers : " +result + "<br>");
}
add();
add(10);
add(10,20);
add(10,null);
add(undefined,undefined);
add("sheela","mala");
add("munno");
document.write(typeof add);
add(true,11);
add(null,null);

//task : converting this code into function declaration, expression
let operation=(p1,p2)=>{
    let r1=p1+p2;
    let r2=p1-p2;
    let r3=p1*p2;
    let r4=p1/p2;
    let r5=p1%p2;
    document.write("operation code <br>");
    document.write("addition of two numbers : " +r1+ "<br>");
    document.write("subtraction of two numbers : " +r2+ "<br>");
    document.write("multiplication of two numbers : " +r3+ "<br>");
    document.write("division of two numbers : " +r4+ "<br>");
    document.write("modulus of two numbers : " +r5+ "<br>");
}
operation(10,20);