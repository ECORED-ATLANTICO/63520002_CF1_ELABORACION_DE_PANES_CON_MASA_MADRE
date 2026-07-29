<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/introduccion/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-0 La elaboración de panes como masa madre, representa una tradición artesanal ancestral que se ha mantenido por generaciones, y que en las últimas décadas, ha resurgido gracias a las nuevas tendencias, impulsadas por la novedades tecnológicas, en su forma de crearlo o mezclarlo con otros alimentos, obteniendo variedades únicas de panes, más sin embargo, el hecho de que sea un producto artesanal muy propio de la cocina hogareña, no lo exime del riguroso cumplimiento de la normas sanitarias implementadas tanto a nivel nacional, como internacional, por el contrario, la manipulación de masas exige un control estrictos sobre las condiciones de higiene, limpieza y desinfección para garantizar una inocuidad de un producto final que cumpla con la mayor calidad.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        .p-4.py-3.bg-terciario-t5.rounded-3.mb-3
          p.mb-0 Entonces porque es necesario cumplir con las Buenas Prácticas de Manufactura (BPM), su objetivo claro es proteger la salud de los consumidores, evitar enfermedades transmitidas por alimentos (ETA), cumplir con la normativa legal colombiana y construir una reputación de calidad y confianza en el mercado.
        .cajon.p-4.py-3.color-secundario.mb-3
          p.mb-0 Una panadería que aplica BPM, no solo produce panes más seguros, sino que también optimiza sus procesos, reduce mermas y mejora las condiciones laborales de su equipo.
        p.mb-4.mb-lg-0 La elaboración de panes como masa madre, representa una tradición artesanal ancestral que se ha mantenido por generaciones, y que en las últimas décadas, ha resurgido gracias a las nuevas tendencias, impulsadas por la novedades tecnológicas, en su forma de crearlo o mezclarlo con otros alimentos, obteniendo variedades únicas de panes, más sin embargo, el hecho de que sea un producto artesanal muy propio de la cocina hogareña, no lo exime del riguroso cumplimiento de la normas sanitarias implementadas tanto a nivel nacional, como internacional, por el contrario, la manipulación de masas exige un control estrictos sobre las condiciones de higiene, limpieza y desinfección para garantizar una inocuidad de un producto final que cumpla con la mayor calidad.
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/introduccion/2.png", alt="")
    







</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
