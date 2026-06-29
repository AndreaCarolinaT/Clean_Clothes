function guardarNotificacion() {
  let destinatario = document.getElementById("destinatario").value;

  let mensaje = document.getElementById("mensajeNotificacion").value;

  if (!mensaje) {
    alert("Ingrese un mensaje");
    return;
  }

  let notificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];

  notificaciones.push({
    fecha: new Date().toLocaleDateString(),
    destinatario,
    mensaje,
  });

  localStorage.setItem("notificaciones", JSON.stringify(notificaciones));

  cargarNotificaciones();

  document.getElementById("mensajeNotificacion").value = "";
}

function cargarNotificaciones() {
  let tabla = document.getElementById("tablaNotificaciones");

  if (!tabla) return;

  let rol = localStorage.getItem("rol");

  let notificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];

  tabla.innerHTML = "";

  if (rol === "cliente") {
    document.getElementById("tituloNotificaciones").innerText =
      "Mis Notificaciones";

    notificaciones = notificaciones.filter((n) => n.destinatario === "Cliente");
  } else if (rol === "operario") {
    document.getElementById("tituloNotificaciones").innerText =
      "Notificaciones Internas";

    notificaciones = notificaciones.filter(
      (n) => n.destinatario === "Operario",
    );
  } else {
    document.getElementById("tituloNotificaciones").innerText =
      "Historial de Notificaciones";
  }

  notificaciones.forEach((n) => {
    tabla.innerHTML += `
      <tr>
        <td>${n.fecha}</td>
        <td>${n.destinatario}</td>
        <td>${n.mensaje}</td>
      </tr>
    `;
  });
}

function inicializarNotificaciones() {
  let notificaciones = JSON.parse(localStorage.getItem("notificaciones"));

  if (!notificaciones || notificaciones.length === 0) {
    notificaciones = [
      {
        fecha: "01/01/2025",
        destinatario: "Cliente",
        mensaje: "Su pedido está listo para entrega",
      },
      {
        fecha: "01/01/2025",
        destinatario: "Operario",
        mensaje: "Nuevo pedido registrado",
      },
    ];

    localStorage.setItem("notificaciones", JSON.stringify(notificaciones));
  }
}

function configurarVistaNotificaciones() {
  let rol = localStorage.getItem("rol");

  let panelAdmin = document.getElementById("panelAdmin");

  if (!panelAdmin) return;

  if (rol !== "admin") {
    panelAdmin.style.display = "none";
  }
}
