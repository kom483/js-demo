// let age = 15;
// if(age>= 18){
//     console.log("You can vote");
// }
// else{
//     console.log("you cannot vote");
// }


//ternary operators
//let age = 25;
//age>20 ? console.log("you can vote") : console.log("you can't vote");

//alert("hello world!!") this is only a alert message..
//prompt('hello') prompt firstly print hello then ask for input..

//let name = prompt ("hello");
//console.log(name);


//get user to input a number using prompt("enter a number:"). check if the number is a multiple of 5 or not.
let num = prompt("enter a number:");

if(num % 3 === 0){
    console.log(num, "is multiple of 3");
}
else{
    console.log(num, "is not a multiple of 3");
}


//practiec q2
let score = 66;
let grade;
if(score >= 90 && score <= 100){
    grade ="A";
}
else if(score >=70 && score <=89){
    grade = "B";
}
else if(score >= 60 && score <=69){
    grade = "C";
}
else if(score >= 50 && score <=49){
    grade = "F";
}
console.log("according to grade, your grade was :", grade);