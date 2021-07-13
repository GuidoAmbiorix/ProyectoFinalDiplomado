window.addEventListener('load', event =>{

  const listado = document.getElementById('listado-gastos');
  const misGastos = obtenerListadoGastos();
  
     const renderizarGastos = gasto =>{

        listado.innerHTML +=
         ` <div class="col-6">
        <div class="card shadow-sm">
        <div class="card-header " style="background-color: #F8DC81; color:#214151;">${gasto.categoria}</div>
          <div class="card-body">
            <p class="card-text">${gasto.descripcion}</p>
            <p class="card-text">${gasto.fecha}</p>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">${gasto.moneda+""+gasto.monto}</small>
            </div>
          </div>
        </div> `;

     }

     //Aqui estaran las categorias por default
    CrearCategoriasDefault = () =>{
      let categorias = [
        'Personal',
        'Diversion',
        'Transporte'
    ];

  //Si no hay nada en las categorias, actualizame la lista con las categorias por default
  //Si ya estan las categorias por default pues no me actualices la lista    
   if(localStorage.getItem('categorias') == null){

     //Actualizo   
     localStorage.setItem('categorias',JSON.stringify(categorias));

    }
      
    }
    
     CrearCategoriasDefault(); 



      for(let i = 0; i < misGastos.length ;i++){

        let gasto = misGastos[i];
       
        renderizarGastos(gasto);

    }

    const createOptionElement = (categoria) => {
      let selectCategorias = document.getElementById('categorias')
      let elementoOption = document.createElement('option');
      elementoOption.value = categoria;
      elementoOption.text = categoria;
      selectCategorias.append(elementoOption)
  }

  const renderizarCategorias = () => {
      let categorias = [];
      categorias = JSON.parse(localStorage.getItem('categorias'));
      categorias.forEach(createOptionElement)
  }


  renderizarCategorias(); 

    //Filtros por gastos gastos

    document.getElementById('monto').addEventListener('change', event => {
      let filtroMonto = event.target.value;
      let misGastos = obtenerListadoGastos();

      let misGastosFiltrados = misGastos.filter((gasto) => {

          // El motodo Filter espera el retorno de un valor booleano
          // los que sean true se incluiran el nuevo array
          // los que sena false no se tomaran en cuenta
          if (gasto.monto == filtroMonto) {
              return true;
          } else {
              return false;
          }
      });
       //Si es falso entonces no coinciden y quiero que me muestre todo
      if(misGastosFiltrados == false){
        listado.innerHTML = '';
        misGastos.forEach(renderizarGastos)
      }
       //Si es true entonces quiero que me muestre los datos que encuentre
      else{
        listado.innerHTML = '';
        misGastosFiltrados.forEach(renderizarGastos);
      }
     
  });

  //Filtro por categorias

  document.getElementById('categorias').addEventListener('change', event => {
      let filtroCategoria = event.target.value;
      let misGastos = obtenerListadoGastos();

      let misGastosFiltrados = misGastos.filter((gasto) => {

          // El motodo Filter espera el retorno de un valor booleano
          // los que sean true se incluiran el nuevo array
          // los que sena false no se tomaran en cuenta
          if (gasto.categoria == filtroCategoria) {
              return true;
          } else {
              return false;
          }
      });
      //Si es falso entonces no coinciden y quiero que me muestre todo
      if(misGastosFiltrados == false){
        listado.innerHTML = '';
        misGastos.forEach(renderizarGastos)
      }
      //Si es true entonces quiero que me muestre los datos que encuentre
      else{
        listado.innerHTML = '';
        misGastosFiltrados.forEach(renderizarGastos);
      }
  });

  
  //Filtro para las monedas
  
let moneda = document.getElementsByName('moneda');
    
for(let i = 0 ;i<moneda.length;i++){
    moneda[i].addEventListener("change",event =>{
    
      let filtroMoneda =event.target.value;
      let filtroChecked = event.target.checked;
  
      let misGastosFiltrados = misGastos.filter((gasto) => {

        // El motodo Filter espera el retorno de un valor booleano
        // los que sean true se incluiran el nuevo array
        // los que sena false no se tomaran en cuenta
        if (gasto.moneda ==  filtroMoneda) {
            return true;
        } else {
         return false;
        }
    });
 //Si es falso entonces no coinciden y quiero que me muestre todo
    if( filtroChecked == false){
      listado.innerHTML = '';
      misGastos.forEach(renderizarGastos);
   
  }
   //Si es true entonces quiero que me muestre los datos que encuentre
  else{
    listado.innerHTML = '';
    misGastosFiltrados.forEach(renderizarGastos);
    
  }
      
    });
}



});