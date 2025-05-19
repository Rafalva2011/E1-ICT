window.onload = function() {
  // Verificar si la edad ya está almacenada en la sesión
  if (!sessionStorage.getItem("edad")) {
    let edad = null;
    while (edad === null) {
      edad = prompt("Please, enter your age");
      if (edad === null) {
        // Si el usuario cancela el prompt, seguir pidiendo
        continue;
      }
      edad = parseInt(edad);
      if (isNaN(edad) || edad < 0) {
        alert("Please enter a valid age.");
        edad = null;
        continue;
      }
      if (edad < 10) {
        alert("You are not allowed to enter this site.");
        document.body.innerHTML = "<h1>Access denied</h1>";
        return;
      }
    }
    // Guardar la edad en sessionStorage para esta sesión
    sessionStorage.setItem("edad", edad);
  }
};
