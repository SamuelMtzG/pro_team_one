const items = {
    'projects': [{
        'id': 0,
        'projectName': 'StormPet',
        'projectImg': 'https://www.collinsdictionary.com/images/full/storm_167600330.jpg',
        'leader': 'Elias Flores',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 1,
        'projectName': 'TecnoGaming',
        'projectImg': 'https://img.blogs.es/campusomenhp/wp-content/uploads/2020/04/Abre_gaming.jpeg',
        'leader': 'Alexis Garcia',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    }]
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


        let card = `<div class="col-sm-11 col-md-11 col-lg-5 col-xl-5 alto">
        <div class="card h-100">
          <img src="${project.projectImg}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>${project.projectName}</strong></h5>
            <p class="card-text">${project.description}</p>
          </div>
          <div class="card-footer">
              <a href="../html/ver_detalles.html?id=${project.id}">Ver Detalles</a>
          </div>
        </div>
  </div>`;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;

}