function guardarPedido() {
  let cliente = document.getElementById("cliente").value;
  let telefono = document.getElementById("telefono").value;
  let prenda = document.getElementById("prenda").value;
  let servicio = document.getElementById("servicio").value;
  let cantidad = document.getElementById("cantidad").value;
  let fecha = document.getElementById("fecha").value;

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  let id = (pedidos.length + 1).toString().padStart(3, "0");

  let pedido = {
    id,
    cliente,
    telefono,
    prenda,
    servicio,
    cantidad,
    fecha,
    estado: "En Proceso",
  };

  pedidos.push(pedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  alert("Pedido registrado correctamente");
  window.location.href = "pedidos.html";
}

function cargarPedidos() {
  let tabla = document.getElementById("tablaPedidos");
  if (!tabla) return;

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  tabla.innerHTML = "";

  pedidos.forEach((p, index) => {
    let estado = (p.estado || "").toLowerCase().trim();

    let claseEstado = "";

    if (estado === "en proceso") {
      claseEstado = "proceso";
    } else if (estado === "listo") {
      claseEstado = "listo";
    } else if (estado === "entregado") {
      claseEstado = "entregado";
    }

    tabla.innerHTML += `
            <tr>
                <td>#00${index + 1}</td>
                <td>${p.cliente}</td>
                <td>${p.servicio}</td>
                <td>${p.fecha}</td>

                <td>
                    <span class="estado ${claseEstado}">
                        ${p.estado}
                    </span>
                </td>

                <td>
                    <button onclick="cambiarEstado(${index})">
                        Cambiar estado
                    </button>
                </td>
            </tr>
        `;
  });
}

function cambiarEstado(index) {
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  let estados = ["en proceso", "listo", "entregado"];

  let actual = (pedidos[index].estado || "").toLowerCase().trim();

  let pos = estados.indexOf(actual);

  let siguiente = estados[(pos + 1) % estados.length];

  pedidos[index].estado = capitalizar(siguiente);

  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  cargarPedidos();
  cargarEstadisticas();
}

function cargarEstadisticas() {
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  let total = pedidos.length;

  let enProceso = pedidos.filter((p) => p.estado === "En Proceso").length;

  let listos = pedidos.filter((p) => p.estado === "Listo").length;

  let entregados = pedidos.filter((p) => p.estado === "Entregado").length;

  if (document.getElementById("totalPedidos")) {
    document.getElementById("totalPedidos").innerText = total;
  }

  if (document.getElementById("enProceso")) {
    document.getElementById("enProceso").innerText = enProceso;
  }

  if (document.getElementById("listos")) {
    document.getElementById("listos").innerText = listos;
  }

  if (document.getElementById("entregados")) {
    document.getElementById("entregados").innerText = entregados;
  }
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
