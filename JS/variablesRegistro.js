 // Formulario de registro

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

let usuarios = []   // array de elementos con los datos de cada usuario
let agregarUsuarios = [] // array de objetos con todos los usuarios registrados


