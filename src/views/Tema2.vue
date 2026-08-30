<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Prácticas higiénicas y medidas de protección del personal manipulador

    img(src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 La higiene personal y el uso adecuado de las medidas de protección son fundamentales para prevenir la contaminación durante la elaboración de panes con masa madre. El cumplimiento de estas prácticas fortalece la inocuidad de los alimentos, protege la salud del manipulador y favorece el desarrollo de procesos seguros y estandarizados en la panadería.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Requisitos del manipulador, estado de salud y hábitos de higiene

    p.mb-4.mb-lg-5 Un manipulador de alimentos es “toda persona que, por su actividad laboral, tiene contacto directo con los alimentos durante su preparación, elaboración, envasado, almacenamiento, transporte o expendio” (Resolución 2674 de 2013, artículo 3). En la panadería de masa madre, son manipuladores: el panadero que amasa, el ayudante que divide y moldea, el hornero, y cualquier persona que toque el pan terminado sin empaque.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 Los requisitos legales del manipulador incluyen: certificado de aptitud laboral (exámenes coprológico y de piel al menos una vez al año), capacitación en manipulación higiénica de alimentos renovada cada 2 años, y conocimiento y aplicación de las BPM específicas de su puesto.
        p.mb-4.mb-lg-0 Ninguna persona que padezca una enfermedad transmisible o sea portadora de bacterias patógenas debe manipular alimentos. Las condiciones que obligan a excluir al manipulador son: diarrea aguda o crónica, infecciones respiratorias, heridas infectadas, quemaduras, dermatitis, conjuntivitis, o cualquier otra afección que pueda contaminar los alimentos.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/2.png", alt="")

    .p-4.rounded-4.bg-primario-p10
      p.mb-0 Además el manipulador debe realizar una serie de hábitos diarios obligatorios los cuales son: baño diario completo antes de la jornada, uñas cortas, limpias y sin esmalte, cabello recogido y cubierto totalmente por el gorro, y no usar perfume, colonia o maquillaje en áreas de producción.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Uniforme, elementos de protección personal y comportamiento en el área

    p.mb-4.mb-lg-5 El uniforme y los elementos de protección personal constituyen una barrera sanitaria que reduce el riesgo de contaminación durante la elaboración de panes con masa madre y protege al manipulador en el desarrollo de sus actividades. Su selección, uso correcto y mantenimiento forman parte de las Buenas Prácticas de Manufactura (BPM) y contribuyen a garantizar condiciones seguras de trabajo e inocuidad de los alimentos.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .bg-contenido-a5.p-3.p-lg-4
          SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca.slyder-a--shrink
            div.py-lg-3
              h4 Chaquetín o delantal: 
              p.mb-0 De manga larga o corta, según el nivel de riesgo. Debe contar con cierre frontal y no tener bolsillos por encima de la cintura para evitar la caída de objetos sobre la masa.
            div.py-lg-3
              h4 Pantalón: 
              p.mb-0 Largo, de material resistente y fácil de lavar, sin bolsillos bajos ni accesorios que puedan acumular suciedad o representar riesgo de contaminación.
            div.py-lg-3
              h4 Gorro: 
              p.mb-0 Debe cubrir completamente el cabello, incluyendo patillas, nuca y, cuando sea necesario, la barba o el bigote mediante el uso de cubrebarba.
            div.py-lg-3
              h4 Tapabocas: 
              p.mb-0 Obligatorio cuando el manipulador presente tos o estornudos, o cuando las políticas del establecimiento así lo establezcan.
            div.py-lg-3
              h4 Calzado: 
              p.mb-0 Cerrado con suela antideslizante y de uso exclusivo para el área de producción. Se recomienda que cuente con punta de acero en zonas donde exista riesgo por manipulación de cargas. 
            div.py-lg-3
              h4 Guantes: 
              p.mb-0 De nitrilo o látex sin polvo, destinados a tareas específicas como la manipulación de panes horneados o rellenos. Su uso no reemplaza el lavado adecuado de las manos.
            div.py-lg-3
              h4 Elementos no permitidos: 
              p.mb-0 Joyas (anillos, aretes, cadenas, pulseras, #[em piercing]), relojes, uñas postizas u otros accesorios que puedan convertirse en fuentes de contaminación.
            div.py-lg-3
              h4 Guantes de caucho: 
              p.mb-0 Protegen las manos durante la manipulación de detergentes y desinfectantes, evitando el contacto directo con sustancias químicas.
            div.py-lg-3
              h4 Gafas de seguridad: 
              p.mb-0 Previenen lesiones ocasionadas por salpicaduras de productos químicos o partículas desprendidas durante las labores de limpieza.
            div.py-lg-3
              h4 Delantal impermeable: 
              p.mb-0 Protege la ropa y el cuerpo del trabajador frente a la humedad y al contacto con soluciones de limpieza y desinfección.
            div.py-lg-3
              h4 Botas de caucho: 
              p.mb-0 Proporcionan protección contra derrames y superficies húmedas, además de reducir el riesgo de resbalones durante las actividades de saneamiento.

    .row.justify-content-center
      .col-sm-10.col-lg-6.col-xl-5.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/4.png", alt="alt")
          .crd_hover_txt--body.px-0
            h4.mb-3 El comportamiento permitido incluye
            p.mb-0.px-4 Hablar lo necesario para la coordinación del trabajo, beber agua únicamente de fuentes permitidas en áreas designadas, y usar los elementos de protección personal. 
    
      .col-sm-10.col-lg-6.col-xl-5.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/5.png", alt="alt")
          .crd_hover_txt--body.px-0
            h4.mb-3 El comportamiento prohibido comprende: 
            p.mb-0.px-4 Comer, beber (excepto agua), fumar, masticar chicle, estornudar o toser sin cubrirse, tocar cabello/cara/nariz/boca, usar teléfono móvil personal (fuente de contaminación cruzada), escupir, y almacenar objetos personales en el área de producción.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Lavado de manos: momentos, técnica correcta y verificación

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El lavado de manos es el paso más importante y efectivo para prevenir la contaminación cruzada. Debe realizarse con agua potable, jabón líquido antiséptico (preferiblemente con dispensador de codo) y secado con toallas de papel desechables. Debe hacerse de manera rutinaria y ante determinada situación, es por eso por lo que existen los llamados momentos obligatorios: 

    p.mb-4 #[strong Momentos obligatorios de lavado de manos:]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")
          div(titulo="Ingreso al área de producción")
            p.mb-0.ps-lg-5 Realice el lavado de manos antes de ingresar al área donde se elaboran los panes, garantizando el inicio de las actividades en condiciones higiénicas.
          div(titulo="Después de ir al baño")
            p.mb-0.ps-lg-5 Lávese las manos inmediatamente después de utilizar los servicios sanitarios, antes de retomar cualquier actividad relacionada con la manipulación de alimentos.
          div(titulo="Después de manipular residuos")
            p.mb-0.ps-lg-5 Realice nuevamente el lavado de manos después de manipular residuos, recipientes de basura o cualquier material considerado contaminante.
          div(titulo="Después de toser, estornudar o sonarse la nariz")
            p.mb-4.mb-lg-0.ps-lg-5 Si presenta tos, estornuda o utiliza pañuelos desechables, efectúe el lavado de manos antes de continuar con la preparación de los alimentos.
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/tema2/7.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")
          div(titulo="Cambio entre materias primas y producto listo para consumo")
            p.mb-0.ps-lg-5 Lávese las manos después de manipular harina, masa madre o masas sin hornear y antes de tocar pan horneado, utensilios limpios o superficies sanitizadas, evitando la contaminación cruzada.
          div(titulo="Cambio de actividad")
            p.mb-0.ps-lg-5 Realice el lavado de manos cada vez que cambie de una operación a otra, por ejemplo, de amasar a moldear o de moldear a empacar.
          div(titulo="Después de tocar superficies contaminadas")
            p.mb-0.ps-lg-5 Lávese las manos tras manipular teléfonos, dinero, manijas, interruptores o cualquier otra superficie potencialmente contaminada antes de volver a trabajar con alimentos.

    p.mb-4.mb-lg-5 El lavado de manos es una de las medidas más eficaces para prevenir la contaminación de los alimentos. Su realización en los momentos adecuados fortalece las Buenas Prácticas de Manufactura (BPM) y contribuye a garantizar la inocuidad de los panes elaborados con masa madre.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .bg-primario-p10.p-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.mb-lg-0 Pero el lavado de manos no es solo un paso, debe hacerse bajo un estricta técnica correcta, la cual será efectiva para la prevención de cualquier tipo de residuo o contaminación.
            .col-6.col-sm-4.col-lg-2
              figure.position-relative
                img.imagen-inf(src="@/assets/curso/tema2/9.png", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto  Técnica correcta para el lavado de manos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/10.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        SlyderF.circl-arrow.mb-4(columnas="col-sm-12 col-lg-6")
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/11.svg' alt='')
            h4.text-center.bg-secundario-s10 Humedecer las manos
            p.text-center Moje las manos con agua tibia. Evite utilizar agua demasiado caliente, ya que puede irritar o resecar la piel.
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/12.svg' alt='')
            h4.text-center.bg-secundario-s10 Aplicar jabón líquido
            p.text-center Deposite una cantidad suficiente de jabón líquido para cubrir completamente las manos y facilitar una limpieza eficaz.
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/32.svg' alt='')
            h4.text-center.bg-secundario-s10 Frotar todas las superficies
            p.text-center Frote las palmas, el dorso de las manos, los espacios entre los dedos, los nudillos, los pulgares y las uñas mediante movimientos de fricción durante el tiempo recomendado.
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/33.svg' alt='')
            h4.text-center.bg-secundario-s10 Enjuagar correctamente
            p.text-center Enjuague con abundante agua, permitiendo que esta fluya desde las muñecas hacia la punta de los dedos para retirar el jabón y las impurezas.
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/34.svg' alt='')
            h4.text-center.bg-secundario-s10 Secar las manos
            p.text-center Seque completamente las manos utilizando una toalla de papel desechable, evitando restregar la piel para prevenir irritaciones.
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/35.svg' alt='')
            h4.text-center.bg-secundario-s10 Cerrar la llave
            p.text-center Utilice la misma toalla de papel para cerrar la llave del lavamanos, evitando el contacto directo con una superficie potencialmente contaminada.
          .tarjeta.bg-gris-sistema.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                img.imgw-105(src='@/assets/curso/tema2/36.svg' alt='')
            h4.text-center.bg-secundario-s10 Desechar la toalla
            p.text-center Deposite la toalla de papel en un recipiente con tapa y continúe las actividades únicamente cuando las manos estén completamente limpias y secas.
            
    .row.justify-content-center.align-items-center
      .col-lg-7
        p La verificación del lavado de manos también es un paso importante, se puede realizar mediante inspección visual (es decir, donde un supervisor observa la técnica y aprueba el lavado), también se puede hacer a través de herramientas como la luz ultravioleta con loción marcadora (entrenamiento), o en casos más rigurosos a través de cultivos de hisopado de manos (control microbiológico periódico).
        .bg-terciario-t5.p-4.rounded-3.mb-4.mb-lg-0
          p.mb-0 La técnica correcta de lavado de manos constituye una de las principales barreras para prevenir la contaminación de los alimentos. Su aplicación antes y durante la elaboración de panes con masa madre fortalece las Buenas Prácticas de Manufactura (BPM) y contribuye a garantizar productos inocuos y seguros para el consumidor.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/13.png", alt="")

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Capacitación continua y registro de inducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La capacitación continua es un componente esencial de las Buenas Prácticas de Manufactura (BPM), ya que permite que los manipuladores de alimentos adquieran, actualicen y refuercen los conocimientos necesarios para desarrollar sus actividades de forma segura y conforme con la normatividad sanitaria vigente. En una panadería que elabora panes con masa madre, la formación permanente favorece la prevención de riesgos de contaminación, fortalece la cultura de inocuidad y promueve la mejora continua de los procesos.
        .bg-primario-p10.p-4.py-3.rounded-3.mb-4.mb-lg-0
          p.mb-0 Todo manipulador de alimentos debe recibir una inducción en BPM al iniciar su vínculo laboral y participar periódicamente en jornadas de actualización o refuerzo, de acuerdo con las necesidades del establecimiento y la normativa aplicable. Estas capacitaciones deben combinar aspectos teóricos y prácticos para garantizar la correcta aplicación de los procedimientos durante la producción.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Aspectos que debe incluir la capacitación

    TabsB.color-acento-contenido.mb-4
      .py-4.py-md-5.bg-secundario-s10(titulo="Higiene personal" :icono="require_src('@/assets/curso/tema2/15.png')")
        .row.align-items-center.justify-content-center.px-3
          .col-lg-7
            h4 Higiene personal
            p.mb-4.mb-lg-0 Normas de aseo personal, lavado correcto de manos, uso del uniforme y hábitos que previenen la contaminación de los alimentos.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema2/20.png', alt='')
      .py-4.py-md-5.bg-secundario-s10(titulo="Buenas Prácticas de Manufactura" :icono="require_src('@/assets/curso/tema2/16.png')")
        .row.align-items-center.justify-content-center.px-3
          .col-lg-7
            h4 Buenas Prácticas de Manufactura
            p.mb-4.mb-lg-0 Aplicación de los procedimientos establecidos para la recepción de materias primas, elaboración, almacenamiento y comercialización de los productos.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema2/21.png', alt='')
      .py-4.py-md-5.bg-secundario-s10(titulo="Prevención de la contaminación" :icono="require_src('@/assets/curso/tema2/17.png')")
        .row.align-items-center.justify-content-center.px-3
          .col-lg-7
            h4 Prevención de la contaminación
            p.mb-4.mb-lg-0 Identificación de riesgos físicos, químicos y biológicos, así como medidas para evitar la contaminación cruzada durante la producción.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema2/22.png', alt='')
      .py-4.py-md-5.bg-secundario-s10(titulo="Limpieza y desinfección" :icono="require_src('@/assets/curso/tema2/18.png')")
        .row.align-items-center.justify-content-center.px-3
          .col-lg-7
            h4 Limpieza y desinfección
            p.mb-4.mb-lg-0 Uso adecuado de los POES, productos autorizados y frecuencias de limpieza para equipos, utensilios e instalaciones.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema2/23.png', alt='')
      .py-4.py-md-5.bg-secundario-s10(titulo="Seguridad y manejo de emergencias" :icono="require_src('@/assets/curso/tema2/19.png')")
        .row.align-items-center.justify-content-center.px-3
          .col-lg-7
            h4 Seguridad y manejo de emergencias
            p.mb-4.mb-lg-0 Actuación frente a accidentes, manejo de residuos, control de plagas y procedimientos ante situaciones que puedan comprometer la inocuidad.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema2/24.png', alt='')

    .p-4.py-3.bg-primario-p10.rounded-3.mb-4.mb-lg-5
      p.mb-0.text-center Además de impartir la capacitación, el establecimiento debe conservar un registro documental que evidencie su realización y facilite las actividades de inspección, vigilancia y control por parte de las autoridades sanitarias.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto El registro de capacitación debe contener como mínimo:
    
    .row.align-items-stretch.justify-content-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema2/25.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Fecha de la capacitación.
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema2/26.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Tema o contenido desarrollado.
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema2/27.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Nombre del instructor o capacitador.
      .col-sm-6.col-lg-5.col-xl-3.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema2/28.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Lista de asistentes.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema2/29.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Firma de cada participante.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema2/30.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Evidencia de evaluación o verificación del aprendizaje.

    .bg-contenido-a10.p-4.py-2.mb-5.rounded-4
      .row.justify-content-center.align-items-center
        .col-sm-4.col-lg-2
          figure
            img.mb-4.mb-lg-0.imgw-105(src="@/assets/curso/tema2/31.png", alt="" data-aos="zoom-in-down")
        .col-lg-10
          p.mb-0 La capacitación continua fortalece las competencias del personal manipulador y contribuye al cumplimiento de las Buenas Prácticas de Manufactura. Mantener registros actualizados demuestra el compromiso del establecimiento con la inocuidad alimentaria, facilita el cumplimiento de los requisitos sanitarios y promueve una cultura de mejora continua en la elaboración de panes con masa madre.


</template>

<script>
export default {
  name: 'Tema2',
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
