// /**String Concatenation */
// var x = "Hello ";
// x += "World";
// console.log(x + '!');

// var x=4, y=4;
// if(x==y){
//     console.log("x equal to y");
// }
// else{
//     console.log("x not equal to y");
// }

// var x="4", y=4;
// if(x===y){
//     console.log("x equal to y");
// }
// else{
//     console.log("x not equal to y");
// }

// if(false && 0 && NaN && undefined){
//     console.log("False");
// }
// else{
//     console.log('All False')
// }

// if(true && 1 && "Hello"){
//     console.log("All TRue")
// }

// Object Creation

// var company = new Object();
// company.name="Facebook";
// company["The colour website"] = "Blue";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.lastname="ZuckerBerg";
// console.log(company);
// var Nationality = "Nationality of CEO";
// company.ceo[Nationality] = "Iris";

//Object creation using literal
// var Facebook = {
//     name : "Faceboook",
//     CEO : {
//         firstname : "Mark",
//         Lastname : "Zuckerberg"
//     },
//     "Stock of company" : 110
// };

// console.log(Facebook.CEO.firstname);

//Functions
// function makemultiplier(multiplier){
//     function myfunc(x){
//         return multiplier*x;
//     };
//     return myfunc;
// };

// var double = makemultiplier(2);
// console.log(double(100));

// function doOperation(x,operation){
//     return operation(x);
// };

// var result = doOperation(200,double);
// console.log(result);

// Passing by value/reference

// var a = 7;
// var b = a;
// console.log(a);
// console.log(b);
// b=5;
// console.log(a);
// console.log(b);

// var a = {x:7};
// var b = a;
// console.log(a);
// console.log(b);
// b.x=8;
// console.log(a);
// console.log(b);

// function change(value){
//     console.log("Before : "+value);
//     value=10;
//     console.log("After "+value);
// }

// var value = 7;
// change(value);
// console.log("After change : "+value)

// function change(value){
//     console.log("Inside Function");
//     console.log("Before : ");
//     console.log(value);
//     value.x = 10;
//     console.log("After : ");
//     console.log(value);
// }

// value = { x:7 };
// console.log("Original : ");
// console.log(value);
// change(value);
// console.log("After function call : ");
// console.log(value);

//Constructor Prototype This//

// function circle (radius){
//     this.radius = radius;
// }

// circle.prototype.getArea = 
//     function(){
//         return Math.PI*Math.pow(this.radius,2);
//     }
// var myCircle = new circle(10);
// console.log(myCircle);
// console.log(myCircle.getArea());

//Object Literal And This Ketword

// var circle = {
//     radius : 10,
//     getArea : function () {
//         var self = this;
//         console.log(this);
        
//         var incre = function(){
//             self.radius = 20;
//         };
//         incre();
//         return(Math.PI*Math.pow(this.radius,2));

//     }
// };
// console.log(circle.getArea());

//Arrays

// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 4;
// array[2] = 2;
// array[3] = function (name){
//     console.log(name);
// };
// array[4] = {
//     course : "Anupam"
// };
// console.log(array);
// console.log(array[2]);
// array[3](array[0]);

// //Short hand array notation

// var names = ["Yaakov", "John", "Jor"];
// names.hi  = "Anupam";

// for(var i = 0; i<names.length; i++)
// {
//     console.log("Hello "+names[i]);
// }

//Closures//

// function makeMultiplier(multiplier){
//     function b(){
//         console.log("The multiplier is : "+multiplier);
//     }
//     b();
//     return(
//         function (x){
//             return multiplier*x;
//         }
//     )
// }


// var double = makeMultiplier(2);
// console.log(double(10));
// Name spaces

(function (window) {
    var GreetHello = {};
    GreetHello.name = "anupam";
    GreetHello.sayHello = function(){
        console.log("Hello "+GreetHello.name);
    }
    window.GreetHello = GreetHello;
} )(window);

