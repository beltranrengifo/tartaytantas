import { SHOP_URL } from '~/config/constants'

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
          items: [
            {
              image: 'ny600.jpg',
              title: 'NEW YORK CHEESECAKE',
              description:
                'Tarta de queso al horno, con base de galleta y cobertura de mermelada de frambuesa, dulce de leche o chocolate.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 31,50 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              action: {
                label: 'Comprar',
                url: SHOP_URL,
              },
            },
            {
              image: 'carrot.jpg',
              title: 'ZANAHORIA',
              description:
                'Bizcocho de zanahoria, canela y nueces trituradas con relleno y cobertura de crema de queso.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 29,80 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              action: {
                label: 'Comprar',
                url: SHOP_URL,
              },
            },
            {
              image: 'bosco600.jpg',
              title: 'BOSCO',
              description:
                'Tres pisos de bizcocho de chocolate,  con relleno y cobertura de chocolate con leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 29,90 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              action: {
                label: 'Comprar',
                url: SHOP_URL,
              },
            },
          ],
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
          containerTailwind: 'mt-36 mb-20',
          image: 'tartaytantas-carousel-tartas-1.webp',
          imageAlt: 'Composición de tartas inspirada en Wayne Thiebaud.',
          width: 'md:w-1/1',
          height: 'h-1/2-screen',
          align: 'object-bottom',
          extraClasses: 'reveal zoom-out',
          title: 'VER MÁS OPCIONES',
          titleTag: 'h2',
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
          title: '¿TIENES UN EVENTO O CELEBRACIÓN ESPECIAL?\nPREGÚNTANOS',
          titleTag: 'h2',
        },
      },
    ],
  },
]
