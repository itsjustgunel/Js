let hefteningunu = prompt("Bu gun heftenin necenci gunudur? 1-7 reqem daxil et");

if (hefteningunu === "1") {
    document.write("Bu gun bazar ertesidir")
} else if (hefteningunu === "2") {
    document.write("Bu gun cersenbe axsamidir")
} else if (hefteningunu === "3") {
    document.write("Bu gun cersenbedir")
} else if (hefteningunu === "4") {
    document.write("Bu gun cume axsamidir")
} else if (hefteningunu === "5") {
    document.write("Bu gun cumedir")
} else if (hefteningunu === "6") {
    document.write("Bu gun senbedir")
} else if (hefteningunu === "7") {
    document.write("Bu gun bazar gunudur")
}
 else if (hefteningunu > 7) {
    document.write("Ey insan heftenin 7 gunu olur!")
}
else {
    document.write("Reqem daxil etmemisiniz...")
}
