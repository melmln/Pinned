// Log out 
const btnLogOut = document.getElementById("logOut")

btnLogOut.addEventListener("click", () => {
    Swal.fire({
        title: 'Are you leaving? 🙁',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            timer: 3000,
            title: 'See you soon 😋'
        })
         location.href = "./Login.html"
        }
      })
})