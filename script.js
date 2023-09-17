document.addEventListener("DOMContentLoaded", function () {
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const inputTexto = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");
    const btnCopiar = document.querySelector(".btn-copiar");

    btnEncriptar.addEventListener("click", function () {
        const textoOriginal = inputTexto.value;
        const textoEncriptado = encriptarTexto(textoOriginal);
        mensaje.value = textoEncriptado;

        const mensajeElement = document.querySelector(".mensaje");
        if (mensajeElement) {
            mensajeElement.style.backgroundImage = "none";
        }
    });

    btnDesencriptar.addEventListener("click", function () {
        const textoEncriptado = inputTexto.value;
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        mensaje.value = textoDesencriptado;
    });

    btnCopiar.addEventListener("click", function () {
        mensaje.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    });

    function encriptarTexto(texto) {
        let textoFinal = "";

        for (let i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoFinal += "ai";
                    break;
                case "e":
                    textoFinal += "enter";
                    break;
                case "i":
                    textoFinal += "imes";
                    break;
                case "o":
                    textoFinal += "ober";
                    break;
                case "u":
                    textoFinal += "ufat";
                    break;
                default:
                    textoFinal += texto[i];
            }
        }

        return textoFinal;
    }

    function desencriptarTexto(textoEncriptado) {
        var texto = textoEncriptado;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                textoFinal = textoFinal + "a";
                i = i + 1;
            } else if (texto[i] == "e") {
                textoFinal = textoFinal + "e";
                i = i + 4;
            } else if (texto[i] == "i") {
                textoFinal = textoFinal + "i";
                i = i + 3;
            } else if (texto[i] == "o") {
                textoFinal = textoFinal + "o";
                i = i + 3;
            } else if (texto[i] == "u") {
                textoFinal = textoFinal + "u";
                i = i + 3;
            } else {
                textoFinal = textoFinal + texto[i];
            }
        }

        return textoFinal;
    }

    
    
});
