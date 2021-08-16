let user = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("login");

localStorage.setItem("user","eliiasfv25@gmail.com");
localStorage.setItem("password","12345678");
console.log(localStorage.getItem("user"));
console.log(localStorage.getItem("password"));
console.log(user);
submit.addEventListener("click", ()=>{
    if(localStorage.getItem("user") == user && localStorage.getItem("password") == password){
        console.log("Datos correctos");
        window.location.href="../html/lista_items.html";        
    }else{
        console.log("Datos incorrectos");
        
    }

});