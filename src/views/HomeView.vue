<template>
  <div class="d-flex justify-content-center align-items-center min-vh-90 bg-gradient">
    <div class="card shadow-lg p-5 text-center">
      <h1 class="display-5 text-primary fw-bold">Bienvenido al Contador Manual de Personas</h1>
      <p class="lead mb-4">Gestiona y controla manualmente el conteo de personas.</p>
      <router-link 
        to="/counter" 
        class="btn btn-outline-primary btn-lg px-5 rounded-pill"
      >
        Ir al Contador
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Fondo con degradado */
.bg-gradient {
  background: linear-gradient(135deg, #e9ecef, #f8f9fa);
  height: 100%;
}

/* Sombra en botones */
.btn {
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Tarjeta central */
.card {
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Altura mínima para evitar scroll */
.min-vh-90 {
  min-height: 90vh;
}
</style>
