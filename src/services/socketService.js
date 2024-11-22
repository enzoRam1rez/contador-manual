import { io } from 'socket.io-client';

const SOCKET_URL = 'https://ikcount.com/live';
const ACCESS_TOKEN = 'ZW56by5yYW1pcmV6czpBUElfS0VZQDY2NTFlZTVhODM0Zjk4MzE5ZDIxYmQ1YTcxY2Q0MTQyODk5OGZhZGJmNTkzYjVjYTdjNTAyMGI2NDFiOTY3YmQ5ZmJmMWI1NGQ3YjczMGEwNmYyYmZjZTUyMGQzMmM4OWQwOTc2Yjg2YThhNDg3ODgzOWU5OTBiMGY1ZWMwZjJiOklLTEFCMDA1';

let socket;

export const connectSocket = (handlers) => {
  console.log('[SocketIO] Conectando al servidor...');

  socket = io(SOCKET_URL, {
    query: { atoken: ACCESS_TOKEN },
    transports: ['websocket', 'polling'],
  });

  socket.on('connect', () => {
    console.log('[SocketIO] Conexión establecida.');
    if (handlers.onConnect) handlers.onConnect();
  });

  socket.on('welcome', (data) => {
    if (handlers.onWelcome) handlers.onWelcome(data.current_aforo);
  });

  socket.on('RAW', (data) => {
    if (handlers.onRaw) handlers.onRaw(data.current_aforo);
  });

  socket.on('heartbeat', () => {
    if (handlers.onHeartbeat) handlers.onHeartbeat();
  });

  socket.on('disconnect', (reason) => {
    console.warn(`[SocketIO] Desconexión: ${reason}`);
    if (handlers.onDisconnect) handlers.onDisconnect(reason);
  });

  socket.on('connect_error', (error) => {
    console.error('[SocketIO] Error:', error);
    if (handlers.onError) handlers.onError(error);
  });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log('[SocketIO] Socket desconectado.');
  }
};
