window.onload = function() {
  // Solo si no hay edad guardada en sessionStorage, pedirla
  if (!sessionStorage.getItem('edadVisitante')) {
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
        // Bloquear acceso recargando la página o redirigiendo
        document.body.innerHTML = "<h1>Access denied</h1>";
        return;
      }
    }
    sessionStorage.setItem('edadVisitante', edad);
  }
};
