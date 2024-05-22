$(document).ready(()=>{


      // iteracion para pagina de producto y carrito


      for (let i = 0 ;i< arregloProducto.length ;i++){

         let nombre = parseInt($("#imagenProducto").val());
         let cantidad = parseInt($("#cantidad").val());
         
         let objetoProducto = arregloProducto[i];

         //let nombre = objetoProducto.getNombre();
         let precio = objetoProducto.getPrecio();
         let descripcion = objetoProducto.getDescripcion();
         let imagen = objetoProducto.getImagen();

         if (nombre == [i+1]){
            nombre = objetoProducto.getNombre();
            precio = objetoProducto.getPrecio();
            descripcion = objetoProducto.getDescripcion();
            imagen = objetoProducto.getImagen();
            cantidad = objetoProducto.setCantidad(cantidad);
            subTotal= objetoProducto.calcularSubTotal();
            descuento = objetoProducto.calcularDescuento();
            envio = objetoProducto.calcularEnvio();
            total = objetoProducto.calcularTotal();
         }

         
      } 


      let deJSon = sessionStorage.getItem("prod");
      console.log(deJSon);
      let objetoProducto = JSON.parse(deJSon);
      console.log(objetoProducto);
    

      $("#divImgProducto").append(
         `<div id="carouselProd" class="carouselProd carousel slide" data-bs-ride="carousel">
         <div class="carousel-indicators">
           <button type="button" data-bs-target="#carouselProd" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselProd" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
           <button type="button" data-bs-target="#carouselProd" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
         </div>
         <div class="carousel-inner">
           <div class="carousel-item">
               <img id="imagenProducto${objetoProducto.id}" src="../img/image0${objetoProducto.id}.jpg" value="${objetoProducto.id}" alt="imagen0${objetoProducto.id}">
           </div>
           <div class="carousel-item active">
               <img id="imagenProducto${objetoProducto.id}b" src="../img/image0${objetoProducto.id}b.jpg" value="${objetoProducto.id}" alt="imagen0${objetoProducto.id}b">
           </div>
           <div class="carousel-item">
               <img id="imagenProducto${objetoProducto.id}b" src="../img/image0${objetoProducto.id}c.jpg" value="${objetoProducto.id}" alt="imagen0${objetoProducto.id}c">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselProd" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselProd" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
         </div>`
      )

         $("#encabezado").append(
            `<h1 id="nombreProducto${objetoProducto.id}" value="${objetoProducto.id}">${objetoProducto.nombre}</h1>
            <h2 id="precioProducto${objetoProducto.id}">$${objetoProducto.precio}</h2>`
         )
         $("#descripcion").append(
            `<div class="collapse" id="collapseExample">
            <div class="card card-body">
            <p itemprop="descripcion">${objetoProducto.descripcion}</p>
            </div>
          </div>`
         )
         $("#cuotas").append(
            `(Hasta 12 cuotas sin interés de $${objetoProducto.precio/12}!!! Con Ahora12 todos los días! )`
         )
      

  

})
