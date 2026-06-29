function guardarInsumo() {
  let insumo = document.getElementById("insumo").value;
  let cantidad = document.getElementById("cantidad").value;

  if (!insumo || !cantidad) {
    alert("Complete todos los campos");
    return;
  }

  let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

  inventario.push({
    insumo,
    cantidad,
  });

  localStorage.setItem("inventario", JSON.stringify(inventario));

  cargarInventario();

  document.getElementById("insumo").value = "";
  document.getElementById("cantidad").value = "";
}

function cargarInventario() {
  let tabla = document.getElementById("tablaInventario");

  if (!tabla) return;

  let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

  tabla.innerHTML = "";

  inventario.forEach((i) => {
    tabla.innerHTML += `
      <tr>
        <td>${i.insumo}</td>
        <td>${i.cantidad}</td>
      </tr>
    `;
  });
}

function inicializarInventario() {
  let inventario = JSON.parse(localStorage.getItem("inventario"));

  if (!inventario || inventario.length === 0) {
    inventario = [
      {
        insumo: "Detergente",
        cantidad: 15,
      },
      {
        insumo: "Suavizante",
        cantidad: 10,
      },
      {
        insumo: "Blanqueador",
        cantidad: 8,
      },
      {
        insumo: "Bolsas de Empaque",
        cantidad: 50,
      },
    ];

    localStorage.setItem("inventario", JSON.stringify(inventario));
  }
}
