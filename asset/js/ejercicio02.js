// Ejercicio 2: Conversor de tiempo
// Datos de entrada
// Constante
const segundos =  7200;


//proceso 
// convertir en minutos 
let minutos = segundos / 60;
// convertir horas 
let horas = segundos / 3600;
// convertir dias
let dias = segundos / 86400;

// Datos de salida 
alert("Segundos registrados: " + segundos + "\n" + 
    "Minutos:  " + minutos + "\n" + 
    "Horas:  " + horas + "\n" + 
    "Días:  " + dias )