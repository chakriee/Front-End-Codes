function festival(fname){
    console.log("happy" + fname);
}

var greet = festival.bind(null,"diwali");
//why null is a parameter ?
//for bind method is usually set the value to this function
//since festival doesn't call or
//use this you can pass as null

greet();