// FETCH 

const cargarApuntes = (URL) => {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        apuntesGuardados = data
        apuntesGuardados.forEach(contenido => {
            apuntesMostrar += retornoApuntes(contenido)
            apuntesGuardados.push(data)
        })
        contenidoApuntes.innerHTML = apuntesMostrar
    })
   .catch((error) => {
    contenidoApuntes.innerHTML = retornoApuntesError()
    console.error("No se pudo cargar el contenido", error)
   }) 
    .finally(() => cargandoApuntes.innerHTML = "")
}

cargarApuntes("/JS/datosServidor.json")



