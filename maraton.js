/* Ejercicio 1
let user = prompt("Ingrese su nombre de usuario");
alert("Hola " + user + "todo bien?");
alert(user.toUpperCase());
alert(user.toLowerCase()); */
/* 
//Ejercicio 2
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let suma;
let resta;
suma = num1+num2;
alert("La suma de los numero es " + suma);
if(num1 > num2){
    resta = num1 - num2;
    alert("La resta de los numeros es " + resta);
}else{
    resta = num2 - num1;
    alert("La resta de los numeros es " + resta);
}
 */
/* 
//Ejercicio 3
let text = prompt("Ingrese un texto");
let eleccion = parseInt(prompt("¿Desea mostrarlo en alert o en consola?"));
if(eleccion == 1){
alert( eleccion = toUpperCase(text));
}else{
console.log(eleccion = toUpperCase(text));
}
 */
/* 
//Ejercicio 4
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("¿Que operacion desea realizar?");
switch(operacion){
        case 1:
            var suma = num1 + num2;
            console.log("El resultado de la operacion Suma es: " + suma);
            break;
        case 2:
            var resta = num1 - num2;
            console.log("El resultado de la operacion resta es: " + resta) ;
            break;
        case 3: 
            var multiplicacion = num1 * num2;
            console.log("El resultado de la operacion multiplicacion es: " +multiplicacion);
            break;
        case 4:
            var division = num1 / num2;
            console.log("El resultado de la operacion division es: " + division);
            break
        case 5:
            var potencia = num1 ** num2;
            console.log("El resultado de la operacion potencia es: " + potencia);
            break;
        default: 
            console.log("No ha elegido una opcion correcta");
            break;
    }
 */

/* //Ejercicio 5

let operacion = parseInt(prompt("¿Que operacion desea realizar? | 0-Terminar | 1-Suma | 2-Resta | 3-Multiplicacion | 4-Division | 5-Potencia"));

do {

    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    
    switch (operacion) {
        case 1:
            var suma = num1 + num2;
            console.log("El resultado de la operacion Suma es: " + suma);
            break;
        case 2:
            var resta = num1 - num2;
            console.log("El resultado de la operacion resta es: " + resta);
            break;
        case 3:
            var multiplicacion = num1 * num2;
            console.log("El resultado de la operacion multiplicacion es: " + multiplicacion);
            break;
        case 4:
            var division = num1 / num2;
            console.log("El resultado de la operacion division es: " + division);
            break
        case 5:
            var potencia = num1 ** num2;
            console.log("El resultado de la operacion potencia es: " + potencia);
            break;
        default:
            console.log("No ha elegido una opcion correcta");
            break;
    }
    operacion = parseInt(prompt("¿Que operacion desea realizar? | 0-Terminar | 1-Suma | 2-Resta | 3-Multiplicacion | 4-Division | 5-Potencia"));

} while (operacion != 0);
 */

//Ejercicio 6
/* var salir = 'n';
var alumnos = [];

do{
     let name = prompt('ingresa el nombre de un alumno');
    if (name != null) {
        alumnos.push(name);
    }
    var seguir = confirm('desea ingresar mas alumnos')
    if (seguir == true) {
        salir = 'y';
    }else {
        salir = 'n';
    }
}while (salir != 'n')
console.log(alumnos); */

/* //Ejercicio 7
const nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];
for( let i = 0; i <= nombres.length;i++){
    console.log(`Posicion: ${i} valor de la posicion ${nombres[i][0].toUpperCase()}`);
} */

//Ejercicio 8
/* const mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];
for(let i = 0; i< mascotas.length; i++) {
    if( mascotas[i] == 'Gertrudis') {
        console.log("Hay que vacunar contra la rabia |" + mascotas[i]);
         console.log("Nombre Largo |" + mascotas[i]);
    }else if(mascotas[i].length > 6) {
        console.log("Nombre Largo |" + mascotas[i]);
    } else if(mascotas[i].length <= 3){
        console.log("Nombre corto |" + mascotas[i]);
    } else if(mascotas[i] == 'Fido' || mascotas[i] == 'Gertrudis'){
        console.log("Hay que vacunar contra la rabia |" + mascotas[i]);
    } else if(mascotas[i] == 'Tuerca') {
        console.log("Entregar alimento balanceado |" + mascotas[i]);
    }
} */
/* //Ejercicio 9
const restaurant = [25, 17, 18, 44, 12, 9, 36, 50];
var total = 0;
var comenzalesAdulto = 0;
var comenzalesJoven = 0;
for (let i = 0; i < restaurant.length; i++) {
    if (restaurant[i] > 18) {
        total += 700;
        comenzalesAdulto++;
    } else if (restaurant[i] < 18) {
        total += 450;
        comenzalesJoven++;
    }
}
if (comenzalesAdulto >= 4) {
    var precioDescuento = total - (total * 0.10);
    console.log(`La cantidad de comenzales adultos es: ${comenzalesAdulto}`);
    console.log(`La cantidad de comenzales joven es: ${comenzalesJoven}`);
    console.log(`El total a pagar es: ${precioDescuento}`);
} else {
    console.log(`La cantidad de comenzales adultos es: ${comenzalesAdulto}`);
    console.log(`La cantidad de comenzales joven es: ${comenzalesJoven}`);
    console.log(`El total a pagar es: ${total}`);
} */
//Ejercicio 10


var codigoPaciente = 0;
var calidadServicio = [];
var turno = [];
var pasarseVip = Boolean;
var pasarVipArray = [];
var acumuladorVIP = 0;
var seguir = 0;
do {
    codigoPaciente = parseInt(prompt("Ingresar codigo de paciente"));
    if (codigoPaciente >= 1 && codigoPaciente <= 99) {
        let servicio = parseInt(prompt("Como valora la calidad de servicio? |1 al 10"));
        calidadServicio.push(servicio);
        turno.unshift(codigoPaciente);
        console.log("Paciente VIP agregado al principio de la cola de turnos");
    } else if (codigoPaciente >= 100 && codigoPaciente <= 500) {
        turno.push(codigoPaciente);
        console.log("Paciente agregado al final de la cola de turnos");

    } else if (codigoPaciente >= 501 && codigoPaciente <= 999) {
        pasarseVip = confirm("Desea pasarse a VIP?")
        if (pasarseVip == true) {
            pasarVipArray.push(codigoPaciente);
            acumuladorVIP++;
            turno.push(codigoPaciente);
            console.log("Nuevo paciente agregado al VIP")
        } else if (pasarseVip == false) {
            turno.push(codigoPaciente);
        }
    } else if (codigoPaciente == 0 || codigoPaciente > 999) {
        alert("Codigo de paciente invalido!");
    }
    seguir = confirm("Desea agregar mas pacientes?")
    if (seguir == true) {
        seguir = 1
    } else {
        let suma = calidadServicio.reduce((n, m) => m += n);
        let promedio = suma / calidadServicio.length;
        let maximo = calidadServicio.reduce((n,m) => Math.max(n,m), -Number.POSITIVE_INFINITY);
        let minimo = calidadServicio.reduce((n,m) => Math.min(n,m), Number.POSITIVE_INFINITY);
        seguir = 0;
        console.log(`Calidad de servicio de los VIP`);
        console.log(`Promedio: ${promedio}`);
        console.log(`Maximo: ${maximo}`);
        console.log(`Minimo: ${minimo}`);

        turno.sort((a,b) => a - b);
        console.log("Orden los turnos");
        console.log(turno);

        console.log(`Cantidad de pacientes que se quieren pasar a VIP: ${acumuladorVIP}`);
        console.log(`${pasarVipArray}`);

    }
}
while (seguir != 0)