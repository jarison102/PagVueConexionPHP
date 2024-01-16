import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Mueve la importación aquí
import 'bootstrap/dist/css/bootstrap.min.css'; //Importacion de bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';//Importacion de bootstrap para iconos


// Importa los componentes que deseas asociar con las rutas
// import Home from './App.vue';
// Importa el componente con el nuevo nombre

import PaginaRegistrar from './components/PaginaRegistrar.vue';
import PaginaRegistrarProducto from './components/PaginaRegistrarProducto.vue';





// Crea la instancia del enrutador
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/pagina', component: PaginaRegistrar },
      { path: '/paginaP', component: PaginaRegistrarProducto },
      
      // Utiliza el nuevo nombre aquí

    ],
  });

// Crea la instancia de la aplicación
const app = createApp(App);

// Usa el enrutador
app.use(router);

// Monta la aplicación con el enrutador
app.mount('#app');





// Exporta el enrutador para que pueda ser utilizado en otros archivos si es necesario
export default router;

