// Solicita la edad solo al entrar por primera vez a la página de inicio (HOME)
function verificarEdad() {
  const esHome = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
  if (!esHome) return;

  // Verificar si ya se almacenó la edad en la sesión
  if (sessionStorage.getItem("edadVerificada")) return;

  const edad = prompt('Please, enter your age:');

  // Verificar si el valor ingresado es un número
  if (!edad || isNaN(edad)) {
      alert('Please, enter a valid number.');
      return verificarEdad();
  }

  // Convertir a número
  const edadNum = parseInt(edad);

  // Verificar la edad
  if (edadNum < 10) {
      alert('Sorry, you are not allowed to enter.');
      window.location.href = 'https://www.google.com';
  } else {
      alert('Welcome to the website.');
      sessionStorage.setItem("edadVerificada", "true");
  }
}

// Ejecutar la función al cargar la página
window.onload = verificarEdad;
