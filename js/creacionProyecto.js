//Aqui estan las variables del DOM
const $inputNombreLeader = document.getElementById('project_name');
const $inputNombreProject = document.getElementById('leader');
const $fechaInicio = document.getElementById('begin_date');
const $fechaFin = document.getElementById('end_date');
const $description = document.getElementById('description');
const $btnAddProduct = document.getElementById('btn-contacto-submit');


//Aqui se crea el objeto con los productos

let objetoProductos = [];

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
const $products = JSON.parse(window.localStorage.getItem('projects'));

window.addEventListener('DOMContentLoaded', createCards($products));
function createCards(products){
    const ancla = document.getElementById('products');
    //ul    

    let plantillaFinal = '';
    let listaFinal ='';

    products.forEach(function(product){


        let card = /* Esto lo debemos de cambiar para que salgan los datos que nosotros queremos*/ `
        <div class="col-md-4" style="margin: 15px 0"> 
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${product.projectImg}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.projectName}</h5>
                <p class="card-text">${product.description}</p>
                <a href="detail.html?id=${product.id}" class="btn btn-primary">See details</a>
            </div>
        </div>
        </div>
        `
        let item = `
            <li>${product.title}}</li>
        `;

        plantillaFinal = plantillaFinal + card;
        listaFinal += item;
        
    })
    ancla.innerHTML = plantillaFinal;

}// createCards