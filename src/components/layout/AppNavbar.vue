<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="@/assets/img/logo_chevrolet.png" width="50%" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
          </li>

          <!-- modelos  -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/modelos-view">Modelos</router-link>
          </li>
          <!-- modelos  -->

           <!-- cotiza tu modelo aqui -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Cotiza tu modelo aqui</router-link>
          </li>
          <!-- cotiza tu modelo aqui -->

           <!-- consecionarios -->
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Consecionarios</router-link>
          </li>
          <!-- consecionarios -->
          
          <!-- financiacion  -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Financiacion
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Listar Estudiante</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/crear-estudiante">Registro Nuevo</router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <!-- financiacion  -->
          
          <!-- postventa  -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Postventa
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Listar Estudiante</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/crear-estudiante">Registro Nuevo</router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <!-- posventa  -->
          
          <!-- Blog -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Listar Estudiante</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/crear-estudiante">Registro Nuevo</router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <!-- Blog -->

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>
