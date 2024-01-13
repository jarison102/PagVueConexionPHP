import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Mueve la importación aquí
import 'bootstrap/dist/css/bootstrap.min.css'; //Importacion de bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';//Importacion de bootstrap para iconos


// Importa los componentes que deseas asociar con las rutas
// import Home from './App.vue';
// Importa el componente con el nuevo nombre

import PaginaRegistrar from './components/PaginaRegistrar.vue';





// Crea la instancia del enrutador
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/pagina', component: PaginaRegistrar },// Utiliza el nuevo nombre aquí

    ],
  });

// Crea la instancia de la aplicación
const app = createApp(App);

// Usa el enrutador
app.use(router);
// Monta la aplicación con el enrutador
app.mount('#app');
// Lógica del back-end

// Agrega la función $agregarCarro como una propiedad global de Vue
app.config.globalProperties.$agregarCarro = function () {
  this.Carros.push({
    nombre: this.NuevoCarro,
    cantidad: 0
  });
};

app.config.globalProperties.$agregarMoto = function () {
  alert("Agregaste una moto con éxito!!");
};

app.config.globalProperties.$agregarNuevaFruta = function () {
  this.frutass.push({
    nombre: this.NuevaFruta,
    cantidad: 0
  });
};

app.config.globalProperties.$agregarCel = function () {
  this.Celulares.push({
    Marca: this.NuevoCelular,
    Modelo: this.NuevoModelo,
    Cantidad: this.NuevaCantidad
  });
};




// Exporta el enrutador para que pueda ser utilizado en otros archivos si es necesario
export default router;

