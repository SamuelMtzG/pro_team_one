//Capturamos la carga del formulario para su validacion con javascript
window.addEventListener('DOMContentLoaded', () => {document.getElementById('form-add-project').addEventListener('submit',validarFormulario);});

//Agregamos las funciones para validar el formulario

function validarFormulario(e) { 
    e.preventDefault(); 
    //Aqui se recogen los valores una vez se envie el formulario
    let projectName = document.getElementById('project_name').value;
    let begin = document.getElementById('begin_date').value;
    let end = document.getElementById('end_date').value;
    let description = document.getElementById('description').value;

    //Aqui se hacen las validaciones

    if (projectName.length == 0) {
        alert('Tu proyecto debe tener un nombre');
        projectName.focus();
        return;
    }  else if (begin.length == 0){
        alert('Debes poner una fecha de inicio valida');
        begin.focus();
        return;
    } else if (end.length == 0) {
        alert('Debes poner una fecha limite valia');
        end.focus();
        return;
    }else if (description.length < 50) {
        alert('Ponle una descripcion a tu proyecto de al menos 50 caracteres para brindar una vision más clara de tu proposito');
        description.focus();
        return;
    }
    addProject();
}

let imagen = document.getElementById('proyecto-foto');
let myWidget = cloudinary.createUploadWidget({
    cloudName: 'rsosar2021', 
    uploadPreset: 'OsarFotos'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Imagen subida con éxito', result.info); 
        imagen.src = result.info.secure_url;
        }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);

function addProject() {
    const users = JSON.parse(window.sessionStorage.getItem('users'));
    // Obtenemos los valores del formulario
    let projectName = document.getElementById('project_name').value;
    let projectImg = imagen.src;
    let leader = users.name;
    console.log(leader);
    let begin = document.getElementById('begin_date').value;
    let end = document.getElementById('end_date').value;
    let description = document.getElementById('description').value;

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


