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
    <div class="col-6">
        <img src="${project.projectImg}" class="w-100">
    </div>
    <div class="col-9">
        <div class="card">
            <h5 class="card-header">${project.projectName}</h5>
            <div class="card-body">
                <h5 class="card-title">Líder de proyecto: ${project.leader}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Fecha de inicio: ${project.beginDate}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Fecha de finalización: ${project.endDate}</h6>
                <p class="card-text">${project.description}</p>
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