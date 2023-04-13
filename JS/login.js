// LOGIN 
btnLogIn.addEventListener("click", () => {
    if (usuariosRegistrados.includes((usernameLogIn.value)) && usuariosRegistrados.includes((passwordLogIn.value))) {
       location.href = "../Pages/Notes.html" 
       condicionalLogIn = true 
    } else {   
       Swal.fire ({
           title: "El usuario y la contraseña no coinciden",
           icon: "error",
           background: "rgba(100, 98, 98, 0.973)",
           color: "whitesmoke",
           confirmButtonColor: "#F24C4C",
           timer: 2500 })
    }
}) 

