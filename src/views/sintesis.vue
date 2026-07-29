<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    p.mb-4.mb-lg-5 Este componente formativo sobre Buenas Prácticas de Manufactura (BPM) y procedimientos de limpieza y desinfección en panadería con masa madre proporciona las bases conceptuales, normativas y prácticas para que el aprendiz desarrolle la capacidad de aplicar los principios de inocuidad en la elaboración artesanal de pan. Su recorrido formativo inicia con el marco legal colombiano y el concepto de BPM, se adentra en las prácticas higiénicas del personal y la prevención de la contaminación, y finaliza con el manejo seguro de equipos y utensilios, los agentes de limpieza y desinfección, los POES y los registros, conformando un sistema de conocimiento integral. Su apropiación es el cimiento sobre el cual se construye la producción de panes de masa madre inocuos y de alta calidad, garantizando la protección del consumidor y el cumplimiento de la normativa sanitaria.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Este componente formativo sobre Buenas Prácticas de Manufactura (BPM) y procedimientos de limpieza y desinfección en panadería con masa madre proporciona las bases conceptuales, normativas y prácticas para que el aprendiz desarrolle la capacidad de aplicar los principios de inocuidad en la elaboración artesanal de pan. Su recorrido formativo inicia con el marco legal colombiano y el concepto de BPM, se adentra en las prácticas higiénicas del personal y la prevención de la contaminación, y finaliza con el manejo seguro de equipos y utensilios, los agentes de limpieza y desinfección, los POES y los registros, conformando un sistema de conocimiento integral. Su apropiación es el cimiento sobre el cual se construye la producción de panes de masa madre inocuos y de alta calidad, garantizando la protección del consumidor y el cumplimiento de la normativa sanitaria.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
