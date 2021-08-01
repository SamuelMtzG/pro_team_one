var boton_1 = document.getElementById("Boton_1")
boton_1.onclick = function(){
    var div = document.getElementById("formulario");
    div.innerHTML =`<br/>
    <div class="form-group">
        <label for="proyecto">Nombre del Proyecto:</label>
        <input type="text" id="proyecto" name="proyecto">
    </div>
    <br/>
    <button type="submit" id="btn-1">Buscar Proyecto</button>
    `
}

var boton_2 = document.getElementById("Boton_2")
boton_2.onclick = function(){
    var div = document.getElementById("formulario");
    div.innerHTML = `<br/>
    <div class="form-group">
        <label for="">Nombre:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <br/>
    <div class="form-group">
        <label for="last_name">Apellidos:</label>
        <input type="last_name" id="last_name" name="last_name" required>
    </div>
    <br/>
    <button type="submit" id="btn-2">Buscar Persona</button>
    `
}

var boton_3 = document.getElementById("Boton_3");
boton_3.onclick = function(){
    var div = document.getElementById("formulario");
    div.innerHTML = `<br/>
    <div class="form-group">
        <label for="tema_brigada">Tema:</label>
        <input type="text" id="tema_brigada" name="tema_brigada">
    </div>
    <br/>
    <button type="submit" id="btn-3">Buscar Brigada</button>
    `;
}

var boton_4 = document.getElementById("Boton_4");
boton_4.onclick = function(){
    var div = document.getElementById("formulario");
    div.innerHTML = `<br/>
    <div class="form-group">
        <label for="tema_curso">Materia:</label>
        <input type="text" id="tema_curso" name="tema_curso">
    </div>
    <br/>
    <button type="submit" id="btn-4">Buscar Curso</button>
    `;
}
