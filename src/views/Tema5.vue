<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Equipos de panadería: operación y manejo seguro

    img(src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 La operación segura de los equipos de panadería es fundamental para garantizar la calidad del proceso productivo, prevenir accidentes laborales y prolongar la vida útil de los equipos. Su manejo adecuado, junto con el cumplimiento de las recomendaciones de uso, limpieza y mantenimiento, contribuye a desarrollar procesos eficientes y acordes con las Buenas Prácticas de Manufactura (BPM). 

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Tipos de equipos (amasadoras, hornos, cámaras y otros)

    p.mb-4.mb-lg-5 La elaboración de panes con masa madre requiere equipos que faciliten las diferentes etapas del proceso productivo, desde el mezclado de los ingredientes hasta la conservación del producto terminado. La selección del equipo depende del volumen de producción, las características de la masa y el nivel de automatización del establecimiento. Además de mejorar la eficiencia, el uso adecuado de estos equipos contribuye a mantener la calidad del producto, optimizar los tiempos de trabajo y garantizar condiciones seguras para el operario.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elaboración de panes con masa madre requiere equipos que faciliten las diferentes etapas del proceso productivo, desde el mezclado de los ingredientes hasta la conservación del producto terminado. La selección del equipo depende del volumen de producción, las características de la masa y el nivel de automatización del establecimiento. Además de mejorar la eficiencia, el uso adecuado de estos equipos contribuye a mantener la calidad del producto, optimizar los tiempos de trabajo y garantizar condiciones seguras para el operario.

    .row.align-items-stretch.justify-content-center
      .col-sm-10.col-lg-6.col-xl-5.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema5/3.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-4.h-100
              h4.mb-4 Amasadoras
              p.mb-4 #[strong Función]: mezclan los ingredientes y desarrollan el gluten para obtener una masa homogénea.
              p.mb-4 #[strong Aspecto clave]: pueden ser de espiral, planetarias o manuales, según el volumen de producción y el tipo de masa.

      .col-sm-10.col-lg-6.col-xl-5.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema5/4.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-4.h-100
              h4.mb-4 Hornos
              p.mb-4 #[strong Función]: realizan la cocción del pan mediante calor controlado.
              p.mb-4 #[strong Aspecto clave]: los hornos rotativos ofrecen cocción uniforme, los de piedra favorecen una corteza característica y los combinados incorporan vapor durante el horneado.

      .col-sm-10.col-lg-6.col-xl-5.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema5/5.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-4.h-100
              h4.mb-4 Cámaras de fermentación y refrigeración
              p.mb-4 #[strong Función]: mantienen condiciones controladas de temperatura y humedad durante la fermentación o conservación de la masa.
              p.mb-4 #[strong Aspecto clave]: las cámaras de fermentación trabajan entre 25 y 30 °C con 75-85 % de humedad relativa; las neveras conservan los productos entre 4 y 5 °C.
      .col-sm-10.col-lg-6.col-xl-5.mb-4
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema5/6.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-4.h-100
              h4.mb-4 Equipos complementarios
              p.mb-4 #[strong Función]: facilitan operaciones específicas del proceso productivo.
              p.mb-4 #[strong Aspecto clave]: incluyen balanzas digitales, divisoras, moldeadoras y selladoras de bolsas para mejorar la precisión, la uniformidad y el empaque del producto.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Fichas técnicas de equipos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Al igual que con los utensilios, los diferentes equipos usados en la elaboración de panes con masa madre, deben de tener sus respectivas fichas técnicas y están deben describir como mínimo los siguientes puntos: capacidad máxima, potencia, voltaje, frecuencia, dimensiones, materiales en contacto con alimentos, temperaturas de operación, instrucciones de limpieza y desinfección, mantenimiento preventivo (frecuencia, tareas), y certificaciones (CE, NSF).
        .p-4.py-3.bg-secundario-s5.rounded-3
          p.mb-0 Se presentan, a continuación, dos tablas con ejemplos de fichas técnicas de equipos utilizados en la elaboración de panes con masa madre.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 8.
          span Ejemplo de ficha técnica para amasadora industrial (Tornado HS20Z)
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: ficha técnica, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Campo
                th Especificación
            tbody
              tr(style="background-color: #EAF1FA")
                td Marca
                td TORNADO (Pallomaro S.A.)
              tr
                td Modelo / Referencia
                td HS20Z
              tr(style="background-color: #EAF1FA")
                td Tipo de equipo 
                td Amasadora industrial de 2 velocidades (gancho y tazón giratorios simultáneamente) 
              tr
                td Capacidad 
                td
                  ul
                    li 8 kg de harina (con 60 % de humedad en la masa) 
                    li 4 kg de harina (con 40 % de humedad en la masa) 
              tr(style="background-color: #EAF1FA")
                td Velocidades 
                td
                  ul
                    li Gancho: 150 rpm (baja) / 200 rpm (alta) 
                    li Tazón: 15 rpm (baja) / 20 rpm (alta) 
              tr
                td Tazón (bowl) 
                td 1 tazón giratorio de 20 litros de capacidad 
              tr(style="background-color: #EAF1FA")
                td Gancho amasador 
                td 1 gancho tipo espiral 
              tr
                td Potencia del motor 
                td 1.5 kW (1500 W) 
              tr(style="background-color: #EAF1FA")
                td Corriente 
                td 12 A 
              tr
                td Voltaje 
                td 110 V monofásico, con polo a tierra 
              tr(style="background-color: #EAF1FA")
                td Dimensiones (ancho × fondo × alto) 
                td 39 cm × 73 cm × 90 cm 
              tr
                td Peso aproximado 
                td 90 kg 
              tr(style="background-color: #EAF1FA")
                td Material de construcción 
                td 
                  ul.lista-ul
                    li.mb-0
                      i.lista-ul__vineta
                      span Estructura inferior: fundición de acero 
                    li.mb-0
                      i.lista-ul__vineta
                      span Tapa superior: fibra de vidrio con acabado en pintura gris 
              tr
                td Controles    
                td Análogos con #[em switch] de seguridad y temporizador 
              tr(style="background-color: #EAF1FA")
                td Accesorios incluidos 
                td 1 #[em bowl], 1 gancho amasador, 1 manual de instrucciones 

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 9.
          span Ejemplo de ficha técnica para horno de convección a gas (Referencia WGCO-613)
        .tabla-a.color-secundario.tabla-a--text-left
          table
            caption Nota. Adaptado de Horno de convección Wellmix. Referencia: WGCO-613: ficha técnica, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Campo
                th Especificación
            tbody
              tr(style="background-color: #EAF1FA")
                td Marca 
                td WELLMIX (Pallomaro S.A.) 
              tr
                td Modelo / Referencia
                td WGCO-613
              tr(style="background-color: #EAF1FA")
                td Tipo de horno 
                td Horno de convección a gas con controles eléctricos 
              tr
                td Material de construcción 
                td Acero inoxidable 430 
              tr(style="background-color: #EAF1FA")
                td Dimensiones externas (ancho × fondo × alto) 
                td 96.5 cm × 112 cm × 151 cm 
              tr
                td Peso aproximado 
                td 255 kg 
              tr(style="background-color: #EAF1FA")
                td Rango de temperatura 
                td 0 – 295 °C (0 – 563 °F) 
              tr
                td Voltaje 
                td 110 V / 60 Hz 
              tr(style="background-color: #EAF1FA")
                td Potencia eléctrica del motor 
                td 373 W (1/2 HP) 
              tr
                td Potencia térmica (gas) 
                td 54.000 BTU/H (3 quemadores de 18.000 BTU/H c/u) 
              tr(style="background-color: #EAF1FA")
                td Tipo de gas 
                td Gas natural (incluye 3 chicleres para gas propano) 
              tr
                td Entrada de gas 
                td ¾″ 
              tr(style="background-color: #EAF1FA")
                td Velocidades del motor 
                td ALTA (1725 RPM) / BAJA (1140 RPM) 
              tr
                td Modos del ventilador 
                td <em>COOK</em> (se detiene al abrir puertas) / <em>COOL</em> (funciona con puertas abiertas) 
              tr(style="background-color: #EAF1FA")
                td Temporizador 
                td 0 – 60 minutos (solo aviso audible, no apaga el equipo) 
              tr
                td Iluminación interior 
                td Luz halógena con interruptor independiente 
              tr(style="background-color: #EAF1FA")
                td Puertas 
                td Batientes con vidrio de alto impacto 
              tr
                td Accesorios incluidos 
                td 4 parrillas, 3 chicleres para propano, 4 patas con ruedas y frenos, chimenea, manual de instrucciones, calcomanía de placa técnica 


    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Procedimiento de operación paso a paso (amasadora y horno)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p El procedimiento de operación de equipos establece las acciones necesarias para garantizar el uso adecuado, seguro y eficiente de la maquinaria empleada en los procesos productivos. Su correcta aplicación permite optimizar el rendimiento del equipo, prevenir riesgos laborales y asegurar la calidad del producto final. 
        .p-4.py-3.bg-secundario-s5.rounded-3.mb-3.mb-lg-0
          p.mb-0 Antes de poner en funcionamiento cualquier equipo de panadería, deben realizarse las verificaciones generales de seguridad. Estas consisten en confirmar que el equipo esté ubicado sobre una superficie plana y estable, que el tomacorriente sea exclusivo, se encuentre en buen estado y disponga de polo a tierra, que el cable de alimentación no presente deterioro y que las piezas móviles, como el tazón y el gancho, estén correctamente instaladas y funcionen adecuadamente.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="zoom-in-down", src="@/assets/curso/tema5/8.png", alt="")
    
    p.mb-4.mb-lg-5 A continuación, se describe el procedimiento específico para la operación de la amasadora industrial de espiral, con base en las recomendaciones del fabricante.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 10.
          span Pasos de operación para amasadora industrial Tornado HS20Z.
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: manual de instrucciones, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Paso
                th Acción
                th Recomendaciones
            tbody
              tr(style="background-color: #EAF1FA")
                td #[strong 1. Preparación del equipo] 
                td Conecte la amasadora a una toma de 110 V con polo a tierra, verifique que el botón de parada de emergencia esté desactivado y programe el temporizador según el tiempo requerido. 
                td Compruebe que el equipo se encuentre en buen estado antes de iniciar la operación. 
              tr
                td #[strong 2. Carga de ingredientes]
                td Coloque en el tazón la harina, la masa madre, el agua y los demás ingredientes de la formulación.
                td No exceda la capacidad máxima del equipo para evitar sobrecargas y garantizar un amasado uniforme. 
              tr(style="background-color: #EAF1FA")
                td #[strong 3. Inicio del amasado]
                td Inicie el proceso utilizando la velocidad baja para integrar los ingredientes y, cuando la masa sea homogénea, continúe con la velocidad alta para desarrollar el gluten. 
                td Nunca cambie de velocidad mientras el equipo esté en funcionamiento; deténgalo antes de realizar cualquier ajuste. 
              tr
                td #[strong 4. Operación segura]
                td Supervise el funcionamiento de la amasadora durante el ciclo de mezclado.
                td No introduzca las manos ni utensilios dentro del tazón mientras el equipo esté en movimiento. Si necesita retirar masa adherida, detenga el equipo y utilice únicamente un raspador de plástico. 
              tr(style="background-color: #EAF1FA")
                td #[strong 5. Finalización del proceso]
                td Espere a que concluya el tiempo programado o presione el botón de parada. Posteriormente, apague el equipo, desconéctelo de la corriente y retire la masa del tazón. 
                td Desconectar el equipo evita arranques accidentales durante la manipulación y la limpieza. 
              tr
                td #[strong 6. Limpieza del equipo]
                td Retire los residuos de masa del gancho y del tazón y realice la limpieza inmediata de la amasadora. 
                td Utilice un paño húmedo y un raspador de plástico. No emplee agua a presión, utensilios metálicos ni productos químicos corrosivos. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Operación segura del horno de convección Tornado WGCO-613

    img(src="@/assets/curso/tema5/9.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--secundario
          p.mb-0 Antes de poner en funcionamiento el horno de convección, al igual que con la amasadora industrial, deben realizarse las verificaciones generales de seguridad. Para ello, se deben seguir los siguientes pasos:

    PasosA.color-primario.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-9.mb-4.mb-lg-0
          h3 Preparación y conexión del equipo
          p Conecte el horno a una toma eléctrica de 110 V con polo a tierra y abra la válvula de paso de gas. Compruebe que el piloto verde se encienda, pues indica que el equipo se encuentra energizado.
          p.mb-0 #[strong Recomendación de seguridad]: antes de iniciar, verifique que no existan daños en el cable, el tomacorriente, las conexiones o la instalación de gas.
        .col-sm-4.col-lg-2
          figure
            img.imgw-120(src='@/assets/curso/tema5/10.png', alt='')

      .row.justify-content-center.align-items-center
        .col-sm-2.mb-4.mb-lg-0
          figure
            img.imgw-80(src='@/assets/curso/tema5/11.png', alt='')
        .col-lg-9
          h3 Encendido y selección del modo de ventilación
          p Coloque el interruptor general en posición ON. El ventilador comenzará a funcionar. Luego, seleccione el modo requerido:
          p.mb-0 #[strong #[em COOK]]: el ventilador se detiene cuando se abren las puertas.
          p #[strong #[em COOL]]: el ventilador permanece en funcionamiento y facilita el enfriamiento.
          p.mb-0 #[strong Recomendación de seguridad]: seleccione el modo antes de introducir el producto y evite acercar las manos al ventilador.

      .row.justify-content-center.align-items-center
        .col-lg-9.mb-4.mb-lg-0
          h3 Programación de la cocción
          p Ajuste el temporizador entre 0 y 60 minutos, seleccione la temperatura requerida sin superar los 295 °C y establezca la velocidad del motor:
          p.mb-0 #[strong Baja, 1140 rpm]: para cocciones suaves o productos delicados.
          p #[strong Alta, 1725 rpm]: para mayor circulación de aire o dorado rápido.
          p El piloto naranja permanece encendido mientras funcionan los quemadores y se apaga cuando el horno alcanza la temperatura seleccionada. 
          p.mb-0 #[strong Importante]: el temporizador emite una alarma, pero no apaga automáticamente el horno.
        .col-sm-4.col-lg-2
          figure
            img.imgw-105(src='@/assets/curso/tema5/12.png', alt='')

      .row.justify-content-center.align-items-center
        .col-sm-4.col-lg-2.mb-4.mb-lg-0
          figure
            img.imgw-105(src='@/assets/curso/tema5/13.png', alt='')
        .col-lg-9
          h3 Control durante la cocción
          p Utilice la luz halógena para observar el producto a través del vidrio y evite abrir las puertas innecesariamente. En modo #[em COOK], la apertura de las puertas detiene automáticamente el ventilador y los quemadores; el funcionamiento se reanuda cuando se cierran.
          p.mb-0 #[strong Recomendación de seguridad]: emplee guantes térmicos y mantenga una distancia prudente al abrir el horno para evitar quemaduras por calor o vapor.

      .row.justify-content-center.align-items-center
        .col-lg-9.mb-4.mb-lg-0
          h3 Apagado, desconexión y limpieza
          p Al finalizar la cocción, gire el termostato hasta 0 y espere a que el piloto naranja se apague. Después, coloque el interruptor general en OFF, cierre la válvula de gas y desconecte el horno de la corriente eléctrica antes de limpiarlo.
          p Limpie diariamente la cámara de cocción con una espátula plástica o un paño húmedo, de acuerdo con las indicaciones del fabricante. Para el exterior, utilice únicamente un paño húmedo.
          p.mb-0 #[strong No utilice]: chorros de agua, elementos abrasivos, productos ácidos ni soda cáustica.
        .col-sm-4.col-lg-2
          figure
            img.imgw-105(src='@/assets/curso/tema5/14.png', alt='')

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Dispositivos de seguridad y mantenimiento preventivo

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los equipos industriales están diseñados con dispositivos de seguridad que reducen el riesgo de atrapamiento, quemaduras, descargas eléctricas e incendios. Es obligatorio verificar su correcto funcionamiento antes de cada jornada y nunca anularlos o modificarlos.

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 11.
          span Dispositivos de seguridad en la amasadora Tornado HS20Z
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Tornado Amasadora HS20Z: manual de instrucciones, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Dispositivo 
                th Función 
                th Verificación 
            tbody
              tr(style="background-color: #EAF1FA")
                td Botón de parada de emergencia (#[em emergency stop]) 
                td Detiene inmediatamente el movimiento del gancho y del tazón al ser presionado. 
                td Hacer presión antes de cada uso para confirmar que detiene el equipo. Debe ser de fácil acceso y color rojo. 
              tr
                td Guarda de seguridad (tapa o protector) 
                td Impide el acceso al tazón mientras el equipo está en movimiento. Algunos modelos tienen interruptor de enclavamiento que detiene el equipo si se abre la guarda. 
                td Verificar que la guarda cierre correctamente y que el equipo no arranque si está abierta. 
              tr(style="background-color: #EAF1FA")
                td Protector térmico del motor 
                td Desconecta automáticamente el motor si se sobrecalienta por sobrecarga o uso prolongado. 
                td Si el equipo se apaga repentinamente, esperar 15-20 minutos antes de reiniciar. Revisar la capacidad de carga. 
              tr
                td Base antideslizante o patas con ventosa 
                td Evita que el equipo se desplace durante el amasado. 
                td Asegurar que las patas estén en buen estado y el equipo esté nivelado. 

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 12.
          span Dispositivos de seguridad en el horno de convección Tornado WGCO-613
        .tabla-a.color-secundario.tabla-a--text-left.mb-5
          table
            caption Nota. Adaptado de Horno de convección Wellmix. Referencia: WGCO-613: manual de instrucciones, (2026). 
            thead
              tr(style="background-color: #E7F2E7")
                th Dispositivo 
                th Función 
                th Verificación 
            tbody
              tr(style="background-color: #EAF1FA")
                td Interruptor de puerta (en modo #[em COOK]) 
                td Detecta si la puerta está abierta y detiene automáticamente los quemadores y el ventilador. 
                td Abrir la puerta durante el funcionamiento en modo #[em COOK] y comprobar que el ventilador y los quemadores se detengan. 
              tr
                td Termostato de seguridad (límite de temperatura) 
                td Corta el suministro de gas o la resistencia si la temperatura supera el límite seguro (Ej. 300°C). 
                td No se prueba diariamente; se verifica anualmente por servicio técnico. 
              tr(style="background-color: #EAF1FA")
                td Válvula de seguridad de gas 
                td Cierra el paso de gas si la llama se apaga o si hay falta de ventilación. 
                td Verificar que el piloto naranja se encienda cuando los quemadores estén activos. 
              tr
                td Aislamiento térmico en puertas y manijas 
                td Reduce la temperatura de la superficie externa para evitar quemaduras accidentales. 
                td Inspeccionar visualmente que no haya roturas en el aislamiento. 
              tr(style="background-color: #EAF1FA")
                td Ruedas con freno 
                td Permite fijar el horno en su posición para que no se desplace. 
                td Presionar los frenos después de ubicar el horno. 

    .bg-secundario-s5.p-4.py-2.mb-5.rounded-4
      .row.justify-content-center.align-items-center
        .col-sm-4.col-lg-2
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema5/16.png", alt="" data-aos="zoom-in-down")
        .col-lg-10
          p.mb-0 La operación segura de los equipos de panadería no depende únicamente de su correcto uso, sino también de la implementación de un programa de mantenimiento preventivo que permita conservar su funcionamiento, prolongar su vida útil y reducir el riesgo de fallas durante la producción. La limpieza, la inspección periódica y el mantenimiento realizado conforme a las recomendaciones del fabricante, junto con el registro de las actividades ejecutadas, contribuyen a garantizar procesos eficientes, seguros y acordes con las Buenas Prácticas de Manufactura (BPM). 



</template>

<script>
export default {
  name: 'Tema5',
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
