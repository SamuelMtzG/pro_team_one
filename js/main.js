//AQUI DECLARARE LAS VARIABLES GLOBALES DEL DOM
const $nombre = document.getElementById('name');
const $email = document.getElementById('email');
const $telefono = document.getElementById('phone');
const $mensaje = document.getElementById('message');
const $btnContacto = document.getElementById('btn-contacto-submit');


//AQUI SE ASIGNAN LOS EVENTOS
$email.addEventListener('input', validarEmail);
$btnContacto.addEventListener('click', obtenerDatosFormulario);



//AQUI SE DECLARAN LAS FUNCIONES

function obtenerDatosFormulario(e) {
    e.preventDefault();
    
    console.log($nombre.value, $email, $telefono, $mensaje);

}

function validarEmail(e){
    e.preventDefault();
    regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regExp.test(e.target)) {
        console.log('Todo bien')
    }
}


