<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Procedimientos Operativos Estandarizados de Saneamiento (POES)

    img(src="@/assets/curso/tema7/1.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Los Procedimientos Operativos Estandarizados de Saneamiento (POES) constituyen una herramienta fundamental para planificar, ejecutar y controlar las actividades de limpieza y desinfección en los establecimientos dedicados a la elaboración de alimentos. Su implementación permite estandarizar las operaciones de saneamiento, prevenir la contaminación de los productos y fortalecer el cumplimiento de las Buenas Prácticas de Manufactura (BPM), contribuyendo a garantizar condiciones adecuadas de higiene e inocuidad durante la elaboración de panes con masa madre.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Definición, estructura y diferencia entre limpieza y desinfección

    p.mb-4.mb-lg-5 Un POES es un documento escrito que describe de manera detallada y secuencial las actividades de limpieza y desinfección de un equipo, utensilio o área específica. Su objetivo es garantizar que el saneamiento se realice de forma consistente, eficaz y verificable. La estructura de un POES (según Resolución 2674 de 2013) incluye:

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Estructura de un procedimiento operativo estandarizado de saneamiento (POES)

    .bg-slider.p-3.p-sm-4.mb-4
      SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Objetivo y alcance
            p.mb-4.mb-lg-0 Define el equipo, utensilio, superficie o área que será objeto de limpieza y desinfección. También establece el propósito del procedimiento y las condiciones que se esperan alcanzar para mantener la inocuidad durante la elaboración de los alimentos.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/2.png", alt="")
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Responsables
            p.mb-4.mb-lg-0 Identifica el cargo o la persona encargada de ejecutar, supervisar y verificar el procedimiento. La asignación clara de responsabilidades facilita el seguimiento de las actividades y permite establecer quién debe actuar ante cualquier incumplimiento.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/3.png", alt="")
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Frecuencia y momento de ejecución
            p.mb-4.mb-lg-0 Determina cuándo debe realizarse el procedimiento, de acuerdo con el uso del equipo, el nivel de riesgo y las características del proceso. Puede establecerse después de cada uso, al finalizar la jornada, por turnos o con una periodicidad semanal.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/4.png", alt="")
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Elementos de protección, insumos y materiales
            p.mb-4.mb-lg-0 Relaciona los elementos de protección personal, detergentes, desinfectantes y utensilios necesarios. También puede incluir concentraciones, cantidades, tiempos de contacto y recomendaciones de seguridad para la manipulación de los productos químicos.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/5.png", alt="")
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Procedimiento paso a paso
            p.mb-4.mb-lg-0 Describe de forma ordenada las actividades que deben realizarse: retiro de residuos, prelavado, aplicación de detergente, lavado, enjuague, desinfección, enjuague final cuando corresponda y secado. La secuencia debe ser clara y fácil de aplicar.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/6.png", alt="")
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Verificación y registro
            p.mb-4.mb-lg-0 Explica cómo se comprobará la eficacia del procedimiento mediante inspección visual, pruebas de ATP, hisopados u otros métodos definidos. Además, señala el formato en el que se registran la fecha, el responsable, el área intervenida y las observaciones.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/7.png", alt="")
        .row.justify-content-center.align-items-center.py-lg-5
          .col-lg-7.col-xl-6
            h4 Acciones correctivas
            p.mb-4.mb-lg-0 Establece las medidas que deben aplicarse cuando la limpieza o la desinfección no cumplen los resultados esperados. Estas pueden incluir repetir el procedimiento, ajustar la concentración del producto, reemplazar utensilios, capacitar al personal o solicitar mantenimiento.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema7/8.png", alt="")

    p.mb-4.mb-lg-5 La estructura del POES puede ajustarse a las características de cada establecimiento, siempre que permita planificar, ejecutar, verificar y documentar las actividades de limpieza y desinfección. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Diferencia entre limpieza y desinfección

    .row.align-items-stretch.justify-content-center
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema7/9.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.h-100
              p.mb-0 #[strong Limpieza]: consiste en la remoción de suciedad visible, como restos de masa, grasa, polvo y otros residuos presentes en equipos, utensilios y superficies. Este proceso se realiza mediante la acción mecánica, el uso de agua y detergente. Aunque no elimina los microorganismos, reduce su cantidad al retirar la materia orgánica donde pueden permanecer.
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img.tarjeta-avatar-b__img--top
            img.top-position(src='@/assets/curso/tema7/9.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.h-100
              p.mb-0 #[strong Desinfección]: corresponde a la aplicación de agentes físicos o químicos sobre superficies previamente limpias, con el fin de reducir la presencia de microorganismos hasta niveles seguros para la elaboración de alimentos. Su eficacia depende de que la superficie esté libre de suciedad visible y de que se respeten las concentraciones y los tiempos de contacto recomendados.
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema7/9.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.h-100
              p.mb-0 #[strong Secuencia de aplicación]: la limpieza siempre debe realizarse antes de la desinfección. La presencia de residuos o materia orgánica disminuye la eficacia de los desinfectantes, por lo que ambos procedimientos son complementarios y deben ejecutarse en ese orden.


    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 POES para equipos de panadería

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Los POES para los equipos de panadería describen de forma estandarizada las actividades de limpieza y desinfección que deben aplicarse a cada equipo, indicando los responsables, los productos utilizados, la frecuencia de ejecución y los mecanismos de verificación. Su implementación favorece la inocuidad de los alimentos, prolonga la vida útil de los equipos y contribuye al cumplimiento de las Buenas Prácticas de Manufactura (BPM).
        p.mb-0 A continuación, se presenta una tabla con el POES detallado para una amasadora industrial. 

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 14.
          span POES detallado para amasadora industrial
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: manual de instrucciones, (2026).
            thead
              tr(style="background-color: #E7F2E7")
                th Elemento
                th(colspan="2") Especificación
            tbody
              tr(style="background-color: #EAF1FA")
                td Objetivo
                td(colspan="2") Limpiar y desinfectar la amasadora después de cada uso para evitar contaminación cruzada y acumulación de masa residual
              tr
                td Responsable
                td(colspan="2") Operario de amasado

    .row.justify-content-center
      .col-xl-10
        .tarjeta.bg-contenido-a5.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.d-none.d-sm-block
              img(src="@/assets/curso/tema7/11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Ejemplos de POES para equipos, utensilios y áreas de panadería.
                  p.mb-0 Como complemento a este capítulo, el Anexo 1 reúne ejemplos de Procedimientos Operativos Estandarizados de Saneamiento (POES) para diferentes equipos, utensilios y áreas de la panadería artesanal. Estos modelos sirven como guía para la elaboración e implementación de procedimientos acordes con las condiciones operativas y los requisitos de higiene e inocuidad de cada establecimiento.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.d-block(:href="obtenerLink('/downloads/anexo.pdf')"  target="_blank")
                    span Descargar
                    i.fas.fa-file-pdf

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Esquema de los seis pasos para la limpieza y desinfección

    p.mb-4.mb-lg-5 La limpieza y la desinfección deben realizarse de manera secuencial para garantizar la eliminación de residuos y la reducción de microorganismos en equipos, utensilios y superficies. Cada etapa cumple una función específica y debe ejecutarse respetando los productos, concentraciones y tiempos de contacto establecidos.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .bg-contenido-a5.p-4.mb-4
          SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
            div.py-lg-3
              h4 Retiro de residuos
              p.mb-0 Elimine manualmente los restos de masa, harina, grasa, polvo y demás residuos visibles presentes en la superficie. Esta etapa facilita el lavado posterior y evita que la materia orgánica reduzca la eficacia de los detergentes y desinfectantes.
            div.py-lg-3
              h4 Lavado con detergente
              p.mb-0 Aplique el detergente adecuado y realice acción mecánica mediante cepillos, esponjas o paños, según el tipo de superficie. El lavado permite desprender la suciedad adherida, las grasas y otros residuos que no fueron eliminados durante la etapa inicial.
            div.py-lg-3
              h4 Enjuague
              p.mb-0 Retire completamente el detergente y la suciedad desprendida utilizando agua potable. Un enjuague adecuado evita la permanencia de residuos químicos que puedan interferir con la acción del desinfectante o contaminar los alimentos.
            div.py-lg-3
              h4 Desinfección
              p.mb-0 Aplique el desinfectante autorizado sobre la superficie previamente limpia. Respete la concentración, el método de aplicación y el tiempo de contacto indicados por el fabricante para reducir los microorganismos hasta niveles seguros.
            div.py-lg-3
              h4 Secado y verificación
              p.mb-0 Permita que la superficie se seque al aire o utilice materiales limpios y desechables cuando sea necesario. Finalmente, verifique la ausencia de suciedad, residuos químicos, humedad excesiva u otras condiciones que puedan afectar la inocuidad.


</template>

<script>
export default {
  name: 'Tema7',
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
