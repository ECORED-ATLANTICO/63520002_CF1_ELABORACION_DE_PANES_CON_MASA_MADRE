export default {
  global: {
    Name: 'BPM y procedimientos de limpieza y desinfección en panadería',
    Description:
      'Este componente formativo desarrolla los fundamentos y la aplicación práctica de las Buenas Prácticas de Manufactura (BPM) en la elaboración de panes con masa madre. Aborda la normativa sanitaria, las prácticas higiénicas del personal, la prevención de la contaminación, el manejo seguro de utensilios y equipos, la correcta utilización de agentes de limpieza y desinfección, y los sistemas de registro y control, garantizando la inocuidad del producto final. ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las Buenas Prácticas de Manufactura (BPM)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto e importancia de las BPM en la elaboración de panes con masa madre ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Normativa sanitaria aplicable en Colombia para la elaboración de panes con masa madre ',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Prácticas higiénicas y medidas de protección del personal manipulador ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Requisitos del manipulador, estado de salud y hábitos de higiene ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Uniforme, elementos de protección personal y comportamiento en el área ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Lavado de manos: momentos, técnica correcta y verificación ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Capacitación continua y registro de inducción ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Contaminación de los alimentos: riesgos y prevención en la panadería ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Concepto y tipos de contaminación: física, química y biológica ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Pautas de conservación y control de temperatura (zona de peligro, fermentación, enfriamiento) ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Prevención de la contaminación cruzada en la elaboración de pan de masa madre ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Utensilios y superficies de trabajo en la panadería artesanal ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Tipos, características y materiales permitidos y prohibidos ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Fichas técnicas y prácticas de uso seguro ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Equipos de panadería: operación y manejo seguro ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de equipos (amasadoras, hornos, cámaras y otros) ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fichas técnicas de equipos ',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Procedimiento de operación paso a paso (amasadora y horno) ',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Dispositivos de seguridad y mantenimiento preventivo ',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Agentes de limpieza y desinfección ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de detergentes y desinfectantes ',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Concentraciones, diluciones y tiempos de contacto ',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Manejo ambiental, fichas de seguridad y precauciones ',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Procedimientos Operativos Estandarizados de Saneamiento (POES) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Definición, estructura y diferencia entre limpieza y desinfección ',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'POES para equipos de panadería ',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Registros y control en el programa de saneamiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo:
              'Tipos de registros, métodos y protocolo de diligenciamiento ',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Formatos de registro (limpieza, soluciones, higiene, plagas) ',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Archivo y retención de documentos ',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63520002_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amonios cuaternarios',
      significado:
        'Desinfectantes químicos utilizados para reducir microorganismos en superficies previamente limpias. Su concentración, tiempo de contacto y necesidad de enjuague deben corresponder con las indicaciones del fabricante.',
    },
    {
      termino: '<em>Bacillus cereus</em>',
      significado:
        'Bacteria patógena formadora de esporas que puede estar presente en harinas y otros alimentos. Algunas cepas producen toxinas capaces de causar enfermedades transmitidas por alimentos.',
    },
    {
      termino: 'Buenas Prácticas de Manufactura (BPM)',
      significado:
        'Conjunto de principios, normas y procedimientos aplicados durante la fabricación, preparación, almacenamiento y distribución de alimentos para garantizar su calidad e inocuidad.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos, sustancias químicas o materiales extraños desde un alimento, superficie, utensilio o persona hacia otro alimento.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso físico o químico aplicado sobre superficies previamente limpias para reducir los microorganismos hasta niveles que no representen un riesgo para la inocuidad.',
    },
    {
      termino: 'Elementos de Protección Personal (EPP)',
      significado:
        'Prendas, equipos y accesorios utilizados para proteger al trabajador frente a riesgos asociados con su actividad, como guantes, gafas, delantales y botas.',
    },
    {
      termino: 'Enfermedades Transmitidas por Alimentos (ETA)',
      significado:
        'Enfermedades originadas por el consumo de alimentos o bebidas contaminados con microorganismos, sustancias químicas o toxinas.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento que presenta las características, especificaciones, condiciones de uso, mantenimiento y recomendaciones de seguridad de un equipo, utensilio o producto.',
    },
    {
      termino: 'Hipoclorito de sodio',
      significado:
        'Compuesto químico a base de cloro utilizado como desinfectante. Su concentración y tiempo de contacto deben ajustarse al tipo de superficie y a las indicaciones del fabricante.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Garantía de que un alimento no causará daño al consumidor cuando se prepare y consuma de acuerdo con el uso previsto.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Proceso mediante el cual se eliminan suciedad, residuos de alimentos, grasa y otras sustancias visibles con ayuda de agua, detergentes y acción mecánica.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'Persona que, debido a su actividad laboral, tiene contacto directo con los alimentos, equipos, utensilios o superficies utilizadas durante su preparación.',
    },
    {
      termino: 'Moho',
      significado:
        'Tipo de hongo que puede desarrollarse en alimentos y superficies bajo condiciones favorables de humedad y temperatura. Algunas especies producen micotoxinas y alteran la calidad del pan.',
    },
    {
      termino: 'Partes por millón (ppm)',
      significado:
        'Unidad utilizada para expresar la concentración de una sustancia en una solución. En los procesos de saneamiento permite establecer la cantidad adecuada de un desinfectante.',
    },
    {
      termino: 'Primero en entrar, primero en salir (PEPS)',
      significado:
        'Método de rotación de inventarios mediante el cual los productos almacenados con mayor antigüedad deben utilizarse antes que los recibidos posteriormente.',
    },
    {
      termino: 'Procedimientos Operativos Estandarizados de Saneamiento (POES)',
      significado:
        'Documentos que describen de manera ordenada las actividades, responsables, productos, frecuencias y controles necesarios para realizar la limpieza y desinfección.',
    },
    {
      termino: 'Resolución 2674 de 2013',
      significado:
        'Norma sanitaria colombiana que establece requisitos para la fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos.',
    },
    {
      termino: '<em>Salmonella</em>',
      significado:
        'Género de bacterias patógenas que puede transmitirse por alimentos contaminados, especialmente huevos, materias primas o superficies, y causar salmonelosis.',
    },
    {
      termino: '<em>Staphylococcus aureus</em>',
      significado:
        'Bacteria que puede encontrarse en la piel, las manos y las vías respiratorias de las personas. Algunas cepas producen toxinas resistentes al calor que pueden ocasionar intoxicaciones alimentarias.',
    },
    {
      termino: 'Zona de peligro',
      significado:
        'Intervalo de temperatura, generalmente comprendido entre 5 °C y 60 °C, en el cual muchos microorganismos pueden multiplicarse con rapidez en los alimentos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Codex Alimentarius Commission. (s. f.). Codex Alimentarius. <em>Food and Agriculture Organization of the United Nations (FAO).</em>',
      link: 'https://openknowledge.fao.org/server/api/core/bitstreams/9b07ea51-1fa6-4b70-a05c-ffeb9586ae8b/content',
    },

    {
      referencia:
        'Congreso de la República de Colombia. (1979). <em>Ley 9 de 1979. Por la cual se dictan medidas sanitarias. Diario Oficial No. 35.308.</em>',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },

    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2016). <em>Sistemas de calidad e inocuidad de los alimentos: Manual de capacitación sobre higiene de los alimentos y sobre el sistema APPCC.</em>',
      link: '',
    },

    {
      referencia:
        'Gänzle, M. G. (2014). <em>Pan artesanal: Tecnología y elaboración. Editorial Acribia.</em>',
      link: '',
    },

    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). <em>Resolución 2674 de 2013. Por la cual se reglamenta el artículo 126 del Decreto-Ley 019 de 2012 y se dictan otras disposiciones.</em>',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },

    {
      referencia:
        'Organización Mundial de la Salud. (2020). <em>Inocuidad de los alimentos.</em>',
      link: 'https://www.who.int/es/news-room/fact-sheets/detail/food-safety',
    },

    {
      referencia:
        'Pallomaro S. A. (2026). <em>Ficha técnica y manual de instrucciones: Amasadora Tornado HS20Z.</em>',
      link: 'https://tienda.pallomaro.com/amasadoras/amasadora-de-20-litros-110v-r624',
    },

    {
      referencia:
        'Pallomaro S. A. (2026). <em>Ficha técnica y manual de instrucciones: Horno de convección a gas WGCO-613.</em>',
      link: 'https://tienda.pallomaro.com/hornos-conveccion/horno-de-conveccion-a-gas',
    },

    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2018). <em>Manipulación de alimentos: Cartilla didáctica. Repositorio SENA.</em>',
      link: 'https://repositorio.sena.edu.co/handle/11404/6543',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
