//declaracion de variables DOM
const placeholder = document.getElementById('outputPlaceholder');
const output = document.getElementById("output");
const input = document.getElementById("input");
const message = document.getElementById("message");
const description = document.getElementById("description");
//declaracion de caracteres excluidos usando expresiones regulares
const excluded = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'ñÑA-Z]/g;
//llave de encriptacion
const key = {"a":"x4lph4","e":"x3ch0","i":"x1nd14","o":"x0r4n93","u":"xum373ll4", " ":"y1y"};

//funcion para resetear el encriptador a su estado original
function resetFields() {
    placeholder.style.display = "block";
    output.value = "";
    output.style.display = "none";
    input.value = "";
    message.style.color = "#000";
    description.style.color = "#000";
    message.innerHTML = "Encriptador";
    description.innerHTML = "Por favor ingresa un mensaje a encriptar en el otro panel.";
    return;
}

//funcion que toma el output y lo pasa al input
function switchFields() {
    let out = output.value;
    input.value = out;
    output.value = "";
    return;
}

//funcion de encriptacion
function cryptText() {
    let outputText = input.value;

    if (validation(input.value)) {
        for(character in key){
            outputText = outputText.replaceAll(character, key[character]);
        }
        showOutput(outputText);
        return;
    }
    return;
}

//funcion de desencriptacion
function decryptText() {
    let outputText = input.value;

    if (validation(input.value)) {
        for(character in key){
            outputText = outputText.replaceAll(key[character], character);
        }
        showOutput(outputText);
        return;
    }
    return;
}

//funcion para copiar salida
function copyOutput(){
    navigator.clipboard.writeText(output.value);
}

//funcion para mostrar resultados
function showOutput(text) {
    placeholder.style.display = "none";
    output.style.display = "block";
    output.value = text;
    return;
}

//funcion de validacion de entradas
function validation(inputText) {
    if(inputText == "") {
        message.style.color = "red";
        description.style.color = "red";
        message.innerHTML = "<span class='bi bi-exclamation-octagon'></span> Error";
        description.innerHTML = "Por favor ingresa un mensaje a encriptar en el otro panel.";
        return false;
    }

    if(inputText.match(excluded)) {
        message.style.color = "red";
        description.style.color = "red";
        message.innerHTML = "<span class='bi bi-exclamation-octagon'></span> Error";
        description.innerHTML = "Las mayusculas, simbolos y caracteres especiales (incluidos acentos o similares) estan excluidos, por favor remueve esos caracteres e intenta de nuevo.";
        return false;
    }
    
    return true;
}