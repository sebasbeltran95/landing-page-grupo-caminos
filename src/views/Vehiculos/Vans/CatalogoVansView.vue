<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col text-center">
        <h2>Vans Chevrolet</h2>
        <p class="text-muted">
          Espacio, potencia y versatilidad para tu negocio o familia.
        </p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-center g-4">
        <div class="col-md-4">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="@/assets/img/Vans/van-n400-cargo.avif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">N400 Cargo</h5>
                    <p class="card-text">Precio de venta sugerido desde <b>$88.290.000 *</b> Financiando con los
                        aliados de
                        Grupo Caminos.</p>
                    <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                            class="fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="@/assets/img/Vans/N400-Pasajeros.avif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">N400 Pasajeros</h5>
                    <p class="card-text">Precio de venta sugerido desde <b>$95.990.000 *</b> Financiando con los
                        aliados de
                        Grupo Caminos.</p>
                    <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                            class="fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
     <div class="row text-center g-4">
      <div class="col-md-4">
        <i class="fa-solid fa-boxes-stacked fa-2x mb-2"></i>
        <h5>Gran Capacidad</h5>
        <p>Perfectas para carga o transporte de pasajeros.</p>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-screwdriver-wrench fa-2x mb-2"></i>
        <h5>Trabajo Duro</h5>
        <p>Diseñadas para el uso comercial intensivo.</p>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-shield-halved fa-2x mb-2"></i>
        <h5>Seguridad</h5>
        <p>Equipadas con sistemas de protección avanzados.</p>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'CatalogoVansView',
  mounted() {
    document.title = 'Catálogo Vans | Grupo Caminos'
  }
}
</script>