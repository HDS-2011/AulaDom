document.getElementById("titulo").innerText="Dev"

function mudar(){
    let novoNome= document.getElementById("nome");
    let titulo = document.getElementById("titulo");
    titulo.innerHTML= novoNome.value;
}

function adicionarTime(){
    let numero = document.getElementById("posicao").value -1;
    let novoTime = document.getElementById("novo").value;
    document.
    getElementsByClassName("time")[numero]
    .innerHTML= novoTime;
}

const mostrar=()=>{
 let num = document.getElementById("mes").value;
 let escolheMes = document.getElementsByTagName("li")[num].innerHTML;
 document.getElementById("resultado").innerHTML=escolheMes;
}

let botaoImagem = document.querySelector("#btnImage");
let container= document.querySelector("#containerImg");

botaoImagem.addEventListener("click",function(){
    if(document.getElementById("minhaImagem")){
        alert("Imagem já foi gerada")
        return;
    }
    let novaImagem = document.createElement("img");

    novaImagem.id= "minhaImagem";
    novaImagem.src="/src/assets/imagem2.jpg";
    novaImagem.alt ="Imagem game"

    novaImagem.style.width="400px"
    novaImagem.style.borderRadius ="10px";
    novaImagem.style.marginTop="15px";
    novaImagem.style.display="block";

    container.appendChild(novaImagem)
})

let botao = document.querySelector("#btnmsg")
botao.addEventListener("click", Clicou)
botao.addEventListener("mouseover",Entrou)

function Clicou(){
    botao.innerHTML =" você Clicou"
}
function Entrou(){
    botao.innerHTML = "Você passou o mouse"
}