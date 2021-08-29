function searchOnURL() {
    let url = location.search;
    let params = new URLSearchParams(url);
    console.log(params)
    let idParam = params.get("id");
    console.log(idParam)
    return idParam;
} // ends searchOnURL()

function searchOnDatabase(idProject) {
    // array
    const projectArray = JSON.parse(window.sessionStorage.getItem('projects'));
    const projectFilter = projectArray.find( project => {
        return project.id === parseInt(idProject); 
    });
    return projectFilter;
} // ends searchOnDatabase()

function createproject(project) {
    const parentElement = document.getElementById("post-details");
    const template = `
    <div class="container details">
    <div class="col-12 d-flex justify-content-center">
        <img src="${project.projectImg}" class="w-75">
    </div>
    <div class="col-12">
        <div class="card">
            <h5 class="card-header">${project.projectName}</h5>
            <div class="card-body">
                <h5 class="card-title">Líder de proyecto: ${project.leader}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item mb-2 text-muted">Fecha de inicio: ${project.beginDate}</li>
                    <li class="list-group-item mb-2 text-muted">Fecha de finalización: ${project.endDate}</li>
                </ul>
                <p class="card-text">${project.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-around">
                    <a href="../html/opcion_registro.html"><i class="fas fa-money-bill"></i></a> <a href="../html/opcion_registro.html"><i class="fas fa-heart"></i></a>
            </div>
        </div>
    </div>
    </div>
    `;
    parentElement.innerHTML += template;
    
}

window.onload = function() {
    const idParamproject = searchOnURL();
    const projectFind = searchOnDatabase(idParamproject);

    createproject(projectFind);
    //createproject(projectFind);
}