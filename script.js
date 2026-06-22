const particles = document.getElementById("particles");

for(let i=0;i<40;i++){

let span=document.createElement("span");

span.style.position="fixed";
span.style.width="3px";
span.style.height="3px";
span.style.background="white";

span.style.left=Math.random()*100+"vw";
span.style.top=Math.random()*100+"vh";

span.style.opacity=Math.random();

span.style.borderRadius="50%";

particles.appendChild(span);

}
