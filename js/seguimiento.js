function buscarPedido() {
  let codigo = document.getElementById("codigoPedido").value.trim();

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  let resultado = document.getElementById("resultado");

  let pedido = pedidos.find((p) => p.id === codigo);

  if (!pedido) {
    resultado.innerHTML = "❌ Pedido no encontrado";
    return;
  }

  resultado.innerHTML = `
    <div class="card">
        <h3>Pedido #${pedido.id}</h3>
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Prenda:</strong> ${pedido.prenda}</p>
        <p><strong>Servicio:</strong> ${pedido.servicio}</p>
        <p><strong>Estado:</strong> ${pedido.estado}</p>
      </div>
  `;
}
