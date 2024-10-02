let ov="outside variable";
function outsidevariable(){
    let ov="inner outside variable";
    function innersidevariable(){
        console.log(ov);
    }
    return innersidevariable;
}

let temp1=new outsidevariable();
temp1();