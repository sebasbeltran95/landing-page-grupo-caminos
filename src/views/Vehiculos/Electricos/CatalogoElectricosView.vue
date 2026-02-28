<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col text-center">
        <h2>Vehículos Eléctricos</h2>
        <p class="text-muted">
          Tecnología, eficiencia y el futuro de la movilidad Chevrolet.
        </p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-center g-4">
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Electricos/chevrolet-spark-euv.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Spark EUV</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$99.990.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <router-link :to="{ name: 'spark-euv' }" class="btn btn-primary">
                Más Información <i class="fa-solid fa-circle-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Electricos/Captiva-EV.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Captiva EV</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$139.990.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Electricos/Equinox-EV.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Equinox EV</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$219.990.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-center g-4">
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Electricos/Blazer-EV.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Blazer EV</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$264.990.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center g-4">
      <div class="col-md-4">
        <i class="fa-solid fa-bolt fa-2x mb-2"></i>
        <h5>Ahorro</h5>
        <p>Menor costo por kilómetro recorrido.</p>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-leaf fa-2x mb-2"></i>
        <h5>Sostenible</h5>
        <p>Contribuye al cuidado del medio ambiente.</p>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-charging-station fa-2x mb-2"></i>
        <h5>Carga fácil</h5>
        <p>Carga en casa o estaciones públicas.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogoElectricosView',
  mounted() {
    document.title = 'Catálogo Eléctricos | Grupo Caminos'
  }
}
</script>
