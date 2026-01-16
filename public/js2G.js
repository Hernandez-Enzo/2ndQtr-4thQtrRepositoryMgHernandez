const form = document.getElementById("dForm");

form.addEventListener("submit", function(e) { 
    if (!confirm("Sure You Want To Save Your Work?")) {  
        e.preventDefault();
    }
  });

form.addEventListener("reset", function(e) {
    if (!confirm("Sure You Want To Reset Your Work?")) {
        e.preventDefault();
    }
});


function changecolor(a){
  a.style.backgroundColor = "Blue"
}
function resetcolor(a){
  if(a.value.trim() === ""){
  a.style.backgroundColor = "Red"
  a.classList.add("invalid-field")
  }
  else {
  a.style.backgroundColor = "Gray"
  a.classList.remove("invalid-field")
  }
}
