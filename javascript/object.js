let car = {
    name : "BMW",
    color : "Black",
    price : "50lacs",
    rating : "3 star"
}
console.log("by using first way literals");
console.log(typeof car);
console.log(car.price);
console.log(car);
car.rating="4 star";
console.log(car.rating);
console.log(car);
car.average = 120;
console.log(car.average);
console.log(car);

let key = Object.keys(car);
console.log(key);

let value=Object.values(car);
console.log(value);
