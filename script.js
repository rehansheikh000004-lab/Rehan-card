setTimeout(() => {

document.getElementById("loader").style.display="none";

document.body.style.overflow="auto";

},3000);

const particles=document.getElementById("particles");

for(let i=0;i<80;i++){

let p=document.createElement("span");

let size=Math.random()*3+1;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

p.style.opacity=Math.random();

particles.appendChild(p);

}

const spotlight=document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

spotlight.style.left=e.clientX+"px";
spotlight.style.top=e.clientY+"px";

});
