let arr=[10,'hii',true,'tony','steve'];
console.log(arr);

//push() : it is used to add the multiple values from last index
arr.push(60,40,80,'robert','chris');
console.log(arr);

//pop() : it is used to remove the last index (from last index)
console.log(arr.pop());

//shift() : its is used to remove the elements from start index
//it will return the deleted element
//note : only single element we can delete
console.log(arr.shift());
console.log(arr);

//unshift() : it is used to add the multiple values from start index
arr.unshift("Sree","Chakri","Varala",89);
console.log(arr);

//reverse() : it is used reverse as an array element
let arr1 = [20,30,,'apple','true',true];
arr1.reverse();
console.log(arr1);

//sort() : sorting the array by using the ascending order
let arr2=['aaa',10,20,30,100,1000,10,11,15,25,1001,2000,302,4032,40402,212003,1,40042,"dog","cat","apple","banana"];
console.log(arr2.sort());

//indexOf() : it is used to check the index of an element
//if element is present then return the index of an element
//if not present it will return -1 
console.log(arr2.indexOf(100));
console.log(arr.indexOf("narendra modi"));

//include(): it is used to check the element is present or not
//return type is boolean
//if it is present returns true, else returns false
console.log(arr2.includes("vanita"));
console.log(arr2.includes(100)); 