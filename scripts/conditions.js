console.log("Inside the conditions.js fine");



function div(a, b){

if (b == 0){
  return "ERROR";
} 
  else{
   return a / b;
}
}

//console.log("Results of divide is ", div(10, 0));

function myFunction() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
      text += "The number is " + i + "<br>";
    }
   document.getElementById("list").innerHTML = text;

}


function step2(){
var txt = "";
var person = {fname:"John", lname:"Doe", age:25};
var x;
for (x in person) {
    txt += person[x] + " ";
}
    document.getElementById("demo").innerHTML = txt;


}