window.addEventListener('load', event => {
    const formularioGastos = document.getElementById("formulario-gastos");

    formularioGastos.addEventListener('submit', event => {
        event.preventDefault();

        let gasto = {
            descripcion: event.target.elements['descripcion'].value,
            categoria: event.target.elements['categoriasMisGastos'].value,
            fecha: event.target.elements['fecha'].value,
            monto: event.target.elements['monto'].value,
            moneda: event.target.elements['moneda'].value,
        };

        guardarGastos(gasto)
        event.target.reset();

    });

    
    const createOptionElement = (categoria) => {
        let selectCategorias = document.getElementById('categoriasMisGastos')
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
});

