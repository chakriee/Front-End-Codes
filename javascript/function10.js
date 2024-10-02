function *fun_one(){
    yield "i";
    yield "am";
    yield "belongs";
    yield "to";
    yield "india";
}

let iterator=fun_one();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

function *fun_two(){
    yield 10;
    yield 20;
    yield 30;
    yield *fun_three();
    yield 40;
}

function *fun_three(){
    yield 100;
    yield 200;
}

let iterator1= fun_two();
for(let value of iterator1){
    console.log(value);
}