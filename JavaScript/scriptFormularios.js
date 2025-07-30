
(() => {
  'use strict'

  
  const forms = document.querySelectorAll('.needs-validation')


  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function envioDatos(){
  if (formSub.nameId.value == 0){
    alert ('El campo nombre está incorrecto, coloca mínimo 3 caracteres')
     formSub.nameId = ' ';
     formSub.nameId.focus();
     return false;
  }
   else if (formSub.surnameId.value == 0){
    alert ('El campo apellido está incorrecto, coloca mínimo 3 caracteres')
    formSub.surnameId = ' ';
    formSub.surnameId.focus();
    return false;
  }
  else if (formSub.Email.value == 0){
    alert ('El campo correo está incorrecto, coloca un email válido')
   formSub.Email = ' ';
   formSub.Email.focus();
    return false;
  }
else if (formSub.numero.value == 0){
  alert ('El campo número está incorrecto, coloca mínimo 10 caracteres')
  formSub.numero = ' ';
  formSub.numero.focus();
  return false;
}
}
function envioSugerencia(){
  if (formSugerencia.nameId.value == 0){
    alert ('El campo nombre está incorrecto, coloca mínimo 3 caracteres')
     formSugerencia.nameId = ' ';
     formSugerencia.nameId.focus();
     return false;
  }
   else if (formSugerencia.surnameId.value == 0){
    alert ('El campo apellido está incorrecto, coloca mínimo 3 caracteres')
    formSugerencia.surnameId = ' ';
    formSugerencia.surnameId.focus();
    return false;
  }
  else if (formSugerencia.Email.value == 0){
    alert ('El campo correo está incorrecto, coloca un email válido')
   formSugerencia.Email = ' ';
   formSugerencia.Email.focus();
    return false;
  }
else if (formSugerencia.Mensaje.value == 0){
  alert ('El campo del mensaje está vacío, coloca algo en él antes')
  formSugerencia.Mensaje = ' ';
  formSugerencia.Mensaje.focus();
  return false;
}
}


