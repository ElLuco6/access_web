function togglePasswordVisibility() {
    
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  document.getElementById("buttonShowHide").addEventListener("click", togglePasswordVisibility);