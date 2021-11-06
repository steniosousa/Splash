var texto = "Saia do 0, ";
var texto2 = "chegue no 1";
var Identado = texto + texto2;
var result;

var count = 0;
function digitar() {
  result = document.getElementById("result");
  window.setTimeout(function() { inserir(Identado[count]) }, 00);
}
function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < Identado.length)
    window.setTimeout(function() { inserir(Identado[count]) }, 80);
}
window.onload = digitar;


const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});



function Quiz() {
    const questionário = document.querySelector(".desafios");
    questionário.style.display="inline";
    
}
function Close() {
    const close = document.querySelector(".desafios");
    close.style.display="none";
    
    }

    //Espaço reservado a doações;
function doar(){
    const doar = document.querySelector(".redesDoação").style.display="block";
}
function fechar(){
    const fechar = document.querySelector(".redesDoação").style.display="none";
}
    
