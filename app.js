const boton1 = document.querySelector('.btn1');
const boton2 = document.querySelector('.btn2');
const modal = document.querySelector('.modal');
const cerrar = document.querySelector('#close--thanks');

function mostrarMsg() {
    modal.classList.add('active');
}
function cerrarMsg() {
    modal.classList.remove('active');
}

cerrar.addEventListener('click',cerrarMsg)
boton1.addEventListener('click',mostrarMsg);

function moverBoton() {
    let posicionX = Math.floor(Math.random()*70) + 20;
    let posicionY = Math.floor(Math.random()*60) + 20; 
    this.style.position = 'absolute';
    this.style.top = `${posicionY}%`;
    this.style.left = `${posicionX}%`;
    this.style.transform = 'translate(-100%,100%)';
}


boton2.addEventListener('click',moverBoton)

