// Declaracion de variables
let textIntro = document.querySelector(".text-intro");
let btnEncrypt = document.querySelector(".encrypt");
let btnDecrypt = document.querySelector(".desencrypt");
let btnCopy = document.querySelector(".btncopy");
let contentRightText = document.querySelector(".content-right-text");


// Funcion para mostrar u ocultar el btnCopy
const toggleBtnCopy = (shouldShow) => {
	btnCopy.style.display = 0;
	btnCopy.style.display = shouldShow ? "block" : "none";
}

// Funcion para validar el texto
const isValidText = (text) => {
	return /^[a-zA-Z\s]*$/.test(text);
}


// Creamos un arrow function para encriptar el texto
let encrypt = () => {
	let text = textIntro.value.toLowerCase();
	// Validamos que el texto no contenga número ni caracteres especiales y encriptamos el texto
	// trim elimina los espacios en blanco
	if (text.trim() !== "" && isValidText(text)) {
			text = text.replace(/e/g, "enter")
    	           .replace(/i/g, "imes")
    	           .replace(/a/g, "ai")
    	           .replace(/o/g, "ober")
    	           .replace(/u/g, "ufat");
    text = `<p class="content-right-p0">${text}</p>`;
    contentRightText.innerHTML = text;
    toggleBtnCopy(true);
    textIntro.value = "";
	} else {
		alert("Por favor, ingrese un texto válido que no contenga números ni caracteres especiales");
		toggleBtnCopy(true);
	}
}

// Creamos un arrow function para desencriptar el texto

let desencrypt = () => {
	let text = textIntro.value.toLowerCase();
	if (text.trim() !== "" && isValidText(text)) {
    	text = text.replace(/imes/g, "i")
								.replace(/enter/g, "e")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
  text = `<p class="content-right-p0">${text}</p>`;
  contentRightText.innerHTML = text;
  toggleBtnCopy(true);
  textIntro.value = "";
	} else {
		alert("Por favor, ingrese un texto válido que no contenga numeros ni caracteres especiales");
		toggleBtnCopy(true);
	}
}

// Creamos un arrow function para copiar el texto
let copyText = () => {
	navigator.clipboard.writeText(contentRightText.textContent)
	.then(() => {
		contentRightText.innerHTML = `
			<img src="./assets/1.png" alt="texto no encontrado">
      <p class="content-right-p1">Ningún mensaje fue encontrado</p>
      <p class="content-right-p2">Ingresa el texto que deseas Encriptar o Desincriptar</p>
		`;
		toggleBtnCopy(false);
	})
	.catch(err => {
		console.error('Error al copiar el texto:', err);
	});
}

// Eventos
btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", desencrypt);
btnCopy.addEventListener("click", copyText);

document.addEventListener("DOMContentLoaded", () => {
	toggleBtnCopy(false);
})