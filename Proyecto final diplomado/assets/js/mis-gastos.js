window.addEventListener('load', event => {
    const formularioGastos = document.getElementById("formulario-gastos");

    formularioGastos.addEventListener('submit', event => {
        event.preventDefault();

        let gasto = {
            descripcion: event.target.elements['descripcion'].value,
            categoria: event.target.elements['categoria'].value,
            fecha: event.target.elements['fecha'].value,
            monto: event.target.elements['monto'].value,
            moneda: event.target.elements['moneda'].value,
        };

        guardarGastos(gasto)

    });
});
