function mayor() {
    var edad = parseInt(prompt("Ingrese edad: ", "0"));
    if (edad > 18) {
        return console.log("El usuario persona es mayor de edad y puede conducir");
    }
    else {
        return console.log("El usuario en menor de edad y no puede conducir");
    }
}