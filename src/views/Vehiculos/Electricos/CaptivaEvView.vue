<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col text-center">
                <h2 class="fw-bold">Captiva EV</h2>
                <h5 class="text-success">100% eléctrico</h5>
                <p class="text-muted">
                    Espacio, tecnología y energía eléctrica para toda la familia.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <img src="@/assets/img/Electricos/Captiva-EV.avif" alt="Chevrolet Captiva EV 100% eléctrico"
                    class="img-fluid w-75">
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-3">
                <h2 class="text-center">Autonomía</h2>
                <hr class="my-4">
                <p class="text-center">
                    Hasta 510 Km (CLTC) <br>
                    Hasta 415 Km (NEDC) <br>
                    Hasta 318 Km (WLTP)
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Seguridad</h2>
                <hr class="my-4">
                <p class="text-center">
                    Chevrolet Intelligent Driving: <br>
                    +10 asistencias
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Confort</h2>
                <hr class="my-4">
                <p class="text-center">
                    Hasta 1.690 Lt de capacidad de carga*
                </p>
            </div>
            <div class="col-md-3">
                <h2 class="text-center">Tecnología</h2>
                <hr class="my-4">
                <p class="text-center">
                    Pantalla central multimedia de 15,6” + Cámara 360
                </p>
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center align-items-center g-4">
            <div class="col-md-6">
                <img src="@/assets/img/Electricos/chevrolet-captiva-ev.avif"
                    alt="Chevrolet Captiva EV 100% eléctrico" class="img-fluid w-100" style="border-radius: 5px;">
            </div>
            <div class="col-md-6">
                <h2 class="text-center">La nueva SUV 100% eléctrica que avanza contigo.</h2>
                <p>
                    La Captiva EV es una nueva referencia que une diseño, tecnología, seguridad y confort en un vehículo
                    con suficiente espacio para todos y todo. Con una autonomía de hasta 415 Km (ciclo NEDC), es un
                    vehículo amplio y llamativo que invita a redefinir la movilidad con la confianza y el respaldo que
                    caracterizan a Chevrolet.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CaptivaEvView',
    mounted() {
        document.title = 'Captiva EV | Grupo Caminos'
    }
}
</script>