import { defineStore } from 'pinia';
import { updateCounter } from '../services/apiService';
import { connectSocket, disconnectSocket } from '../services/socketService';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0, // Almacena el valor actual del contador
  }),
  actions: {
    async modifyCounter(command, quantity) {
      console.log(`[Store] Acción: ${command.toUpperCase()}, Cantidad: ${quantity}`);
      try {
        const response = await updateCounter(command, quantity);

        if (response.cod === 200) {
          this.count += command === 'manual-add' ? quantity : -quantity;
          console.log(`[Store] Contador actualizado: ${this.count}`);
        } else {
          console.warn('[Store] Respuesta inesperada:', response);
        }
      } catch (error) {
        console.error('[Store] Error al modificar contador:', error);
      }
    },
    initializeSocket() {
      console.log('[Store] Conectando al socket...');
      connectSocket({
        onWelcome: (currentAforo) => {
          console.log('[SocketIO] Bienvenida recibida, Valor actual:', currentAforo);
          this.count = currentAforo;
        },
        onRaw: (currentAforo) => {
          console.log('[SocketIO] Actualización RAW recibida, Valor:', currentAforo);
          this.count = currentAforo;
        },
        onHeartbeat: () => {
          console.log('[SocketIO] Conexión activa (heartbeat).');
        },
      });
    },
    disconnectSocket() {
      console.log('[Store] Desconectando socket...');
      disconnectSocket();
    },
  },
});
