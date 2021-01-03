const icons = document.querySelectorAll(".section-1-icons .fas");
console.log('icons: ', icons);

let i = 1;

setInterval(() => {
  i = i + 1
  const icon = document.querySelector(".section-1-icons .change");
  icon?.classList.remove("change")

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1
  } else {
    icon.nextElementSibling.classList.add("change");
  }

}, 2500)