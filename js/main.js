const precioTaza = 13500;
const precioMate = 14500;
const precioCuenco = 16500;

let nombreUsuario;
let total = 0;
let seguirComprando = true;

const pedirNombreUsuario = function(mensaje) {
    const nombre = prompt(mensaje);
    return nombre;
};

const saludarAlUsuario = function(nombreUsuario) {
    alert("¡Bienvenid@ a Mar Bárbaro, " + nombreUsuario + "!");
};

function mostrarMenu(mensaje) {
    let opcion = Number(prompt(
        mensaje + "\n\n" +
        "1 - Taza Niebla: $" + precioTaza + "\n" +
        "2 - Mate Calma: $" + precioMate + "\n" +
        "3 - Cuenco Aurora: $" + precioCuenco + "\n\n" +
        "0 - Finalizar compra"
    ));

    return opcion;
}

function obtenerProducto(opcion) {
    if (opcion === 1) {
        return "Taza Niebla";
    } else if (opcion === 2) {
        return "Mate Calma";
    } else {
        return "Cuenco Aurora";
    }
}

function obtenerPrecio(opcion) {
    if (opcion === 1) {
        return precioTaza;
    } else if (opcion === 2) {
        return precioMate;
    } else {
        return precioCuenco;
    }
}

function pedirCantidad(producto) {
    let cantidad = Number(prompt(
        "¿Cuántas unidades de " + producto + " querés comprar?"
    ));

    return cantidad;
}

const calcularSubtotal = (precio, cantidad) => {
    return precio * cantidad;
};

const mostrarCompra = function(producto, precio, cantidad, subtotal, totalActual) {
    alert(
        "Agregaste a tu compra:\n\n" +
        "Producto: " + producto + "\n" +
        "Precio unitario: $" + precio + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Subtotal: $" + subtotal + "\n\n" +
        "Total acumulado: $" + totalActual
    );
};

function procesarCompra(opcion, totalActual) {
    let nombreProducto = obtenerProducto(opcion);
    let precio = obtenerPrecio(opcion);
    let cantidad = pedirCantidad(nombreProducto);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        let subtotal = calcularSubtotal(precio, cantidad);
        totalActual = totalActual + subtotal;

        mostrarCompra(nombreProducto, precio, cantidad, subtotal, totalActual);
    } else {
        alert("Cantidad inválida. Ingresá un número entero mayor que cero.");
    }

    return totalActual;
}

function mostrarTotal(nombreCliente, totalFinal) {
    alert(
        "¡Gracias por tu visita, " + nombreCliente + "!\n\n" +
        "Total de la compra: $" + totalFinal
    );
}

nombreUsuario = pedirNombreUsuario("¿Cómo te llamás?");

saludarAlUsuario(nombreUsuario);

while (seguirComprando) {
    let opcion = mostrarMenu("¿Qué producto querés comprar?");

    if (opcion === 0) {
        seguirComprando = false;
    } else if (opcion >= 1 && opcion <= 3 && Number.isInteger(opcion)) {
        total = procesarCompra(opcion, total);
    } else {
        alert("La opción ingresada no es válida.");
    }
}

mostrarTotal(nombreUsuario, total);
