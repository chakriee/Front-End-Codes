let emp1={
    fullname:function(){
        return this.firstname + this.lastname;
    }
}

let emp2={
    firstname : "mala",
    lastname : "chingara"
}

var fullname= emp1.fullname.call(emp2);
console.log(fullname);