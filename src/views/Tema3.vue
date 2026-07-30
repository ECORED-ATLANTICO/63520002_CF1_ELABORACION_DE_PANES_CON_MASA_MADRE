<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contaminación de los alimentos: riesgos y prevención en la panadería

    img(src="@/assets/curso/tema3/1.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Durante la elaboración de panes con masa madre, los alimentos pueden contaminarse en cualquiera de las etapas del proceso si no se aplican adecuadamente las Buenas Prácticas de Manufactura (BPM). Por ello, es fundamental reconocer los diferentes tipos de contaminación, sus fuentes y las medidas preventivas que contribuyen a garantizar productos inocuos y de calidad.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto y tipos de contaminación: física, química y biológica

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p La contaminación de los alimentos es la presencia en ellos de cualquier agente físico, químico o biológico que pueda provocar un riesgo para la salud del consumidor o una alteración de la calidad del producto. Puede ocurrir en cualquier etapa: desde la materia prima (harina con esporas de Bacillus cereus), durante el procesamiento (manos sucias), o después del horneado (moho por almacenamiento húmedo).
        .cajon.color-terciario.p-4
          p.mb-0 Existen variedades de tipos de contaminaciones, estas pueden en peligro la salud, tanto de los trabajadores como de los consumidores, es en medida que las BPM, deben aplicarse para un riguroso proceso dentro de las instalaciones, lo que ayuda a la prevención de este tipo de contaminaciones.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Contaminación física

    .p-4.py-3.bg-contenido-a10.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center Son aquellos objetos extraños que no pertenecen al alimento y que pueden causar daño al consumidor final, (cortes, rotura de dientes, asfixia).

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Contaminación física: fuentes y prevención
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: ficha técnica, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Fuentes en panadería
                th Prevención
            tbody
              tr(style="background-color: #EAF1FA")
                td Cabellos, pestañas
                td Uso de gorro que cubra completamente el cabello y, cuando aplique, cubre barba
              tr
                td Fragmentos de vidrio (envases rotos)
                td Prohibición del uso de recipientes de vidrio en el área de producción y retiro inmediato de los elementos rotos
              tr(style="background-color: #EAF1FA")
                td Virutas de metal (raspadores desgastados, mallas de harina)
                td Mantenimiento preventivo e inspección periódica de equipos y utensilios; reemplazo de los elementos deteriorados
              tr
                td Piedras o terrones duros (presentes en harina de baja calidad)
                td Inspección y tamizado de la harina antes de su utilización, además de la adquisición de materias primas de proveedores confiables
              tr(style="background-color: #EAF1FA")
                td Plásticos (fragmentos de guantes, envolturas)
                td Manipulación adecuada de los empaques, revisión del estado de los guantes y retiro de residuos plásticos antes de iniciar la producción
              tr
                td Insectos o partes de insectos
                td Implementación de un programa de control integrado de plagas y protección de las materias primas en recipientes cerrados
              tr(style="background-color: #EAF1FA")
                td Madera (astillas de paletas o canastas de fermentación dañadas)
                td Inspección periódica de los utensilios de madera y reemplazo de aquellos que presenten grietas, astillas o deterioro

    .bg-primario-p5.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          .p-4.py-3
            h5 Ejemplo aplicado
            p.mb-4.mb-lg-0 Durante la elaboración del pan, un raspador de metal con el borde desgastado puede desprender una pequeña viruta que se incorpora a la masa. Si no se detecta a tiempo, esta podría llegar al producto terminado y ocasionar lesiones al consumidor. Para evitar este riesgo, se debe inspeccionar el estado de los raspadores antes de cada uso y reemplazarlos, como mínimo, cada tres meses o antes si presentan desgaste, deformaciones o daños visibles.
        .col-5.col-sm-4.col-lg-2
          figure
            img.imgw-120(src="@/assets/curso/tema3/3.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Contaminación química

    .p-4.py-3.bg-contenido-a10.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center A diferencia de la física, esta se encuentra es derivada de las diferentes sustancias químicas tóxicas no deseadas con la que los trabajadores limpian sus herramientas e instalaciones.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Contaminación química: fuentes y prevención
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: ficha técnica, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Fuentes en panadería
                th Prevención
            tbody
              tr(style="background-color: #EAF1FA")
                td Residuos de detergentes o desinfectantes no enjuagados 
                td Enjuague final con agua potable después de la desinfección química, excepto cuando el producto autorizado no requiera enjuague según la ficha técnica. 
              tr
                td Lubricantes de equipos (amasadoras, hornos) que gotean sobre la masa 
                td Uso de lubricantes de grado alimenticio (NSF H1) y mantenimiento preventivo de los equipos. 
              tr(style="background-color: #EAF1FA")
                td Pesticidas utilizados durante el control de plagas 
                td Aplicación por personal autorizado, protección de materias primas y superficies de trabajo, y cumplimiento de los tiempos de seguridad establecidos. 
              tr
                td Metales pesados (cobre, plomo) por corrosión de equipos o utensilios 
                td Inspección periódica del estado de equipos y utensilios, reemplazo de materiales corroídos y uso de materiales aptos para contacto con alimentos. 
              tr(style="background-color: #EAF1FA")
                td Productos de limpieza almacenados junto a harinas o materias primas 
                td Almacenamiento de productos químicos en áreas independientes, debidamente identificadas y con sistemas de contención para evitar derrames. 
              tr
                td Preparación inadecuada de detergentes o desinfectantes 
                td Preparación y dosificación de las soluciones de limpieza de acuerdo con las concentraciones recomendadas por el fabricante. 
    
    .bg-secundario-s10.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          .p-4.py-3
            h5 Ejemplo aplicado
            p.mb-4.mb-lg-0 Durante la limpieza y desinfección del área de producción, un operario prepara una solución de hipoclorito de sodio con una concentración superior a la recomendada y la utiliza para desinfectar el mesón donde posteriormente se manipulará la masa madre. Al no realizar el enjuague correspondiente, permanecen residuos de cloro sobre la superficie, los cuales pueden entrar en contacto con la masa, alterar sus características sensoriales y afectar el proceso de fermentación. Para prevenir este riesgo, es necesario preparar las soluciones desinfectantes siguiendo las concentraciones recomendadas por el fabricante, verificar su dosificación mediante tiras reactivas o equipos de medición y realizar el enjuague cuando el producto utilizado así lo requiera.
        .col-5.col-sm-4.col-lg-2
          figure
            img.imgw-120(src="@/assets/curso/tema3/4.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Contaminación biológica

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Esta es la más peligrosa porque patógenos y toxinogénicos y microorganismos que no se ven a simple vista, pueden multiplicarse rápidamente y poner en peligro la salud de los manipuladores como de los consumidores.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5. 
          span Microorganismos relevantes en panadería de masa madre
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: ficha técnica, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Microorganismo 
                th Fuente común 
                th Efecto 
                th Prevención
            tbody
              tr(style="background-color: #EAF1FA")
                td #[em Bacillus cereus]
                td Harina, esporas presentes en el suelo
                td Toxina que causa vómitos o diarrea
                td Cocción a > 94 °C interna, enfriamiento rápido, refrigeración de masas
              tr
                td #[em Staphylococcus aureus]
                td Manos, nariz, heridas infectadas
                td Toxina termoestable (no se destruye con el horneado)
                td Lavado de manos, no manipular si tiene heridas
              tr(style="background-color: #EAF1FA")
                td #[em Salmonella spp]
                td Huevos contaminados, superficies
                td Salmonelosis
                td Usar huevos pasteurizados, limpiar superficies
              tr
                td #[em Mohos (Aspergillus, Penicillium)]
                td Ambiente, harina, humedad
                td Micotoxinas, alteración organoléptica
                td Control de humedad, almacenamiento seco, limpieza

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p A diferencia de otras masas o tipos de alimentos la masa madre cuenta con características especiales. Su pH ácido (3.8-4.5) inhibe Salmonella y Staphylococcus, pero no a Bacillus cereus (forma esporas). Por eso, el control de temperatura durante la fermentación y el enfriamiento del pan horneado son críticos.
        .cajon.color-terciario.p-4
          p.mb-0 Prevención general de contaminación biológica: lavado de manos frecuente, limpieza y desinfección de superficies, control de temperatura (mantener masas refrigeradas si la fermentación supera las 4 horas), cocción completa (temperatura interna del pan >94 °C).

    .bg-contenido-a5.rounded-4.mb-4.p-4.px-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          h5 Ejemplo aplicado
          p.mb-4.mb-lg-0 Durante la preparación de panes con masa madre, un panadero deja una masa fermentando durante toda la noche a temperatura ambiente porque considera que el ambiente ácido elimina cualquier riesgo microbiológico. Sin embargo, las esporas de Bacillus cereus presentes de forma natural en la harina pueden sobrevivir y multiplicarse si las condiciones de tiempo y temperatura son favorables. Para prevenir este riesgo, es necesario controlar los tiempos de fermentación, mantener las masas refrigeradas cuando el proceso supere el tiempo recomendado y garantizar una cocción completa del producto antes de su consumo.
        .col-8.col-sm-6.col-lg-2
          figure
            img(src="@/assets/curso/tema3/7.png", alt="")

    .row.justify-content-center.align-items-center
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p.mb-0 La prevención de la contaminación biológica requiere la aplicación integrada de las Buenas Prácticas de Manufactura durante todas las etapas de elaboración del pan con masa madre. La higiene del personal, el control de temperaturas, la limpieza de las instalaciones y la correcta manipulación de las materias primas constituyen barreras complementarias que permiten garantizar la inocuidad del producto y proteger la salud del consumidor.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Pautas de conservación y control de temperatura (zona de peligro, fermentación, enfriamiento)

    img(src="@/assets/curso/tema3/9.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El control del tiempo y la temperatura durante la elaboración de panes con masa madre es fundamental para garantizar la inocuidad y obtener productos de buena calidad. Una fermentación o un enfriamiento inadecuados pueden favorecer la proliferación de microorganismos y afectar las características del pan. Por ello, es importante aplicar las siguientes pautas durante el proceso de elaboración.















































</template>

<script>
export default {
  name: 'Tema3',
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
