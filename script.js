const box1 = document.querySelector(".content");
const box2 = document.querySelector(".hidden");

function play(num) {
  let result = document.querySelector("#tabuada");

  box1.style.display = "none";
  box2.style.display = "flex";

  result.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    result.innerHTML += num + " x " + i + " = " + num * i + "<br>";
  }
}

function voltar() {
  box1.style.display = "flex";
  box2.style.display = "none";
}
