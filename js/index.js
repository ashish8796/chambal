const allCountriesDiv = document.querySelector(".all-contries-cont");
const countrySelectBtn = document.getElementById("country-select-btn");
const countryName = document.querySelector("#country-select-btn>p");
const featureDiv = document.querySelector(".features-container");

const countryObj = {
  "United States": "US",
  "United Kingdom": "UK",
  Germany: "DE",
  France: "FR",
  Afganistan: "AF",
  Algeria: "DZ",
  Argentina: "AR",
  Australia: "AU",
  Bahamas: "BS",
  Bangaladesh: "BD",
  Belgium: "BL",
  Brazil: "BR",
  Camodia: "CM",
  Canada: "CN",
  Colombia: "CO",
  Congo: "CG",
};

let isCountriesVisible = false;

function createSelectCountry(obj) {
  var arr = Object.keys(obj);

  arr.forEach((key) => {
    var countryDiv = document.createElement("div");
    countryDiv.setAttribute("class", "country-name-cont");

    countryDiv.textContent = key;
    allCountriesDiv.append(countryDiv);
  });

  allCountriesDiv.style.visibility = "visible";
}

function toggleCountries() {
  isCountriesVisible = !isCountriesVisible;
  console.log(allCountriesDiv);

  if (isCountriesVisible) {
    createSelectCountry(countryObj);
  } else {
    allCountriesDiv.innerHTML = "";
    allCountriesDiv.style.visibility = "hidden";
  }
}

countrySelectBtn.addEventListener("click", toggleCountries);
allCountriesDiv.addEventListener("click", function (event) {
  var target = event.target;

  if (target.className === "country-name-cont") {
    countryName.textContent = countryObj[target.textContent];
  }
});

const abledImgSrcArr = [
  "./assets/features-home-svgs/sec-abled.png",
  "./assets/features-home-svgs/content-marketing-abled.png",
  "./assets/features-home-svgs/market-research-abled.png",
  "./assets/features-home-svgs/advertising-again-abled.png",
  "./assets/features-home-svgs/social-media-abled.png",
];

const disableImgSrcArr = [
  "./assets/svgs/svgexport-11.svg",
  "./assets/svgs/svgexport-12.svg",
  "./assets/svgs/svgexport-13.svg",
  "./assets/svgs/svgexport-14.svg",
  "./assets/svgs/svgexport-15.svg",
];

function changeFeatureImg(bool, e, index) {
  console.log({ bool, e, index });
  e.setAttribute(
    "src",
    `${bool === "true" ? disableImgSrcArr[index] : abledImgSrcArr[index]}`
  );
}

function changeFeature(event) {
  const target = event.target;
  const imgElem = target.parentNode.children[0];
  const imgNo = +target.dataset.id.split("-")[0];
  const bool = target.dataset.id.split("-")[1];

  changeFeatureImg(bool, imgElem, imgNo);

  target.setAttribute(
    "data-id",
    `${imgNo}-${bool === "true" ? "false" : "true"}`
  );
}

featureDiv.addEventListener("click", changeFeature);
