var eKey = document.querySelector(".card.key .card__notification");
var eLocation = document.querySelector(".card.location .card__notification");
var eWhich = document.querySelector(".card.which .card__notification");
var eCode = document.querySelector(".card.code .card__notification");
var result = document.querySelector(".number");
var alert = document.querySelector(".start");
var box = document.querySelector(".main");

document.addEventListener("keydown", function (e) {
  alert.classList.add("hide");
  box.classList.remove("hide");

  if(e.code === 'Space') {
     eKey.innerText = 'Space';
  } else {
      eKey.innerText = e.key;
  }

  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
  result.innerText = e.key;
});
