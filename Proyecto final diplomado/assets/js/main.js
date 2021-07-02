window.addEventListener('load', event =>{

    var today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric'};
    var day = today.toLocaleDateString("es-US",options);

    const listado = document.getElementById('listado-gastos');
    const misGastos = [
        
        {
        descripcion: "Compra del mes",
        monto: 4500.00,
        moneda:"RD $",
        categoria: "Casa",
        fecha: day 
       },
       {
        descripcion: "Pasaje de la semana",
        monto: 2500.00,
        moneda:"RD $",
        categoria: "Transporte",
        fecha: day
     },
     {
      descripcion: "Salida de fin de semana",
      monto: 4500.00,
      moneda:"RD $",
      categoria: "Diversion",
      fecha: day
    }
      ];
    
      
     const renderizarGastos = gasto =>{

        listado.innerHTML +=
         ` <div class="col">
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


      for(let i = 0; i < misGastos.length ;i++){

        let gasto = misGastos[i];
       
        renderizarGastos(gasto);

    }

});