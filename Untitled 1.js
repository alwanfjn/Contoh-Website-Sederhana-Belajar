function wa(){

window.open(
"https://wa.me/6282251507374?text=Halo%20Kedai%20STMJ,%20saya%20ingin%20memesan."
);

}

function darkMode(){

document.body.classList.toggle("dark");

}

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

}

topBtn.onclick = function(){

window.scrollTo({

top:0,
behavior:"smooth"

});

}

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 15px 30px rgba(255,152,0,.5)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 20px rgba(0,0,0,.4)";

});

});