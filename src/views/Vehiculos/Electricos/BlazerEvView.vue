<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col text-center">
                <h2 class="fw-bold">Blazer EV</h2>
                <h5 class="text-success">100% eléctrico</h5>
                <p class="text-muted">
                    Potencia y elegancia en un SUV 100% eléctrico.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <img src="@/assets/img/Electricos/Blazer-EV.avif" alt="Chevrolet Blazer EV 100% eléctrico"
                    class="img-fluid w-75">
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-3">
                <h2 class="text-center">Desempeño</h2>
                <hr class="my-4">
                <p class="text-center">
                    300 hp <br>
                    De 0 a 100 km en 6 segundos
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Diseño</h2>
                <hr class="my-4">
                <p class="text-center">
                    Estilo deportivo RS
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Autonomía</h2>
                <hr class="my-4">
                <p class="text-center">
                    Hasta 578km (NEDC)*
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Conectividad</h2>
                <hr class="my-4">
                <p class="text-center">
                    Pantalla de 17.7" con Google Built-In
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlazerEvView',
    mounted() {
        document.title = 'Blazer EV | Grupo Caminos'
    }
}
</script>