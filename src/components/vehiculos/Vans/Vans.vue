<template>
    <div class="row mb-3">
        <div class="col-md-12 d-flex justify-content-center">
            <img src="@/assets/img/Vans/van-n400-cargo.avif" alt="" width="60%">
        </div>
    </div>
    <div class="row d-flex justify-content-between">
        <div class="col-md-6">
            <h4>N400 Cargo.</h4>
            <p>El aliado para hacer crecer tu negocio.</p>
        </div>
        <div class="col-md-6">
            <p>DESDE: $88.290.000*</p>
            <router-link :to="{ name: 'catalogo-vans' }" class="btn btn-primary">
                Más Información <i class="fa-solid fa-circle-arrow-right"></i>
            </router-link>
        </div>
    </div>
        
</template>