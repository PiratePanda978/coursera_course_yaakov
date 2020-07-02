(function (window) {
    var GreetHi = {};
    GreetHi.name = "Aradhana";
    GreetHi.sayHi = function(){
        console.log('Hi '+ GreetHi.name);
    }
    window.GreetHi = GreetHi;
} )(window);

