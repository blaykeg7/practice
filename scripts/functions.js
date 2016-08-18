var x = 5, 
    y = 10, 
    sum = x + y;

//console.log("Sum: ", sum);

x = 20;
y = 2;
sum = x + y;
//console.log("Sum: ", sum);

//TO AVOID ALL THE CODE REPETITION/DUPLICATION... we use...

//FUNCTIONS! = a block of code that performs some operations, and returns some results,
//Sometimes you give the functions to inputs to work with it, 

//1. Basic function - declared a function named: display
function display(){
  console.log("Hello. I'm the display function");
}

//to get the fuction to perform it's work or execute its code, you need to call it, or invoke it.
//display();

//2. Sometimes, a function requires some inputs -- arguments... one or more... arguments
//-- function with one argument
function greet(person){ //person is the argument or parameter
  //body of the function
  console.log("Hello " + person + ", How are you doing today?");
}

//greet("Tammy");
//greet("Blayke");

//3. A function can have more than one argument
//Task - Write a function takes two arguments: 
//name, age; and it logs to the console "Hello Blake. You are 19 years old

function greet(person, age){
  console.log("Hello " + person + ". You are " + age + " years old" );
}

greet("Blayke", 19);
greet("Mackenzie", 21);

//declare an object that represents a student with three properties
var student = {
  firstName: "Blayke",
  age: 19,
  degree: "Web Developer",
  pet: {
    name: "Mia",
    age: 7
  }
};
console.log(student.firstName);

console.log(student.pet.name);





//TASK: Write a function, that takes one argument or parameter. it's expected that the object will have properties, 
//city, state and zip.

//Example, when I call the function with {city: "Seattle", state: "WA", zip: "98101"}, 
//it should log Your city is, Seattle. Your state is WA.Your zip in 98101.
//assume your function is called displayLocation(....)
//we call like like so: displayLocation({city: Seattle, state, WA, ...};)
function sayHello(){
  console.log("Hello Buddy!");
}

function displayLocation(location){
  sayHello();
  console.log("Your State is " + location.state + ". Your city is " + location.city + ". Your zip is " + location.zip +"." );
 };


 var blayke = {
   state: "North Dakota",
   city: "Fargo",
   zip: 58078,
 };


 displayLocation(blayke);
displayLocation({
   state: "Minnesota",
   city: "Moorhead",
   zip: 59080,
 });



 //USUALLY, functions perform some work, and "return" the results back to the caller.
//if you want a function to send some results back to the caller, you use the return statement!!!!

//Basic example. This function returns hello to any caller.
function greet(){
  return "Hello"; //return statment
}

//Another way to declare a function

var funcA = function(){
  console.log("HEllo, I'm funky");
}
funcA();

//to call this function and use its results

var x = greet();
console.log(x);

//A function that add two numbers that you pass to it, or call it with aka.. argments

function sum(a, b){
  return a + b;
}

var total = sum(5, 10);
console.log("Total is " + total);

console.log("Adding 20 and 30", sum(20, 30));

//TASK
//multiplication
//


function multiply(a, b){
  return a * b;
}

var total = multiply(4,7);
console.log(total);

console.log(multiply(10, 20));

//