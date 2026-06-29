function crearServicio() {
  let nombre = document.getElementById("nombreServicio").value;
  let precio = document.getElementById("precioServicio").value;

  if (nombre === "" || precio === "") {
    alert("Complete todos los campos");
    return;
  }

  let servicios = JSON.parse(localStorage.getItem("servicios")) || [];

  servicios.push({
    nombre,
    precio,
  });

  localStorage.setItem("servicios", JSON.stringify(servicios));

  cargarServicios();

  document.getElementById("nombreServicio").value = "";
  document.getElementById("precioServicio").value = "";
}

function cargarServicios() {
  let tabla = document.getElementById("tablaServicios");

  if (!tabla) return;

  let servicios = JSON.parse(localStorage.getItem("servicios")) || [];

  tabla.innerHTML = "";

  servicios.forEach((s) => {
    tabla.innerHTML += `
            <tr>
                <td>${s.nombre}</td>
                <td>$${s.precio}</td>
            </tr>
        `;
  });
}

function inicializarServicios() {
  let servicios = JSON.parse(localStorage.getItem("servicios"));

  if (!servicios || servicios.length === 0) {
    servicios = [
      {
        nombre: "Lavado",
        precio: 15000,
      },
      {
        nombre: "Planchado",
        precio: 8000,
      },
      {
        nombre: "Ropa de Cama",
        precio: 20000,
      },
      {
        nombre: "Lavado en Seco",
        precio: 25000,
      },
    ];

    localStorage.setItem("servicios", JSON.stringify(servicios));
  }
}
