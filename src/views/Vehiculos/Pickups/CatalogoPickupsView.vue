<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col text-center">
        <h2>Pickups Chevrolet</h2>
        <p class="text-muted">
          Fuerza, desempeño y tecnología para cualquier trabajo.
        </p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-center g-4">
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Pickups/pickup-montana.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Montana</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$119.170.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Pickups/Colorado.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Nueva Colorado</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$195.490.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Pickups/Silverado.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Silverado</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$270.990.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center g-4">
      <div class="col-md-4">
        <i class="fa-solid fa-hammer fa-2x mb-2"></i>
        <h5>Potencia</h5>
        <p>Diseñadas para trabajos exigentes.</p>
      </div>
      <div class="col-md-4">
        <i class="fa-solid fa-truck fa-2x mb-2"></i>
        <h5>Carga</h5>
        <p>Gran capacidad de carga y remolque.</p>
      </div>
      <div class="col-md-4">
        <i class="fa-solid fa-shield-halved fa-2x mb-2"></i>
        <h5>Seguridad</h5>
        <p>Tecnología para protegerte en cualquier terreno.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogoPickupsView',
  mounted() {
    document.title = 'Catálogo Pickups | Grupo Caminos'
  }
}
</script>
