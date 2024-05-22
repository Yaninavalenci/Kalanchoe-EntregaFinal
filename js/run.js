 window.onload = () =>{

    setTimeout(() => { 
    
        //para append de las 3 imagenes del Home
       
        for (let h = 0 ;h< 3;h++){

            let objetoProducto = arregloProducto[h];

            let nombre = objetoProducto.getNombre();
            // let precio = objetoProducto.getPrecio();
            // let descripcion = objetoProducto.getDescripcion();
            // let imagen = objetoProducto.getImagen(); 
            // let id = objetoProducto.getId();

            $(".mainHome").append (
                `<div id="linkProd${objetoProducto.id}" data-aos="fade-up" data-aos-duration="3000" class="image${objetoProducto.id}"}">
                    
                        <a href="../html/producto.html">
                        <button type="button" id="imagenProducto${objetoProducto.id}" value="${objetoProducto.id}" style="background-color:unset; border:none">
                        <img src="../img/image0${objetoProducto.id}.png" alt="imagen0${objetoProducto.id}">
                        </button>
                        </a>
                    
                </div>
                `
            )
            
            $(`#imagenProducto${[objetoProducto.id]}`).click(() =>{

                console.log(nombre);
                
                const enJSon = JSON.stringify(objetoProducto);

                sessionStorage.setItem("prod", enJSon);

            })

        }

    }, 100);

}