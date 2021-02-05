const allCountriesDiv = document.querySelector(".all-contries-cont");
const countrySelectBtn = document.getElementById("country-select-btn");
const countryName = document.querySelector("#country-select-btn>p");
const featureDiv = document.querySelector(".features-container");
const featureInfoElem = document.querySelector(".img-container");
const reviewsContainer = document.querySelector(".reviews");

// Functionality for Selecting Country in Platform section
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

// Functionaly for Changing Feature at Feature section

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

// Functionaly for Changing Market Lover At Market Semrush Lover Section

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

const loverAreaObj = {
  "marketing suite": [
    "casey camilleri",
    "Fabrizio Ballarini",
    "Brian Dean",
    "Esther Giménez",
  ],
  seo: ["Freddy Hunt", "Eric Bogard", "Shefali Joshi", "Ed Challinor"],
  "content marketing": [
    "Barbora Jassova",
    "Mesmer Doue",
    "Idan Segal",
    "Ilyas Teker",
  ],
  "content marketing": [
    "Barbora Jassova",
    "Mesmer Doue",
    "Idan Segal",
    "Ilyas Teker",
  ],
};

const loverObj = {
  "marketing suite": {
    "casey camilleri": {
      quote: `“What I appreciate most about Semrush is that it covers all
      areas of search with its tools, so I can have a 360-degree view
      of my projects.”`,
      src:
        "https://www.semrush.com/static/index/testimonials/Casey_Camilleri_Marx.335cc28f69cb.webp",
      post: "Senior SEO & UX Consultant, Annalect, Omnicom Media Group",
    },
    "Fabrizio Ballarini": {
      quote: `“If you ask an agency to deliver 10x organic search growth
      through content, they will assign a large team to your project.
      Our content team, in contrast, runs activities with Semrush
      without having an army of people specialized in SEO.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Fabrizio_Ballarini.70ae6db20432.jpg",
      post: "Responsible for SEO, TransferWise",
    },
    "Brian Dean": {
      quote: `“When it comes to pure value, Semrush wins. That’s mostly
      because you get a fully-featured SEO software suite AND Google
      Ads software for the same monthly price.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Brian_Dean.380cb9f99628.jpg",
      post: "Founder, Backlinko",
    },
    "Esther Giménez": {
      quote: `“What I appreciate most about Semrush is that it covers all
      areas of search with its tools, so I can have a 360-degree view
      of my projects.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Esther_Gimenez.442e7b9c274a.jpg",
      post: "Senior SEO & UX Consultant, Annalect, Omnicom Media Group",
    },
  },

  seo: {
    "Freddy Hunt": {
      quote: `“We chose Semrush because the keyword tracking was much more
        accurate than our previous tools and the interface was very
        intuitive.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Freddy_Hunt.4fa7cc5df432.jpg",
      post: "Digital Marketing Director, Nlyte Software",
    },
    "Eric Bogard": {
      quote: `“There is a direct correlation between using Semrush, being
        focused on SEO, and the sheer growth that we’ve had. Our organic
        traffic was up by 230% in 2019. Literally every day we are
        getting the highest traffic ever on our website.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Eric_Bogard.3e0c4ca3794f.jpg",
      post: "S VP of Marketing, Arkadium",
    },
    "Shefali Joshi": {
      quote: `“With the help of Semrush, we empowered every single marketing
        team within the university to double their traffic like we did
        for the central sites.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Shefali_Joshi.59ac6aa23f32.jpg",
      post: "Marketing Optimization Analyst, Monash University",
    },
    "Ed Challinor": {
      quote: `“I’ve never seen a local dental practice in the world ranking as
        much as we are now. We are ranking nationally. Because of the
        tool. Simple as that. And I still don’t use even 50% of it.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Ed_Challinor.9a6b90c7c95c.jpg",
      post: "Co-founder and CEO, Smileworks",
    },
  },

  "content marketing": {
    "Barbora Jassova": {
      quote: ` “Our overall organic traffic increased sevenfold, with blog
        traffic making up over 75% of the visits! Semrush allowed us to
        optimize and run our content strategy without needing an army of
        SEO experts.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Barbora_Jassova.cc110ec78bb6.jpg",
      post: "Content Strategist, Landbot",
    },
    "Mesmer Doue": {
      quote: ` “Semrush’s SEO Writing Assistant is one of a kind. I was amazed
        by the feedback and recommendations it provided me to improve my
        SEO, text readability, originality, and tone of voice.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Mesmer_Doue.e37eeaf6eb89.jpg",
      post: "Digital Marketing Consultant, Blue Lance",
    },
    "Idan Segal": {
      quote: `“By using Semrush, my team saves a lot of time by working on the
        right content and in a more data-driven way. Semrush is my right
        hand for many tasks, it helps me and my team to strategize.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Idan_Segal.1d973e7e94c8.jpg",
      post: "Organic Growth Lead, Wix",
    },
    "Ilyas Teker": {
      quote: `“We created a comprehensive content strategy to increase the
        potential organic traffic by 123%. We actively used Semrush
        tools in the process to achieve our goals.”`,
      src:
        "https://cdn.semrush.com/static/index/testimonials/Ilyas_Teker.5882a896a432.jpg",
      post: "Founder, SEO Consultant, Mosanta",
    },
  },
};

let reviewsIndex = 0;
let loverType = "marketing suite";

const forwardReviewBtn = document.getElementById("increment-btn");
const backwardBtn = document.getElementById("decrement-btn");

function createMarketLover(loverType, index) {
  reviewsContainer.innerHTML = "";
  const obj = loverObj[loverType];

  const loverArr = loverAreaObj[loverType];
  backwardBtn.nextSibling.nextSibling.innerText = `${index + 1}/${
    loverArr.length
  }`;

  const key = loverArr[index];

  const reviewer = document.createElement("div");

  const quote = document.createElement("p");
  quote.classList.add("quote");
  quote.textContent = obj[key].quote;

  const reviewerImg = document.createElement("img");
  reviewerImg.setAttribute("src", obj[key].src);
  reviewerImg.setAttribute("alt", obj[key].name);

  const name = document.createElement("p");
  name.classList.add("name");

  const firstName = key.split(" ")[0];
  const lastName = key.split(" ")[1];
  name.textContent =
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName.charAt(0).toUpperCase() +
    lastName.slice(1);

  const position = document.createElement("p");
  position.textContent = obj[key].post;

  reviewer.append(quote);
  reviewer.append(reviewerImg);
  reviewer.append(name);
  reviewer.append(position);

  reviewsContainer.append(reviewer);
}

function forwardReviewer() {
  if (reviewsIndex < 3) {
    reviewsIndex += 1;
    createMarketLover(loverType, reviewsIndex);
  }
}

function backwardReviewer() {
  if (reviewsIndex > 0) {
    reviewsIndex -= 1;
    createMarketLover(loverType, reviewsIndex);
  }
}

forwardReviewBtn.addEventListener("click", forwardReviewer);
backwardBtn.addEventListener("click", backwardReviewer);

const selectLoverElem = document.getElementById("select-market-lover");
let lastSelectedLoverType = document.querySelector(".selected-lover");

selectLoverElem.addEventListener("click", (event) => {
  const target = event.target;

  if (target.className === "lover-cover") {
    lastSelectedLoverType.classList.remove("selected-lover");
    target.parentNode.classList.add("selected-lover");

    lastSelectedLoverType = target.parentNode;
    reviewsIndex = 0;

    loverType = target.nextSibling.nextSibling.textContent.toLowerCase();

    if (loverType in loverAreaObj) {
      createMarketLover(loverType, reviewsIndex);
    }
  }
});

// Fuctionality For Navigation at header
const navElem = document.querySelector("nav");

let lastSelectedOption;

let isLastOptionVisible = false;

function handleNavBarClick(event) {
  const target = event.target;

  if (target.textContent === "Resources") {
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
