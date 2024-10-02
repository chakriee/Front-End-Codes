function first(name,callback){
    return function(){
        console.log("my name is " +name);
        callback();
    }
}
function second(){
    console.log("callback function");
}
let person = first("sita",second);
person();