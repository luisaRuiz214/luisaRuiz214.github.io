// Función para manejar el envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario

    // Obtener los valores del formulario
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    // Validar el usuario y la contraseña
    if (usuario === "luisa" && contraseña === "12345") {
        // Si el usuario y la contraseña son correctos, redirigir al index.html
        window.location.href = "/index.html"; // Redirige al archivo de actividades
    } else {
        // Si los datos son incorrectos, mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos");
    }
});

