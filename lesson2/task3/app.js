let name = prompt("What is your name?")
let gender = prompt("What is your gender? M/F")

if (gender === "M" || gender === "m"){
    document.write("Hello, Mr." + name)
}else if (gender === "F" || gender === "f"){
    document.write("Hello, Ms." + name)
}else{
    document.write("Sorry, You gave us wrong information.")
}