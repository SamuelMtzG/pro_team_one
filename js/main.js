//AQUI DECLARARE LAS VARIABLES GLOBALES DEL DOM
const $nombre = document.getElementById('name');
const $email = document.getElementById('email');
const $telefono = document.getElementById('phone');
const $mensaje = document.getElementById('message');
const $btnContacto = document.getElementById('btn-contacto-submit');


//AQUI SE ASIGNAN LOS EVENTOS
$nombre.addEventListener('input', validarCamposVacios);
$telefono.addEventListener('input', validarCamposVacios);
$email.addEventListener('input', validarEmail);



//AQUI SE DECLARAN LAS FUNCIONES

function validarCamposVacios(e) {
    e.preventDefault();
    if(e.target.value) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    } else {
        e.target.classList.remove('is-valid');
        e.target.classList.add('is-invalid');
    }
}

function validarEmail(e){
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let validacion = regex.test(e.target.value);

    if (validacion) {
        $email.classList.remove('is-invalid');
        $email.classList.add('is-valid');
    } else {
        
        $email.classList.remove('is-valid');
        $email.classList.add('is-invalid');
    
    }
}

function sendMail() {
    window.open(`mailto:siloquieres149@gmail.com.com?subject=${$nombre.value}&body=${$mensaje.value}`);
}


