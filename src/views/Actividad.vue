<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificando las Buenas Prácticas de Manufactura en la elaboración de panes con de masa madre.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar y reforzar su capacidad para identificar los conceptos clave de las Buenas Prácticas de Manufactura (BPM), la normativa sanitaria, las prácticas higiénicas, la prevención de la contaminación, el uso de equipos y utensilios, los agentes de limpieza y desinfección, los POES y los registros, aplicados a la elaboración de panes con masa madre. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Las Buenas Prácticas de Manufactura (BPM) son un conjunto de normas, principios y procedimientos que, según la Resolución 2674 de 2013, tienen un carácter:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Voluntario, recomendado para mejorar la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Obligatorio para todas las empresas productoras de alimentos en Colombia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivo para grandes industrias alimentarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicable únicamente a productos de origen animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las BPM son de obligatorio cumplimiento para cualquier empresa o entidad productora de alimentos, según lo establece la Resolución 2674 de 2013.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El lavado de manos en el área de producción de una panadería debe realizarse:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente al iniciar la jornada y después de ir al baño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo al finalizar la jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cada hora, independientemente de las actividades realizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Según los siete momentos establecidos por las BPM.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Bien. El correcto lavado de manos debe hacerse de acuerdo con los siete momentos establecidos, que incluyen: al ingresar, después de ir al baño, después de manipular dinero o basura, entre otros.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La "zona de peligro" para el crecimiento bacteriano se encuentra entre:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '80° C y 100° C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '60° C y 80° C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5° C y 60° C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '0° C y 5° C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. En ese rango de temperatura (5°C a 60°C) las bacterias patógenas se multiplican rápidamente, pudiendo duplicarse cada 20-30 minutos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'En cuanto al uso de utensilios de madera en la panadería, la normativa sanitaria establece que:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se permiten en áreas de pan horneado si están sellados con resina apta para contacto con alimentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo se permiten si son de madera tratada con productos químicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Están permitidos sin restricciones en todas las áreas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Están totalmente prohibidos en cualquier área de la panadería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, la madera es un material poroso y difícil de desinfectar, por lo que su uso se encuentra restringido.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El hipoclorito de sodio (cloro) como desinfectante en superficies alimentarias se utiliza a una concentración de:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10-20 ppm, sin tiempo de contacto requerido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '50-80 ppm, con tiempo de contacto de 2 minutos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '100-200 ppm, con tiempo de contacto de 5 a 10 minutos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '500-1000 ppm, con tiempo de contacto de 1 minuto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. El hipoclorito de sodio se usa a 100-200 ppm con un tiempo de contacto de 5 a 10 minutos para garantizar la eliminación de microorganismos patógenos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'En un POES (Procedimiento Operativo Estandarizado de Saneamiento), el orden correcto de las operaciones es:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo se realiza desinfección, ya que la limpieza no es necesaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desinfección primero, luego limpieza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limpieza primero, luego desinfección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ambos procesos se realizan simultáneamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, primero se debe limpiar para eliminar la suciedad visible y luego desinfectar.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La norma sanitaria vigente en Colombia para la fabricación de alimentos es:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución 2674 de 2013.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 9 de 1979.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'NTC-ISO 22000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 3075 de 1997.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La Resolución 2674 de 2013 derogó parcialmente el Decreto 3075 de 1997 y es actualmente la norma de obligatorio cumplimiento para todas las personas que elaboran, distribuyen y comercializan alimentos en Colombia.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El uso de guantes de nitrilo o látex en la manipulación de alimentos:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Está prohibido en áreas de producción de panadería.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No es necesario si se lavan las manos correctamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituye completamente el lavado de manos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es un complemento, pero no reemplaza el lavado de manos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Los guantes no reemplazan el lavado de manos. Son un complemento para ciertas tareas y deben cambiarse con frecuencia.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Para eliminar las esporas de Bacillus cereus presentes en la harina, el pan de masa madre debe alcanzar en su centro una temperatura interna de:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '100°C o superior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '94° C o superior.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '75° C.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '60° C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Esa temperatura inactiva las esporas del patógeno.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En los registros de limpieza y desinfección, cuando se comete un error al diligenciar:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se puede usar corrector líquido para borrar el error.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se debe tachar con una línea horizontal, escribir el dato correcto al lado y firmar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se debe romper el formato y diligenciar uno nuevo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No se puede corregir ningún error en los registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'No. Nunca use corrector. Tache, escriba el dato correcto y firme.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Usar el mismo raspador para manipular masa cruda y pan horneado sin limpiarlo previamente:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No representa ningún riesgo si el pan se hornea después.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es una práctica aceptable si se hace rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo es riesgoso si el pan no se va a hornear.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Causa contaminación cruzada, transfiriendo microorganismos de un alimento a otro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Así se transfieren microorganismos de un alimento a otro, lo que puede presentar contaminación cruzada y transmitir enfermedades.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'El botón de parada de emergencia (emergency stop) en la amasadora industrial se utiliza para:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar la velocidad de amasado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Detener inmediatamente el equipo en caso de peligro o emergencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Iniciar el ciclo de amasado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programar el temporizador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El botón emergency stop es el indicado para detener la amasadora en caso de emergencia y peligro.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La cámara de fermentación, según el POES establecido, debe desinfectarse semanalmente con ácido peracético a una concentración de:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '500 ppm, sin necesidad de enjuague.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '300 ppm, con tiempo de contacto de 10 minutos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '150 ppm, con tiempo de contacto de 5 minutos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '50 ppm, con tiempo de contacto de 2 minutos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Esa es la frecuencia y concentración indicadas en el POES. Para la desinfección de la cámara de fermentación.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'En el modo COOK del horno de convección WGCO-613, el ventilador y los quemadores:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se detienen automáticamente al abrir las puertas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Funcionan siempre, incluso con las puertas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo se detienen si se presiona el botón de emergencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No tienen relación con la apertura de puertas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'No. En modo COOK, el ventilador se detiene al abrir puertas; en COOL funciona siempre.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La Ley 9 de 1979, conocida como el Código Sanitario Nacional, en el contexto de la normativa alimentaria colombiana:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fue derogada completamente por la Resolución 2674 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es una norma voluntaria de carácter internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo aplica a productos de origen animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sigue vigente y es la norma marco que establece las disposiciones sanitarias generales para alimentos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Sigue vigente y es la norma marco (código sanitario nacional).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El flujo de producción unidireccional en una panadería de masa madre establece que:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El pan horneado puede pasar por encima de la zona de amasado para agilizar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se puede trabajar en cualquier dirección siempre que se limpie al final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las áreas de trabajo deben organizarse para que el producto avance sin retroceder ni cruzar zonas de diferente riesgo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solo aplica a productos de repostería, no a panes de masa madre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'No. El flujo unidireccional evita cruzar áreas; no se debe pasar pan horneado sobre la zona de amasado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El amonio cuaternario como desinfectante, cuando se utiliza a una concentración de 200-400 ppm:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No requiere enjuague final, según la ficha técnica del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Siempre requiere enjuague final con agua potable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo se puede usar en superficies de acero inoxidable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No es efectivo contra bacterias patógenas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El amonio cuaternario, a diferencia del hipoclorito de sodio, no requiere enjuague final cuando se usa según las concentraciones recomendadas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El temporizador (timer) del horno de convección WGCO-613:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Apaga automáticamente el horno al llegar a cero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo emite una alarma audible al cumplirse el tiempo, pero no apaga el equipo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controla la temperatura del horno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No tiene función en el horno a gas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El temporizador solo emite una alarma al cumplirse el tiempo programado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La limpieza de la amasadora industrial debe realizarse:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Con manguera de agua a presión para una limpieza más profunda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Con paño húmedo, detergente neutro y esponja suave, sin usar chorros de agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Con productos ácidos para eliminar residuos de masa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sumergiendo el tazón en una tina con desinfectante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, debe usarse un paño húmedo, detergente neutro y una esponja suave para la limpieza de una amasadora industrial.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Según las pautas de enfriamiento para pan de masa madre, un pan de 500 g de peso requiere aproximadamente:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5 horas de enfriamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '3 horas de enfriamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1.5 horas de enfriamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '30 minutos de enfriamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Un pan de 500 g requiere aproximadamente 1.5 horas de enfriamiento sobre rejilla en un ambiente limpio y con circulación de aire.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo. ',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
