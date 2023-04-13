// Save button
save.addEventListener("click", () => {
  const documento = {  
  title: documentTitle.value,
  text: textareaNotes.value
} 
if (textareaNotes.className != "guardar") {
  textareaNotes.className += "guardar"

  documentoGuardado.push(documento) // llamo al array y le pongo push para que cargue los datos del documento
  console.log("Se guardó el documento")
  localStorage.setItem("documentoGuardado", JSON.stringify(documentoGuardado)) 

  Swal.fire({
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500,
    background: "rgba(100, 98, 98, 0.973)",
    color: "whitesmoke",
    padding: 50
  })
} else {
  textareaNotes.classList.remove("guardar")
}
})

function saveJSON() {
documento = JSON.parse(localStorage.getItem("documento"))  // recupero los datos transformandolos a objeto
documentoGuardado = JSON.parse(localStorage.getItem("documentoGuardado"))

}

saveJSON()  

// Saved button
  savedBtn.addEventListener('click', ()=> {
    window.open("Saved.html", "_blank")
  })

// Music
playlistBtn.addEventListener("click", () => {
  Swal.fire({
    html: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6jJuPNSyjL5ogsUZyrsDHM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    showConfirmButton: false,
    showCancelButton: true, 
    cancelButtonText: "Close",
    cancelButtonColor: "#F24C4C",
    background: "none",
  })
})

// Log out button
btnLogOut.addEventListener("click", () => {
  Swal.fire({
      title: "Are you leaving? 🙁",
      showCancelButton: true,
      confirmButtonColor: "black",
      cancelButtonColor: "#F24C4C",
      confirmButtonText: "Yes",
      background: "rgba(100, 98, 98, 0.973)",
      color: "whitesmoke",
      padding: 50
    }).then((result) => {
      if (result.isConfirmed) {
       location.href = "/Pages/Login.html"
      }
    })
}) 

// Toolbar
size.addEventListener("click", () => {
  (textareaNotes.className != " tamaño") ? textareaNotes.className += " tamaño"
                                        : textareaNotes.classList.remove("tamaño")
})

color.addEventListener("click", () => {
    (textareaNotes.className != " colorTexto") ? textareaNotes.className += " colorTexto" 
                                           : textareaNotes.classList.remove("colorTexto")
})

bold.addEventListener("click", () => {
    (textareaNotes.className != " negrita") ? textareaNotes.className += " negrita" 
                                           : textareaNotes.classList.remove("negrita")
})

italic.addEventListener("click", () => {
    (textareaNotes.className != " cursiva") ? textareaNotes.className += " cursiva" 
                                           : textareaNotes.classList.remove("cursiva")
})

underline.addEventListener("click", () => {
    (textareaNotes.className != " subrayar") ? textareaNotes.className += " subrayar" 
                                           : textareaNotes.classList.remove("subrayar")
})

center.addEventListener("click", () => {
    (textareaNotes.className != " centrar") ? textareaNotes.className += " centrar" 
                                           : textareaNotes.classList.remove("centrar")
})

left.addEventListener("click", () => {
    (textareaNotes.className != " izquierda") ? textareaNotes.className += " izquierda" 
                                           : textareaNotes.classList.remove("izquierda")
})

right.addEventListener("click", () => {
    (textareaNotes.className != " derecha") ? textareaNotes.className += " derecha" 
                                           : textareaNotes.classList.remove("derecha")
})

justify.addEventListener("click", () => {
    (textareaNotes.className != " justificado") ? textareaNotes.className += " justificado" 
                                           : textareaNotes.classList.remove("justificado")
})




