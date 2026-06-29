function crearUsuario() {
  let nombre = document.getElementById("nombreUsuario").value;

  let correo = document.getElementById("correoUsuario").value;

  let rol = document.getElementById("rolUsuario").value;

  if (!nombre || !correo) {
    alert("Complete todos los campos");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios.push({
    nombre,
    correo,
    rol,
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  cargarUsuarios();

  document.getElementById("nombreUsuario").value = "";
  document.getElementById("correoUsuario").value = "";
}

function cargarUsuarios() {
  let tabla = document.getElementById("tablaUsuarios");

  if (!tabla) return;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  tabla.innerHTML = "";

  usuarios.forEach((u) => {
    tabla.innerHTML += `
      <tr>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>${u.rol}</td>
      </tr>
    `;
  });
}

function inicializarUsuarios() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  if (!usuarios || usuarios.length === 0) {
    usuarios = [
      {
        nombre: "Administrador",
        correo: "admin@cleanclothes.com",
        rol: "Admin",
      },
      {
        nombre: "Operario Principal",
        correo: "operario@cleanclothes.com",
        rol: "Operario",
      },
    ];

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}
