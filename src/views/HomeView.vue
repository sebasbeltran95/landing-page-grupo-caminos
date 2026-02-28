<template>
  <!-- ====== CAROUSEL ====== -->
  <div class="row mt-4">
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://kolesa-uploads.ru/-/794bb196-8513-45b1-bc82-9db4a347497a/pre-spark.jpg"
            class="d-block w-100"
            alt="Spark EV"
          />
        </div>

        <div class="carousel-item">
          <img
            src="https://avatars.mds.yandex.net/get-autoru-vos/1662038/791acea4d30714fb33938752c582db33/1200x900"
            class="d-block w-100"
            alt="Modelo Chevrolet"
          />
        </div>

        <div class="carousel-item">
          <img
            src="https://avatars.mds.yandex.net/get-autoru-vos/1662038/791acea4d30714fb33938752c582db33/1200x900"
            class="d-block w-100"
            alt="Modelo Chevrolet"
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>

  <!-- ====== TEXTO BIENVENIDA ====== -->
  <div class="row mt-4">
    <div class="col text-center">
      <h3>Bienvenido a Chevrolet</h3>
      <p>
        Explora nuestra gama de vehículos y encuentra el modelo perfecto para
        ti. ¡Conduce con estilo y confianza con Chevrolet!
      </p>
    </div>
  </div>

  <!-- ====== TABS ====== -->
  <div class="row mt-4">
    <div class="col text-center mb-3">
      <h3>Tu viaje comienza aquí</h3>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <button
            class="nav-link active"
            data-bs-toggle="pill"
            data-bs-target="#tab-electricos"
            type="button"
          >
            Eléctricos
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-hibridos"
            type="button"
          >
            Hibridos
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-camionetas"
            type="button"
          >
            Camionetas
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-pickups"
            type="button"
          >
            Pickups
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-carros"
            type="button"
          >
            Carros
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-vans"
            type="button"
          >
            Vans
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-camiones"
            type="button"
          >
            Camiones
          </button>
        </li>
      </ul>
    </div>

    <div class="col-12">
      <div class="tab-content text-center p-4">
        <div class="tab-pane fade show active" id="tab-electricos">
          <Electricos />
        </div>

        <div class="tab-pane fade" id="tab-hibridos">
          <Hibridos />
        </div>

        <div class="tab-pane fade" id="tab-camionetas">
          <Camionetas />
        </div>

        <div class="tab-pane fade" id="tab-pickups">
          <Pickups />
        </div>

        <div class="tab-pane fade" id="tab-carros">
          <Carros />
        </div>

        <div class="tab-pane fade" id="tab-vans">
          <Vans />
        </div>

        <div class="tab-pane fade" id="tab-camiones">
          <Camiones />
        </div>
      </div>
    </div>
  </div>
  <!-- ====== TABS ====== -->

  <div class="row mt-3 d-flex justify-content-center g-4">
    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="d-flex justify-content-center pt-4">
          <i class="fa-solid fa-car-side fa-3x"></i>
        </div>
        <div class="card-body">
          <h5 class="card-title">Ver Inventario Disponible</h5>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Explorar <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="d-flex justify-content-center pt-4">
          <i class="fa-solid fa-comments-dollar fa-3x"></i>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Cotiza ya</h5>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Comenzar <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="d-flex justify-content-center pt-4">
          <i class="fa-solid fa-file-invoice-dollar fa-3x"></i>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Financia tu Chevrolet</h5>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Comenzar <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <div class="d-flex justify-content-center pt-4">
          <i class="fa-brands fa-whatsapp fa-3x"></i>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">Chatear con nosotros</h5>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conversar <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-12 text-center mt-5 mb-4">
      <h3>De Chevrolet para ti</h3>
    </div>
  </div>

  <div class="row d-flex justify-content-center g-4">
    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/vehiculos-electricos.avif" alt="" />
        <div class="card-body">
          <h5 class="card-title">El futuro electrico de Chevrolet</h5>
          <p class="card-text">Vehiculos electricos.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/onstar.avif" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title">Todo para que estes protegido y conectado.</h5>
          <p class="card-text">OnStar.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/club-selective.avif" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title">Un mundo de experiencias y beneficios espaciales</h5>
          <p class="card-text">Club Selective.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/onstar-buses.avif" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title">Para los retos del camino la Tecnologia OnStar.</h5>
          <p class="card-text">OnStar Negocios.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center g-4 mt-5">
    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/pickups.avif" alt="" />
        <div class="card-body">
          <h5 class="card-title">Descubre las Pickups y todo su poder.</h5>
          <p class="card-text">Somos Pickups.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/mundo-suv.avif" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title">Subete a una experiencia fuera de este mundo.</h5>
          <p class="card-text">Mundo SUVs.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/catwalk-newsroom.avif" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title">Enterate de todo lo que mueve a Chevrolet.</h5>
          <p class="card-text">Noticias Chevrolet.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/chevrolet-siempre.avif" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title">Estrena tu proximo Chevrolet.</h5>
          <p class="card-text">Plan Chevrolet Siempre.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center g-4 mt-5">
    <div class="col-md-12">
      <div class="card mx-auto" style="width: 18rem">
        <img src="@/assets/img/juntos-diferencia.avif" alt="" />
        <div class="card-body">
          <h5 class="card-title">Conoce nuestro compromiso con el desarrollo de Colombia.</h5>
          <p class="card-text">Juntos hacemos la diferencia.</p>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <a href="#" class="btn btn-primary w-100"
            >Conocer más <i class="fa-solid fa-circle-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col text-center mb-3">
      <h3>Tu viaje comienza aquí</h3>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <button
            class="nav-link active"
            data-bs-toggle="pill"
            data-bs-target="#tab-electricos"
            type="button"
          >
            Eléctricos
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-carros"
            type="button"
          >
            Carros
          </button>
        </li>

        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="pill"
            data-bs-target="#tab-camionetas"
            type="button"
          >
            Camionetas
          </button>
        </li>
      </ul>
    </div>

    <div class="col-12">
      <div class="tab-content text-center p-4">
        <div class="tab-pane fade show active" id="tab-electricos">
          <h4>Eléctricos</h4>
          <p>Aquí van los vehículos eléctricos</p>
        </div>

        <div class="tab-pane fade" id="tab-carros">
          <h4>Carros</h4>
          <p>Aquí van los carros familiares y sedanes</p>
        </div>

        <div class="tab-pane fade" id="tab-camionetas">
          <h4>Camionetas</h4>
          <p>Aquí van las camionetas y SUVs</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Electricos from '@/components/vehiculos/Electricos/Electricos.vue'
  import Hibridos from '@/components/vehiculos/Hibridos/Hibridos.vue'
  import Carros from '@/components/vehiculos/Carros/Carros.vue'
  import Camionetas from '@/components/vehiculos/Camionetas/Camionetas.vue'
  import Pickups from '@/components/vehiculos/Pickups/Pickups.vue'
  import Vans from '@/components/vehiculos/Vans/Vans.vue'
  import Camiones from '@/components/vehiculos/Camiones/Camiones.vue'
  export default {
    name: "HomeView",
    components: {
      Electricos,
      Hibridos,
      Carros,
      Camionetas,
      Pickups,
      Vans,
      Camiones
    },
    mounted() {
      document.title = 'Inicio | Grupo Caminos'
    }
  };
</script>

<style scoped>
/* ====== CAROUSEL ====== */
#carouselExample {
  max-height: 400px;
}

#carouselExample img {
  height: 400px;
  object-fit: cover;
}
</style>
