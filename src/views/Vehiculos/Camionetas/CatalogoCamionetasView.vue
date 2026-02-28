<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col text-center">
                <h2>Camionetas Chevrolet</h2>
                <p class="text-muted">
                    Potencia, versatilidad y confort para cada camino.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Camionetas/camioneta-spin-suv.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Spin</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$99.990.000 *</b> Financiando con los
                            aliados de Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Camionetas/nueva-tracker.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nueva Tracker</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$97.800.000 *</b> Financiando con los
                            aliados de Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Camionetas/Captiva-XL.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Captiva XL</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$132.990.000 *</b> Financiando con los
                            aliados de Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Camionetas/Blazer.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Blazer</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$210.120.000 *</b> Financiando con los
                            aliados de Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Camionetas/Traverse.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nueva Traverse</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$284.800.000 *</b> Financiando con los
                            aliados de Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Camionetas/Tahoe.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nueva Tahoe</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$379.990.000 *</b> Financiando con los
                            aliados de Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center g-4">
            <div class="col-md-4">
                <i class="fa-solid fa-car fa-2x mb-2"></i>
                <h5>Versatilidad</h5>
                <p>Perfectas para ciudad y carretera.</p>
            </div>

            <div class="col-md-4">
                <i class="fa-solid fa-gas-pump fa-2x mb-2"></i>
                <h5>Eficiencia</h5>
                <p>Consumo optimizado y gran desempeño.</p>
            </div>

            <div class="col-md-4">
                <i class="fa-solid fa-shield-halved fa-2x mb-2"></i>
                <h5>Seguridad</h5>
                <p>Tecnología para proteger lo que más importa.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogoCamionetasView',
    mounted() {
        document.title = 'Catálogo Camionetas | Grupo Caminos'
    }
}
</script>
