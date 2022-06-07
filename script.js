const btn = document.querySelectorAll(".rating-buttons li");
const btnList = document.querySelector(".rating-buttons");
const submit = document.querySelector(".btn");
const container = document.querySelector(".container");
const containerAccept = document.querySelector(".container-accept");
const rating = document.getElementById("rating");

//------------------------------------------

function handleActived() {
  function addClass(event) {
    removeClass();
    event.target.classList.add("ativo");
    btnList.classList.add("ativo");
    valor = event.target.innerText;
    replaceRating(valor);
  }

  function removeClass() {
    btn.forEach((item) => {
      item.classList.remove("ativo");
    });
  }

  function replaceRating(valor) {
    rating.innerText = `You Selected ${valor} out of 5`;
  }

  btn.forEach((item) => {
    item.addEventListener("click", addClass);
  });
}

handleActived();

//------------------------------------------

function handleSubmit() {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    verify();
  });

  const error = document.querySelector(".erro");
  function verify() {
    if (btnList.classList.contains("ativo")) {
      container.classList.remove("ativo");
      containerAccept.classList.add("ativo");
    } else {
      error.classList.add("ativo");
    }
  }
}

handleSubmit();
//-----------------------------------------
