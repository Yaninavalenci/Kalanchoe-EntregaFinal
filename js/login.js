$(document).ready (function() {

    $("#formulario").submit(function (e) {

        $("#userP").empty();
        e.preventDefault();

        if (validarForm()){
               
            console.log(email.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value); 
            $("#userP").append(email.value);  
            email.value="";
            password.value="";
            $("#staticBackdrop").modal('hide');
           
        }
    })

    $("#btnOculto").click(function () {

        $("#userP").empty();
        if (validarForm()){
    
            console.log(email.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("password", password.value);
            $("#userP").append(email.value);
            email.value="";
            password.value="";
            $("#staticBackdrop").modal('hide');
             
        }
    })

})

function validarForm () {

    if ($("#floatingInput").val().indexOf('@',0) == -1){
        $("#floatingInput").focus();
        return false;

    }

    else if ($("#floatingPassword").val().length < 8 ){
        $("#floatingPassword").focus();
        return false;
    }

    return true;
}

let email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let data = document.getElementById("addData");


function mostrarContrasena(){
var tipo = document.getElementById("floatingPassword");
if(tipo.type == "password"){
    tipo.type = "text";
}else{
    tipo.type = "password";
}
}


let enter = document.getElementById("btnOculto");



