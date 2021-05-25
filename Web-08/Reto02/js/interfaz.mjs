class Interface {
    imprimirVacunados(arregloVacunados){
        const vacunado = document.getElementById("vacunas")
        let cardsVacunados = '';

        arregloVacunados.forEach(({id, apellido, nombre, dni, prueba}) => {
            let cardVacunado = `<div class="col-6 col-lg-3 mb-2">
                                    <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title">
                                                    ${apellido}
                                                </h4>
                                                <h4 class="card-title">
                                                    ${nombre}
                                                </h4>
                                            </div>
                                        <div class="card-footer">
                                            <span class="fw-bold">DNI:</span> ${dni}
                                        </div>
                                        <div class="card-footer">
                                            <span class="fw-bold">Se realizó la prueba covid? </span> ${prueba}
                                        </div>
                                    </div>
                                </div>`;
        cardsVacunados = cardsVacunados + cardVacunado;
        })
        vacunado.innerHTML = cardsVacunados;
    }
}

export{
    Interface
}