<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-gradient">
    <div class="card shadow-lg p-5 text-center">
      <h2 class="mb-3 text-primary fw-bold">Contador Manual</h2>
      <p class="lead mb-4 d-flex justify-content-center align-items-center gap-2">
        <i class="bi bi-people-fill text-primary" style="font-size: 1.5rem;"></i>
        Valor actual: <strong>{{ counterStore.count }}</strong>
      </p>
      <div class="d-flex justify-content-center gap-4">
        <button 
          @click="modifyCounter('manual-add', 1)" 
          class="btn btn-outline-success btn-lg px-5 rounded-pill"
        >
          Sumar
        </button>
        <button 
          @click="modifyCounter('manual-sub', 1)" 
          class="btn btn-outline-danger btn-lg px-5 rounded-pill"
        >
          Restar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useCounterStore } from '../stores/counterStore';

const counterStore = useCounterStore();

onMounted(() => {
  console.log('[Vue] Montando componente...');
  counterStore.initializeSocket();
});

onUnmounted(() => {
  console.log('[Vue] Liberando recursos...');
  counterStore.disconnectSocket();
});

const modifyCounter = (command, quantity) => {
  console.log(`[Vue] Botón presionado: ${command.toUpperCase()} (${quantity})`);
  counterStore.modifyCounter(command, quantity);
};
</script>
