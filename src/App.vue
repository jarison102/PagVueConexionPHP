<template>
  <div>
    <div id="navbar">
      <router-link to="/paginaP">
        <button type="button" class="btn btn-success">Registrarse Producto</button>
      </router-link>
      <router-link to="/pagina">
        <button type="button" class="btn btn-success">Registrarse</button>
      </router-link>
    </div>

    <!-- Asegúrate de que estás utilizando los componentes en tu plantilla -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // Mantén la importación de los componentes, pero no los utilices aquí.
  // ...

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
