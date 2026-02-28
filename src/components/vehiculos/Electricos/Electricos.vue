<template>
    <div class="row mb-3">
        <div class="col-md-12 d-flex justify-content-center">
            <img src="@/assets/img/Electricos/chevrolet-spark-euv.avif" alt="" width="70%">
        </div>
    </div>
    <div class="row d-flex justify-content-between">
        <div class="col-md-6">
            <h4>Spark EUV</h4>
            <p>El SUV eléctrico para recargar tu energía.</p>
        </div>
        <div class="col-md-6">
            <p>DESDE: $99.990.000*</p>
            <router-link :to="{ name: 'catalogo-electricos' }" class="btn btn-primary">
                Más Información <i class="fa-solid fa-circle-arrow-right"></i>
            </router-link>
        </div>
    </div>
        
</template>