var cookieConsentDiv = document.createElement("div");
cookieConsentDiv.id = "cookie-consent";
cookieConsentDiv.className = "cookie-consent";

// Criar o parágrafo dentro do elemento div
var paragraph = document.createElement("p");
paragraph.textContent = "Este site pode utilizar cookies para melhorar a sua experiência. Ao continuar, você concorda com o uso de cookies.";

// Criar o botão dentro do elemento div
var button = document.createElement("button");
button.textContent = "Aceitar Cookies";
button.onclick = function() {
  acceptCookies();
};

// Adicionar o parágrafo e o botão ao elemento div
cookieConsentDiv.appendChild(paragraph);
cookieConsentDiv.appendChild(button);


// Adicionar o elemento div ao documento
document.body.appendChild(cookieConsentDiv);

var style = document.createElement("style");
style.textContent = ".cookie-consent { position: fixed; bottom: 0; left: 0; width: 100%; display: none; background-color: #333; color: #fff; padding: 10px; text-align: center; }";
document.head.appendChild(style);


document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookieConsentWebsiteGlasscraft")) {
        // Se o consentimento do cookie ainda não foi dado, exibe o aviso de cookies
        document.getElementById("cookie-consent").style.display = "block";
    } else {
        document.getElementById("cookie-consent").style.display = "none";
    }
});

function acceptCookies() {
    // Armazena o consentimento do cookie na localStorage
    localStorage.setItem("cookieConsentWebsiteGlasscraft", "accepted");

    // Esconde o aviso de cookies
    document.getElementById("cookie-consent").style.display = "none";
}
