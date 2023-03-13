document.getElementById("formReserva").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("inputNombre").value;
    let servicio = document.getElementById("inputService").value;
    let fecha = document.getElementById("inputDate").value;
    let hora = document.getElementById("inputTime").value;

    console.log("Nombre: " + nombre);
    console.log("Servicio: " + servicio);
    console.log("Fecha: " + fecha);
    console.log("Hora: " + hora);

    alert("Gracias por reservar con nosotros, " + nombre + "!");
});

// Controlador de evento para el botón de registro
document.getElementById("buttonRegistro").addEventListener("click", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("inputNombre").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Contraseña: " + password);

    alert("Gracias por registrarse, " + nombre + "!");

// Controlador de evento para el botón de inicio de sesión
document.getElementById("buttonLogin").addEventListener("click", function(event) {
event.preventDefault();

var email = document.getElementById("inputEmailLogin").value;
var password = document.getElementById("inputPasswordLogin").value;

console.log("Email: " + email);
console.log("Contraseña: " + password);

// Aquí puedes agregar la lógica para verificar el inicio de sesión de un usuario. Por ejemplo, puedes hacer una petición a una API que verifique si el usuario existe y si la contraseña es correcta.

alert("Bienvenido de nuevo, " + email + "!");
})});