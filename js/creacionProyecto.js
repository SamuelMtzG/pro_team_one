const items = {
    'projects': [{
        'id': 0,
        'projectName': 'Bazar con causa',
        'projectImg': 'data:image/jpeg;base64,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',
        'leader': 'Fundación Antonio Haghenbeck y de la Lama I.A.P',
        'beginDate': '10-09-2021',
        'endDate': '12-09-2021',
        'description': 'Ven y paricipa en el bazar de venta con causa, en donde encontraras productos con tematicas animalistas, para ayudar a animales sin hogar.'
    },
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
    },
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


        let card = `
        <div class="col-md-4" style="margin: 15px 0"> 
        <div class="card" h-100>
            <img class="card-img-top" src="${project.projectImg}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${project.projectName}</h5>
                <p class="card-text leader"><strong>Líder de proyecto:</strong> ${project.leader}</p>
                <p class="card-text"><strong>Fecha de inicio:</strong> ${project.beginDate}</p>
                <p class="card-text"><strong>Fecha de conclusión:</strong> ${project.endDate}</p>
                <p class="card-text description">${project.description}</p>
                <a href="#" class="btn ">Ver Detalles</a>
            </div>
        </div>
        </div>
        `;

        plantillaFinal = plantillaFinal + card;

    })
    ancla.innerHTML = plantillaFinal;

}// createCards