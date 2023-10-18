let name = prompt("What is your name?");
let gender = prompt("What is your gender? M/F");
let age = prompt("How old are you?");


if (gender === "M" || gender === "m") {
    document.write("Hello Mr." + name)
} else if (gender === "F" || gender === "f" ) {
    document.write("Hello Ms." + name)
} 
else {
    document.write("You gave us wrong information")
}
age >= 18 ? document.write(" Welcome to our website ") : document.write(" you are not allowed to this website sorry :( " )
