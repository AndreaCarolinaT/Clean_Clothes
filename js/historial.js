function cargarHistorial() {
  let tabla = document.getElementById("tablaHistorial");

  if (!tabla) return;

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  tabla.innerHTML = "";

  pedidos.forEach((p) => {
    let claseEstado = "";

    let estado = p.estado.toLowerCase();

    if (estado === "en proceso") {
      claseEstado = "proceso";
    } else if (estado === "listo") {
      claseEstado = "listo";
    } else if (estado === "entregado") {
      claseEstado = "entregado";
    }

    tabla.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.servicio}</td>
        <td>${p.fecha}</td>
        <td>
          <span class="estado ${claseEstado}">
            ${p.estado}
          </span>
        </td>
      </tr>
    `;
  });
}
