let firstname = "John"
let lastname ="Muller"

//Template Literals
//ES5
console.log("My name is " + firstname + " " + lastname);
//ES6
console.log('My name is ${firstName} $(lastname}');

//Ternary operators
// let age = 15;
//ES5
if (age >= 18) {
    console.log("Adult");
}else{
    console.log("Minor");
}
//ES6
age >= 18 ? console.log("Adult") : console.log("Minor");

//Object Destructuring
let user ={ 
    f_name:"John",
    age: 43,
    last_name:"Muller",
};
//ES5
// let fName = useReducer. f_name;
// let fAge = user.age;
//ES6
let{ f_name, age, last_name} = user;

// Spread Operator
let numbers = [1,2,3,4,5];
let morenumbers = [6,7,8,9,10];
//ES5
//for loop over both the array and create a new array

//ES6
let newnumbers = [...numbers,...morenumbers];

let info = ["Test", "User", "ABC", "123", " 968738738"];
function myBio (firstname, lastname, comapny, age, tel) {
    console.log('${firstname} ${lastname} ${company} ${age}');

}
//ES5
myBio(
    info[0],info[1],info[2]
);
//ES6
myBio(...info);
