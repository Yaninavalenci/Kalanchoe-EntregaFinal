 
$(document).ready(()=>{


    for (let i = 0 ;i< arregloRemera.length ;i++){

        let objetoRemera = arregloRemera[i];

        let nombre = objetoRemera.getNombre();
        let precio = objetoRemera.getPrecio();
        let imagen = objetoRemera.getImagen();
       
        
        $("#selectorRemeras").append (

           `<option class="opcionesRemeras" id="remera${objetoRemera.id}" value="${objetoRemera.id}">${objetoRemera.nombre} ($${objetoRemera.precio})</option>
            `    
        )
        
        $(`#remera${[objetoRemera.id]}`).click( (e) => {

            $(".form__cnt__1").empty();   
            $(".form__cnt__1").append(`<image class="classImg" src = "..${objetoRemera.imagen}"></image>`);
            
            
        });
        
        
    }
 

    $("#formCarrito").submit( (e) => {

        $("#mensaje").empty();
        $("h4").empty();
        $(".validarMsj").empty();

        e.preventDefault();


        let nombre = parseInt($("#selectorRemeras").val());
        let cantidad = parseInt($("#cantidad").val());
        let subTotal = 0;
        let descuento = 0;
        let envio = 0;
        let total = 0;
        
        for (let i = 0 ;i< arregloRemera.length ;i++){

            let objetoRemera = arregloRemera[i];

            if (nombre == [i+1]){
                nombre = objetoRemera.getNombre();
                precio = objetoRemera.getPrecio();
                imagen = objetoRemera.getImagen();
                cantidad = objetoRemera.setCantidad(cantidad);
                subTotal= objetoRemera.calcularSubTotal();
                descuento = objetoRemera.calcularDescuento();
                envio = objetoRemera.calcularEnvio();
                total = objetoRemera.calcularTotal();
            }
        }
        
        //VALIDACION

        function validar () {

            if ($("#selectorRemeras").val() == "" ){
                $("#selectorRemeras").focus();
                $(".validarMsj").append(
                    `<h7> Debe seleccionar un producto.<h7>`
                )
                return false;
        
            }
        
            else if ($("#cantidad").val() <= 0 ){
                $("#cantidad").focus();
                $(".validarMsj").append(
                    `<h7> Debe seleccionar una cantidad.<h7>`
                )
                return false;
            }
        
            return true;
        }

        if (validar()){

        $("#mensaje").append(

    
            `<p> ♦ Usted compró ${cantidad} unidades de ${nombre} por un Subtotal de $${subTotal}.<p>
             <p> ♦ Descuento 10% OFF (Llevando dos o más remeras): $${descuento}<p>
             <p> ♦ IVA 21%: $${(subTotal)*0.21}<p>
             <p> ♦ Valor del Envio: $${envio}<p>
             <p> ♦ Total $${total}<p>
             <br>
            `
            
        );

        $(".modal-footer").prepend('<h4 id="tituloMensaje">Detalle de su compra:</h4>');


        //ANIMACIONES
        
       $("p").animate({ opacity:'1',},
                        2500, )
             .promise().done(function(){
                        $("#mensaje").append('<h6 id="saludoFinal">Gracias por su compra!</h6>');
             })
        
        }
          
        $("h5").delay(2000)
               .slideUp(2000);
        

        $("h4").animate({color: "#1b205c"}, 2000)
                .css ({"letter-spacing": "0.25rem",
                        "font-weight": "bolder",
                        "flex": "auto"});

                        
        
        $("#cerrar").click( (e) => {

            $("p").empty();  
            $("h4").empty();  
            $(".form__cnt__1").empty(); 
        
            
        });

        $("#cerrar2").click( (e) => {

            $("p").empty();  
            $("h4").empty();  
            $(".form__cnt__1").empty(); 
        
            
        });

    })

    
    

})