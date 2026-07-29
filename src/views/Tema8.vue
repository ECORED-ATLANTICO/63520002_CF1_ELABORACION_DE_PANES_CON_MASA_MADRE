<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Registros y control en el programa de saneamiento

    img(src="@/assets/curso/tema8/1.png", alt="" data-aos="fade-up")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Los registros y los mecanismos de control constituyen herramientas esenciales para verificar el cumplimiento del programa de saneamiento y asegurar la trazabilidad de las actividades de limpieza y desinfección. Su correcta implementación permite evidenciar la ejecución de los procedimientos, identificar oportunidades de mejora y fortalecer el cumplimiento de las Buenas Prácticas de Manufactura (BPM), contribuyendo a mantener condiciones adecuadas de higiene e inocuidad en la panadería artesanal.

    separador
    
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Tipos de registros, métodos y protocolo de diligenciamiento

    p.mb-4.mb-lg-5 Los registros son la evidencia objetiva de que las actividades de limpieza, desinfección y control se han realizado conforme a lo planificado. Sin registros, legalmente no se ha hecho nada.

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")
          div(titulo="Tipos de registros")
            p.mb-0.ps-lg-5 Operativos (diligenciados por quien ejecuta la tarea), de verificación (por supervisores o calidad), de acciones correctivas (cuando se detecta una no conformidad).
          div(titulo="Métodos")
            p.mb-0.ps-lg-5 Papel (sencillo, archivo en carpetas) o digital (tabletas, computadoras, con respaldos y firma electrónica).
          div(titulo="Protocolo de diligenciamiento")
            p.mb-0.ps-lg-5 Usar bolígrafo de tinta negra o azul (nunca lápiz); no usar corrector líquido (si hay error, tachar con una línea horizontal, escribir lo correcto al lado y firmar); diligenciar en el momento de la actividad; fecha completa (día/mes/año), hora (formato 24h); nombre completo y firma del responsable; si aplica, firma de verificación del supervisor.

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Formatos de registro (limpieza, soluciones, higiene, plagas)

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 15.
      span Formato de limpieza y desinfección diaria de equipos
    .tabla-a.color-secundario.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #E7F2E7")
            th Fecha
            th Equipo
            th Horario
            th Actividades (L=Lavado, D=Desinfección)
            th Producto / Concentración
            th Responsable
            th Firma
            th Verifica supervisor
        tbody
          tr(style="background-color: #EAF1FA")
            td 15/0/2026 
            td Amasadora industrial 
            td 10:00 a 10:20 
            td L, D 
            td Detergente neutro + Hipoclorito 100 ppm 
            td Juan Pérez 
            td JP 
            td María López 
          tr
            td 15/03/2026 
            td Horno de convección 
            td 10:30 a 10:50 
            td L (vapor) 
            td Agua potable 
            td Juan Pérez 
            td JP 
            td María López 

    p.mb-4.mb-lg-5 El control de las soluciones desinfectantes garantiza que los productos se preparen con la concentración adecuada para asegurar su eficacia y evitar riesgos asociados a una desinfección insuficiente o al uso de concentraciones excesivas. El siguiente formato facilita el registro y la verificación de estas preparaciones.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 16.
      span Formato de preparación de soluciones desinfectantes
    .tabla-a.color-secundario.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #E7F2E7")
            th Fecha
            th Hora
            th Tipo de solución
            th Concentración teórica
            th Concentración medida (tira reactiva)
            th Responsable
            th Aceptable (Sí/No)
            th Acción correctiva
        tbody
          tr(style="background-color: #EAF1FA")
            td 15/03/2026 
            td 08:00 
            td Hipoclorito 
            td 100 ppm 
            td 100 ppm 
            td Juan Pérez 
            td Sí 
            td - 
          tr
            td 15/03/2026 
            td 14:00 
            td Hipoclorito 
            td 100 ppm 
            td 80 ppm 
            td Juan Pérez 
            td No 
            td Se agregaron 5 ml más de concentrado; se midió nuevamente 100 ppm. 

    p.mb-4.mb-lg-5 La verificación periódica de las condiciones de higiene del personal manipulador permite identificar el cumplimiento de las prácticas establecidas en las Buenas Prácticas de Manufactura (BPM) y corregir oportunamente las desviaciones que puedan representar un riesgo para la inocuidad de los alimentos. El siguiente formato constituye un ejemplo para registrar estas inspecciones.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 17.
      span Formato de inspección de higiene del personal (inspección diaria aleatoria)
    .tabla-a.color-secundario.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #E7F2E7")
            th Fecha
            th Nombre del manipulador 
            th Uniforme completo 
            th Uñas cortas 
            th Lavado de manos observado 
            th Uso de gorro 
            th Observaciones 
        tbody
          tr(style="background-color: #EAF1FA")
            td 15/03/2026 
            td Juan Pérez 
            td Sí 
            td Sí 
            td Sí (al ingresar) 
            td Sí 
            td Correcto 
          tr
            td 15/03/2026 
            td Ana Gómez 
            td Sí 
            td No (esmalte) 
            td No se observó 
            td Sí 
            td Se le recordó retirar esmalte para mañana 

    p.mb-4.mb-lg-5 El monitoreo y registro de evidencias de plagas contribuyen a detectar oportunamente situaciones que puedan comprometer la inocuidad de los alimentos y las condiciones sanitarias del establecimiento. El siguiente formato ejemplifica cómo documentar las inspecciones realizadas y las acciones correctivas implementadas cuando sea necesario. 

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 18.
      span Formato de control de plagas (inspección semanal)
    .tabla-a.color-secundario.tabla-a--text-left
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #E7F2E7")
            th Fecha 
            th Área inspeccionada 
            th Evidencia de plagas (Sí/No) 
            th Tipo (roedor, insecto) 
            th Acción tomada 
            th Responsable 
        tbody
          tr(style="background-color: #EAF1FA")
            td 15/03/2026 
            td Bodega de harinas 
            td Sí 
            td Heces de roedor (pequeñas) 
            td Se colocaron trampas adicionales, se selló grieta en pared 
            td Juan Pérez 

    separador

    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Archivo y retención de documentos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p.mb-0 La adecuada gestión de los registros y su conservación durante el tiempo establecido permiten evidenciar el cumplimiento de los programas de saneamiento, facilitar la trazabilidad de las actividades y respaldar los procesos de verificación y mejora continua. En conjunto con la aplicación de las Buenas Prácticas de Manufactura (BPM), los Procedimientos Operativos Estandarizados de Saneamiento (POES), el uso responsable de los agentes de limpieza y desinfección, y el control permanente de las condiciones higiénico-sanitarias, estos registros contribuyen a garantizar la inocuidad de los alimentos y la calidad en la elaboración de panes con masa madre. La implementación sistemática de estas prácticas fortalece el compromiso con la seguridad alimentaria, el cumplimiento de la normatividad vigente y el desempeño responsable de los manipuladores de alimentos.

</template>

<script>
export default {
  name: 'Tema8',
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
