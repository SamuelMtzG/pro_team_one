//Asignacion de cuenta valida en local storage
/*
const iUsers ={
    'users' :[{
            'email': 'eliasfv25@gmail.com',
            'password': '12345678',
            'tipoUsuario': 'inversor'
        },
        {
            'email': 'angeelias@gmail.com',
            'password': '12345678',
            'tipoUsuario': 'founding'
        }
    ]
};
if (window.localStorage.getItem('users') === null) {
    window.localStorage.setItem('users', JSON.stringify(iUsers.users));
}*/
//Capturamos la carga del formulario para su validacion con js
window.addEventListener('DOMContentLoaded', () => { document.getElementById('form-login').addEventListener('submit', validarFormulario); });
let users = [];

//Recoge los inputs del formulario
const $inputsFormulario = Array.from(document.getElementsByClassName('formulario')[0].getElementsByTagName('input'));

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

// This function calls JAVA API of every single user

window.onload = function () {
    const endpoint = 'http://localhost:8080/api/user/';
    const promise = fetch(endpoint);

    promise.then(data => {
        return data.json(data);
    })
        .then(data => {
            users = data;   
        });//promise
}


//Agregamos la funciones para validar formulario
function validarFormulario(e) {
    e.preventDefault();

    //Se guardan los valores una vez que se envie el formulario
    let user = document.getElementById("email");
    let password = document.getElementById("password");

    //Validaciones
    if (user.length == 0) {
        alert('Debes de poner tu usuario');
        user.focus();
        return;
    } else if (password.length == 0) {
        alert('Debes de poner tu contraseña');
        password.focus();
        return;
    }
    login(users);
}

function login(users) {
    let formUser = document.getElementById("email");
    let formPassword = document.getElementById("password");
    let message = document.querySelector('.message');
    console.log(typeof(users));
    let usuarioEncontrado = users.filter((user) => {
        return (user.email == formUser.value) && (user.password == formPassword.value);
    });
      if(usuarioEncontrado.length > 0) {
        window.localStorage.setItem('UsuarioRegistrado', JSON.stringify(usuarioEncontrado[0]));
        message.innerHTML = `<div class="spinner-border text-success" role="status">
           <span class="sr-only">Loading...</span>    
        </div>`;
        if (usuarioEncontrado[0].userType === 'inversor') {
            window.location.href = "../html/inversor_profile.html";
        } else if (usuarioEncontrado[0].userType === 'founding') {
            window.location.href = "../html/perfil_fondea.html";
        }
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Iniciando sesion' + usuarioEncontrado[0].fullName  ,
            showConfirmButton: false,
            timer: 3000
          });
      } else{
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'Datos incorrectos'  ,
            showConfirmButton: false,
            timer: 3000
          });
      } // else 
}

function validaEmail(e) {
    //Aqui traemos el patron para validar el email
    let regExpForEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regExpForEmail.test(e.target.value)) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
        email = e.target.value;
    } else {
        e.target.classList.add('is-invalid');
    }
}
function validaContraseña(e) {
    if (e.target.value) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    } else {
        e.target.classList.add('is-invalid');
    }
}
