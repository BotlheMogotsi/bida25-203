<<<<<<< HEAD
const textArray = [
"Take A Look Into Your Child's Future!"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;

const typingElement = document.getElementById("typing");

function type() {
if (charIndex < textArray[textIndex].length) {
typingElement.textContent += textArray[textIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingSpeed);
} else {
setTimeout(erase, delayBetweenTexts);
}
}

function erase() {
if (charIndex > 0) {
typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
charIndex--;
setTimeout(erase, erasingSpeed);
} else {
textIndex++;
if (textIndex >= textArray.length) textIndex = 0;
setTimeout(type, typingSpeed);
}
}

// Start animation
document.addEventListener("DOMContentLoaded", () => {
type();
});


const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
backToTopBtn.style.display = "block";
} else {
backToTopBtn.style.display = "none";
}
});

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});


=======
const textArray = [
"Take A Look Into Your Child's Future!"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;

const typingElement = document.getElementById("typing");

function type() {
if (charIndex < textArray[textIndex].length) {
typingElement.textContent += textArray[textIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingSpeed);
} else {
setTimeout(erase, delayBetweenTexts);
}
}

function erase() {
if (charIndex > 0) {
typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
charIndex--;
setTimeout(erase, erasingSpeed);
} else {
textIndex++;
if (textIndex >= textArray.length) textIndex = 0;
setTimeout(type, typingSpeed);
}
}

// Start animation
document.addEventListener("DOMContentLoaded", () => {
type();
});


const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling
window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
backToTopBtn.style.display = "block";
} else {
backToTopBtn.style.display = "none";
}
});

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});


>>>>>>> 62e0018559f2adfee57b4d1d11558cc68464bbb2
