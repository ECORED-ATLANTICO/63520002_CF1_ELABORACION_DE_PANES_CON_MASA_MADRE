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
        .cajon.color-terciario.p-4.mb-4.mb-lg-0
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
                td Uso de gorro que cubra completamente el cabello y, cuando aplique, cubre barba.
              tr
                td Fragmentos de vidrio (envases rotos)
                td Prohibición del uso de recipientes de vidrio en el área de producción y retiro inmediato de los elementos rotos.
              tr(style="background-color: #EAF1FA")
                td Virutas de metal (raspadores desgastados, mallas de harina)
                td Mantenimiento preventivo e inspección periódica de equipos y utensilios; reemplazo de los elementos deteriorados.
              tr
                td Piedras o terrones duros (presentes en harina de baja calidad)
                td Inspección y tamizado de la harina antes de su utilización, además de la adquisición de materias primas de proveedores confiables.
              tr(style="background-color: #EAF1FA")
                td Plásticos (fragmentos de guantes, envolturas)
                td Manipulación adecuada de los empaques, revisión del estado de los guantes y retiro de residuos plásticos antes de iniciar la producción.
              tr
                td Insectos o partes de insectos
                td Implementación de un programa de control integrado de plagas y protección de las materias primas en recipientes cerrados.
              tr(style="background-color: #EAF1FA")
                td Madera (astillas de paletas o canastas de fermentación dañadas)
                td Inspección periódica de los utensilios de madera y reemplazo de aquellos que presenten grietas, astillas o deterioro.

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
            caption Nota. SENA, (2026).
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

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Pautas para el control de temperatura

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-8.col-xl-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a20")
          div(titulo="Evitar la zona de peligro")
            p.mb-0.ps-lg-5 Las masas no deben permanecer por tiempos prolongados entre 5 °C y 60 °C, ya que en este rango los microorganismos pueden multiplicarse rápidamente.
          div(titulo="Controlar la fermentación")
            p.mb-0.ps-lg-5 Si la fermentación supera las 4 horas, es recomendable realizarla bajo refrigeración entre 4 °C y 5 °C.
          div(titulo="Verificar la temperatura")
            p.mb-0.ps-lg-5 Utilice un termómetro de sonda calibrado para controlar la temperatura durante la fermentación y registrar las mediciones.
          div(titulo="Enfriar correctamente el pan")
            p.mb-0.ps-lg-5 Después del horneado, deje enfriar el pan sobre rejillas hasta alcanzar la temperatura ambiente antes de empacarlo.
          div(titulo="Almacenar adecuadamente")
            p.mb-0.ps-lg-5 Conserve el pan en un lugar limpio, seco y protegido de la humedad y la luz solar directa.

    .bg-terciario-t5.rounded-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .p-4.py-3
            h5 Ejemplo aplicado
            p.mb-4.mb-lg-0 Un panadero deja una masa fermentando durante toda la noche a temperatura ambiente para intensificar su sabor. Aunque la fermentación continúa, el tiempo prolongado dentro de la zona de peligro favorece la multiplicación de microorganismos y puede afectar la inocuidad del producto. Para prevenir este riesgo, es recomendable realizar las fermentaciones prolongadas bajo refrigeración y controlar periódicamente la temperatura de la masa.
        .col-5.col-sm-4.col-lg-2
          figure
            img.imgw-160(src="@/assets/curso/tema3/11.png", alt="")

    .p-4.py-3.bg-secundario-s10.rounded-4
      p.mb-0.text-center El control de la temperatura durante la fermentación, el enfriamiento y el almacenamiento constituye una medida preventiva esencial para obtener panes seguros, de buena calidad y con las características propias de la masa madre.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Prevención de la contaminación cruzada en la elaboración de pan de masa madre

    img(src="@/assets/curso/tema3/9.png", alt="" data-aos="fade-up")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La contaminación cruzada ocurre cuando microorganismos patógenos se transfieren de un alimento contaminado (generalmente crudo) a otro que no lo está, a través de utensilios, superficies, manos o aire, es recomendable seguir estas pautas:

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Separación física de procesos (crudo vs cocido)

    .p-4.py-3.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center En una panadería, se deben distinguir claramente las zonas de trabajo esto evita la contaminación:

    .row.align-items-stretch.justify-content-center.mb-4
      .col-sm-10.col-lg-6.col-xl-5.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema3/13.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Zona sucia (o zona de materias primas y masas crudas): donde se recibe la harina, se pesan los ingredientes, se amasa y se fermenta.
      .col-sm-10.col-lg-6.col-xl-5.mb-4.mb-lg-0
        .tarjeta-avatar-b.h-100.position-relative
          .tarjeta-avatar-b__img
            img.top-position(src='@/assets/curso/tema3/14.svg' alt='')
          .tarjeta.bg-primario-p10.h-100
            .p-4.ps-5.h-100
              p.mb-0 Zona limpia (o zona de producto terminado): donde se enfría, empaca y almacena el pan horneado.

    p.mb-4.mb-lg-5 Idealmente, estas zonas deben estar separadas por una pared o al menos por una distancia mínima de 3 metros, con flujo de personal y materiales unidireccional (nunca llevar pan horneado a la zona sucia).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Segregación de utensilios (uso de colores)

    .p-4.py-3.bg-primario-p10.rounded-4.py-xl-1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-4.mb-lg-0 Este es un elemento importante para evitar la contaminación cruzada, ya que el uso de utensilios de diferentes colores durante la etapa de elaboración de panes con masa madre, favorecen orden y una prevención para la calidad del producto.
        .col-5.col-sm-4.col-lg-2
          figure
            img.imgw-85(src="@/assets/curso/tema3/15.svg", alt="")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo.color-terciario
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon-2.svg")
        h3.titulo-con-imagen__texto Ejemplo de segregación de utensilios para prevenir la contaminación cruzada

    .row.justify-content-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/17.png", alt="alt")
          .crd_hover_txt--body.px-0.crd_hover_txt--body--custom
            h4.mb-0 Utensilios para masas crudas
            h4.mb-4 Color de identificación: verde
            p.mb-0.px-4 Se destinan exclusivamente a la manipulación de masas antes del horneado. Su uso exclusivo evita que microorganismos presentes en materias primas entren en contacto con productos listos para el consumo.

      .col-sm-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/16.png", alt="alt")
          .crd_hover_txt--body.px-0.crd_hover_txt--body--custom
            h4.mb-0 Utensilios para pan horneado
            h4.mb-4 Color de identificación: rojo
            p.mb-0.px-4 Se utilizan únicamente para manipular panes ya horneados o productos listos para el consumo. No deben emplearse nuevamente sobre masas crudas.

      .col-sm-8.col-lg-6.col-xl-4
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/18.png", alt="alt")
          .crd_hover_txt--body.px-0.crd_hover_txt--body--custom
            h4.mb-0 Implementos de limpieza
            h4.mb-4 Color de identificación: azul
            p.mb-0.px-4 Corresponde a escobas, cepillos y demás implementos destinados a la limpieza. Estos elementos nunca deben utilizarse para manipular alimentos.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .bg-primario-p20.rounded-4.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-lg-2
              figure
                img.imgw-80.mb-4.mb-lg-0(src="@/assets/curso/tema3/19.svg", alt="")
            .col-lg-10
              h5 Importante: 
              p.mb-0 La codificación por colores puede variar entre establecimientos. Lo importante es que cada empresa defina un sistema de identificación, lo documente y garantice que todo el personal lo conozca y lo aplique correctamente.

    .p-4.py-3.bg-secundario-s5.rounded-4.mb-4
      p.mb-0.text-center Lo invitamos a consultar el siguiente pódcast para profundizar sobre los procedimientos de limpieza, desinfección y registro en la panadería de masa madre. 

    <!-- PODCAST-->

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Aplicación del flujo de producción unidireccional

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este elemento indica que el área de trabajo debe ser diseñada bajo un estricto orden de producción unidireccional, es decir, que cada paso debe ir hacia adelante y nunca retroceder, este principio cumple con el correcto proceso en la elaboración de panes con masa madre. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo.color-terciario
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon-2.svg")
        h3.titulo-con-imagen__texto Etapas del flujo de producción unidireccional de panes con masa madre

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/21.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .bg-contenido-a5.p-4
          SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
            div.py-lg-3
              h4 Recepción y almacenamiento de materias primas
              p.mb-0 Recepcione los ingredientes verificando su calidad y almacénelos en condiciones adecuadas de higiene, temperatura y humedad.
            div.py-lg-3
              h4 Pesado de ingredientes
              p.mb-0 Dosifique los ingredientes según la formulación establecida para garantizar la estandarización del producto.
            div.py-lg-3
              h4 Amasado
              p.mb-0 Mezcle los ingredientes hasta obtener una masa homogénea con el desarrollo adecuado del gluten.
            div.py-lg-3
              h4 Fermentación de la masa
              p.mb-0 Permita que la masa fermente bajo condiciones controladas de tiempo y temperatura para favorecer su desarrollo.
            div.py-lg-3
              h4 División y moldeado
              p.mb-0 Porcione la masa y dele la forma requerida según el tipo de pan que se desea elaborar.
            div.py-lg-3
              h4 Horneado
              p.mb-0 Hornee el producto a la temperatura y durante el tiempo establecidos para lograr una cocción uniforme.
            div.py-lg-3
              h4 Enfriamiento
              p.mb-0 Deje enfriar el pan sobre rejillas limpias hasta alcanzar la temperatura ambiente antes de empacarlo.
            div.py-lg-3
              h4 Empaque y almacenamiento
              p.mb-0 Empaque el producto en materiales adecuados y almacénelo en un lugar limpio, seco y protegido hasta su distribución.

    .bg-secundario-s5.rounded-4.p-4.py-xl-1
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-4.mb-lg-0 Este proceso unidireccional no debe ser saltado, ni cruzado: por ejemplo, no pasar pan horneado por encima de la zona de amasado, saltar un paso, supone un riesgo tanto de contaminación como de una mala calidad del producto. 
        .col-3.col-lg-2
          figure
            img.imgw-80(src="@/assets/curso/tema3/22.svg", alt="")

















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
