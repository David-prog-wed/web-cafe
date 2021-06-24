// Datos
const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensajes = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensajes.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento){
  evento.preventDefault();
  // Validar el formulario
  const { nombre, email, mensaje } = datos;
  if(nombre === '' || email === '' || mensaje === ''){
    mostarAlerta('Todos los campos son obligatorios', true);
    return; // Corta la ejecución del código
  }
  // Crear la alerta de Enviar correctamente
  mostarAlerta('Mensaje enviado correctamente')
});

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}

function mostarAlerta(mensaje, error = null) {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  if(error) {
    alerta.classList.add('error');
  } else {
    alerta.classList.add('correcto');
  }
  formulario.appendChild(alerta)
  // Desaparezca depués de 5 segundos
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}
