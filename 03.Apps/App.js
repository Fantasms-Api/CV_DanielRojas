function validarFormulario() {
    
    //Capturo la información de los input
    var nombre = document.getElementById("inombres").value;
    var email = document.getElementById("iemail").value;
    var edad = document.getElementById("inumber").value;
    var contrasena = document.getElementById("ipassword").value;
    var telefono = document.getElementById("inumbert").value;

    // Validación de "nnombres" (no permitir números)
    var nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert("El nombre no debe contener números.");
        return false;
    }

    // Validación de "nemail" (correo debe ser Gmail o Hotmail)
    var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
    if (!emailRegex.test(email)) {
        alert("El correo debe ser Gmail o Hotmail.");
        return false;
    }

    // Validación de "npassword" (más de 8 caracteres, al menos 1 minúscula, 1 número y 1 símbolo)
    var passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(contrasena)) {
        alert("La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 número y 1 símbolo.");
        return false;
    }

    // Validación de "ntel" (solo números)
    var telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener solo números.");
        return false;
    }

    return true;
}