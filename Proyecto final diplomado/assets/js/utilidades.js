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


//Funcion para Guardar Nuevas Categorias
function GuardarNuevasCategorias (NuevaCategoria){

    //Obtener las categorias anteriores
    let ObtenerCategoriasAnteriores = JSON.parse(localStorage.getItem('categorias'));

    //Le agrego la nueva Categoria
    ObtenerCategoriasAnteriores.push(NuevaCategoria);

   //Actualizo   
   localStorage.setItem('categorias',JSON.stringify(ObtenerCategoriasAnteriores));

}


