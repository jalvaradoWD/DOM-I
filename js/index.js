const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png",
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png",
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
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io",
    },
    footer: {
        copyright: "Copyright Great Idea! 2018",
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navbar
let nav = document.getElementById("navigation");
let navElements = Array.from(nav.children);

navElements.forEach((element, i) => {
    element.innerText = siteContent["nav"][`nav-item-${i + 1}`];
});

// createLink function appends a new "a" element to the navbar.
function createLink(linkName) {
    const newElement = document.createElement('a');
    newElement.href = "#";
    newElement.innerText = linkName
    nav.appendChild(newElement)
}

createLink("Sign In");
createLink("Sign Up");

// Making the navbar green
nav.querySelectorAll("a").forEach(element => element.style.color = "green")


// CTA
let ctaContent = siteContent.cta;
let CTAText = document.querySelector(".cta-text");

CTAText.querySelector("h1").innerText = ctaContent.h1;
CTAText.querySelector("button").innerText = ctaContent.button;
document.querySelector('#cta-img').src = ctaContent["img-src"]

/**
 * Main Content
 * 
 * This area of code is dedicated to the main content area of the webpage
 */

const mainContentData = siteContent["main-content"];
const allMainContentData = Object.keys(mainContentData).map(key => mainContentData[key]);

const mainContent = document.querySelector(".main-content");
const topContent = mainContent.querySelector('.top-content').querySelectorAll(".text-content");
const bottomContent = mainContent.querySelector(".bottom-content").querySelectorAll(".text-content");
const middleImg = mainContent.querySelector('.middle-img');

const topContentData = allMainContentData.slice(0, 4);
const middleImgData = allMainContentData.slice(4, 5);
const bottomContentData = allMainContentData.slice(5);

// This function auto-fills the data of the top-content and the bottom content
function addElementData(contentArray, contentDataArray) {
    for (let i = 0, j = 0; i < contentArray.length; i++, j += 2) {
        const textContentElement = contentArray[i].children;
        textContentElement[0].innerHTML = contentDataArray[j];
        textContentElement[1].innerHTML = contentDataArray[j + 1];
    }
}

addElementData(topContent, topContentData);
addElementData(bottomContent, bottomContentData);

middleImg.src = middleImgData

/**
 * Contact Area
 * 
 * The contact information of the webpage
 */

const contactData = siteContent.contact;
const contactElement = document.querySelector(".contact");
const allContactData = Object.keys(contactData).map(key => contactData[key]);

Array.from(contactElement.children).forEach((element, i) => {
    element.innerHTML = allContactData[i]
})

/**
 * Footer Area
 * 
 * The footer element of the webpage
 */

const footerElement = document.querySelector("footer p");
footerElement.innerHTML = siteContent.footer.copyright