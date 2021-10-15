// 1.
//Orignal code
// console.log(hello);                                   
// var hello = 'world';   
//How it's interpreter sees
var hello
console.log(hello);                                   
var hello = 'world';   

// Answer both the original code and how the interpreter sees it is undefine.


// 2.
// Orignal Code
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// The output is magnet both original code and how the interpreter 
// sees it the output is magnet

// How it's seen by the interpreter
var needle
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// 3.
// Original Code
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// The output for both original code and how the interpreter 
// sees is Super Cool because the function never gets called.

// How the interpreter sees it
var brendan
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);



// 4.
// Original Code
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// Both the Original and how the interpreter views the code, output is the
// same Chicken and Half-Chicken there is no console.log after last var food.

// How the interpreter views the code
var food;
var food = 'chicken';
console.log(food);
eat();
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}



// 5.
// Original Code
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// Both Original and how the interpreter views the code give you an error
// because the mean is not a function plus it never gets called.

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// 6.
// Original Code
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// Both the Original and how the interpreter views the code, the output
// is undifine, rock, R&B, disco

var genre;
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// 7. 
// Original Code
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);


// The output for both the Original and how the Interpreter views the code
// is San Jose, Seattle, BurBank, San Jose;


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);



// 8.
// Original Code
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// There is no change from the Original code and how the Interpreter views
// The code since it's using const, and becuase of the use of const the 
// else if errors out as it can not be changed.



console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


