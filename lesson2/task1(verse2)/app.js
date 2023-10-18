let hefteningunu = prompt("Bu gun heftenin necenci gunudur? 1-7 reqem daxil et");

switch (hefteningunu) {
    case "1":
        document.write("Bu gun bazar ertesidir");
    break;
    case "2":
        document.write("Bu gun cersenbe axsamidir");
    break;
    case "3":
        document.write("Bu gun cersenbedir");
    break;
    case "4":
        document.write("Bu gun cume axsamidir");
    break;
    case "5":
        document.write("Bu gun cumedir");
    break;
    case "6":
        document.write("Bu gun senbedir");
    break;
    case "7":
        document.write("Bu gun bazar gunudur");
    break;
    default: document.write("Duzgun deyer daxil edilmeyib.") 
}