const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btn = document.getElementById("btn-login");

function validarCampos() {
  if (email.value !== "" && senha.value.length >= 8) {
    btn.style.backgroundColor = "#28a745";
    btn.style.cursor = "pointer";
    btn.disabled = false;
  } else {
    btn.style.backgroundColor = "#1a4a8e";
    btn.style.cursor = "not-allowed";
    btn.disabled = true;
  }
}

email.addEventListener("input", validarCampos);
senha.addEventListener("input", validarCampos);
