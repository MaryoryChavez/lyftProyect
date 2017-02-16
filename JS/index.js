function ingresar(){
    if(localStorage.length == 0){
        alert("no estas registrado");
    }else{
        location.href = "mapa.html";
    }
}

function registrar(){
    if(localStorage.length == 0){
        location.href = "signup.html";
    }else{
        alert("ya estas registrado. Inicia sesion");
    }
}