<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col text-center">
                <h2>Carros Chevrolet</h2>
                <p class="text-muted">
                    Diseño, confort y tecnología para tu día a día.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Carros/imagen-onix-sedan.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nuevo Onix Sedán</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$75.790.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Carros/Onix.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nuevo Onix</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$139.990.000 *</b> Financiando con los
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
                <i class="fa-solid fa-car-side fa-2x mb-2"></i>
                <h5>Confort</h5>
                <p>Diseño interior pensado para tu comodidad.</p>
            </div>

            <div class="col-md-4">
                <i class="fa-solid fa-gas-pump fa-2x mb-2"></i>
                <h5>Eficiencia</h5>
                <p>Excelente rendimiento de combustible.</p>
            </div>

            <div class="col-md-4">
                <i class="fa-solid fa-shield-halved fa-2x mb-2"></i>
                <h5>Seguridad</h5>
                <p>Tecnología que protege a todos los ocupantes.</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CatalogoCarrosView',
    mounted() {
        document.title = 'Catálogo Carros | Grupo Caminos'
    }
}
</script>