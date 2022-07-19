






// let numero = prompt("Ingresa un numero");

// for( i = 1; i <= 10; i++){
//     let resultado = numero*i;
//     console.log(numero + " X " + i + " es igual a " + resultado);
// }



// ---------------------------------------------------------------------



// let a = parseInt(prompt("lado a"));
// let b = parseInt(prompt("lado b"));
// let c = parseInt(prompt("lado c"));

// while (a + b >= c || a + c >= b || c + b >= a) {
//     if ( (a == b) && (b == c) ){
//         console.log("Es equilatero");
//     }else if ( (a == b) || (b == c) || (c == a) ){
//         console.log("Es isosceles");
//     }else{
//         console.log("Es escaleno");
//     }
//     a = parseInt(prompt("nuevo lado a"));
//     b = parseInt(prompt("nuevo lado b"));
//     c = parseInt(prompt("nuevo lado c"));
// }


// -----------------------------------------------------------------------

// variables globales

// let stock = 10;
// let opcion;

// funciones

// const registrarVenta = (cant) => {
//     if (stock > cant) {
//         stock = stock - cant;
//         console.log(`el nuevo stock es de ${stock} unidades`);
//     }else{
//         console.log(`no hay stock suficiente, quedan ${stock} unidades `);
//     }
// }
// const reponer = (cant) => {
//     stock = stock + cant;
//     console.log(`el nuevo stock es de ${stock} unidades`);
// }
// menu

// do{
//     opcion = Number(prompt("Ingrese una opcion:\n 1 - registrar una venta \n 2 - reponer \n 3 - salir"))
//     switch (opcion) {
//         case 1:
//             cant = Number(prompt(`ingrese la cantidad que se vendieron`));
//             registrarVenta(cant)
//             break;
//         case 2:
//             cant = Number(prompt(`ingrese la cantidad de unidades que ingresaron`))
//             reponer(cant);
//             break;
//         case 3:
//             salir();
//             break
//         default:
//             alert("incorrecta")
//             break;
//     }
// }while(opcion !== 3)

// ------------------------1ER DESAFIO---------------------------------------------

// variables globales

// let celular = 500;
// let tablet = 350;
// let speaker = 250;
// let opcion;
// let impuestos;
// let descuento;

// funciones

// const celularVenta = (cant) => {
//     celular = celular*cant
//     console.log(`El subtotal es de $ ${celular}`);
//     impuestos = Number(prompt("Desea comprarlo facturado o sin facturar:\n 1 - Facturado \n 2 - Sin facturar "))
//     if (impuestos == 1) {
//         celular = (21*celular)/100 + celular;
//         console.log(`El total de celular con impuestos es de $ ${celular}`);
//     }else{
//         console.log(`El total de celular sin impuestos es de $ ${celular}`);
//     }
//     descuento = prompt("Ingrese su codigo de descuento");
//     if (descuento == "cel10off") {
//         rebaja = (10*celular)/100;
//         celular = celular - rebaja;
//         console.log(`El total de celular con descuentos es de $ ${celular}`);
//     }else{
//         console.log(`El total de celular es de $ ${celular}`);
//     }
// }

// const tabletVenta = (cant) => {
//     tablet = tablet*cant
//     console.log(`El subtotal es de $ ${tablet}`);
//     impuestos = Number(prompt("Desea comprarlo facturado o sin facturar:\n 1 - Facturado \n 2 - Sin facturar "))
//     if (impuestos == 1) {
//         tablet = (21*tablet)/100 + tablet;
//         console.log(`El total de tablet con impuestos es de $ ${tablet}`);
//     }else{
//         console.log(`El total de tablet sin impuestos es de $ ${tablet}`);
//     }
//     descuento = prompt("Ingrese su codigo de descuento");
//     if (descuento == "cel10off") {
//         rebaja = (10*tablet)/100;
//         tablet = tablet - rebaja;
//         console.log(`El total de tablet con descuentos es de $ ${tablet}`);
//     }else{
//         console.log(`El total de tablet es de $ ${tablet}`);
//     }
// }

// const tabletSpeaker = (cant) => {
//     speaker = speaker*cant
//     console.log(`El subtotal es de $ ${speaker}`);
//     impuestos = Number(prompt("Desea comprarlo facturado o sin facturar:\n 1 - Facturado \n 2 - Sin facturar "))
//     if (impuestos == 1) {
//         speaker = (21*speaker)/100 + speaker;
//         console.log(`El total de speaker con impuestos es de $ ${speaker}`);
//     }else{
//         console.log(`El total de speaker sin impuestos es de $ ${speaker}`);
//     }
//     descuento = prompt("Ingrese su codigo de descuento");
//     if (descuento == "cel10off") {
//         rebaja = (10*speaker)/100;
//         speaker = speaker - rebaja;
//         console.log(`El total de speaker con descuentos es de $ ${speaker}`);
//     }else{
//         console.log(`El total de speaker es de $ ${speaker}`);
//     }
// }
// menu

// do{
//     opcion = Number(prompt("Ingrese una opcion:\n 1 - Celular \n 2 - Tablet \n 3 - Speaker \n 4 - Salir"))
//     switch (opcion) {
//         case 1:
//             cant = Number(prompt(`Ingrese la cantidad que quiere comprar`));
//             celularVenta(cant)
//             break;
//         case 2:
//             cant = Number(prompt(`Ingrese la cantidad que quiere comprar`))
//             tabletVenta(cant);
//             break;
//         case 3:
//             cant = Number(prompt(`Ingrese la cantidad que quiere comprar`))
//             tabletSpeaker(cant);
//             break;
//         case 4:
//             salir();
//             break
//         default:
//             alert("incorrecta")
//             break;
//     }
// }while(opcion !== 4)

// ------------------ Ejercicio incluyendo arrays ------------------

// class Producto {
//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const productos = 
// [{nombre:"SMARTPHONE",precio:600},
// {nombre:"TABLET",precio:300},
// {nombre:"SPEAKER",precio:200},
// {nombre:"SMARTTV",precio:500},
// ];

// let carrito;
// function seleccion(productos, busqueda) {
//     carrito = productos.filter(item => item.nombre === busqueda);
//     return carrito;
// }
// let subtotalCompra;
// function subtotal(carrito,cantidad) {
//     carrito.forEach(element => {
//         return  subtotalCompra = element.precio*cantidad
//     });
    
// }
// let total = 0;


// for (let index = 0; index < Number.MAX_SAFE_INTEGER; index++) {
//     let busqueda = prompt("INGRESE LO QUE DESEA COMPRAR \n SMARTPHONE \n TABLET \n SPEAKER \n SMARTTV \n EXIT").toUpperCase();
//     seleccion(productos,busqueda)
//     if (busqueda == "EXIT") {
//         break
//     }
    
//     let cantidad = parseInt(prompt("CANTIDAD DEL PRODUCTO"))
//     subtotal(carrito,cantidad)
//     total += subtotalCompra
//     console.log(carrito);
// }

// console.log(total);

//-------------- INTERACTUAR CON HMTL----------------

// -------------VARIABLES--------------------
let nombre;
let precioCompra;
let precioVenta;
let cantidad;
let continuar;
let productos = [];

class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad){
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
}

// -----------------FUNCIONES------------------
function subirProductos(nombre,precioCompra,precioVenta,cantidad) {
    let nuevoProducto = new Producto(nombre,precioCompra,precioVenta,cantidad);
    productos.push(nuevoProducto)
}
function agregarProductosTabla(){
    productos.forEach(producto => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${producto.nombre} </td>
        <td>${producto.precioCompra} </td>
        <td>${producto.precioVenta} </td>
        <td>${producto.cantidad} </td>
        `

    tabla.append(filaTabla)

    });
}

// ------------------CICLOS--------------------

for (let index = 0; index < Number.MAX_SAFE_INTEGER; index++){
    nombre = prompt('Ingrese nombre de producto');
    precioCompra = parseInt(prompt('Ingrese precio de compra'));
    precioVenta = parseInt(prompt('Ingrese precio de venta'));
    cantidad = parseInt(prompt('Ingrese la cantidad'));
    subirProductos(nombre,precioCompra,precioVenta,cantidad);
    
    continuar = prompt('Desea continuar \n -SI \n -NO').toUpperCase();
    if (continuar == 'NO') {
        agregarProductosTabla();
        break
    }
    
 
}