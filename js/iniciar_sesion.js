//Asignacion de cuenta valida en local storage
localStorage.setItem("user","eliasfv25@gmail.com");
localStorage.setItem("password","12345678");
//Capturamos la carga del formulario para su validacion con js
window.addEventListener('DOMContentLoaded',()=> {document.getElementById('form-login').addEventListener('submit',validarFormulario);});

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
    if(localStorage.getItem("user") == user.value && localStorage.getItem("password") == password.value){    
        window.location.href="../html/lista_items.html";        
    }else{
        alert('Usuario o contraseña incorrectas');
        return;
    }
}
    
