const allCountriesDiv = document.querySelector(".all-contries-cont");
const countrySelectBtn = document.getElementById("country-select-btn");
const countryName = document.querySelector("#country-select-btn>p");
const featureDiv = document.querySelector(".features-container");
const featureInfoElem = document.querySelector(".img-container");

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

  "./assets/features-home-svgs/social-media-abled.png",
];

const disableImgSrcArr = [
  "./assets/features-home-svgs/seo-disabled.png",
  "./assets/features-home-svgs/content-marketing-disabled.png",
  "./assets/features-home-svgs/market-research-disabled.png",

  "./assets/features-home-svgs/social-media-disabled.png",
];

let lastSelectedImg = document.querySelector(".abled-img > img");
let lastIndex = 0;

function changeFeatureImg(bool, e, index) {
  lastSelectedImg.setAttribute("src", disableImgSrcArr[lastIndex]);

  e.setAttribute(
    "src",
    `${bool === "true" ? disableImgSrcArr[index] : abledImgSrcArr[index]}`
  );
}

let selectedFeature = document.querySelector(".abled-img");

function changeFeature(event) {
  const target = event.target;
  selectedFeature.classList.remove("abled-img");

  target.parentNode.classList.add("abled-img");

  const imgElem = target.parentNode.children[0];
  const imgNo = +target.dataset.id.split("-")[0];
  const bool = target.dataset.id.split("-")[1];

  changeFeatureImg(bool, imgElem, imgNo);

  target.setAttribute(
    "data-id",
    `${imgNo}-${bool === "true" ? "false" : "true"}`
  );

  createFeatureInfo(imgNo);

  selectedFeature = target.parentNode;
  lastSelectedImg = target.parentNode.children[0];
  lastIndex = imgNo;
}

const featureInfoSrcArr = [
  ,
  "https://cdn.semrush.com/static/index/tools-new/content_marketing.9ad3130035b8.svg",
  "https://cdn.semrush.com/static/index/tools-new/competitive_research.122052b6bfb5.svg",
  "https://cdn.semrush.com/static/index/tools-new/social_media.044a788fef8f.svg",
];

const featureInfoObj = {
  0: {
    src: "https://cdn.semrush.com/static/index/tools-new/seo.9edeeb0311e7.svg",
    h: `Grow organic traﬃc with our complete and easy SEO tools &amp;
  workﬂow`,
    li: [
      `Uncover millions of national &amp; local keywords`,
      "Analyze any domain’s backlink profile",
      "Run technical SEO audits",
      "Track your SERP positions daily",
    ],
    buttonText: "Try SEO Toolkit",
    id: "seo-info",
  },
  1: {
    src:
      "https://cdn.semrush.com/static/index/tools-new/content_marketing.9ad3130035b8.svg",
    h: `Create content that ranks (no expert knowledge required)`,
    li: [
      `Find topics that resonate with your audience`,
      "Get actionable tips to create SEO-friendly content",
      " Audit and improve your content based on real-time metrics",
      "Track brand mentions and content reach",
    ],
    buttonText: "Try Content Marketing Toolkit",
    id: "content-marketing-info",
  },
  2: {
    src:
      "https://cdn.semrush.com/static/index/tools-new/competitive_research.122052b6bfb5.svg",
    h: `Unveil your competitors’ marketing strategy and tactics`,
    li: [
      `Analyze traffic of any website`,
      "Unveil competitor promotion strategies",
      "Get ideas for growing your market share",
      "Discover keyword & backlink gap",
    ],
    buttonText: "Try Competitive Research Toolkit",
    id: "market-research-info",
  },
  3: {
    src:
      "https://cdn.semrush.com/static/index/tools-new/social_media.044a788fef8f.svg",
    h: `Build your most effective social media strategy`,
    li: [
      `Schedule and post content on social media`,
      "Analyze the performance of your posts",
      "Track & analyze competitor accounts",
      "Create & optimize social ads",
    ],
    buttonText: "Try Social Media Toolkit",
    id: "market-research-info",
  },
};

function createFeatureInfo(key) {
  featureInfoElem.innerHTML = "";
  const buttonClass = "button-essential";

  featureInfoElem.setAttribute("id", featureInfoObj[key].id);

  const firstSectionElem = document.createElement("section");

  const h = document.createElement("h3");
  h.textContent = featureInfoObj[key].h;
  const ul = document.createElement("ul");
  featureInfoObj[key].li.forEach((v) => {
    const li = document.createElement("li");
    li.textContent = v;
    ul.append(li);
  });

  const button = document.createElement("button");
  button.setAttribute("class", buttonClass);
  button.textContent = featureInfoObj[key].buttonText;

  firstSectionElem.append(h);
  firstSectionElem.append(ul);
  firstSectionElem.append(button);

  const secondSection = document.createElement("section");

  const img = document.createElement("img");
  img.setAttribute("src", featureInfoObj[key].src);

  secondSection.append(img);

  featureInfoElem.append(firstSectionElem);
  featureInfoElem.append(secondSection);
}

featureDiv.addEventListener("click", changeFeature);
