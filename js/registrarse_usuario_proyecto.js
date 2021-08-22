//Aqui voy a recorger los datos del formulario cuando se cargue
window.addEventListener('DOMContentLoaded', () => {document.getElementsByClassName('formulario')[0].getElementsByTagName('div')});

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

function addUser(){
    // Obtenemos los valores del formulario
    let projectName = document.getElementById('name').value;
    let leader = document.getElementById('age').value;
    let begin = document.getElementById('email').value;
    let end = document.getElementById('password').value;
    let description = document.getElementById('tipoPersona').value;
    let tipoUsuario = "founding";
    if (window.sessionStorage.getItem('projects') === null) {
        const projectArray = [];
        const newProject = {
            'id': 0,
            'projectName': projectName,
            'projectImg': projectImg,
            'leader': leader,
            'beginDate': begin,
            'endDate': end,
            'description': description
        }

        projectArray.push(newProject);
        window.localStorage.setItem('projects', JSON.stringify(projectArray));
    }
    else {
        const projectArray = JSON.parse(window.sessionStorage.getItem('projects'));
        let newId = projectArray.length;
        const newProject = {
            'id': newId,
            'projectName': projectName,
            'projectImg': projectImg,
            'leader': leader,
            'beginDate': begin,
            'endDate': end,
            'description': description
        }
        
        projectArray.push(newProject);
        window.sessionStorage.setItem('projects', JSON.stringify(projectArray));
    }
    document.getElementById("form-add-project").reset();//Reiniciamos los valores del formulario

}

