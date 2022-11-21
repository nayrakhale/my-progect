const  btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover",(event)=>{
const x =(event.pageX - btnEl.offsetLeft);
const y =(event.pageY - btnEl.offsetTop);

btnEL.style.setProperty("--xPos", x + "px");
btnEl.style.setProperty("--ypos",y +"px" );

})