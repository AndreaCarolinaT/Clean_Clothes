// LOGIN
function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  if (user === "" || pass === "") {
    msg.style.color = "red";
    msg.innerText = "⚠ Complete todos los campos";
    return;
  }

  // 🔐 ADMIN
  if (user === "admin" && pass === "123") {
    localStorage.setItem("rol", "admin");
    msg.style.color = "green";
    msg.innerText = "✔ Bienvenido Admin";

    setTimeout(() => {
      window.location.href = "dashboard_admin.html";
    }, 800);
  }

  // 👨‍🔧 OPERARIO
  else if (user === "operario" && pass === "123") {
    localStorage.setItem("rol", "operario");
    msg.style.color = "green";
    msg.innerText = "✔ Bienvenido Operario";

    setTimeout(() => {
      window.location.href = "dashboard_operario.html";
    }, 800);
  }

  // 👤 CLIENTE
  else if (user === "cliente" && pass === "123") {
    localStorage.setItem("rol", "cliente");
    msg.style.color = "green";
    msg.innerText = "✔ Bienvenido Cliente";

    setTimeout(() => {
      window.location.href = "dashboard_cliente.html";
    }, 800);
  }

  // ❌ ERROR
  else {
    msg.style.color = "red";
    msg.innerText = "❌ Usuario o contraseña incorrectos";
  }

  let rol = localStorage.getItem("rol");

  if (document.getElementById("rolUser")) {
    document.getElementById("rolUser").innerText = rol;
  }
}

//BOTON REGRESO
function volverDashboard() {
  let rol = localStorage.getItem("rol");

  if (rol === "admin") {
    window.location.href = "dashboard_admin.html";
  } else if (rol === "operario") {
    window.location.href = "dashboard_operario.html";
  } else if (rol === "cliente") {
    window.location.href = "dashboard_cliente.html";
  }
}

// CERRAR SESIÓN
function cerrarSesion() {
  localStorage.removeItem("rol");

  window.location.href = "index.html";
}
