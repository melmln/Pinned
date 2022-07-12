// Log out  
const btnLogOut = document.getElementById("logOut")
const savedBtn = document.querySelector("#saved__btn")
const classesBtn = document.querySelector("#classes__menu")
const addAssignature = document.querySelector("#add")
const playlistBtn = document.querySelector("#playlist__btn")

classesBtn.addEventListener('click', ()=> {
  Swal.fire({
    html: `<div class="card" style="width: 28rem;">
            <img src="/stylesheet/img/Notes/imgAssignature.jpg" class="card-img-top" alt="">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Biology</li>
              <li class="list-group-item">Chemistry</li>
              <li class="list-group-item">Maths</li>
              <li id="add" class="list-group-item">Add</li>
            </ul>
          </div>`,
    showConfirmButton: false,
    showCancelButton: true, 
    cancelButtonText: "Close",
    cancelButtonColor: "rgb(25, 119, 153)",
    background: "none",
  })
})

// MUSIC
playlistBtn.addEventListener('click', ()=> {
  Swal.fire({
    html: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6jJuPNSyjL5ogsUZyrsDHM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    showConfirmButton: false,
    showCancelButton: true, 
    cancelButtonText: "Close",
    cancelButtonColor: "rgb(25, 119, 153)",
    background: "none",
  })
})
/* 
addAssignature.addEventListener('click', () => {
  Swal.fire({
      title: "hola",
      html: `<div class="card" style="width: 28rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
            </div>`
  })
}) */


savedBtn.addEventListener('click', ()=> {
  location.href = "Saved.html";
})


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
