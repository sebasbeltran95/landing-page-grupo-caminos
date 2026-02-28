<template>
    <div class="row mb-3">
        <div class="col-md-12 d-flex justify-content-center">
            <img src="@/assets/img/Pickups/pickup-montana.avif" alt="" width="70%">
        </div>
    </div>
    <div class="row d-flex justify-content-between">
        <div class="col-md-6">
            <h4>Montana</h4>
            <p>Una pickup completa, hecha para todo lo que necesitas.</p>
        </div>
        <div class="col-md-6">
            <p>DESDE: $117.370.000*</p>
            <router-link :to="{ name: 'catalogo-pickups' }" class="btn btn-primary">
                Más Información <i class="fa-solid fa-circle-arrow-right"></i>
            </router-link>
        </div>
    </div>
        
</template>