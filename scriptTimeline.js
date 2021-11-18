let imagemDiv = document.querySelector(".imagem");
let inputImg = document.getElementById("img-input");
let textArea = document.getElementById("escrever");
let comoEstou = document.getElementById("comoEstou");
let preview = document.getElementById("preview");
let apagar = document.getElementById("apagar");
let publicarBtn = document.getElementById("publicar");
let body = document.querySelector("body");



let imagem = document.createElement("img", );
imagem.id = "preview";

textArea.onclick = function(){
    document.addEventListener("keyup", function(event){
        if(event.keyCode == "13") publicarBtn.focus();
    })
}

inputImg.addEventListener("click", function(){
    body.style.gridTemplateRows = "60px 450px 1fr"
    comoEstou.style.height = "400px";
    imagem.style.height = "200px"
    imagemDiv.appendChild(imagem);

    apagar.onclick = function(){
        body.style.gridTemplateRows = "60px 200px 1fr"
        comoEstou.style.height = "120px";
        imagemDiv.removeChild(imagem)
    }}
)

 

function readImage() {
if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function(e) {
        document.getElementById("preview").src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
}
}
inputImg.addEventListener("change", readImage, false);

function irTimeline(){
    window.location.href ="./timeline.html"
}

function irLogin(){
    window.location.href ="./login.html"
}

function irPerfil(){
    window.location.href ="./perfil.html"
}

let like = document.createElement("input");
like.type = "button";
like.value = "Like";
let comentar = document.createElement("input");
comentar.type = "button";
comentar.value = "Comentar";

let statusBox = document.querySelector(".status");
statusBox.appendChild(like);
statusBox.appendChild(comentar);

like.onclick = function(){
    like.style.animationName = "azul";
    like.style.animationDuration ="0.1s";
    like.style.color= "blue";
}

comentar.onclick = function(){
    document.getElementById("comentarioPost").focus();
}