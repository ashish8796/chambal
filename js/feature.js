
      function function1() {
        document.getElementById("item10").remove();
        document.getElementById("item11").remove();
        document.getElementById("item12").remove();
        document.getElementById("item13").remove();
        document.getElementById("item14").remove();
        document.getElementById("item15").remove();
        document.getElementById("item7").remove();
        document.getElementById("item8").remove();
      }

      var btnn = document.getElementById("seo");
      btnn.addEventListener("click", function1);

      function function2() {
        document.getElementById("item2").remove();
        document.getElementById("item5").remove();
        document.getElementById("item12").remove();
        document.getElementById("item13").remove();
        document.getElementById("item14").remove();
        document.getElementById("item15").remove();
        document.getElementById("item7").remove();
        document.getElementById("item8").remove();
      }

      var btnn = document.getElementById("content");
      btnn.addEventListener("click", function2);

      function function3() {
        document.getElementById("item2").remove();
        document.getElementById("item5").remove();
        document.getElementById("item1").remove();
        document.getElementById("item3").remove();
        document.getElementById("item14").remove();
        document.getElementById("item15").remove();
        document.getElementById("item7").remove();
        document.getElementById("item8").remove();
      }

      var btnn = document.getElementById("mr");
      btnn.addEventListener("click", function3);

      function function4() {
        document.getElementById("item2").remove();
        document.getElementById("item5").remove();
        document.getElementById("item12").remove();
        document.getElementById("item13").remove();
        document.getElementById("item14").remove();
        document.getElementById("item15").remove();
        document.getElementById("item7").remove();
        document.getElementById("item17").remove();
      }

      var btnn = document.getElementById("ad");
      btnn.addEventListener("click", function4);

      function function5() {
        document.getElementById("item2").remove();
        document.getElementById("item1").remove();
        document.getElementById("item3").remove();
        document.getElementById("item5").remove();
        document.getElementById("item7").remove();
        document.getElementById("item15").remove();
        document.getElementById("item7").remove();
        document.getElementById("item1").remove();
        document.getElementById("item4").remove();
      }

      var btnn = document.getElementById("serm");
      btnn.addEventListener("click", function5);
   

var btn = document.getElementById("seo");
btn.addEventListener("click", function1);

function function2() {
  document.getElementById("item2").remove();
  document.getElementById("item5").remove();
  document.getElementById("item12").remove();
  document.getElementById("item13").remove();
  document.getElementById("item14").remove();
  document.getElementById("item15").remove();
  document.getElementById("item7").remove();
  document.getElementById("item8").remove();
}

var btn = document.getElementById("content");
btn.addEventListener("click", function2);

function function3() {
  document.getElementById("item2").remove();
  document.getElementById("item5").remove();
  document.getElementById("item12").remove();
  document.getElementById("item13").remove();
  document.getElementById("item14").remove();
  document.getElementById("item15").remove();
  document.getElementById("item7").remove();
  document.getElementById("item8").remove();
}

var btn = document.getElementById("mr");
btn.addEventListener("click", function3);

function function4() {
  document.getElementById("item2").remove();
  document.getElementById("item5").remove();
  document.getElementById("item12").remove();
  document.getElementById("item13").remove();
  document.getElementById("item14").remove();
  document.getElementById("item15").remove();
  document.getElementById("item7").remove();
  document.getElementById("item17").remove();
}

var btn = document.getElementById("ad");
btn.addEventListener("click", function4);

function function5() {
  document.getElementById("item2").remove();
  document.getElementById("item5").remove();
  document.getElementById("item12").remove();
  document.getElementById("item13").remove();
  document.getElementById("item14").remove();
  document.getElementById("item15").remove();
  document.getElementById("item7").remove();
  document.getElementById("item1").remove();
  document.getElementById("item4").remove();
}

var btn = document.getElementById("serm");
btn.addEventListener("click", function5);

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

