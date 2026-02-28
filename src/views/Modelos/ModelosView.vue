<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col text-center">
                <h2>Vehículos Eléctricos</h2>
                <p class="text-muted">
                    Tecnología, eficiencia y el futuro de la movilidad Chevrolet.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Electricos/chevrolet-spark-euv.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Spark EUV</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$99.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <router-link :to="{ name: 'spark-euv' }" class="btn btn-primary">
                            Más Información <i class="fa-solid fa-circle-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Electricos/Captiva-EV.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Captiva EV</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$139.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <router-link :to="{ name: 'captiva-ev' }" class="btn btn-primary">
                            Más Información <i class="fa-solid fa-circle-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Electricos/Equinox-EV.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Equinox EV</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$219.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <router-link :to="{ name: 'equinox-ev' }" class="btn btn-primary">
                            Más Información <i class="fa-solid fa-circle-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Electricos/Blazer-EV.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Blazer EV</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$264.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <router-link :to="{ name: 'blazer-ev' }" class="btn btn-primary">
                            Más Información <i class="fa-solid fa-circle-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col text-center">
                <h2>Vehículos Híbridos</h2>
                <p class="text-muted">
                    La eficiencia de un eléctrico con la autonomía de un motor a combustión.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Hibridos/captiva-phev-falsaflyout.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Captiva Hibrida</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$154.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="row mb-4">
            <div class="col text-center">
                <h2>Pickups Chevrolet</h2>
                <p class="text-muted">
                    Fuerza, desempeño y tecnología para cualquier trabajo.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Pickups/pickup-montana.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Montana</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$119.170.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Pickups/Colorado.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Nueva Colorado</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$195.490.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Pickups/Silverado.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Silverado</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$270.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="row mb-4">
            <div class="col text-center">
                <h2>Vans Chevrolet</h2>
                <p class="text-muted">
                    Espacio, potencia y versatilidad para tu negocio o familia.
                </p>
                <hr class="my-4">
            </div>
        </div>
        <div class="row mb-5 d-flex justify-content-center g-4">
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Vans/van-n400-cargo.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">N400 Cargo</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$88.290.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mx-auto" style="width: 18rem;">
                    <img src="@/assets/img/Vans/N400-Pasajeros.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">N400 Pasajeros</h5>
                        <p class="card-text">Precio de venta sugerido desde <b>$95.990.000 *</b> Financiando con los
                            aliados de
                            Grupo Caminos.</p>
                        <a href="#" class="btn btn-primary w-100">Mas Informacion <i
                                class="fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModelosView',
    mounted() {
        document.title = 'Modelos | Grupo Caminos'
    }
}
</script>