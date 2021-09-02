
const endpoint = 'http://localhost:8080/api/project/';
const promise = fetch(endpoint);

promise.then(data => {
    return data.json(data);
})
.then(data => {
    console.log(data);
    createCards(data);
})//promise

function createCards(projects) {
    const ancla = document.getElementById('projects');
    //ul    

    let plantillaFinal = '';
    let listaFinal = '';

    projects.forEach(function (project) {

        let card = 
        `<div class="col mb-4">
              <div class="card h-100">
                <img src="${project.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${project.name}</h5>
                  <p class="card-text">${project.descripcion}</p>
                </div>
                <div class="card-footer">
                    <a href="../html/ver_detalles.html?id=${project.idproyecto}" class="btn">Ver Detalles</a>
                </div>
              </div>
        </div>`;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;

}// createCards
