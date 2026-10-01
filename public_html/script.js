function calcularPromedio() {
    // Esta función se ejecuta al dar clic en el botón.

    // Saco los datos que escribí en el formulario.
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    
    // Con parseFloat convierto el texto a números decimales para poder sumarlos.
    let calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    let calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    let calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    
    // Agrego la cuarta calificación que me pidieron.
    let calificacion4 = parseFloat(document.getElementById("calificacion4").value);

    // Reviso que no falten datos o que no hayan metido letras en vez de números.
    if (
        nombre === "" ||
        edad === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {
        // Si me falta un campo por llenar manda un mensaje .
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
            
        // El return frena la función aquí mismo si hay error.
        return;
    }

    // Si todo está bien, calculo mi promedio sumando y dividiendo entre 4.
    let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    // Preparo la variable para mi mensaje final.
    let mensaje = "";
    
    // Reviso en qué rango cae mi promedio.
    if (promedio >= 9 && promedio <= 10) {
        // Entre 9 y 10.
        mensaje = "Excelente";
    } else if (promedio >= 8 && promedio < 9) {
        // Entre 8 y 8.9.
        mensaje = "Bien";
    } else if (promedio >= 6.5 && promedio < 8) {
        // Entre 6.5 y 7.9.
        mensaje = "Cámbiate a la 11";
    } else if (promedio >= 0 && promedio < 6.5) {
        // Menos de 6.5, ya valió.
        mensaje = "Date de baja";
    } else {
        // Por si meten números fuera de rango.
        mensaje = "Calificaciones fuera de rango";
    }

    // Imprimo todo lo anterior.
    document.getElementById("resultado").innerHTML =
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad + " años" +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br><strong>" + mensaje + "</strong>";
}

