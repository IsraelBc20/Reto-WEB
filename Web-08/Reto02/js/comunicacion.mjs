const URL = "https://609f10615f32be00171cd344.mockapi.io/Vacunados"

class Comunicaciones{
    obtenerVacunados(){
        return new Promise((resolve, reject) => {
            fetch(URL)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(Vacunados => {
                resolve(Vacunados)
            })
            .catch(error => reject(error))
        })
    }
    crearVacunado(objVacunado){
        return new Promise((resolve, reject) => {
            let configuracion = {
                method: 'POST',
                body: JSON.stringify(objVacunado),
                headers: {'Content-Type': 'application/json'}
            }
            fetch(URL, configuracion)
            .then(respuesta => respuesta.json())
            .then(vacunadoCreado => resolve(vacunadoCreado))
            .catch(error => reject(error))
        })
    }
}

export{
    Comunicaciones
}