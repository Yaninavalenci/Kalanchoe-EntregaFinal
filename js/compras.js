 
$(document).ready(()=>{

    

    $("#carrForm").submit( (e) => {

        e.preventDefault();

        $("#condicionCarro").empty();
        $("#bodyImagen").empty();

        let deJSon = sessionStorage.getItem("prod");
      
        let objetoProducto = JSON.parse(deJSon);

        let nombre = objetoProducto.nombre;
        let cantidad = parseInt($("#cantidad").val()); 
        let precio = objetoProducto.precio;
        let subTotal= precio * cantidad;

        const enJSon = JSON.stringify(objetoProducto);

        localStorage.setItem("seleccion", enJSon);
        sessionStorage.setItem("qty", cantidad);

        function calcularDescuento() {
            if(cantidad >=2) {
                descuento = subTotal * 0.1;
                return descuento;
            } else {
                descuento = 0;
                return descuento;
            }
        }
        calcularDescuento();

        function calcularEnvio() {
            if(subTotal * 1.21 >= 14000) {
                envio = 0;
                return envio;
            } else {
                envio = 800;
                return envio;
            }
        }
        
        calcularEnvio();

        function calcularTotal() {
           total = (subTotal + envio - descuento ) * 1.21;
        return total;
        }
        calcularTotal();

        console.log(nombre);
        console.log(cantidad);
        console.log(precio);
   
        $("#condicionCarro").append(

        `<p> ♦ Usted compró ${cantidad} unidades de ${nombre} por un Subtotal de $${subTotal}.</p>
        <p> ♦ Descuento 10% OFF (Llevando dos o más productos): $${descuento}</p>
        <p> ♦ IVA 21%: $${(subTotal)*0.21}</p>
        <p> ♦ Valor del Envio: $${envio}</p>
        <p> ♦ Total $${total}</p>`
        );

        $("#bodyImagen").append (
            `<img class="carro__body__imagenCarro" id="imgCarrito" src="../img/image0${objetoProducto.id}.jpg" alt=""></img> `
            
        );

        

        //ANIMACIONES
            
        // $("#venta").animate({ opacity:'1',},2500, )
        // $("#venta").append('<h6 id="saludoFinal">Gracias por su compra!</h6>');
                
            
          
        $("#venta").delay(2000)
                .animate({color: "#dd90ca;"}, 2000)
                .css ({"letter-spacing": "0.25rem",
                        "font-weight": "bolder",
                        "flex": "auto"})
                .delay(2000)
               .slideUp(3500);
            
        

        // $("h4").animate({color: "#1b205c"}, 2000)
        //         .css ({"letter-spacing": "0.25rem",
        //                 "font-weight": "bolder",
        //                 "flex": "auto"});


    })

    let deJSon = localStorage.getItem("seleccion");
      
        let objetoProducto = JSON.parse(deJSon);

        let nombre = objetoProducto.nombre;
        let cantidad = sessionStorage.getItem("qty"); 
        let precio = objetoProducto.precio;
        let subTotal= precio * cantidad;

    $("#condicionCarro").empty();
    $("#condicionCarro1").empty();

    $("#bodyContenedor").append (
        `<p class="bodyContenedor__condicion"> ♦ Productos en su Carro de compras : </p>
        <br>
        <table class="bodyContenedor__detalleCompra" id="detalleCompra">
            <tr class="class="bodyContenedor__detalleCompra__enunciados" id"enunciados">
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Descripción</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
                <th>Quitar</th>
            <tr>
            <tr>
                <td class="bodyContenedor__detalleCompra__foto" id="foto">
                    <img id="fotoCompra" src="../img/image0${objetoProducto.id}.jpg" style="width:3rem;" alt=""></img>
                </td>
                <td class="bodyContenedor__detalleCompra__qnty" id="qnty">
                    <p>${cantidad}</p>
                </td>
                <td class="bodyContenedor__detalleCompra__name" id="name">
                    <p>${nombre}</p>
                </td>
                <td class="bodyContenedor__detalleCompra__price" id="price">
                    <p>$${precio}</p> 
                </td>
                <td class="bodyContenedor__detalleCompra__subTotal" id="subTotal">
                    <p>$${subTotal}</p> 
                </td>
                <td class="bodyContenedor__detalleCompra__quitar" id="quitar"></div>
                    <button id="quitar" type="button" class="btn-close btn-close-white" data-bs-dismiss="" aria-label="Close"></button>
                </td>
            </tr>
        </table>`
        
        
    );

    $("#quitar").click(() =>{
     
        $("#foto").empty();
        $("#qnty").empty();
        $("#name").empty();
        $("#price").empty();
        $("#subTotal").empty();
        $("#quitar").empty();
        localStorage.removeItem("seleccion");
        $(".bodyContenedor__condicion").empty();
        $(".bodyContenedor__condicion").append(
            `<div class="carro__body__compra">
                <h3 id="condicionCarro1">Carrito de compras vacío</h3>
            </div>`
        )


    })

    
})