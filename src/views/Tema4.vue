<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Utensilios y superficies de trabajo en la panadería artesanal
    
    img(src="@/assets/curso/tema4/1.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 Los utensilios y las superficies de trabajo desempeñan un papel fundamental en la elaboración artesanal de panes con masa madre, ya que intervienen en cada una de las etapas del proceso productivo. Su adecuada selección, uso, limpieza y mantenimiento contribuyen a prevenir la contaminación de los alimentos, preservar la calidad del producto y garantizar el cumplimiento de las Buenas Prácticas de Manufactura (BPM).

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Tipos, características y materiales permitidos y prohibidos

    .bg-slider.p-3.p-sm-4.mb-4
      SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Raspadores
            p.mb-4.mb-lg-0 De acero inoxidable o plástico duro. Sirven para dividir masas, limpiar mesones, levantar masas pegajosas.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema4/3.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Cuchillos de greñar (#[em lames])
            p.mb-4.mb-lg-0 Hojas de afeitar montadas en un mango metálico o de madera. La hoja se cambia frecuentemente. 
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema4/4.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Palas de horno (#[em peles])
            p.mb-4.mb-lg-0 De madera contrachapada o metal. Las de metal son más higiénicas.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema4/5.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Canastas de fermentación (#[em bannetons])
            p.mb-4.mb-lg-0 De madera contrachapada o metal. Las de metal son más higiénicas.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema4/6.png", alt="")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            h4 Lienzos (#[em couches]): 
            p.mb-4.mb-lg-0 Tela de lino para fermentar baguettes. Se lavan a alta temperatura.
          .col-sm-8.col-lg-4
            figure
              img(src="@/assets/curso/tema4/7.png", alt="")

    .bg-secundario-s5.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-sm-4.col-lg-2
          figure
            img.imgw-105.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
        .col-lg-10
          p.mb-0 Los utensilios utilizados durante la elaboración de panes con masa madre deben seleccionarse de acuerdo con criterios que garanticen la inocuidad de los alimentos y faciliten su limpieza y desinfección. El material con el que están fabricados influye directamente en la seguridad del proceso, por lo que es importante identificar cuáles son adecuados, cuáles tienen un uso restringido y cuáles deben evitarse.

    p.mb-5 A continuación, se presenta una tabla que enumera los criterios para selección de los utensilios

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 6.
          span Criterios para la selección de utensilios utilizados en la elaboración de panes con masa madre
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #E7F2E7")
                th Aspecto
                th Descripción
            tbody
              tr(style="background-color: #EAF1FA")
                td Características que deben cumplir
                td Los utensilios deben estar fabricados con materiales lisos, no porosos y no tóxicos; ser resistentes a la corrosión y a los golpes; no presentar grietas, fisuras o hendiduras que favorezcan la acumulación de suciedad; facilitar la limpieza y desinfección y ser aptos para el contacto con alimentos, con certificación FDA o equivalente cuando aplique.
              tr
                td Materiales permitidos
                td Acero inoxidable (AISI 304 o 316), polietileno de alta densidad (HDPE), polipropileno (PP), silicona de grado alimenticio y nailon para determinados cepillos o implementos de limpieza.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Fichas técnicas y prácticas de uso seguro

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las fichas técnicas son herramientas de control que permiten registrar la información necesaria para identificar, utilizar y mantener los utensilios empleados en la elaboración de panes con masa madre. Su implementación facilita la estandarización de los procesos, el mantenimiento preventivo y el cumplimiento de las Buenas Prácticas de Manufactura (BPM).
        p.mb-0 Si bien las fichas técnicas pueden variar según el tipo de utensilios o producto, estas deben tener como mínimo una estructura que permita registrar las propiedades de sus utensilios críticos. Dentro de esa estructura se describen los siguientes aspectos:

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Nombre del utensilio.
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Referencia o código.
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Material.
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Dimensiones.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Rango de temperatura de uso.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Método de limpieza y desinfección recomendado.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Frecuencia de reemplazo.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.png' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Proveedor.

    .bg-secundario-s5.p-4.py-3.mb-5
      p.mb-0.text-center A continuación, se presenta un ejemplo de ficha técnica que contiene la información básica de un utensilio.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 7.
          span Ejemplo de una ficha técnica de un utensilio utilizado en la elaboración de panes con masa madre
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #E7F2E7")
                th Campo
                th Propósito
                th Ejemplo
            tbody
              tr(style="background-color: #EAF1FA")
                td Nombre del utensilio
                td Identificar el implemento utilizado durante el proceso de producción.
                td Espátula de silicona
              tr
                td Referencia o código
                td Facilitar la trazabilidad e identificación del utensilio dentro del inventario.
                td ESP-001
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Prácticas de uso seguro de los utensilios

    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema4/10.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.h-100
              p.mb-0 Inspección previa al uso: verificar que el utensilio esté limpio, seco y sin daños (grietas, bordes cortantes, partes sueltas). Si está dañado, retirar de servicio y reportar al supervisor.
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img.tarjeta-avatar-b__img--top
            img.top-position(src='@/assets/curso/tema4/11.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.h-100
              p.mb-0 Reemplazo de utensilios dañados: los raspadores de metal deben revisarse cada semana por desgaste en el borde; los de plástico deben reemplazarse si presentan rayaduras profundas.
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema4/12.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.h-100
              p.mb-0 Almacenamiento adecuado: los utensilios limpios deben almacenarse en un lugar seco, protegido de plagas, preferiblemente en un gabinete cerrado o colgados en rejillas. No almacenar en cajones húmedos o sobre superficies sucias.


</template>

<script>
export default {
  name: 'Tema4',
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
