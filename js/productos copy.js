class Producto {

    constructor(id, nombre, precio, descripcion, imagen) {

        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
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
        if(this.subTotal * 1.21 >= 14000) {
            this.envio = 0;
            return this.envio;
        } else {
            this.envio = 800;
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

let producto1 = new Producto(1, 'Vestido Snail', '17700', 'Vestido corto estampado con mangas. Abierto adelante con pequeños botones, escote en V. Presenta botones en puños.', '/img/image01.jpg');
let producto2 = new Producto(2, 'Sweater Zigzag', '18800', 'Sweater con escote redondo y moldería al cuerpo. Tiene estampa de rayas zigzag multicolor sobre fondo crudo o azul. Ideal para combinar con jeans en tu look de todos los días.', '/img/image02.jpg, /img/image02b');
let producto3 = new Producto(3, 'Vestido Squamas', '17500', 'Vestido largo estampado de manga larga. Cuello redondo. Combina muy bien con botas altas hasta la rodilla y maquillaje en los parpados con purpurina.' ,'/img/image03.jpg');
let producto4 = new Producto(4, 'Remera Moon', '3900', '/img/moon.png');
let producto5 = new Producto(5, 'Remera Sun', '4100', '/img/sun.png');
let producto6 = new Producto(6, 'Remera Rainbow', '4200', '/img/rainbow.png');
let producto7 = new Producto(7, 'Remera Saturn', '3600', '/img/saturn.png');

let arregloProducto = new Array () ;
arregloProducto.push(producto1);
arregloProducto.push(producto2);
arregloProducto.push(producto3);
arregloProducto.push(producto4);
arregloProducto.push(producto5);
arregloProducto.push(producto6);
arregloProducto.push(producto7);