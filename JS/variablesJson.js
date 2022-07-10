// array donde se guardan los apuntes
let apuntesMostrar = ""
const apuntesGuardados = []

// simulador de servidor en json
const URL = `/JS/datosServidor.json`

// div donde se guardaron los datos del API
const contenidoApuntes = document.querySelector("#contenedor__apuntes") 
const cargandoApuntes= document.querySelector("#cargando")