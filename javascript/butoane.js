var btnContainer = document.getElementById("butoane");

// Obține toate butoanele cu class="btn" în interiorul containerului
var btns = btnContainer.getElementsByClassName("sortbutoane");


// Buclă prin butoane și adăugați clasa activă la butonul curent/clic
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // Dacă nu există nicio clasă activă
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Adăugați clasa activă la butonul curent/clic
    this.className += " active";
  });
}

function reset() {
  document.location.reload();
}