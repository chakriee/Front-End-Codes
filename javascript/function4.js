let display = (param1,param2="light",...param3)=>{
    console.log(param1,param2,param3);
}
display();
display("light");
display(null,null,null);
display("light",undefined,"light");
display(10,20,30,40,50);