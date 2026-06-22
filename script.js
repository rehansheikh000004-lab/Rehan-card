/* =====================================
REHAN OS - Luxury Digital Card
script.js
===================================== */

// Create Floating Particles

const particlesContainer = document.getElementById("particles");

for(let i = 0; i < 80; i++){

const particle = document.createElement("span");

const size = Math.random() * 4 + 1;

particle.style.position = "absolute";
particle.style.width = size + "px";
particle.style.height = size + "px";

particle.style.background = "rgba(255,255,255,0.8)";
particle.style.borderRadius = "50%";

particle.style.left = Math.random() * 100 + "vw";
particle.style.top = Math.random() * 100 + "vh";

particle.style.opacity = Math.random();

particle.style.animation = `
floatParticle ${Math.random()*8+6}s
linear infinite`;

particlesContainer.appendChild(particle);

}

// Add Particle Animation

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatParticle{

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-25px);
}

100%{
transform:translateY(0px);
}

}
`;

document.head.appendChild(style);

// Create Mouse Spotlight

const spotlight = document.createElement("div");

spotlight.style.position = "fixed";
spotlight.style.width = "350px";
spotlight.style.height = "350px";

spotlight.style.borderRadius = "50%";

spotlight.style.pointerEvents = "none";

spotlight.style.background =
"radial-gradient(circle, rgba(212,175,55,.12), transparent)";

spotlight.style.transform =
"translate(-50%,-50%)";

spotlight.style.zIndex = "-1";

document.body.appendChild(spotlight);

document.addEventListener("mousemove",(e)=>{

spotlight.style.left = e.clientX + "px";
spotlight.style.top = e.clientY + "px";

});

// Fade In Card

window.addEventListener("load",()=>{

const card =
document.querySelector(".luxury-card");

card.style.opacity = "0";
card.style.transform = "translateY(40px)";

setTimeout(()=>{

card.style.transition =
"all 1s ease";

card.style.opacity = "1";
card.style.transform =
"translateY(0px)";

},200);

});

// Luxury Cursor

const cursor =
document.createElement("div");

cursor.style.width = "18px";
cursor.style.height = "18px";

cursor.style.border =
"2px solid #D4AF37";

cursor.style.borderRadius = "50%";

cursor.style.position = "fixed";

cursor.style.pointerEvents = "none";

cursor.style.zIndex = "9999";

cursor.style.transform =
"translate(-50%,-50%)";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});

// Magnetic Buttons

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect =
btn.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const moveX =
(x - rect.width/2) / 8;

const moveY =
(y - rect.height/2) / 8;

btn.style.transform =
"translate(${moveX}px,${moveY}px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translate(0px,0px)";

});

});

// Luxury Hover Glow

const card =
document.querySelector(".luxury-card");

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =
"radial-gradient( circle at ${x}px ${y}px, rgba(212,175,55,.08), rgba(255,255,255,.04) )";

});

card.addEventListener("mouseleave",()=>{

card.style.background =
"rgba(255,255,255,.04)";

});

// Console Signature

console.log(`

REHAN OS
BLACK RESERVE EDITION
Luxury Digital Experience

`);
