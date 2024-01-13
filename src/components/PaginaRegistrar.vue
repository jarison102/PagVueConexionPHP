<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-md-4">
              <br />
              <div class="card">
                <div class="card-header">
                  <center>
                    <h1>Registro De Persona</h1>
                  </center>
                </div>
                <div class="card-body">
                  <!-- Aquí se mostrarán los datos de la base de datos -->
                  <h2>Datos de la base de datos:</h2>
                  <ul>
                    <li v-for="item in datos" :key="item.id">{{ item.Name }} - {{ item.LastNamePerson }} - {{ item.Year }}</li>
                  </ul>

                  <!-- Tu formulario aquí -->
                  <form action="" method="post" enctype="multipart/form-data">
                    <!-- ... Campos del formulario ... -->
                    <button type="submit" class="btn btn-success">Enviar</button>
                  </form>
                  <br>
                  <form action="" method="post">
                    <button type="submit" class="btn btn-success">Volver</button>
                  </form>
                </div>
                <div class="card-footer text-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      datos: [], // Almacenará los datos obtenidos de la base de datos
    };
  },
  mounted() {
    console.log('Componente montado. Realizando solicitud para obtener datos...');
    // Hacer la solicitud para obtener datos cuando el componente está montado
    axios
      .get('http://localhost:8000/api.php') // Cambiado a una ruta absoluta
      .then((response) => {
        this.datos = response.data;
        console.log('Datos obtenidos correctamente:', this.datos);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  },
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
