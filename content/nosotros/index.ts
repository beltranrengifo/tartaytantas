import { GOOGLE_PAGE } from '@/config/constants'
import nosotros from '@/content/nosotros/nosotros.txt'

export default [
  /* nosotros */
  {
    name: 'nosotros',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'image-block',
        options: {
          image: 'nosotros.jpg',
          imageAlt:
            'Apostamos por la calidad en la materia prima y el diseño de pasteles con un aspecto sencillo pero cuidado.',
          width: 'w-full lg:w-2/3',
          height: 'h-3/4-screen',
          align: 'object-center',
          extraClasses: '',
        },
      },
      {
        name: 'text-block',
        options: {
          content: nosotros,
          decoration: false,
          tag: 'article',
          isParagraph: true,
          width: 'w-full lg:w-1/3',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-md',
          background: 'bg-secondary',
          color: 'text-white',
          extraClasses: 'parallax-item text-base py-20 sm:py-0',
        },
      },
    ],
  },
  {
    name: 'cta',
    options: {
      fullwidth: true,
    },
    components: [
      {
        name: 'call-to-action',
        options: {
          buttons: [
            {
              text: 'ENCARGA TU TARTA AQUÍ',
              target: '_blank',
            },
            {
              text: 'DÓNDE ESTAMOS',
              link: GOOGLE_PAGE,
              target: '_blank',
            },
          ],
        },
      },
    ],
  },
  /* cakes */
  {
    name: 'cakes',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'image-block',
        options: {
          image: 'nosotros-muestras-de-tartas.jpg',
          imageAlt: 'Composición de tartas inspirada en Wayne Thiebaud.',
          width: 'md:w-1/1',
          height: 'h-1/2-screen',
          align: 'object-top',
          extraClasses: 'reveal zoom-out',
        },
      },
    ],
  },
]
