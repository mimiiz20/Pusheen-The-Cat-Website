const titulo = document.getElementById("titulo");
const btnTexto = document.getElementById("btnTexto");
const btnCor = document.getElementById("btnCor");
const btnAdicional = document.getElementById("btnAdicional");
const inputItem = document.getElementById("inputItem");
const lista = document.getElementById("lista");

btnTexto.addEventListener("click", function(){
    titulo.innerText = "Texto alterado com JavaScript!"
});

btnCor.addEventListener("click", function(){
    titulo.classList.toggle("destaque")
});

btnAdicional.addEventListener("click", function(){
    if(inputItem.value.trim() !== ""){
        const novoItem = document.createElement("li");
        novoItem.innerText = inputItem.value;
        
        novoItem.addEventListener("click", function() {
         lista.removeChild(novoItem);
        });

        lista.appendChild(novoItem);
        inputItem.value = "";
    }  else {
        alert("Digite algo antes de adicionar!");
    }
});  
