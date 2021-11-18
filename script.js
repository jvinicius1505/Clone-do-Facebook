let body = document.querySelector("body");

let divFtPerfil = document.querySelector(".divFotoPerfil");

let foto = document.querySelector(".imagem");

function irTimeline(){
    window.location.href ="./timeline.html"
}

function irLogin(){
    window.location.href ="./login.html"
}

function irPerfil(){
    window.location.href ="./perfil.html"
}


foto.addEventListener("click", function(){    
    divFtPerfil.style.animationName = "chegar, escuro";
    divFtPerfil.style.animationDuration = "1s";
    divFtPerfil.style.animationFillMode = "forwards";
    divFtPerfil.style.display = "flex";
        
    document.addEventListener("keydown", function(event){
        if(event.key=="Escape"){
            divFtPerfil.style.animationName = "nonFade";
                divFtPerfil.style.animationDuration = "1s";
                divFtPerfil.style.animationFillMode = "forwards";
            }
        });
    
})

let like1 = document.createElement("input");
    like1.type = "button";
    like1.value = "Like";
    let comentar1 = document.createElement("input");
    comentar1.type = "button";
    comentar1.value = "Comentar";

    let like2 = document.createElement("input");
    like2.type = "button";
    like2.value = "Like";
    let comentar2 = document.createElement("input");
    comentar2.type = "button";
    comentar2.value = "Comentar";


    let statusBox = document.querySelector(".status");
    let statusBox2 = document.querySelector(".status2");
    statusBox.appendChild(like1);
    statusBox.appendChild(comentar1);
    statusBox2.appendChild(like2);
    statusBox2.appendChild(comentar2);

    like1.onclick = function(){
        like1.style.animationName = "azul";
        like1.style.animationDuration ="0.1s";
        like1.style.color= "blue";
    }

    comentar1.onclick = function(){
        document.getElementById("comentarioPost").focus();
    }

    like2.onclick = function(){
        like2.style.animationName = "azul";
        like2.style.animationDuration ="0.1s";
        like2.style.color= "blue";
    }

    comentar2.onclick = function(){
        document.getElementById("comentarioFoto").focus();
    }











