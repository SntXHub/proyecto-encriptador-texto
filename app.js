//Definicion de variables y constantes generales
const texto = document.querySelector(".texto");
const textoNo = document.querySelector(".texto__no");

/*
Las reglas de encriptacion son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//funciones para encriptar y desencriptar en el textarea de ingreso de texto
function botonEncriptar(){
    const textoEncriptado = encriptar(texto.value);
    textoNo.value = textoEncriptado;
    texto.value = "";
    textoNo.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(texto.value);
    textoNo.value = textoEncriptado;
    texto.value = "";
}

function botonCopiar(){
    const textoEncriptado = document.getElementById("textoEncriptado");
    textoEncriptado.select();
    document.execCommand("copy");
}

function encriptar(stringEncriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i < codigo.length; i++){
            if(stringEncriptada.includes(codigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(codigo[i][0], codigo[i][1]);
            }
        }
        return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0; i < codigo.length; i++){
            if(stringDesencriptada.includes(codigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(codigo[i][1], codigo[i][0]);
            }
        }
        return stringDesencriptada;
}

//funcion para no permitir el ingreso de caracteres especiales, mayusculas, acentos ni tildes
document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("ingresoTexto");
    textArea.addEventListener("input", function (event) {
        let value = event.target.value;

        //normalizar el texto para eliminar acentos y tildes
        value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        //eliminar caracteres que no sean letras, numeros o espacios
        value = value.replace(/[^a-z0-9\s]/gi, '');
        
        //convertir a minusculas
        value = value.toLowerCase();
        event.target.value = value;
    });
});