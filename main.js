secs = [];
boton = [];
window.onload = natura;

function natura(){
    secs[1] = document.getElementById("s1");
    secs[2] = document.getElementById("s2");
    secs[3] = document.getElementById("s3");
    secs[4] = document.getElementById("s4");
    boton[1] = document.getElementById("b_1");
    boton[2] = document.getElementById("b_2");
    boton[3] = document.getElementById("b_3");
    boton[4] = document.getElementById("b_4");
}

function quitar(){
    for( i=1; i< secs.length; i++){
        secs[i].classList.add("oculta");
    }
}
function desSelect(){
    for(i in boton){
        boton[i].classList.remove("selec")
    }
}
function selec(seccion_id){
    desSelect();
    boton [seccion_id].classList.add("select");
}
function cambio(target){
    id = target.id.split("_")[1];
    quitar();
    selec(id);
    secs[id].classList.remove("oculta");
}
