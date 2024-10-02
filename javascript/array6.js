console.log("by using rest operator");
let array1=[10,20,30,40,50];
let [a,b,...c]=array1;
console.log(a);
console.log(b);
console.log(c);

console.log("by using spread operator");
let array2=[4,5,6];
let add=[...array1,...array2];
console.log(add);
