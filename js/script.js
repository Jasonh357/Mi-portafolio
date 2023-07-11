export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
};

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",

]

const mensajeDeError = {
  nombre:{
      valueMissing:"El campo nombre no puede estar vacio"
  },
  email:{
      valueMissing:"El campo correo no puede estar vacio",
      typeMismatch:"El correo no es válido"
  },
  asunto:{
      valueMissing: "Este campo no puede estar vacio",
      patternMismatch: "El estado debe contener entre 10 a 40 caracteres."
  },
  
  
};
 

function mostrarMensajeDeError(tipoDeInput, input ) {
  let mensaje = ""
  tipoDeErrores.forEach(error => {
      if (input.validity[error]) {
      
          mensaje = mensajeDeError[tipoDeInput][error];
      }
  })
  return mensaje;
}

const btn = document.querySelector('[data-btn]');


/*btn.addEventListener("click", function(evento) {

 
})*/