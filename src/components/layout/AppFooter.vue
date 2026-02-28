<template>
  <div class="bg-dark text-white py-5">
    <div class="container">
      <div class="row g-4">

        <!-- Columna 1 -->
        <div class="col-md-6">
          <h2>Comunícate con Nosotros</h2>
          <p class="fw-light">
            Fundación Moi Pour Toi, finca la fortuna vereda el chaquiro combia baja km 1,
            Pereira-Risaralda
          </p>

          <p>
            <strong>¡Llámanos!</strong>
            <span class="text-info">+57 304 3351839</span>
          </p>

          <h5 class="mt-4">Horarios</h5>

          <table class="table table-dark table-sm mt-3">
            <tbody>
              <tr>
                <td>Lunes - Viernes</td>
                <td>08:00 – 05:30</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>08:00 – 02:00</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>Cerrado</td>
              </tr>
            </tbody>
          </table>

          <a href="https://wa.me/573043351839" target="_blank" class="btn btn-success rounded-pill mt-3">
            Envíanos un Mensaje
          </a>
        </div>

        <!-- Columna 2 -->
        <div class="col-md-6">
          <h2>¡O, mejor aún visítanos!</h2>
          <p class="fw-light">
            Para realizar la visita agenda tu cita.
          </p>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.785756790122!2d-75.76795231436355!3d4.837550945124633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387e8ed366ba21%3A0x9ec5e0940cd11435!2sFUNDACION%20MOI%20POR%20TOI!5e1!3m2!1ses!2sco!4v1608395100590!5m2!1ses!2sco"
             class="w-100 rounded" style="height: 350px;" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  </div>

  <footer class="bg-black text-white text-center py-3">
    © {{ new Date().getFullYear() }} Grupo Caminos
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  width: 100%;
}
</style>