// console.log(window);
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function SayHello(){
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!!</h2>";
    // document
    // .getElementById('content')
    // .textContent = message;
    document
    .getElementById('content')
    .innerHTML = message;
    if (name === 'student'){
       var title = document
       .querySelector("#title")
       .textContent;
       title = title + " & loving it!";
       document
       .querySelector("h1")
       .textContent = title;
    }
}

//unobtrusive event binding

