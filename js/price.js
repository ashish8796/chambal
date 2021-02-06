var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Fuctionality For Navigation at header
const navElem = document.querySelector("nav");

let lastSelectedOption;

let isLastOptionVisible = false;

function handleNavBarClick(event) {
  const target = event.target;
  console.log(target);

  if (target.textContent === "Resources") {
    if (lastSelectedOption) {
      lastSelectedOption.style.display = "none";
    }

    const option = target.nextElementSibling.nextElementSibling;

    console.log({ option });

    if (option === lastSelectedOption) {
      option.style.display = isLastOptionVisible ? "none" : "grid";
      isLastOptionVisible = !isLastOptionVisible;
    } else {
      option.style.display = "grid";
      isLastOptionVisible = true;
    }

    lastSelectedOption = option;
  }

  if (target.textContent === "Company") {
    if (lastSelectedOption) {
      lastSelectedOption.style.display = "none";
    }

    const option = target.nextElementSibling.nextElementSibling;

    if (option === lastSelectedOption) {
      option.style.display = isLastOptionVisible ? "none" : "grid";
      isLastOptionVisible = !isLastOptionVisible;
    } else {
      option.style.display = "grid";
      isLastOptionVisible = true;
    }

    lastSelectedOption = option;
  }

  if (target.textContent === "Extra Tools") {
    if (lastSelectedOption) {
      lastSelectedOption.style.display = "none";
    }
    const option = target.nextElementSibling.nextElementSibling;

    if (option === lastSelectedOption) {
      option.style.display = isLastOptionVisible ? "none" : "grid";
      isLastOptionVisible = !isLastOptionVisible;
    } else {
      option.style.display = "grid";
      isLastOptionVisible = true;
    }

    lastSelectedOption = option;
  }
}

navElem.addEventListener("click", handleNavBarClick);

// Header Responsive
const menuElem = document.getElementById("menu");

let isMenuVisible = false;

menu.addEventListener("click", (event) => {
  const target = event.target;

  if (target.textContent === "Menu") {
    isMenuVisible = !isMenuVisible;
    menu.nextElementSibling.style.display = isMenuVisible ? "flex" : "none";
  }
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 1025) {
    document.querySelector("nav").children[1].style.display = "flex";
  }
  if (window.innerWidth < 1023) {
    console.log(window.innerWidth);
    document.querySelector("nav").children[1].style.display = "none";
  }
});
