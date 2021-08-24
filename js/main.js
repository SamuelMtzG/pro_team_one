//Aqui voy a recorger los datos del formulario cuando se cargue
window.addEventListener('DOMContentLoaded', () => {document.getElementsByClassName('formulario')[0].getElementsByTagName('div')});

//Recoge los inputs del formulario
const $inputsFormulario =Array.from(document.getElementsByClassName('formulario')[0].getElementsByTagName('input')); ;

//Les agrego el evento para validar campos a cada input
$inputsFormulario.forEach(input => {
    input.addEventListener('focus', validarCampoEntrar);
    input.addEventListener('blur', validarCampoSalir);

});

//Aqui van las funciones
function validarCampoEntrar(e) {
    e.preventDefault();

    let nameFormInput = e.target.getAttribute('id');

    switch (nameFormInput) {
        case 'name':
            validaNombre(e);
            break;
        case 'phone':
            validaEdad(e);
            break;
        case 'email':
            validaEmail(e);
            break;
        default:
            break;
    }
}

function validarCampoSalir(e) {
    e.preventDefault();
    let email;
    
    let nameFormInput = e.target.getAttribute('id');

    switch (nameFormInput) {
        case 'name':
            validaNombre(e);
            break;
        case 'phone':
            validaEdad(e);
            break;
        case 'email':
            validaEmail(e);
            break;
        default:
            break;
    }
}

function validaNombre(e) {
    let regExpForName = /^[A-Za-záéíóúÁÉÍÓÚñ\s]{3,65}$/i;
    if(regExpForName.test(e.target.value)){
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
    } else {
        e.target.classList.add('is-invalid');
    }
}

function validaEdad(e) {
    if(e.target.value >=1000000000 ){
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
    } else {
        e.target.classList.add('is-invalid');
    }
}
function validaEmail(e) {
    //Aqui traemos el patron para validar el email
    let regExpForEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let email2 = document.getElementById('email-2');
    /* email2.value = null; */
    
    if (regExpForEmail.test(e.target.value)) {
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
        email = e.target.value;
    }  else {        
        e.target.classList.add('is-invalid');
    }
}
function validaContraseña(e) {
    if(e.target.value){
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
    } else {
        e.target.classList.add('is-invalid');
    }
}
function validaConfirmacionEmail(e) {
    if (e.target.value && e.target.value == email) {
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
    }else {
        e.target.classList.add('is-invalid');
    }
 }
      


function sendMail() {
    const $nombre = document.getElementById('name');
    const $email = document.getElementById('email');
    const $telefono = document.getElementById('phone');
    const $mensaje = document.getElementById('message');
    const $btnContacto = document.getElementById('btn-contacto-submit');
    window.open(`mailto:siloquieres149@gmail.com.com?subject=${$nombre.value}&body=${$mensaje.value}`);
}
