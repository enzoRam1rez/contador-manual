# Contador Manual de Personas 

Este proyecto consiste en un contador manual de personas desarrollado con Vue.js, que se sincroniza en tiempo real utilizando **Socket.IO** y una **API REST**.

## Tecnologías utilizadas
- Vue.js 3
- Pinia (Gestión de estado)
- Socket.IO (Conexión en tiempo real)
- Axios (Solicitudes HTTP)
- Bootstrap 5 (Estilos)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:
1.	Clona el repositorio en tu máquina local:
git clone https://github.com/enzoRam1rez/contador-manual.git
2.	Accede al directorio del proyecto:
cd contador-manual
3.	Instala las dependencias necesarias:
npm install
4.	Inicia el servidor de desarrollo:
npm run dev
5.	Abre el navegador y accede a la dirección proporcionada para interactuar con la aplicación.

### Notas importantes:
- Asegúrate de tener **Node.js** y **npm** instalados en tu máquina.
- La conexión en tiempo real utiliza **Socket.IO** y la URL configurada en `socketService.js`. Si necesitas cambiarla, edita el archivo correspondiente.
- Si encuentras algún problema, consulta los logs de la consola para más detalles.

### Estructura del proyecto

```plaintext
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


