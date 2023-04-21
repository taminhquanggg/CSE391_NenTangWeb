var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

const Button3soc = document.querySelector("#active-bar");
const Slile3soc = document.querySelector("#active-menu");

Button3soc.addEventListener("click", () => {
  if (Slile3soc.classList.contains("active")) {
    Slile3soc.classList.remove("active");
  } else {
    Slile3soc.classList.add("active");
  }
});

const overlay =document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  if (Slile3soc.classList.contains("active")) {
    Slile3soc.classList.remove("active");
  } else {
    Slile3soc.classList.add("active");
  }
});


