const corpo = document.getElementById("modo-corpo")
const botao = document.getElementById("botao")

fucntion modoEscuro(){
    corpo.classList.toggle("modo-escuro")
    if(botao.textContent !== "☀️Modo Claro"){
        botao.textContent = "☀️Modo Claro"
    } else{
        botao.textContent = "🌕Modo Escuro"
    }
}