function greeting(name,greet){
    console.log("welocome " +name + "to my home" + greet);
}

var person1={}

greeting.apply(person1,["samaira","thank you"]);
greeting.apply(person1,[]);