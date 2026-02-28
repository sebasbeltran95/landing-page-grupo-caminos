<template>
    <div class="row mb-3">
        <div class="col-md-12 d-flex justify-content-center">
            <img src="@/assets/img/Camionetas/camioneta-spin-suv.avif" alt="" width="60%">
        </div>
    </div>
    <div class="row d-flex justify-content-between">
        <div class="col-md-6">
            <h4>Spin</h4>
            <p>Bienvenidos al Bigmalismo.</p>
        </div>
        <div class="col-md-6">
            <p>DESDE: $99.990.000*</p>
            <router-link :to="{ name: 'catalogo-camionetas' }" class="btn btn-primary">
                Más Información <i class="fa-solid fa-circle-arrow-right"></i>
            </router-link>
        </div>
    </div>
        
</template>