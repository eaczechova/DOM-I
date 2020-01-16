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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Apply images

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update navigation menu items using forEach() method

let navigationItems = document.querySelectorAll("nav a");

navigationItems.forEach((item, i) => {
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  item.style.color = "green";
});

// Update main heading and cta button

let mainHeader = document.querySelector('.cta-text h1');
mainHeader.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

// Update main content headings and paragraph content

let mainContentHeadings = document.querySelectorAll('.text-content h4');

// mainContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
// mainContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
// mainContentHeadings[2].textContent = siteContent["main-content"]["services-h4"];
// mainContentHeadings[3].textContent = siteContent["main-content"]["product-h4"];
// mainContentHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

// Code refactored

const headingData = Object.entries(siteContent["main-content"])
.filter(item => item[0].includes("h4"))
.map(item => item[1]);

mainContentHeadings.forEach((item, i) => {
  item.textContent = headingData[i];
});

let mainContentText = document.querySelectorAll('.text-content p');

// mainContentText[0].textContent = siteContent["main-content"]["features-content"];
// mainContentText[1].textContent = siteContent["main-content"]["about-content"];
// mainContentText[2].textContent = siteContent["main-content"]["services-content"];
// mainContentText[3].textContent = siteContent["main-content"]["product-content"];
// mainContentText[4].textContent = siteContent["main-content"]["vision-content"];

const textData = Object.entries(siteContent["main-content"])
  .filter(item => item[0].includes("content"))
  .map(item => item[1]);

mainContentText.forEach((item, i) => {
  item.textContent = textData[i];
});


// Update contact information and footer note

// let contactHeading = document.querySelector(".contact h4");
// let contactParagraphs = document.querySelectorAll(".contact p");

// contactHeading.textContent = siteContent["contact"]["contact-h4"];

// contactParagraphs[0].textContent = siteContent["contact"]["address"];
// contactParagraphs[1].textContent = siteContent["contact"]["phone"];
// contactParagraphs[2].textContent = siteContent["contact"]["email"];


// Code refactored 

let contact = document.querySelectorAll(".contact *");
let contactData = Object.entries(siteContent["contact"]).map(item => item[1]);

contact.forEach((item, i) => {
  item.textContent = contactData[i];
});

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// Add new content

let firstItem = document.createElement("a");
firstItem.textContent = "First Item";
firstItem.style.color = "green";

let lastItem = document.createElement("a");
lastItem.textContent = "Last Item";
lastItem.style.color = "green";

let navigation = document.querySelector("nav");
navigation.appendChild(lastItem);
navigation.prepend(firstItem);

//  Add event to cta button

ctaButton.addEventListener('click', () => {
  let rgb = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
  let newNavItems = document.querySelectorAll("nav a");
  newNavItems.forEach((item) => {
    item.style.color = rgb;
  })
});


