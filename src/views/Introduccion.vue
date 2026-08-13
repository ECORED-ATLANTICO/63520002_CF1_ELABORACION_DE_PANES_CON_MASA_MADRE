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
        p.mb-0 La elaboración de panes con masa madre representa una tradición artesanal que se ha preservado por generaciones y que, en las últimas décadas, ha experimentado un importante resurgimiento gracias al interés por los alimentos fermentados y a la incorporación de nuevas técnicas y tecnologías que han ampliado las posibilidades de producción y diversificación de este tipo de pan. Sin embargo, el carácter artesanal de su elaboración no exime del cumplimiento de las normas sanitarias que regulan la producción de alimentos. Por el contrario, la manipulación de masas fermentadas exige mantener estrictos controles de higiene, limpieza y desinfección que garanticen la inocuidad del producto y la protección de la salud del consumidor. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-xl-9
        .p-4.py-3.bg-terciario-t5.rounded-3.mb-3
          p.mb-0 En este contexto, las Buenas Prácticas de Manufactura (BPM) constituyen el conjunto de procedimientos orientados a prevenir la contaminación de los alimentos, reducir el riesgo de Enfermedades Transmitidas por Alimentos (ETA), cumplir con la normativa sanitaria vigente y fortalecer la confianza de los consumidores. Su aplicación no solo contribuye a la obtención de productos seguros y de calidad, sino que también favorece la organización de los procesos productivos, disminuye pérdidas y promueve ambientes de trabajo más seguros y eficientes. 
        .cajon.p-4.py-3.color-secundario.mb-4.mb-lg-0
          p.mb-0 En este componente formativo se abordarán de manera progresiva los fundamentos de las BPM aplicadas a la producción artesanal de pan con masa madre. Para ello, se desarrollarán temas relacionados con el marco normativo, las prácticas higiénicas del personal, la identificación y prevención de los principales peligros de contaminación, el manejo seguro de utensilios y equipos, la selección y aplicación de agentes de limpieza y desinfección, así como los Procedimientos Operativos Estandarizados de Saneamiento (POES) y la importancia de los registros como evidencia del cumplimiento de estas actividades. Al finalizar el componente, el aprendiz contará con los conocimientos necesarios para implementar y verificar las Buenas Prácticas de Manufactura en procesos de panificación artesanal, contribuyendo a la elaboración de productos inocuos y de alta calidad. 
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/introduccion/2.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5.d-none.d-lg-block
        p.mb-4.mb-lg-0 Antes de iniciar el estudio de los contenidos, se invita a consultar el siguiente pódcast, el cual ofrece una visión general sobre la importancia de la higiene, la limpieza, la desinfección y el registro de estas actividades como pilares de la inocuidad en la producción de pan con masa madre. Este recurso facilitará la comprensión de los conceptos que se desarrollarán a lo largo del componente y permitirá contextualizar su aplicación en un entorno real de producción. 
      .col-lg-7.bg-audio.rounded-4.p-4
        .row.align-items-center.justify-content-center
          .col-4.col-sm-3
            figure.pt-3
              img.w-195.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            h5 ¿Sabías qué?
            p Lo invitamos al siguiente pódcast:
            TarjetaAudio.mb-3(
              texto="“La idea de negocio como base del desarrollo empresarial”"
              :audio="require_src('@/assets/actividad/audio/fail.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )






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
