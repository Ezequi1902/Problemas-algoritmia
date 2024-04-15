/* 
Java script es un lenguaje de programacion multiparadigma
Acepta programacion funcional, estructurada. POO, eventos 
Dentro de JS no existe int, double, float, string, etc.
Para el manejo de variables con tipo de dato existe el estandar ES6 el cual nos dice que para el manejo de variables tenemos:

VAR LET CONST
*/
//vamos hacer una funcion para comprobar que el campo nombre sea mayor a 3 caracteres

function validar (formulario) {
    if (formulario.nombre.value.length < 4) {
        alert("Porfavor escribe mas de 3 caracteres en el nombre");
        formulario.nombre.focus();
        return false
    }
    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var checkStr = formulario.nombre.value;
    alert(checkStr);
    var allValido = true;
    //vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre y la separa en caracteres, una vez que tenga cada caracter deo compararlo con la cadena que en este momento estoy considerando como la verdad absoluta y si despues de recorrer toda la cadena encuentro que el caracter no se encuentra  envie un error
    for (var i = 0; i < checkStr.length; i++) {
        var caracteres = checkStr.charAt(i);
        for (var j = 0; j < abcOK; j++) {
            if (caracteres == abcOK.charAt(j)) {
                break;
            }
        }
        if (j == abcOK.length) {
            allValido = false;
            break;
        }
    }
    if (!allValido) {
        alert("Escriba unicamente letras en el campo de nombre")
        formulario.nombre.focus();
        return false;
    }
    
}