document.addEventListener("DOMContentLoaded", function () {
  let rol = localStorage.getItem("rol");

  let elemento = document.getElementById("rolUser");

  if (elemento) {
    elemento.innerText = rol;
  }

  if (typeof inicializarServicios === "function") {
    inicializarServicios();
  }

  if (typeof inicializarUsuarios === "function") {
    inicializarUsuarios();
  }

  if (typeof inicializarInventario === "function") {
    inicializarInventario();
  }

  if (typeof inicializarNotificaciones === "function") {
    inicializarNotificaciones();
  }

  if (typeof cargarPedidos === "function") {
    cargarPedidos();
  }

  if (typeof cargarEstadisticas === "function") {
    cargarEstadisticas();
  }

  if (typeof cargarServicios === "function") {
    cargarServicios();
  }

  if (typeof cargarUsuarios === "function") {
    cargarUsuarios();
  }

  if (typeof cargarInventario === "function") {
    cargarInventario();
  }

  if (typeof cargarNotificaciones === "function") {
    cargarNotificaciones();
  }

  if (typeof cargarHistorial === "function") {
    cargarHistorial();
  }

  if (typeof configurarVistaNotificaciones === "function") {
    configurarVistaNotificaciones();
  }
});
