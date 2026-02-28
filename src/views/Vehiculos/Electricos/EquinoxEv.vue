<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col text-center">
                <h2 class="fw-bold">Equinox EV</h2>
                <h5 class="text-success">100% eléctrico</h5>
                <p class="text-muted">
                    Diseño audaz y potencia eléctrica para una nueva generación.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <img src="@/assets/img/Electricos/Equinox-EV.avif" alt="Chevrolet Equinox EV 100% eléctrico"
                    class="img-fluid w-75">
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-3">
                <h2 class="text-center">Autonomía</h2>
                <hr class="my-4">
                <p class="text-center">
                    Rango 650km
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Conectividad</h2>
                <hr class="my-4">
                <p class="text-center">
                    Pantalla de 17.7” con Google Built-in y monitoreo de batería en myChevrolet app.
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Desempeño</h2>
                <hr class="my-4">
                <p class="text-center">
                    Tracción en las 4 ruedas
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">OnStar</h2>
                <hr class="my-4">
                <p class="text-center">
                    Conectividad y seguridad 24/7
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EquinoxEvView',
    mounted() {
        document.title = 'Equinox EV | Grupo Caminos'
    }
}
</script>