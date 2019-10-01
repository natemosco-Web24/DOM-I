const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let NavText = document.querySelectorAll("a");
// NavText[0].textContent = siteContent["nav"]["nav-item-1"];
// NavText[1].textContent = siteContent["nav"]["nav-item-2"];
// NavText[2].textContent = siteContent["nav"]["nav-item-3"];
// NavText[3].textContent = siteContent["nav"]["nav-item-4"];
// NavText[4].textContent = siteContent["nav"]["nav-item-5"];
// NavText[5].textContent = siteContent["nav"]["nav-item-6"];
NavText.forEach((link, index) => link.textContent = Object.values(siteContent.nav)[index])
// BELOW IS THE WAY TO DO THIS WHEN TARGETING KEYS INSTEAD OF VALUES (MORE CONVOLUTED)
// NavText.forEach((link, index) => link.textContent = siteContent.nav[(Object.keys(siteContent.nav)[index])])

// let header1 = document.querySelector(".cta-text");
let header1 = document.getElementsByTagName("h1");
//ONE WAY TO INTRODUCE LINE BREAK USING \n 
header1[0].style.whiteSpace = "pre";
header1[0].textContent = "Dom\n Is\n Awesome";
console.log("header1", header1)
let ctaimage = document.querySelector("#cta-img")
ctaimage.setAttribute("src", siteContent["cta"]["img-src"])
let middleimage = document.querySelector(".middle-img")
middleimage.setAttribute("src", siteContent["main-content"]["middle-img-src"])
let buton = document.getElementsByTagName("button");
buton[0].textContent = siteContent["cta"]["button"];

let allh4 = document.querySelectorAll("h4")
allh4[0].textContent = siteContent["main-content"]["features-h4"]
allh4[1].textContent = siteContent["main-content"]["about-h4"]
allh4[2].textContent = siteContent["main-content"]["services-h4"]
allh4[3].textContent = siteContent["main-content"]["product-h4"]
allh4[4].textContent = siteContent["main-content"]["vision-h4"]
allh4[5].textContent = siteContent["contact"]["contact-h4"]

let allp = document.getElementsByTagName("p")
allp[0].textContent = siteContent["main-content"]["features-content"]
allp[1].textContent = siteContent["main-content"]["about-content"]
allp[2].textContent = siteContent["main-content"]["services-content"]
allp[3].textContent = siteContent["main-content"]["product-content"]
allp[4].textContent = siteContent["main-content"]["vision-content"]
//ANOTHER WAY TO INTRODUCE LINE BREAK WHILE USING THE DATA PROVIDED NOTE USE OF INNER HTML FOR THIS TO WORK HERE
allp[5].innerHTML = (siteContent["contact"]["address"].slice(0, 18) + "<br>" + siteContent["contact"]["address"].slice(-14))
// allp[5].textContent = siteContent["contact"]["address"]
allp[6].textContent = siteContent["contact"]["phone"]
allp[7].textContent = siteContent["contact"]["email"]
allp[8].textContent = siteContent["footer"]["copyright"]

const nav = document.querySelector("nav")

const append = document.createElement("a")
append.textContent = "Append"
append.setAttribute("href", "#")
nav.append(append)

const prepend = document.createElement("a")
prepend.textContent = "Prepend"
prepend.setAttribute("href", "#")
nav.prepend(prepend)

const newnav = document.querySelectorAll("a")
newnav.forEach(link => link.style.color = "green")



