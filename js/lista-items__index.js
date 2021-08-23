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
    },
    {
        'id': 2,
        'projectName': 'EcoAztecas',
        'projectImg': 'https://www.socialhizo.com/images/edad_antigua/aztecas/organizacion-politica-y-militar/azteca.jpg',
        'leader': 'Miriam Jimenez',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 3,
        'projectName': 'Centro de rescate animal "Siker"',
        'projectImg': 'https://www.hogarmania.com/archivos/202011/cosas-donar-refugio-animales-portada-668x400x80xX-1.jpg',
        'leader': 'Erika Díaz',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 4,
        'projectName': 'Reciclando Residuos',
        'projectImg': 'https://twenergy.com/wp-content/uploads/2019/02/guia-reciclar-1280x720.jpg',
        'leader': 'Samuel Martínez',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
        'id': 5,
        'projectName': "Rufino al rescate",
        'projectImg': 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/F6IFLUUKR5D6FNRBK6ID6CFSQI.jpg',
        'leader': 'Juan Carlos Valencia',
        'beginDate': '2021-08-09',
        'endDate': '2021-10-09',
        'description': 'Maecenas lectus dolor, bibendum ac ligula at, fringilla facilisis sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
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
                    <a href=""><i class="fas fa-money-bill"></i></a> <a href=""><i class="fas fa-heart"></i></a>
                </div>
              </div>
        </div>`;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;

}// createCards