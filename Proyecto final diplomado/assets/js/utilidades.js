function guardarGastos(gasto){

    let listadoGastos = obtenerListadoGastos();

    listadoGastos.push(gasto);

    actualizarLista(listadoGastos);

}


function obtenerListadoGastos(){

let listadoGastos = JSON.parse(localStorage.getItem("listado_gastos"));

if(listadoGastos == null){

    listadoGastos = [];
    actualizarLista(listadoGastos)
}

return listadoGastos;

}


function actualizarLista(listadoGastos){
    localStorage.setItem("listado_gastos",JSON.stringify(listadoGastos));
}