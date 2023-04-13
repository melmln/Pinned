// REGISTRO
/* 
El objeto document tiene todos los elementos de la página que estoy visualizando,
me sirve para añadir o cambiar el contenido. 
*/
// acá accedo a los elementos través del id
const form = document.getElementById("form")

const usuario = document.getElementById("username") 
const email = document.getElementById("email") 
const password = document.getElementById("password") 
const repeatPassword = document.getElementById("repeatPassword")
const checkbox = document.getElementById("checkbox")

const pWarnings = document.getElementById("warnings")
const btnSignUp = document.getElementById("btnSignUp")

// creo objeto para almacenar datos del form
const inputUsuario = document.querySelector("#username")
const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")

let agregarUsuarios = [] // array de objetos con todos los usuarios registrados
let usuarios = []   // array de elementos con los datos de cada usuario

// Ingreso
let registerBtn = document.querySelector("#btnSignUp")

/* --------------------------------------------------------------------------------------------------------------------------- */

// NOTES

const btnLogOut = document.querySelector("#log__out")

// side bar
const save = document.querySelector(".save")
let documentoGuardado = [] // array de objetos con todos los documentos guardados
let documento = []   // array de elementos con los datos de cada documento

const savedBtn = document.querySelector("#saved__btn")
const playlistBtn = document.querySelector("#playlist__btn")

// tool bar
let textareaNotes = document.querySelector("#textarea__notes")

const documentTitle = document.querySelector(".title") 
let size = document.querySelector(".size")
let color = document.querySelector(".color")
let bold = document.querySelector(".bold")
let italic = document.querySelector(".italic")
let underline = document.querySelector(".underline")
let center = document.querySelector(".center")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let justify = document.querySelector(".justify")

/* --------------------------------------------------------------------------------------------------------------------------- */

// LOGIN 
let btnLogIn = document.querySelector("#btnLogIn")
let pWarningsLogIn = document.querySelector("#warningsLogIn")
const usernameLogIn = document.querySelector("#usernameLogIn")
const passwordLogIn = document.querySelector("#passwordLogIn")
const usuariosRegistrados = ["melmln", "123"]

/* --------------------------------------------------------------------------------------------------------------------------- */

// SAVED 

let btnHome = document.querySelector(".btnInicio")
let btnDoc = document.querySelector("#btnDoc")

// array donde se guardan los apuntes
let apuntesMostrar = ""
let apuntesGuardados = []

// simulador de servidor en json
const URL = `/JS/datosServidor.json`

// div donde se guardaron los datos del API
let contenidoApuntes = document.querySelector("#contenedor__apuntes") 
 
