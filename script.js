
function comprar(producto) {

    const telefono = "8294982441";

    const mensaje = `Hola, estoy interesado en comprar: ${producto}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}
