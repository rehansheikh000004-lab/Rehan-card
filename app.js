/* ==========================
   LUXURY CURSOR
========================== */

const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

}
);

/* ==========================
   SCROLL REVEAL
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.15
}

);

const revealElements =
document.querySelectorAll(

".stat-card, .service-card, .project-card, .contact-card, .qr-card"

);

revealElements.forEach(

(element)=>{

element.classList.add(
"hidden"
);

observer.observe(
element
);

}

);

/* ==========================
   HERO IMAGE FLOAT
========================== */

const heroImage =
document.querySelector(
".hero-image img"
);

let floatDirection = 1;

setInterval(()=>{

if(heroImage){

heroImage.style.transform =
`translateY(${10 * floatDirection}px)`;

floatDirection *= -1;

}

},2500);

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener(
"scroll",
()=>{

const header =
document.querySelector(
"header"
);

if(window.scrollY > 50){

header.style.background =
"rgba(5,5,5,0.95)";

header.style.borderBottom =
"1px solid rgba(122,0,25,0.3)";

}

else{

header.style.background =
"rgba(5,5,5,0.75)";

header.style.borderBottom =
"1px solid rgba(255,255,255,0.05)";

}

}
);

/* ==========================
   BUTTON HOVER GLOW
========================== */

const buttons =
document.querySelectorAll(

".primary-btn, .secondary-btn"

);

buttons.forEach(btn=>{

btn.addEventListener(
"mouseenter",
()=>{

btn.style.boxShadow =
"0 0 30px rgba(122,0,25,.6)";

}
);

btn.addEventListener(
"mouseleave",
()=>{

btn.style.boxShadow =
"none";

}
);

});

/* ==========================
   PARALLAX EFFECT
========================== */

window.addEventListener(
"mousemove",
(e)=>{

const x =
(e.clientX /
window.innerWidth)
- 0.5;

const y =
(e.clientY /
window.innerHeight)
- 0.5;

if(heroImage){

heroImage.style.transform =

`translate(
${x * 15}px,
${y * 15}px
)`;

}

}
);

/* ==========================
   SMOOTH SECTION APPEAR
========================== */

window.addEventListener(
"load",
()=>{

document.body.style.opacity =
"1";

}
);

/* ==========================
   PREMIUM TYPEWRITER
========================== */

const title =
document.querySelector(
".hero h2"
);

if(title){

const originalText =
title.innerHTML;

title.innerHTML = "";

let i = 0;

function typeWriter(){

if(i < originalText.length){

title.innerHTML +=
originalText.charAt(i);

i++;

setTimeout(
typeWriter,
25
);

}

}

typeWriter();

}

/* ==========================
   CARD HOVER TILT
========================== */

const cards =
document.querySelectorAll(

".project-card,
.service-card,
.contact-card"

);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
((y / rect.height)-0.5)
* -10;

const rotateY =
((x / rect.width)-0.5)
* 10;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

}
);

});

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(

"%cREHAN BLACKCARD",

"color:#7a0019;font-size:30px;font-weight:bold;"

);

console.log(

"Luxury Portfolio Experience"

);

const bookingForm =
document.querySelector(
".booking-form"
);

if(bookingForm){

bookingForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"Thank you. Your project request has been received."
);

bookingForm.reset();

}
);

}

/* THEME TOGGLE */

const themeButton =
document.getElementById(
"theme-toggle"
);

themeButton.addEventListener(
"click",
function(){

document.body.classList.toggle(
"light-theme"
);

if(
document.body.classList.contains(
"light-theme"
)
){

themeButton.innerHTML =
"☀️";

}

else{

themeButton.innerHTML =
"🌙";

}

}
);
