// querySelector
const heading = document.querySelector('.header__texto h2')// 0 o 1 Elemento
heading.textContent = 'Nuevo heading'
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para Enlace';
// enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

// Agregar al href
nuevoEnlace.href =  'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase

nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al Documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

// console.log(1);
// window.addEventListener('load', function(){ //callback load espera a que el JS y los archivos que dependen de HTML estén listos
//   console.log(2);
// });

// window.onload = function() {
// console.log(3);
// }

// document.addEventListener('DOMContentloaded', function(){ // Solo espera por el HTML, pero no espera CSS o imagenes
// console.log(4);
// });

// console.log(5);

// window.onscroll = function(evento) {
//   console.log(evento);
// }

// Seleccionar elementos y asociarles un evento callback
// Esto para Eventos de click donde se utiliza mas

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//   console.log(evento); // Validar un formulario
//   evento.preventDefault();
//   console.log('enviando formulario');
// });

// Eventos de los Inputs y Textarea
const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensajes = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// nombre.addEventListener('input', function(e){
//   console.log(e.target.value)
// });

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensajes.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento){
  evento.preventDefault();
  // Validar el formulario

  const { nombre, email, mensaje } = datos;

  if(nombre === '' || email === '' || mensaje === ''){
    mostrarError('Todos los campos son obligatorios');
    return; // Corta la ejecución del código
  }
  // Crear la alerta de Enviar correctamente
  mostrarMensaje('Mensaje enviado correctamente')
});

function leerTexto(e) {
  //console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  //console.log(datos);
}
// Muestra una alerta de que se envió correctamente
function mostrarMensaje(mensaje) {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.classList.add('correcto');
  formulario.appendChild(alerta);

  // Desaparezca depués de 5 segundos
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
  const error = document.createElement('P');
  error.textContent = mensaje;
  error.classList.add('error');
  formulario.appendChild( error );

  // Desaparezca depués de 5 segundos
  setTimeout(() => {
    error.remove();
  }, 5000);
}