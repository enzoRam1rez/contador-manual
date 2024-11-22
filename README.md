# Contador Manual de Personas 

Este proyecto consiste en un contador manual de personas desarrollado con Vue.js, que se sincroniza en tiempo real utilizando **Socket.IO** y una **API REST**.

## Tecnologías utilizadas
- Vue.js 3
- Pinia (Gestión de estado)
- Socket.IO (Conexión en tiempo real)
- Axios (Solicitudes HTTP)
- Bootstrap 5 (Estilos)

Instalación

*Brindame el proceso que debe hacer la persona que lee esto para instalar y que corra el proyecto.*



Estructura del proyecto
-----------------------------------------------------------------------------
src/
├── assets/                  # Recursos estáticos (imágenes, fuentes, etc.)
├── components/              # Componentes reutilizables
│   └── Counter.vue
├── router/                  # Configuración de rutas
│   └── index.js
├── services/                # Servicios de API y SocketIO
│   ├── apiService.js
│   └── socketService.js
├── stores/                  # Gestión de estado (Pinia)
│   └── counterStore.js
├── styles/                  # Estilos globales
│   └── style.css
├── views/                   # Vistas de la aplicación
│   ├── CounterView.vue
│   └── HomeView.vue
├── App.vue                  # Componente raíz
└── main.js                  # Punto de entrada de la aplicación

