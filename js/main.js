function calculadora() {
    var firstValue = prompt("Ingrese el primer valor a operar:");
    var secondValue = prompt("Ingrese el segundo valor a operar:");
    var operator = prompt("Ingrese el operador:");

    if (firstValue === null || secondValue === null || operator === null || firstValue === "NaN" || secondValue === "NaN"){
      document.getElementById("resultado").innerHTML = "Lo sentimos los valores no pueden ser nulos";
    }

    var resultado;
    if (operator === "+" || operator === "sum" || operator === "suma"){
      resultado = firstValue + secondValue;
    }

    if (person !== null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
