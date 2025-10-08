// Ejercicio 3: Producción de una fábrica
// Datos de entrada
// Constantes
const piezasPorHora =  250;
const horasTrabajo = 8;
const capacidadCajas = 12;


//proceso 
// Calcular total de piezas producidas
let totalPiezas = piezasPorHora * horasTrabajo;
// Calcular cuantas cajas completas se llenan
let cajasLlenas = totalPiezas / capacidadCajas;
// Calcular las piezas sobrantes (166 * 2 = 1992) (2000 - 1992 = 8)
let piezasSobrantes =  totalPiezas % capacidadCajas;

// Datos de salida 
alert("Total de piezas fabricadas: " + totalPiezas + "\n" + 
    "Cajas llenas:  " + cajasLlenas + "\n" + 
    "Piezas sobrantes:  " + piezasSobrantes + "\n" )