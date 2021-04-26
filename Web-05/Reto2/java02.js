alert('Bienvenido a “El náufrago satisfecho” voy a tomar su orden, haga click en aceptar para continuar!');
hamburguesas = +prompt('Qué tipo de hamburguesa desea? \n1. Simple\n2. Doble\n3. Triple');

switch(hamburguesas){
    case 1:
        precio= 20;
    break;
    case 2:
        precio= 25;
    break;
    case 3:
        precio= 28;
    default:
        alert('Opción invalida');
}

cantidadHamburguesas = +prompt('Cuántas hamburguesas llevará?');
costoFinal= precio*cantidadHamburguesas;

tipoPago = +prompt('Qué medio de pago usará? \n1. Efectivo\n2. Tarjeta')

switch(tipoPago){
    case 1:
        pago=costoFinal;
        alert(`Usted tiene que pagar ${pago} dólares`);
    break;
    case 2:
        pago=(costoFinal)+(costoFinal*0.05);
        alert(`Usted tiene que pagar ${pago} dólares`);
    break;
    default:
        alert('Opción no valida');
}
alert('Gracias por su compra, buen día :)')