function togglePasswordVisibility() {
    
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  document.getElementById("checkboxShowHide").addEventListener("change", togglePasswordVisibility);
   
  document.getElementById('myForm').addEventListener('submit', function (event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    // Validation de l'email
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.textContent = "Veuillez entrer une adresse email valide.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validation du mot de passe
    if (password.length < 5) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 5 caractères.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault(); // Empêche l'envoi du formulaire si les champs sont invalides
    }else {
      alert("Form submitted successfully!");
  }
});
