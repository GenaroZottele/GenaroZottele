






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

let celular = 500;
let tablet = 350;
let speaker = 250;
let opcion;
let impuestos;
let descuento;

// funciones

const celularVenta = (cant) => {
    celular = celular*cant
    console.log(`El subtotal es de $ ${celular}`);
    impuestos = Number(prompt("Desea comprarlo facturado o sin facturar:\n 1 - Facturado \n 2 - Sin facturar "))
    if (impuestos == 1) {
        celular = (21*celular)/100 + celular;
        console.log(`El total con impuestos es de $ ${celular}`);
    }else{
        console.log(`El total sin impuestos es de $ ${celular}`);
    }
    descuento = prompt("Ingrese su codigo de descuento");
    if (descuento == "cel10off") {
        rebaja = (10*celular)/100;
        celular = celular - rebaja;
        console.log(`El total con descuentos es de $ ${celular}`);
    }else{
        console.log(`El total es de $ ${celular}`);
    }
}

const tabletVenta = (cant) => {
    tablet = tablet*cant
    console.log(`El subtotal es de $ ${tablet}`);
    impuestos = Number(prompt("Desea comprarlo facturado o sin facturar:\n 1 - Facturado \n 2 - Sin facturar "))
    if (impuestos == 1) {
        tablet = (21*tablet)/100 + tablet;
        console.log(`El total con impuestos es de $ ${tablet}`);
    }else{
        console.log(`El total sin impuestos es de $ ${tablet}`);
    }
    descuento = prompt("Ingrese su codigo de descuento");
    if (descuento == "cel10off") {
        rebaja = (10*tablet)/100;
        tablet = tablet - rebaja;
        console.log(`El total con descuentos es de $ ${tablet}`);
    }else{
        console.log(`El total es de $ ${tablet}`);
    }
}

const tabletSpeaker = (cant) => {
    speaker = speaker*cant
    console.log(`El subtotal es de $ ${speaker}`);
    impuestos = Number(prompt("Desea comprarlo facturado o sin facturar:\n 1 - Facturado \n 2 - Sin facturar "))
    if (impuestos == 1) {
        speaker = (21*speaker)/100 + speaker;
        console.log(`El total con impuestos es de $ ${speaker}`);
    }else{
        console.log(`El total sin impuestos es de $ ${speaker}`);
    }
    descuento = prompt("Ingrese su codigo de descuento");
    if (descuento == "cel10off") {
        rebaja = (10*speaker)/100;
        speaker = speaker - rebaja;
        console.log(`El total con descuentos es de $ ${speaker}`);
    }else{
        console.log(`El total es de $ ${speaker}`);
    }
}
// menu

do{
    opcion = Number(prompt("Ingrese una opcion:\n 1 - Celular \n 2 - Tablet \n 3 - Speaker \n 4 - Salir"))
    switch (opcion) {
        case 1:
            cant = Number(prompt(`Ingrese la cantidad que quiere comprar`));
            celularVenta(cant)
            break;
        case 2:
            cant = Number(prompt(`Ingrese la cantidad que quiere comprar`))
            tabletVenta(cant);
            break;
        case 3:
            cant = Number(prompt(`Ingrese la cantidad que quiere comprar`))
            tabletSpeaker(cant);
            break;
        case 4:
            salir();
            break
        default:
            alert("incorrecta")
            break;
    }
}while(opcion !== 4)