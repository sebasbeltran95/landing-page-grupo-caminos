<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col text-center">
        <h2>Vehículos Híbridos</h2>
        <p class="text-muted">
          La eficiencia de un eléctrico con la autonomía de un motor a combustión.
        </p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-center g-4">
      <div class="col-md-4">
        <div class="card mx-auto" style="width: 18rem;">
          <img src="@/assets/img/Hibridos/captiva-phev-falsaflyout.avif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Captiva Hibrida</h5>
            <p class="card-text">Precio de venta sugerido desde <b>$154.990.000 *</b> Financiando con los aliados de
              Grupo Caminos.</p>
            <a href="#" class="btn btn-primary w-100">Mas Informacion <i class="fa-solid fa-circle-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center g-4">
      <div class="col-md-4">
        <i class="fa-solid fa-battery-half fa-2x mb-2"></i>
        <h5>Eficiencia</h5>
        <p>Menor consumo de combustible en trayectos urbanos.</p>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-road fa-2x mb-2"></i>
        <h5>Autonomía</h5>
        <p>Viaja largas distancias sin preocuparte por recargar.</p>
      </div>

      <div class="col-md-4">
        <i class="fa-solid fa-leaf fa-2x mb-2"></i>
        <h5>Menos emisiones</h5>
        <p>Reducción de emisiones sin cambiar tu estilo de vida.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CatalogoHibridosView',
  mounted() {
    document.title = 'Catálogo Hibridos | Grupo Caminos'
  }
}
</script>
