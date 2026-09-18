// Ejercico 1: Calculadora de gastos de viaje
// Datos de entrada
// Constantes 
const transporte =  120000;
const alojamiento = 200000;
const alimentacion = 150000;
const personas = 4;
const entregara = 130000;

//proceso 
// Sumar costos del viaje 
let costosTotalesViaje = transporte + alojamiento + alimentacion;
// Dividir el total de costo del viaje entre el número de personas 
let pagoPorPersona = costosTotalesViaje / personas;
// Calcular cuánto dinero entregan entre todas las personas
let totalEntregado = entregara * personas;
// Calcular el sobrante
let sobrante = totalEntregado - costosTotalesViaje;
// Los vueltos de cada persona
let vueltos = sobrante / personas; 

// Datos de salida 
alert("Total del viaje: " + costosTotalesViaje  + "\n" + 
    "Cada persona debe pagar:" + pagoPorPersona + "\n" + 
    "Total de dinero entregado: " + totalEntregado + "\n" + 
    "Sobrante total: " + sobrante + "\n" + 
    "Vueltos por persona: " + vueltos )