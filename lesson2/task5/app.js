let evinqiymeti = prompt("Budcenize uygun mebleg daxil edin")
let evinsahesi = prompt("Ev ucun istediyiniz saheni daxil edin")
let valyuta = prompt("valyuta daxil edin. AZN|TL|USD|EUR" )

if (evinqiymeti  === "99.999" && evinsahesi > "2000" && valyuta === "AZN") {
   document.write(" Siz sertler odendiyi ucun evi aldiniz :) ")
}else{
    document.write(" Siz sertler odenmediyi ucun piyada qaldiniz :( ")
}