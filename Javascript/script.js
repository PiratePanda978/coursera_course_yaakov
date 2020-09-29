// var str = "Hello";
// str+=" world";
// console.log(str+"!");

// **All false
// if(false||null||undefined||""||0||NaN){
//     console.log("All False.");
// }
// else{
//     console.log("Not all false");
// }

// **All true
// if(true&&"hello"&&1&&"false"){
//     console.log("All true.");
// }

// //**for loop
// var sum = 0;
// for(var i=0;i<10;i++){
//     sum+=i;
// }
// console.log(sum);

// var company = new Object();
// company.name = "Facebook";
// company.owner = "Mark";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.Lastname = "Zuckerberg"
// console.log(company);
// company["stock of company"] = 110;
// console.log(company["ceo"]);
// console.log("The stock of company is "+company["stock of company"]);

// **Better way to create object : The Object Literal
// var facebook = {
//     name : "Facebook",
//     ceo : {
//         firstName : "Mark",
//         lastName : "Zuckerberg"
//     },
//     ["stock of company"] : 110
// };

// console.log(facebook);
// console.log(facebook.ceo.firstName);

// **Functions::

// function multiply(x,y){
//     return x*y;
// }

// // console.log(multiply(5,3));
// multiply.version = "1.0.4";
// // console.log(multiply.version);

// function makeMultiplier(multiplier){
//     var myFunc = function (x) {
//         return multiplier*x;
//     }
//     return myFunc;
// }

// var Multiply3 = makeMultiplier(3);
// console.log(Multiply3(10));

// **Passing fuunction as arguments
// var MyFunc = function (x,operation){
//     return operation(x);
// }

// function operation(x){
//     return 10*x;
// }

// console.log(MyFunc(10,operation));

// **passing by value vs by reference */
// console.log(this);

//**OOP in JS */

// var person = {
//     name : {
//         firstName : "Angela",
//         lasName : "Yu"
//     },
//     gender : "Female",
//     Age : 19,
//     intro : function (){
//         console.log("First Name : "+this.name.firstName+"\nLast Name : "+this.name.lasName
//         +"\nAge : "+this.Age);
//     }
// };
// console.log(person.intro());

// function person(first,last,age,gender,interests){
//     this.name = {
//         first : first,
//         last : last
//     };
//     this.gender = gender;
//     this.age = age;
//     this.interests = interests;
//     this.greeting = function(){
//         alert("Hi I am "+this.name + ".");
//     };
// }

// var Anupam = new person("anupam");
// Anupam.greeting();
// var Aradhana = new person("aradhana");
// Aradhana.greeting();

// var arr = new Array();
// arr[0] = "Anupam";
// arr[1] = function (name){
//     console.log("Hello "+name);
// };
// console.log(arr);

// var names = ["Anupam","Aradhana","Prithvi"];
// for(var i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// var myObj = {
//     name : "Anupam",
//     course : "Javascript",
//     age : 19
// };

// for(var prop in myObj){
//     console.log(prop + " : " +myObj[prop]);
// }

// function makeMultiplier(multiplier){
//     return (
//         function (x){
//             return multiplier*x;
//         }
//     );
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

// (function (name){
//     console.log("hello "+name);
// })("Anupam");

