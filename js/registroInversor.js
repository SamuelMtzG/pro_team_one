//Aqui voy a recorger los datos del formulario cuando se cargue
window.addEventListener('DOMContentLoaded',()=> {document.getElementById('registro-form').addEventListener('submit',validarFormulario);});

//Recoge los inputs del formulario
const $inputsFormulario =Array.from(document.getElementsByClassName('formulario')[0].getElementsByTagName('input')); ;

//Les agrego el evento para validar campos a cada input
$inputsFormulario.forEach(input => {
    input.addEventListener('focus', validarCampoEntrar);
    input.addEventListener('blur', validarCampoSalir);

});

let message = document.querySelector('.message');



//Aqui van las funciones
function validarCampoEntrar(e) {
    e.preventDefault();
    /* if (e.target.value < 18 || e.target.value == 0) {
        e.target.classList.add('is-invalid');
    } else {
       e.target.classList.remove('is-invalid'); 
       e.target.classList.add('is-valid'); 

    } */

    let nameFormInput = e.target.getAttribute('id');

    switch (nameFormInput) {
        case 'organization':
            validarOrganizacion(e);
            break;
        case 'name':
            validaNombre(e);
            break;
        case 'age':
            validaEdad(e);
            break;
        case 'email':
            validaEmail(e);
            break;
        case 'password':
            validaContraseña(e);
            break;
        case 'email-2':
            validaConfirmacionEmail(e);
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
        case 'organization':
            validarOrganizacion(e);
            break;
        case 'name':
            validaNombre(e);
            break;
        case 'age':
            validaEdad(e);
            break;
        case 'email':
            validaEmail(e);
            break;
        case 'password':
            validaContraseña(e);
            break;
        case 'email-2':
            validaConfirmacionEmail(e);
            break;
        default:
            break;
    }
    /* if(e.target.value){
       e.target.classList.remove('is-invalid'); 
       e.target.classList.add('is-valid');
    } else {
        e.target.classList.add('is-invalid');
    } */
}


function validaNombre(e) {
    let regExpForName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,80}$/i;
    if(regExpForName.test(e.target.value)){
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
        message.innerHTML =""
    } else {
        e.target.classList.add('is-invalid');
        message.innerHTML = "Nombre completo invalido."
    }
}

function validaEdad(e) {
    if(e.target.value >= 18 && e.target.value < 110 ){
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
        message.innerHTML =""
    } else {
        e.target.classList.add('is-invalid');
        message.innerHTML = "Edad invalida."
    }
}
function validaEmail(e) {
    //Aqui traemos el patron para validar el email
    let regExpForEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let email2 = document.getElementById('email-2');
    email2.value = null;
    
    if (regExpForEmail.test(e.target.value)) {
        e.target.classList.remove('is-invalid'); 
        e.target.classList.add('is-valid');
        email = e.target.value;
        message.innerHTML =""
    }  else {        
        e.target.classList.add('is-invalid');
        message.innerHTML = "Email invalido."
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
        message.innerHTML =""
    }else {
        e.target.classList.add('is-invalid');
        message.innerHTML = "Ingresar el mismo email ."
    }
}
function validarFormulario(e){
    e.preventDefault();
    let name =document.getElementById('name');
    if(name.length == 0){
        alert('algo fallo');
    }
    addUser();
}
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

function addUser(){
    // Obtenemos los valores del formulario
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let tipoPersona = document.querySelector('input[name=tipoPersona]:checked').value;
    let email =document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let tipoUsuario = "inversor";
    const newUser = {
        'id': 0,
        'fullName': name,
        'age': age,
        'personType': tipoPersona,
        'email': email,
        'password': password,
        'userType': tipoUsuario
    }
        postData('http://localhost:8080/api/user/', newUser)
        .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        if(data.status == 200){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'cuenta creada ' +name  ,
                showConfirmButton: false,
                timer: 3000
              })  
          }else{
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'cuenta existente '  ,
                showConfirmButton: false,
                timer: 3000
              })  
            }
            console.clear();
    });
    document.getElementById("registro-form").reset();//Reiniciamos los valores del formulario
}