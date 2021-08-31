//Esta parte hace funcionar el carrusel de fotos

if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>
function openOption(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

const endpoint = 'http://localhost:8080/api/project/';
const promise = fetch(endpoint);

promise.then(data => {
    return data.json(data);
})
.then(data => {
    console.log(data);
    createCards(data);
})


/* window.addEventListener('DOMContentLoaded', createCards($projects)); */ // esta parte se queda en espera en lo que se prueba la promesa

function createCards(projects) {
    const ancla = document.getElementById('lista-items');
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
                    <a href="../html/opcion_registro.html"><i class="fas fa-money-bill"></i></a> <a href="../html/opcion_registro.html"><i class="fas fa-heart"></i></a>
                </div>
              </div>
        </div>`;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;

}// createCards


/* const items = {
    'projects': [
        {
            'id': 1,
            'projectName': 'Adopta',
            'projectImg': 'https://sanmigueldeallende.gob.mx/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-07-at-11.15.05.jpeg',
            'leader': 'Adoptame México',
            'beginDate': '30-08-2021',
            'endDate': '31-09-2021',
            'description': 'Buscamos a personas que nos apoyen con donativos o adoptando perritos y gatitos. Si requires más información sigue nuesta pagina de facebook "Adóptame México"'
        },
        {
            'id': 3,
            'projectName': 'Al Rescate',
            'projectImg': 'https://www.hogarmania.com/archivos/202011/cosas-donar-refugio-animales-portada-668x400x80xX-1.jpg',
            'leader': 'Erika Díaz',
            'beginDate': '2021-08-09',
            'endDate': '2021-10-09',
            'description': 'Te invitamos a donar para que mas animalitos que viven en situación de calle puedan tener un hogar, también puedes adoptar visitandonos en Cuautepec Barrio bajo a un lado del Deportivo Juventino Rosas'
        },
        {
            'id': 4,
            'projectName': 'Reciclando Residuos',
            'projectImg': 'https://twenergy.com/wp-content/uploads/2019/02/guia-reciclar-1280x720.jpg',
            'leader': 'Samuel Martínez',
            'beginDate': '2021-08-30',
            'endDate': '2021-10-1',
            'description': 'Se parte de el cambio ecológico para una mejor ciudad, si quieres ser parte de esta campaña deveras presentarte con ropa comoda, bolsas de basura y una gran actitud, te esperamos en estación hidalgo. '
        },
        {
            'id': 6,
            'projectName': "Rufino al rescate",
            'projectImg': 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/F6IFLUUKR5D6FNRBK6ID6CFSQI.jpg',
            'leader': 'Juan Carlos Valencia',
            'beginDate': '2021-08-09',
            'endDate': '2021-10-09',
            'description': 'Si estas dispuesto a yudar, te invitamos a ser parte de nuestro centro de adopcion que busca a personas para que cuiden de nuestros animales por 4 horas, se dara una previa capacitación y sera totalmente voluntario. '
        },
        {
            'id': 7,
            'projectName': 'Ecológica Maya',
            'projectImg': 'https://diarioresponsable.com/images/opinion/consejos%20para%20integrar%20la%20educaci%C3%B3n%20ecol%C3%B3gica%20en%20las%20aulas%20-%20diarioresponsable_5977967976.jpg',
            'leader': 'Tanya Santiago',
            'beginDate': '2021-08-09',
            'endDate': '2021-10-09',
            'description': 'Estamos buscando apoyo voluntario, para limpiar las areas verdes que lo necesiten, si estas dispuesto a ayudar comunicate al 5504157600'
        },]
};

if (window.sessionStorage.getItem('projects') === null) {
    window.sessionStorage.setItem('projects', JSON.stringify(items.projects));
}
const $projects = JSON.parse(window.sessionStorage.getItem('projects'));

window.addEventListener('DOMContentLoaded', createCards($projects));

function createCards(projects) {
    const ancla = document.getElementById('lista-items');
    //ul    

    let plantillaFinal = '';
    let listaFinal = '';

    projects.forEach(function (project) {


        let card = 
        `<div class="col mb-4">
              <div class="card h-100">
                <img src="${project.projectImg}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${project.projectName}</h5>
                  <p class="card-text">${project.description}</p>
                </div>
                <div class="card-footer">
                    <a href="../html/opcion_registro.html"><i class="fas fa-money-bill"></i></a> <a href="../html/opcion_registro.html"><i class="fas fa-heart"></i></a>
                </div>
              </div>
        </div>`;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;

}// createCards */