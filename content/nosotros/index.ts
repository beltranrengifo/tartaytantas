import { SHOP_URL, GOOGLE_PAGE } from '@/config/constants'
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
          width: '2/3',
          height: '3/4-screen',
          align: 'center',
          extraClasses: '',
        },
      },
      {
        name: 'text-block',
        options: {
          content: nosotros,
          decoration: false,
          decorationColor: 'white',
          tag: 'article',
          isParagraph: true,
          width: '1/3',
          height: '3/4-screen',
          contentWidth: 'md',
          background: 'secondary',
          color: 'white',
          extraClasses: 'parallax-item text-base',
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
              link: SHOP_URL,
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
]
