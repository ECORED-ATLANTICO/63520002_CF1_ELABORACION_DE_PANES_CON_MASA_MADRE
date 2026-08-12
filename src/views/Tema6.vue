<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Agentes de limpieza y desinfección

    img(src="@/assets/curso/tema6/1.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 Los agentes de limpieza y desinfección son fundamentales para mantener las condiciones higiénico-sanitarias en las instalaciones, equipos, utensilios y superficies de trabajo de la panadería. Su correcta selección, preparación y aplicación permiten eliminar la suciedad, reducir la presencia de microorganismos y contribuir al cumplimiento de las Buenas Prácticas de Manufactura (BPM), favoreciendo la inocuidad durante la elaboración de panes con masa madre.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Tipos de detergentes y desinfectantes

    p.mb-4.mb-lg-5 Los agentes utilizados en los procesos de limpieza y desinfección se clasifican según su composición, mecanismo de acción y aplicación. Cada uno cumple una función específica dentro del saneamiento de instalaciones, equipos y utensilios, por lo que su selección debe responder al tipo de suciedad, al material de la superficie y a las condiciones del proceso. A continuación, se presentan los principales tipos de detergentes y desinfectantes empleados en la panadería artesanal.

    .row.justify-content-center.align-items-center
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")
          div(titulo="Detergentes")
            p.mb-0.ps-lg-5 Neutros (pH 6-8) para limpieza diaria de superficies en contacto con alimentos; alcalinos (pH > 10) para remover grasa y proteínas muy adheridas (requieren enjuague abundante); ácidos (pH < 4) para eliminar sarro, óxido o depósitos minerales (uso ocasional).
          div(titulo="Desinfectantes químicos")
            p.mb-0.ps-lg-5 Hipoclorito de sodio (cloro, 100-200 ppm, tiempo de contacto 5-10 min, requiere enjuague); amonios cuaternarios (200-400 ppm, tiempo 10 min, no requieren enjuague según ficha); yodóforos (12.5-25 ppm, sensibles a pH y temperatura); ácido peracético (150-300 ppm, efectivo a baja temperatura). 
          div(titulo="Desinfección física")
            p.mb-0.ps-lg-5 Agua caliente (> 82 °C) para utensilios pequeños (sumergir 2 min); vapor a presión para hornos y cámaras; radiación UV para superficies y aire (no penetra suciedad). 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/2.png", alt="")
    
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Concentraciones, diluciones y tiempos de contacto

    .row.justify-content-center.align-items-center
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La eficacia de los procesos de limpieza y desinfección depende no solo de la selección del agente químico, sino también de su preparación y aplicación correctas. Para garantizar los resultados esperados, es necesario respetar las concentraciones recomendadas, realizar adecuadamente las diluciones y cumplir los tiempos de contacto establecidos por el fabricante, evitando tanto la pérdida de eficacia como los riesgos para la inocuidad de los alimentos y la seguridad del manipulador. 
        .bg-secundario-s5.p-4.py-3.rounded-3
          p.mb-0 Para preparar soluciones desinfectantes con la concentración requerida, puede emplearse la siguiente fórmula:

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-lg-6
        .bg-primario-p10.p-4.mb-4.mb-lg-0.h-100.py-xl-5
          .row.justify-content-center.align-items-center
            .col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h4 Cálculo de diluciones
              p.mb-0 Volumen de producto concentrado (ml) = (Concentración deseada (ppm) × Volumen de solución (L)) / (Concentración del producto (ppm) / 1000).
      .col-lg-6
        .bg-primario-p10.p-4.mb-4.mb-lg-0.py-xl-5
          .row.justify-content-center.align-items-center
            .col-sm-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/tema6/5.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h4 Ejemplo de aplicación
              p.mb-0 Para preparar 10 L de solución de hipoclorito de sodio a 100 ppm a partir de un producto comercial al 5 % (50 000 ppm), se realiza el siguiente cálculo:
              p.mb-0 (100 x 10) / (50,000 / 1000) = 1000 / 50 = 20 ml.
              
    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 13.
          span Concentraciones y tiempos de contacto recomendados para panadería 
        .tabla-a.color-secundario.tabla-a--text-left
          table
            caption Nota. SENA, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Superficie o equipo 
                th Agente 
                th Concentración 
                th Tiempo de contacto 
                th Enjuague final 
            tbody
              tr(style="background-color: #EAF1FA")
                td Mesón acero inoxidable 
                td Hipoclorito de sodio 
                td 100 ppm 
                td 5 min 
                td Sí (agua potable) 
              tr
                td Utensilios plásticos 
                td Amonio cuaternario 
                td 200 ppm 
                td 10 min 
                td No (según ficha) 
              tr(style="background-color: #EAF1FA")
                td Pisos y drenajes 
                td Hipoclorito de sodio 
                td 200 ppm 
                td 10 min 
                td No 
              tr
                td Manos 
                td Jabón antiséptico 
                td Según fabricante 
                td 40-60 segundos 
                td Enjuague 
              tr(style="background-color: #EAF1FA")
                td Horno (interior) 
                td Agua caliente o vapor 
                td 85 °C 
                td 2 min 
                td No 
              tr
                td Cámara de fermentación 
                td Ácido peracético 
                td 150 ppm 
                td 5 min 
                td Sí (agua potable) 

    .p-4.bg-secundario-s5.rounded-3
      p.mb-0.text-center Es fundamental respetar el tiempo de contacto para que el desinfectante actúe. Si se aplica y se enjuaga inmediatamente, no hay efecto letal sobre los microorganismos. 
              
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Manejo ambiental, fichas de seguridad y precauciones

    img(src="@/assets/curso/tema6/6.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 El manejo seguro de los agentes de limpieza y desinfección requiere la aplicación de medidas que protejan la salud del personal, prevengan la contaminación del ambiente y garanticen un uso adecuado de los productos químicos. Para ello, es fundamental cumplir las condiciones de almacenamiento, consultar las fichas de datos de seguridad y adoptar las precauciones necesarias durante su manipulación, preparación y disposición final.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")
      .row.align-items-center.justify-content-center(titulo="Almacenamiento de productos químicos")
        .col-lg-7.col-xl-6
          p.mb-4.mb-lg-0 Los detergentes y desinfectantes deben almacenarse en un área exclusiva, separada de los alimentos, materias primas y materiales de empaque. Este espacio debe contar con ventilación adecuada, señalización de seguridad, estantes resistentes a derrames y sistemas de contención cuando sea necesario. Los productos deben conservarse en sus envases originales o en recipientes debidamente identificados, evitando el uso de envases destinados a bebidas o alimentos.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema6/7.png", alt="" data-aos="zoom-in-down")
      .row.align-items-center.justify-content-center(titulo="Fichas de datos de seguridad (SDS – <em>Safety Data Sheet</em>)")
        .col-lg-7.col-xl-6
          p.mb-4.mb-lg-0 Cada producto químico debe disponer de su ficha de datos de seguridad, la cual contiene información sobre su identificación, composición, peligros, medidas de primeros auxilios, control de incendios, procedimientos en caso de derrames, condiciones de manipulación y almacenamiento, controles de exposición, estabilidad y reactividad, entre otros aspectos relevantes para su uso seguro.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema6/8.png", alt="" data-aos="zoom-in-down")
      .row.align-items-center.justify-content-center(titulo="Precauciones durante la manipulación de productos químicos")
        .col-lg-7
          p Mezclas incompatibles: nunca mezcle hipoclorito de sodio con ácidos o con otros productos químicos incompatibles, ya que pueden liberarse gases tóxicos o producirse reacciones peligrosas. De igual manera, evite combinar sustancias ácidas y alcalinas, debido al riesgo de reacciones exotérmicas.
          p Actuación en caso de derrame: aísle y ventile el área afectada, utilice los elementos de protección personal requeridos, contenga el derrame con material absorbente inerte, disponga el residuo en un recipiente debidamente identificado y limpie la superficie siguiendo los procedimientos establecidos por el establecimiento. Finalmente, registre el incidente conforme a los protocolos internos.
          p.mb-4.mb-lg-0 Elementos de protección personal (EPP): durante la manipulación de productos químicos concentrados deben utilizarse guantes de nitrilo o neopreno, gafas de seguridad con protección lateral, delantal impermeable, botas de caucho y, cuando las condiciones de exposición lo requieran, protección respiratoria adecuada de acuerdo con las recomendaciones del fabricante.

        .col-lg-3
          figure
            img(src="@/assets/curso/tema6/9.png", alt="" data-aos="zoom-in-down")


</template>

<script>
export default {
  name: 'Tema6',
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
