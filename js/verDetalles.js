function searchOnURL() {
    let url = location.search;
    let params = new URLSearchParams(url);
    console.log(params)
    let idParam = params.get("id");
    console.log(idParam)
    return idParam;
} // ends searchOnURL()

let userName = "";

function createproject(project, user) {
    const parentElement = document.getElementById("post-details");
    const template = `
    <div class="container details">
    <div class="col-12 d-flex justify-content-center">
        <img src="${project.imagen}" class="post-img">
    </div>
    <div class="col-12">
        <div class="card">
            <h5 class="card-header orange-titles">${project.name}</h5>
            <div class="card-body">
                <h5 class="card-title">Líder de proyecto: ${user}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item mb-2 text-muted">Fecha de inicio: ${project.fechainicio}</li>
                    <li class="list-group-item mb-2 text-muted">Fecha de finalización: ${project.fechatermino}</li>
                </ul>
                <p class="card-text">${project.descripcion}</p>
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

window.onload = function () {
    const idParamproject = searchOnURL();

    const endpoint = `http://localhost:8080/api/project/${idParamproject}`;
    const promise = fetch(endpoint);

    promise.then(data => {
        return data.json(data);
    })
        .then(data => {
            project = data;
            const userEndPoint = `http://localhost:8080/api/user/${project.idusuario}`;
            const userpromise = fetch(userEndPoint);
            
            // Metí una promesa dentro de otra, como ella :'v
            userpromise.then(userdata => {
                return userdata.json(userdata);
            })
                .then(userdata => {
                    userName = userdata.fullName;
                    createproject(project, userName);
                });
        });//promise
    //createproject(projectFind);
}