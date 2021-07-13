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

    //Iterar cada uno de los elementos que tiene el categoria para verificar si ya estan
   for(let i = 0 ; i<ObtenerCategoriasAnteriores.length;i++){

    //Si la categoria que se quiere agregar ya esta pues no me la pongas
    if(NuevaCategoria == ObtenerCategoriasAnteriores[i]){
        localStorage.setItem('categorias',JSON.stringify(ObtenerCategoriasAnteriores));
        //El return para que el ciclo for no de mas vueltas
        return;
    }
   }

    //Le agrego la nueva Categoria
    ObtenerCategoriasAnteriores.push(NuevaCategoria);

   //Actualizo   
   localStorage.setItem('categorias',JSON.stringify(ObtenerCategoriasAnteriores));

}


