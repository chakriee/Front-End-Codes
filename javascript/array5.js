let arr1=[10,20,30,40,50,60];
console.log(arr1);

//by using for we can iterate the array elements
console.log("using for loop");
for(i=0;i<=2;i++){
    console.log(arr1[i]);
}

//second way by using for of loop
console.log("using for of loop");
for(i of arr1){
    console.log(i);
}

//third way by using for in loop
console.log("using for in loop");
for(i in arr1){
    console.log(arr1[i]);
}

//array destructuring 
console.log("array destructuring");
let [a,b,c,...d]=arr1;
console.log(a);
console.log(b);
console.log(c);
console.log("print remaining array elements by using rest operator");
console.log(...d);//rest operator

//let array1=[10,20,30,40,50,60];
let [s,...t]=arr1;
console.log(s);
console.log(...t);

let [...z]=arr1;
console.log(...z);

let array2=new Array("chakri");
console.log(array2);

let array3= Array.of(123);
console.log(array3);

let array4= Array.of("hii","hello");
console.log(array4);

let array5= Array.of(1);
console.log(array5);

let array6= new Array("sdbfus");
console.log(array6);
