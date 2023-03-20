import { SHOP_URL, WHATSAPP_URL } from '~/config/constants'
import { getGridItemsFromCakes } from './getGridItems'

export default [
  /* hero */
  {
    name: 'hero',
    options: {
      fullwidth: true,
    },
    components: [
      {
        name: 'hero',
        options: {
          slides: [
            {
              image: 'tartaytantas-carousel-tartas-4.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: 'Nuestras tartas más famosas',
              contentTag: 'h1',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
            {
              image: 'tartaytantas-carousel-tartas-1.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: 'Nuestras tartas más famosas',
              contentTag: 'h1',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
            {
              image: 'tartaytantas-carousel-tartas-2.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: 'Nuestras tartas más famosas',
              contentTag: 'h1',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
          ],
        },
      },
    ],
  },
  /* featured */
  {
    name: 'featured',
    options: {
      fullwidth: true,
    },
    components: [
      {
        name: 'product-grid',
        options: {
          containerTailwind: 'pt-36 pb-20',
          imageDir: 'cakes-grid',
          hoverSuffix: '-hover',
          items: [...getGridItemsFromCakes()],
        },
      },
    ],
  },
  /* cta */
  {
    name: 'cta-1',
    options: {
      fullwidth: false,
      boxed: true,
      flex: true,
    },
    components: [
      {
        name: 'image-block',
        options: {
          containerTailwind: 'mt-36 mb-40',
          image: 'tartaytantas-carousel-tartas-1.webp',
          imageAlt: 'Composición de tartas inspirada en Wayne Thiebaud.',
          width: 'md:w-1/1',
          height: 'h-1/2-screen',
          align: 'object-bottom',
          extraClasses: 'reveal zoom-out',
          title: 'Ver más opciones',
          titleTag: 'h2',
          action: {
            label: 'Ir a la tienda',
            url: '/tartas',
            useSpaNavigation: true,
          },
        },
      },
    ],
  },
  /* cta */
  {
    name: 'cta-2',
    options: {
      flex: true,
    },
    components: [
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-cta-landing-bg.jpeg',
          imageAlt: 'Composición de tartas inspirada en Wayne Thiebaud.',
          width: 'md:w-1/1',
          height: 'h-1/2-screen',
          align: 'object-top',
          extraClasses: 'reveal zoom-out',
          title: '¿Tienes un evento o una celebración especial?',
          titleTag: 'h2',
          action: {
            label: 'Escríbenos por WhatsApp!',
            url: WHATSAPP_URL,
            target: '_blank',
          },
        },
      },
    ],
  },
]
