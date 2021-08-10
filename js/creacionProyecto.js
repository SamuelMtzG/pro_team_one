//Aqui estan las variables del DOM
/*const $inputNombreLeader = document.getElementById('project_name');
const $inputNombreProject = document.getElementById('leader');
const $fechaInicio = document.getElementById('begin_date');
const $fechaFin = document.getElementById('end_date');
const $description = document.getElementById('description');
const $btnAddProduct = document.getElementById('btn-contacto-submit');*/


//Aqui se crea el objeto con los productos

//let objetoProductos = [];

//Aqui se agregan los eventos
/* $btnAddProduct.addEventListener('click', agregaProducto);
$inputNombreLeader.addEventListener('blur', obtenerDatosInput);
$inputNombreProject.addEventListener('blur', obtenerDatosInput);
$fechaInicio.addEventListener('blur', obtenerDatosInput);
$fechaFin.addEventListener('blur', obtenerDatosInput);
$description.addEventListener('blur', obtenerDatosInput);

//Aqui van las funciones
function obtenerProductos() {
    window.sessionStorage
}

function agregaProducto() {
    console.log(obtenerDatosInput());
    window.sessionStorage.setItem('nuevo-proyecto', JSON.stringify(obtenerDatosInput()));  
}

function obtenerDatosInput(e) {
    e.preventDefault();
    let tmp = {[e.target.getAttribute('id')]: e.target.value};
    objetoProductos.push(tmp);
} */
const items = {
    'projects': [{
        'id': 0,
        'projectName': 'StormPet',
        'projectImg': 'https://www.collinsdictionary.com/images/full/storm_167600330.jpg',
        'leader': 'Elias Flores',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 1,
        'projectName': 'TecnoGaming',
        'projectImg': 'https://img.blogs.es/campusomenhp/wp-content/uploads/2020/04/Abre_gaming.jpeg',
        'leader': 'Alexis Garcia',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 2,
        'projectName': 'EcoAztecas',
        'projectImg': 'https://www.socialhizo.com/images/edad_antigua/aztecas/organizacion-politica-y-militar/azteca.jpg',
        'leader': 'Miriam Jimenez',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 3,
        'projectName': 'Rescatando Mascotas',
        'projectImg': 'https://www.hogarmania.com/archivos/202011/cosas-donar-refugio-animales-portada-668x400x80xX-1.jpg',
        'leader': 'Erika Díaz',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 4,
        'projectName': 'Reciclando Residuos',
        'projectImg': 'https://twenergy.com/wp-content/uploads/2019/02/guia-reciclar-1280x720.jpg',
        'leader': 'Samuel Martínez',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 5,
        'projectName': 'Aztecas Tecnológicos',
        'projectImg': 'https://mundocontact.com/wp-content/uploads/2017/11/mexico-bandera-codigo-tecnologia.jpg',
        'leader': 'Samuel Lopez',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 6,
        'projectName': 'Encontrando Hogar',
        'projectImg': 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/F6IFLUUKR5D6FNRBK6ID6CFSQI.jpg',
        'leader': 'Federico el Lobo',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 7,
        'projectName': 'Ecológica Maya',
        'projectImg': 'https://diarioresponsable.com/images/opinion/consejos%20para%20integrar%20la%20educaci%C3%B3n%20ecol%C3%B3gica%20en%20las%20aulas%20-%20diarioresponsable_5977967976.jpg',
        'leader': 'Tanya Santiago',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 8,
        'projectName': 'Tecnologías Papantla',
        'projectImg': 'https://www.latino-news.com/wp-content/uploads/2019/01/tecnologia.png',
        'leader': 'Tanya Santiago',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 9,
        'projectName': 'Tiempo de perreo',
        'projectImg': 'https://image.shutterstock.com/image-photo/attractive-girl-dancing-twerk-iat-260nw-524413186.jpg',
        'leader': 'Laura Martínez',
        'beginDate': '09-08-2021',
        'endDate': '09-09-2021',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    }
    ]
};

if (window.sessionStorage.getItem('projects') === null) {
    window.sessionStorage.setItem('projects', JSON.stringify(items.projects));
}
const $projects = JSON.parse(window.sessionStorage.getItem('projects'));

window.addEventListener('DOMContentLoaded', createCards($projects));
function createCards(projects) {
    const ancla = document.getElementById('projects');
    //ul    

    let plantillaFinal = '';
    let listaFinal = '';

    projects.forEach(function (project) {


        let card = /* Esto lo debemos de cambiar para que salgan los datos que nosotros queremos*/ `
        <div class="col-md-4" style="margin: 15px 0"> 
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${project.projectImg}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${project.projectName}</h5>
                <p class="card-text">${project.description}</p>
                <p class="card-text">Fecha de inicio: ${project.beginDate}</p>
                <p class="card-text">Fecha de conclusión: ${project.endDate}</p>
                <a href="#" class="btn btn-primary">See details</a>
            </div>
        </div>
        </div>
        `
        /*let item = `
            <li>${project.projectName}}</li>
        `;*/

        plantillaFinal = plantillaFinal + card;
        //listaFinal += item;

    })
    ancla.innerHTML = plantillaFinal;

}// createCards