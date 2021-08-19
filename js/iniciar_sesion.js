//Asignacion de cuenta valida en local storage
localStorage.setItem("user","eliasfv25@gmail.com");
localStorage.setItem("password","12345678");
//Capturamos la carga del formulario para su validacion con js
window.addEventListener('DOMContentLoaded',()=> {document.getElementById('form-login').addEventListener('submit',validarFormulario);});

//Recoge los inputs del formulario
const $inputsFormulario =Array.from(document.getElementsByClassName('formulario')[0].getElementsByTagName('input')); ;

//Les agrego el evento para validar campos a cada input
$inputsFormulario.forEach(input => {
    input.addEventListener('focus', validarCampoEntrar);
    input.addEventListener('blur', validarCampoSalir);

});
function validarCampoEntrar(e) {
    e.preventDefault();
    let loginFormInput = e.target.getAttribute('id');
    switch (loginFormInput) {
        case 'email':
            validaEmail(e);
            break;
        case 'password':
            validaContraseña(e);
            break;
        default:
            break;
    }
}

function validarCampoSalir(e) {
    e.preventDefault();
    let email;    
    let loginFormInput = e.target.getAttribute('id');
    switch (loginFormInput) {
        case 'email':
            validaEmail(e);
            break;
        case 'password':
            validaContraseña(e);
            break;
        default:
            break;
    }
}

//Agregamos la funciones para validar formulario
function validarFormulario(e){
    e.preventDefault();

    //Se guardan los valores una vez que se envie el formulario
    let user = document.getElementById("email");
    let password = document.getElementById("password");

    //Validaciones
    if(user.length == 0){
        alert('Debes de poner tu usuario');
        user.focus();
        return;
    }else if (password.length == 0){
        alert('Debes de poner tu contraseña');
        password.focus();
        return;
    }
    

    login();
}

function login(){
    let user = document.getElementById("email");
    let password = document.getElementById("password");
    let message = document.querySelector('.message');
    if(localStorage.getItem("user") == user.value && localStorage.getItem("password") == password.value){    
        message.innerHTML = `<div class="spinner-border text-success" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>`
        window.location.href="../html/lista_items.html";        
    }else{
        message.innerHTML = "Usuario o Contraseña invalidos."
    }
}
function validaEmail(e) {
    //Aqui traemos el patron para validar el email
    let regExpForEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
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
