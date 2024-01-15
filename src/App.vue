<template>
  <div>
    <div id="navbar">


      <router-link to="/paginaP" target="_BLANK">
        <button type="button" class="btn btn-success" >Registrarse Producto</button>
      </router-link>

      <router-link to="/pagina" target="_BLANK">
        <button type="button" class="btn btn-success">Registrarse</button>
      </router-link>

    </div>


    <!-- Agrega el componente PaginaRegistrar.vue aquí -->
    <PaginaRegistrar></PaginaRegistrar>

        <!-- Agrega el componente PaginaRegistrar.vue aquí -->
        <PaginaRegistrarProducto></PaginaRegistrarProducto>

    <!-- El componente actual se renderizará aquí -->
    <router-view></router-view>
  </div>
</template>

<script>
import PaginaRegistrar from './components/PaginaRegistrar.vue'; // Asegúrate de tener la ruta correcta
import PaginaRegistrarProducto from './components/PaginaRegistrarProducto.vue';
export default {
  components: {
    PaginaRegistrar,
    PaginaRegistrarProducto,
  },
};
</script>

<style>
/* Estilos para la barra de navegación, si es necesario */
#navbar {
  background-color: #eee;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
