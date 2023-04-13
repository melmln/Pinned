// FETCH APUNTES
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
}

cargarApuntes("../JS/datosServidor.json")

/* --------------------------------------------------------------------------------------------------------------------------- */


// REGISTRO
// Función que se ejecuta al mandar el formulario 

form.addEventListener("submit", e => { // uso la cte form para agregarle un evento submit, para que cuando se envie se ejecute la funcion
    e.preventDefault() // cancela el evento por defecto para que ejecute el condicional
    let warnings = "" // creo una var de texto para luego agregar contenido según el condicional
    let condicional = false // cuando entre en el condicional será true
    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  // expresión regular para validar email
    pWarnings.innerHTML = "" // para que se reinicie al poner los datos correctos

    // condición para username 
    usuario.value.length >= 4 ? ( // llamo a la funcion usuario que tiene el input del username y pido el valor y restrinjo el largo
        warnings += `✔ Username válido <br>`,
        condicional = true
    ) : (
        warnings += `❌ El username ${usuario.value} no es valido <br>`
    )

    // condición para email
    validarEmail.test(email.value) ? (
        warnings += `✔ E-mail valido <br>`,
        condicional = true
    ) : (
        warnings += `❌ Ingrese un e-mail valido <br>`
    )

    // condición para password 
    password.value === repeatPassword.value ? (
        warnings += `✔ Las contraseñas coinciden <br>`,
        condicional = true
    ) : (
        warnings += `❌ Las contraseñas no coinciden <br>`
    )

    // condición para términos y condiciones
    checkbox.checked ? (
        warnings += ` ✔ Acepto los términos y condiciones <br>`,
        condicional = true
    ) : (
        warnings += `❌ Primero acepte los términos y condiciones <br>`
    )
    // si entra en el condicional se van a agregar en el parrafo los warnings
    if (condicional) {
        pWarnings.innerHTML = warnings
    } 
}) 


// Almacenamiento de datos del registro

// uso el objeto localStorage(clave, valor) para almacenar datos, estos se almacenan en strings. 
// para almacenar un objeto lo transformo a JSON para que se almacene correctamente
// stringify recibe como parametro un objeto y me lo transforma a cadena de texto formato JSON
// parse recibe como parametro un texto JSON y devuelve el objeto JS correspondiente

btnSignUp.addEventListener("click", ()=> {  // cuando haga click en el botón se ejecuta la función que va a guardar todos los datos del input
    const datosUsuario = {  
        username: usuario.value,
        email: inputEmail.value, 
        password: inputPassword.value
    }
    if (usuario.value !== "" && inputEmail.value !== "" && inputPassword.value !== "" && password.value === repeatPassword.value) {
        agregarUsuarios.push(datosUsuario) // llamo al array y le pongo push para que cargue los datos del usuario
        console.log("Se agrego nuevo usuario")
        localStorage.setItem("agregarUsuarios", JSON.stringify(agregarUsuarios)) // clave: "gregarUsuarios" (la defino yo) valor: agregarUsuarios (array) 
    } else {
        console.log("Falta completar datos o los datos son inválidos")
    }
})

function usrJSON() {
    usuarios = JSON.parse(localStorage.getItem("usuarios"))  // recupero los datos del usuario transformandolos a objeto
    agregarUsuarios = JSON.parse(localStorage.getItem("agregarUsuarios"))
}

usrJSON()


// Ingreso 
registerBtn.addEventListener('click', ()=> {
    (usuario.value !== "" && email.value !== "" && password.value === repeatPassword.value) ? 
                                                    (location.href = "./Pages/Notes.html") :
                                                    (Swal.fire ({
                                                    title: "Ingrese datos válidos",
                                                    icon: "error",
                                                    background: "rgba(100, 98, 98, 0.973)",
                                                    color: "whitesmoke",
                                                    confirmButtonColor: "#F24C4C",
                                                    padding: 50,
                                                    timer: 2500 }))
})

/* --------------------------------------------------------------------------------------------------------------------------- */




    
