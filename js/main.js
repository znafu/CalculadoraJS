function calculadora() {
    var firstValue = prompt("Ingrese el primer valor a operar:");
    var secondValue = prompt("Ingrese el segundo valor a operar:");
    var operator = prompt("Ingrese el operador:");

    if (firstValue === null || secondValue === null || operator === null || firstValue === "NaN" || secondValue === "NaN"){
      document.getElementById("resultado").innerHTML = "Lo sentimos los valores no pueden ser nulos";
    }

    var resultado = null;
    operator = operator.toLowerCase();
    if (operator === "+" || operator === "sum" || operator === "suma"){
      document.getElementById("resultado").innerHTML = firstValue + secondValue;
    }
    else if (operator === "-" || operator === "men" || operator === "menos" || operator === "min" || operator === "resta"){
      document.getElementById("resultado").innerHTML = firstValue - secondValue;
    }
}
