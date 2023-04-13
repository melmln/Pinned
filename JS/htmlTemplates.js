// Apuntes guardados
const retornoApuntes = (contenido) => {
    const {titulo, body, nota} = contenido
        let htmlApunte = ""
                htmlApunte += `<div class="card card__apunte" style="width: 18rem;">
                                 <div class="card-body">
                                    <h5 class="card-title">${titulo}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${nota}</h6>
                                    <p class="card-text">${body}</p>
                                 </div>
                               </div>
                              `
    return htmlApunte
}

const retornoApuntesError = () => {
    let HTMLApuntesError = `<div 
                                <h4>No pudimos cargar el contenido 😕 Intentalo en unos minutos. </h4> 
                           </div>`
       return HTMLApuntesError
 }



