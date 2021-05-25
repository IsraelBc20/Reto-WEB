import {Comunicaciones} from "./comunicacion.mjs"
import {Interface} from "./interfaz.mjs"

let comunicacion = new Comunicaciones()
let interfaz = new Interface()
let btnCrear = document.getElementById("btn-crear")
let modalCrear = new bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar = document.getElementById("btn-guardar")

let getVacunados = () => {
    comunicacion.obtenerVacunados()
    .then(vacunados => {
        interfaz.imprimirVacunados(vacunados)
    })
    .catch(err => console.log(err))
}
getVacunados();

btnCrear.addEventListener("click", () => {
    modalCrear.show()
})

btnGuardar.addEventListener("click", () => {
    let formulario = document.getElementById("form-crear")
    let nuevoVacunado = {
        apellido: formulario["apellido"].value,
        nombre: formulario["nombre"].value,
        dni: formulario["dni"].value,
        prueba: formulario["prueba"].value,
    }
    comunicacion.crearVacunado(nuevoVacunado)
    .then(vacunadoCreado => {
        formulario.reset()
        modalCrear.hide()
        getVacunados()
    })
    .catch(err => console.log(err))
})