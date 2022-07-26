//1
var edad = prompt("Ingrese edad: ");
function mayor(edad) {
    
    if (edad > 18) {
        return console.log("El usuario persona es mayor de edad y puede conducir");
    }
    else {
        return console.log("El usuario en menor de edad y no puede conducir");
    }
}
mayor();  

//2
var nota = prompt("Ingrese la nota: ");

function calificacion(nota) {
    
    if ( 0 <= nota && nota <= 3) {
        return console.log("Muy deficiente");
    }
    else if (3 < nota && nota <= 5) {
        return console.log("Insuficiente");
    }
    else if (5 < nota && nota<= 6) {  
        return console.log("Suficiente");
    }
    else if ( 6 < nota && nota<= 7) {
        return console.log("Bien");
    }
    else if ( 7 < nota && nota<= 9 ) {
        return console.log("Notable");
    }
    else if (9 < nota && nota<= 10) {
        return console.log("Sobresaliente");
    }
    else {
        console.log("Usted debe ingresar un numero del 1 al 10 sin caracteres especiales o letras")
    }
            
}

calificacion();

//3
function PiramideRepe() {
    var salida = '';
    for (var i = 0; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            salida += i + '  ';
        }
        console.log(salida);
        salida = '';
    }
}

PiramideRepe();

// 4
function Piramide() {
    var salida = '';
    for (var i = 0; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            salida += j + '  ';
        }
        console.log(salida);
        salida = '';
    }
}

Piramide();