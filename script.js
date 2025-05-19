window.onload = function() {
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
  // Aquí podrías guardar la edad si quieres, pero ya no es necesario para lo que pides
};

