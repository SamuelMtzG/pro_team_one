const endpoint = 'https://fakestoreapi.com/products';

const promise = fetch(endpoint);

console.log(`Estado de la promesa : ${promise}`)

promise
   
    .then(function( data)  {
        
        return data.json()
    })
    .then(function (data){

        createCards(data)
        saveLocalStorage(data)
    })
    
    .catch(function(error){
        console.log(error)
    })

    function saveLocalStorage(products){
    
        window.localStorage.setItem('items', JSON.stringify(products) )

    }

    function createCards(products){
        const ancla = document.getElementById('products');
        //ul
        const listaContainer = document.getElementById('producList');

        let plantillaFinal = '';
        let listaFinal ='';

        products.forEach(function(product){


            let card = /* Esto lo debemos de cambiar para que salgan los datos que nosotros queremos*/ `
            <div class="col-md-4" style="margin: 15px 0"> 
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${product.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
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
        listaContainer.innerHTML =listaFinal;


    }// createCards

    function addArticle(evento){
        //prevenimos el defualt
        evento.preventDefault()
        //Traer los valores
        let title = document.getElementById('title').value;
        let price = parseFloat( document.getElementById('price').value);
        let description = document.getElementById('description').value;
        let url = document.getElementById('image').value;
        let category = document.getElementById('category').value;
        let id = parseInt(document.getElementById('id').value);
        console.log(title)
        console.log(description)
        console.log(price)
        console.log(url)
        console.log(category)
        //Mostrar en el html
        //Guardar mi nuevo obj dentro del arreglo 
        //Creamos nuevo objeto
        //obj llave: valor
        const newProduct = {
            "id" : id ,
            "title": title,
            "price" : price,
            "description" : description,
            "image": url,
            "category" : category
        }
        //1. leemos la base de datos
        //JSON.parse -> conviertelo a arreglo
        const arregloProductos = JSON.parse( window.localStorage.getItem('items'))

        console.log(arregloProductos)
        // 2. push metodo ingresar, guardar un nuevo elemento
        // const newProduct = {
        //     "id" : arregloProductos.lenght +1 ,
        //     "title": title,
        //     "price" : price,
        //     "description" : description,
        //     "imageUrl": url,
        //     "category" : category
        // }
        arregloProductos.push(newProduct);
        
        console.log(arregloProductos)
        //3 agregarlo en el local storage
        //arregloProductos -> array -> JSON
        //Guardalo en la bd
        window.localStorage.setItem('items', JSON.stringify( arregloProductos))
        //volver a crear el dom o las etiquetas

        //apendChild
        lista.apendChild(card)



    }

    const btnAddProduct = document.getElementById('form-add-product');
    btnAddProduct.addEventListener('submit',addArticle )
    const btnReload = document.getElementById('reload');

    btnReload.addEventListener('click', function(){
        const prodctos =  JSON.parse( window.localStorage.getItem('items'))
        createCards(prodctos)

    })