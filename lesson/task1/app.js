const buttonForLampa = document.querySelector("#buttonForLampa");
const lampa = document.querySelector("#lampa");
buttonForLampa.onclick = () => {
  if (lampa.src.includes("bulboff")) {
    lampa.src = lampa.src.replace("bulboff", "bulbon");
    buttonForLampa.innerText = "sondur";
    document.body.style.backgroundColor = "white";
  } else {
    lampa.src = lampa.src.replace("bulbon", "bulboff");
    buttonForLampa.innerText = "yandir";
    document.body.style.backgroundColor = "black";
  }
};