const form = document.getElementById("dForm");
let signupString = localStorage.getItem("clubsignups")
if (!signupString) { signupsList = {} }
else signupsList = JSON.parse(signupString) 

form.addEventListener("submit", function(e) { 
    if (!confirm("Sure You Want To Save Your Work?")) {  
      e.preventDefault();
        const data = new FormData(form);
        const obj = Object.fromEntries(data.entries());
        signupsList[obj.sid] = {};
        for (let key in obj) { 
            if (key != "sid") { 
                signupsList[obj.sid][key] = obj[key];
            }
        }
        
        console.log(signupsList) // to check all the account information if it will be saved correctly
        signupString = JSON.stringify(signupsList) // convert object into string, as a requirement of localStorage
        localStorage.setItem("clubsignups", signupString) // save on the user's computer
        form.submit();
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

show.onclick = function() {
  window.location.href = "viewsignups.html";
}

home.onclick = function() {
  window.location.href = "../../index.html";
}

viewsignup.onclick = () => {
        window.location.href = "viewsignups.html";
      }
