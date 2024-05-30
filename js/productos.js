class Producto {

    constructor(item) {

        this.id = item.id;
        this.nombre = item.nombre;
        this.precio = parseFloat(item.precio);
        this.descripcion = item.descripcion;
        this.imagen = item.imagen;
        this.stock = item.stock;
        this.tipo = item.tipo;
        this.vendido = false;
        //this.cantidad = parseInt(cantidad);
        this.envio = 0;
        this.subTotal = 0;
        this.descuento = 0;
        this.total = 0;
    }

    calcularSubTotal() {
        return this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
        return this.subtotal = this.subTotal * 0.21;
    }
    
     calcularEnvio() {
        if(this.subTotal * 1.21 >= 100000) {
            this.envio = 0;
            return this.envio;
        } else {
            this.envio = 2000;
            return this.envio;
        }
    }

    calcularDescuento() {
        if(this.cantidad >=2) {
            this.descuento = this.subTotal * 0.1;
            return this.descuento;
        } else {
            this.descuento = 0;
            return this.descuento;
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.envio - this.descuento + this.calcularIva();
        return this.total;
    }

    getId() {

        return this.id;
    }

    getNombre() {
        
        return this.nombre;
    }

    getPrecio() {

        return this.precio;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getImagen(){

        return this.imagen;

    }
   
    setCantidad(cantidad) {
        this.cantidad = parseInt(cantidad);
        return this.cantidad;
    }

}

const arregloProducto = new Array();
const urlJson = "../js/productos.json";

$.getJSON(urlJson, function (respuesta, estado) {

        if(estado === "success"){
        
            let misDatos = respuesta;
        
            for (const dato of misDatos) {

                //console.log(dato);
                let producto = new Producto(dato);
                arregloProducto.push(producto);
                //console.log(producto);
            } 
        }   else {
                
                console.log(estado);
            
        }
})


