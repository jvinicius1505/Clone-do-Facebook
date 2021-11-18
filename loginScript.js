let login = document.getElementById("logar");
    let formDiv = document.getElementById("form");
    let inputEmail = document.getElementById("email");
    let inputSenha = document.getElementById("senha");
    let container = document.getElementById("container");

    login.addEventListener("click", event =>{
        event.preventDefault();

        const campos = [...document.querySelectorAll(".inputForm")];

        campos.forEach(campo =>{
            if(campo.value == "") {
                formDiv.classList.add("error");
            };
        });

        const formError = document.querySelector(".error");
        if(formError){
            formError.addEventListener("animationend", event=>{
                if(event.animationName == "non"){
                    formError.classList.remove("error");
                }
            });
        } 
        else{
            container.style.animationName = "sair";
            container.style.animationDuration = "1s";
            login.onclick = window.location.href = "./perfil.html";
        }
    })

    document.addEventListener("keyup", function(event){
        if(event.keyCode == "13"){
            event.preventDefault();

            const campos = [...document.querySelectorAll(".inputForm")];
    
            campos.forEach(campo =>{
                if(campo.value == "") {
                    formDiv.classList.add("error");
                };
            });
    
            const formError = document.querySelector(".error");
            if(formError){
                formError.addEventListener("animationend", event=>{
                    if(event.animationName == "non"){
                        formError.classList.remove("error");
                    }
                });
            } 
            else{
                container.style.animationName = "sair";
                container.style.animationDuration = "1s";
                login.onclick = window.location.href = "./perfil.html";
            }

        }
        
    })


    
    