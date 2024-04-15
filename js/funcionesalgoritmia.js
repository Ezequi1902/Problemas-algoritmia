function invertirPalabras() {
    var input = document.getElementById("p1-input").value;
    var palabras = input.split(" ");
    var resultado = palabras.reverse().join(" ");
    document.getElementById("p1-output").innerText = resultado;
}

function calcularProductoEscalar() {
    var x1 = parseFloat(document.getElementById("p2-x1").value);
    var x2 = parseFloat(document.getElementById("p2-x2").value);
    var x3 = parseFloat(document.getElementById("p2-x3").value);
    var x4 = parseFloat(document.getElementById("p2-x4").value);
    var x5 = parseFloat(document.getElementById("p2-x5").value);

    var y1 = parseFloat(document.getElementById("p2-y1").value);
    var y2 = parseFloat(document.getElementById("p2-y2").value);
    var y3 = parseFloat(document.getElementById("p2-y3").value);
    var y4 = parseFloat(document.getElementById("p2-y4").value);
    var y5 = parseFloat(document.getElementById("p2-y5").value);

    var productoEscalar = x1 * y1 + x2 * y2 + x3 * y3 + x4 * y4 + x5 * y5;
    document.getElementById("p2-output").innerText = "Producto Escalar: " + productoEscalar;
}

function encontrarPalabraUnica() {
    var input = document.getElementById("p3-input").value;
    var palabras = input.split(",");
    var maxCaracteresUnicos = 0;
    var palabraUnica = "";

    palabras.forEach(function (palabra) {
        var caracteresUnicos = new Set(palabra.toUpperCase()).size;
        if (caracteresUnicos > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteresUnicos;
            palabraUnica = palabra;
        }
    });

    document.getElementById("p3-output").innerText = "Palabra con más caracteres únicos: " + palabraUnica;
}