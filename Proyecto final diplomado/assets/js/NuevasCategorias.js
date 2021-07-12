
//Agregar Nuevo Elemento
//Obteniendo el formulario para aplicarle un evento
const NuevoFormularioCategorias = document.getElementById("AgregarCategorias");



//Evento submit
NuevoFormularioCategorias.addEventListener("submit",function(event){
 event.preventDefault();
 //Obtengo el valor del elemento input
  let NuevaCategoria = document.getElementById("NuevaCategoria").value;


  //Y guardo la nueva categoria
 GuardarNuevasCategorias(NuevaCategoria);
     

   event.target.reset();

});