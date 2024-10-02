let obj={
    key1:"value1",
    key2:"value2",
    key3:"value3"
}

console.log(obj);

//add the key and value pair
obj.key4="value4";
console.log(obj);

//delete the key and value
console.log("after deleting");
delete(obj.key3);
console.log(obj);

//keys() : it will return keys
console.log("retreiving keys : ");
console.log(Object.keys(obj));

//values() : it will return values
console.log("retreiving all values : ");
console.log(Object.values(obj));

//entries() : it is used to convert the object into an array
console.log(Object.entries(obj));

//seal() : you can modify the existing values
//but never add new pair(key : value)
console.log(Object.seal(obj));
obj.key4="value5";
console.log(obj);
obj.key5="value6";
console.log(obj);

//freeze() : you cannot modify the existing elements
//also we cannot add new key and values
console.log(Object.freeze(obj));
obj.key4="value7";
console.log(obj);
obj.key5="value7";
console.log(obj);

//assign : mergin the two objects
let a1={
    name:"priya",
    name:"supriya",
}
let a2={
    name:"vishnu",
    name:"balaji",
}
console.log(Object.assign(a1,a2));