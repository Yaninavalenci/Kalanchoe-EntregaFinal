class Remera {

    constructor(id, nombre, precio, imagen) {

        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.vendido = false;
        this.cantidad = parseInt(cantidad);
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

    getImagen(){

        return this.imagen;

    }
   
    setCantidad(cantidad) {
        this.cantidad = parseInt(cantidad);
        return this.cantidad;
    }

}

let remera1 = new Remera(1, 'Remera Bolt', '13700', '/img/bolt.png');
let remera2 = new Remera(2, 'Remera Star', '13800', '/img/star.png');
let remera3 = new Remera(3, 'Remera Cosmos', '14000', '/img/cosmos.png');
let remera4 = new Remera(4, 'Remera Moon', '18900', '/img/moon.png');
let remera5 = new Remera(5, 'Remera Sun', '24100', '/img/sun.png');
let remera6 = new Remera(6, 'Remera Rainbow', '24200', '/img/rainbow.png');
let remera7 = new Remera(7, 'Remera Saturn', '18600', '/img/saturn.png');

let arregloRemera = new Array () ;
arregloRemera.push(remera1);
arregloRemera.push(remera2);
arregloRemera.push(remera3);
arregloRemera.push(remera4);
arregloRemera.push(remera5);
arregloRemera.push(remera6);
arregloRemera.push(remera7);