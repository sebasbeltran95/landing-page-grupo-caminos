<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col text-center">
                <h2 class="fw-bold">Spark EUV</h2>
                <h5 class="text-success">100% eléctrico</h5>
                <p class="text-muted">
                    Compacto, eléctrico y listo para la ciudad.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <img src="@/assets/img/Electricos/chevrolet-spark-euv.avif" alt="Chevrolet Spark EUV 100% eléctrico"
                    class="img-fluid w-75">
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-3">
                <h2 class="text-center">Diseño</h2>
                <hr class="my-4">
                <p class="text-center">
                    Aspecto robusto
                    y atrevido con acabados elegantes
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Autonomía*</h2>
                <hr class="my-4">
                <p class="text-center">
                    360 km (NEDC) <br>
                    298 km (WLTP)
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Seguridad</h2>
                <hr class="my-4">
                <p class="text-center">
                    Sistema avanzado de asistencias.
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Tecnología</h2>
                <hr class="my-4">
                <p class="text-center">
                    Cámara 360°
                </p>
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center align-items-center g-4">
            <div class="col-md-6">
                <img src="@/assets/img/Electricos/frontal-chevrolet-spark-euv.avif" alt="Chevrolet Spark EUV 100% eléctrico"
                    class="img-fluid w-100" style="border-radius: 5px;">
            </div>
            <div class="col-md-6">
                <h2 class="text-center">Compacto y robusto, elegante y atrevido.</h2>
                <p>
                    El Spark EUV ofrece una experiencia única para quienes buscan diseño, tecnología y seguridad en un
                    SUV 100% eléctrico, con la confianza que solo Chevrolet puede brindar. Con una autonomía de hasta
                    360 km, redefine lo que se conoce sobre movilidad urbana mientras tú recargas baterías.
                </p>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center g-4">
            <div class="col-md-6">
                <h2 class="text-center">Spark EUV.</h2>
                <p>
                    Este mes viene con Tasa desde 0,59% n.m.v* ó Matricula y Soat Incluido.
                </p>
                <a href="#" class="btn btn-success w-100">Cotiza ya</a>
            </div>
            <div class="col-md-6 mx-auto align-items-center">
                <img src="@/assets/img/Electricos/spark-oportunidades-febrero-2026.avif" alt="Chevrolet Spark EUV 100% eléctrico"
                    class="img-fluid w-75 mx-auto d-block" style="border-radius: 5px;">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SparkEuvView',
    mounted() {
        document.title = 'Spark EUV | Grupo Caminos'
    }
}
</script>