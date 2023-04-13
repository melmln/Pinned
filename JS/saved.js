// Ir a inicio
btnHome.addEventListener("click", () => {
    location.href = "../Pages/Notes.html"
})

function saveJSON() {
    documento = JSON.parse(localStorage.getItem("documento"))  // recupero los datos transformandolos a objeto
    documentoGuardado = JSON.parse(localStorage.getItem("documentoGuardado"))
    
    }
    
saveJSON()  

function cargarDocumentos() {

    let map = documentoGuardado.map((contenido) => {

        const {title, text} = contenido

        return `<div class="card card__apunte" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${text}</p>
                    </div>
                </div>`
    })

    contenidoApuntes.innerHTML = map.join('')
    
}

btnDoc.addEventListener('click', ()=> {
    cargarDocumentos()
})