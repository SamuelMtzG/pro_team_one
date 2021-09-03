
/* ------Esta parte te trae la base de datos de los que tienen un proyecto con inversion -------*/
const endpointProyectoHasInversor = 'http://localhost:8080/api/proyectohasinversor/';
const promiseProyectoHasInversor = fetch(endpointProyectoHasInversor);

promiseProyectoHasInversor
.then(data => {return data.json(data);})
.then(data => {window.sessionStorage.setItem('hasInversor',JSON.stringify(data));});
/* ------Esta parte te trae la base de datos de los que tienen un proyecto con inversion -------*/

/* ------Esta parte te trae la base de datos de los proyectos -------*/
const endpointProyecto = 'http://localhost:8080/api/project/';
const promiseProyecto = fetch(endpointProyecto);

promiseProyecto
.then(data => {return data.json(data);})
.then(data => {window.sessionStorage.setItem('proyectos',JSON.stringify(data));});
/* ------Esta parte te trae la base de datos de los proyectos -------*/

//Aqui estan todas las variables que se usan en el codigo 
const Usuario = JSON.parse(window.localStorage.getItem('UsuarioRegistrado'));
const UsuarioId= Usuario.idUser;
const Proyectos = JSON.parse(window.sessionStorage.getItem('proyectos'));
const HasInversor = JSON.parse(window.sessionStorage.getItem('hasInversor'));

let listaProyectosInversor = [];
let proyectos_invertido = HasInversor.filter(proyecto => {return proyecto.inversoridusuario == String(UsuarioId) ;});

console.log(proyectos_invertido);

for(let j = 0; j < Proyectos.length; j++){
    for(let i = 0 ; i < proyectos_invertido.length ;i++){
        if(Proyectos[j].idproyecto == proyectos_invertido[i].proyectoidproyecto){
            
            	listaProyectosInversor.push(Proyectos[j])
        }
    }  
}


window.addEventListener('DOMContentLoaded', createCards(listaProyectosInversor));
function createCards(projects) {
    const ancla = document.getElementById('projects');
    //ul    

    let plantillaFinal = '';
    let listaFinal = '';

    projects.forEach(function (project) {


        let card = `<div class="col-sm-11 col-md-11 col-lg-5 col-xl-5 alto">
        <div class="card h-100">
          <img src="${project.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>${project.name}</strong></h5>
            <p class="card-text">${project.descripcion}</p>
          </div>
          <div class="card-footer">
              <a href="../html/ver_detalles.html?id=${project.idproyecto}">Ver Detalles</a>
          </div>
        </div>
  </div>`;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;
}