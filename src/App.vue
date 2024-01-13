<template>
  <div>
    <div id="navbar">
      <router-link to="/">
        <button type="button" class="btn btn-success">Inicio</button>
      </router-link>

      <router-link to="/registrar">
        <button type="button" class="btn btn-success">Registrarse</button>
      </router-link>
    </div>

    <!-- Agrega el componente PaginaRegistrar.vue aquí -->
    <PaginaRegistrar></PaginaRegistrar>

    <!-- El componente actual se renderizará aquí -->
    <router-view></router-view>
  </div>
</template>

<script>
import PaginaRegistrar from './components/PaginaRegistrar.vue'; // Asegúrate de tener la ruta correcta

export default {
  components: {
    PaginaRegistrar,
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
