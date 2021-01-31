import home from '@/content/home/home.txt'

const homeContents = home.split(/---/g)

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
              image: 'tartaytantas-carousel-image-1.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: '',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
            {
              image: 'tartaytantas-carousel-image-2.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: '',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
            {
              image: 'tartaytantas-carousel-image-3.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: '',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
          ],
          logo: 'tartaytantas.svg',
          logoAlt: 'Tartaytantas Logo',
        },
      },
    ],
  },
  /* intro */
  {
    name: 'intro',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'text-block',
        options: {
          content: homeContents[0],
          decoration: 'border-primary',
          tag: 'h1',
          width: 'md:w-1/2',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-sm',
          background: 'bg-tertiary',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-espinacas-frambuesa.jpg',
          imageAlt: 'Tarta de bizcocho de espinacas con frambuesas',
          width: 'md:w-1/2',
          height: 'min-h-3/4-screen',
          extraClasses: 'reveal zoom-out',
        },
      },
    ],
  },
  /* claims */
  {
    name: 'claims',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'text-block',
        options: {
          content: homeContents[1],
          decoration: false,
          tag: 'h2',
          width: 'md:w-1/2',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-md',
          background: 'bg-secondary-light',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'text-block',
        options: {
          content: homeContents[2],
          decoration: false,
          tag: 'h2',
          width: 'md:w-1/2',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-md',
          background: 'bg-secondary-light',
          extraClasses: 'parallax-item',
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
          image: 'tartaytantas-composicion-frontal-lineas.jpg',
          imageAlt: 'Composición de tartas inspirada en Wayne Thiebaud.',
          width: 'md:w-1/1',
          height: 'min-h-1/3-screen',
          align: 'object-top',
          extraClasses: 'reveal zoom-out',
        },
      },
    ],
  },
  /* more */
  {
    name: 'more',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'text-block',
        options: {
          content: homeContents[3],
          decoration: 'border-white',
          tag: 'h2',
          width: 'md:w-1/3',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-sm',
          background: 'bg-secondary',
          color: 'text-white',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-mas-que-tartas.jpg',
          imageAlt:
            'En TartayTantas no sólo se venden tartas. Bizcochos, brownies, galletas, tartaletas y tantas otras recetas.',
          width: 'md:w-2/3',
          height: 'h-3/4-screen',
          align: 'object-center',
          extraClasses: 'reveal zoom-out',
        },
      },
    ],
  },
  /* carrot */
  {
    name: 'carrot',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-tarta-zanahoria.jpg',
          imageAlt:
            'Tarta de zanahoria artesana en Tartaytantas, en Aravaca, Madrid',
          width: 'md:w-2/3',
          height: 'h-3/4-screen',
          align: 'object-center',
          extraClasses: 'reveal zoom-out',
        },
      },
      {
        name: 'text-block',
        options: {
          content: homeContents[4],
          decoration: false,
          tag: 'h2',
          width: 'md:w-1/3',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-sm',
          background: 'bg-tertiary',
          color: 'text-base-color',
          extraClasses: 'parallax-item',
        },
      },
    ],
  },
  /* unique */
  {
    name: 'unique',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'text-block',
        options: {
          content: homeContents[5],
          decoration: 'border-primary',
          tag: 'h2',
          width: 'md:w-1/2',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-text-block-sm',
          background: 'bg-tertiary',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-tartas-unicas.jpg',
          imageAlt:
            'En Tartaytantas ofrecemos tartas únicas hechas a diario en el obrador',
          width: 'md:w-1/2',
          height: 'h-3/4-screen',
          extraClasses: 'reveal zoom-out',
        },
      },
    ],
  },
  /* social */
  {
    name: 'social',
    options: {
      fullwidth: true,
    },
    components: [
      {
        name: 'title-block',
        options: {
          title: homeContents[7],
          titleTag: 'h2',
          transform: 'uppercase',
          align: 'center',
          font: 'sans',
          subtitle: homeContents[6],
          subtitleTag: 'h3',
          useLink: true,
          href: 'http://instagram.com',
          maxWidth: 'none',
          paddingTop: 'pt-40',
          paddingBottom: 'pb-16',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'image-grid',
        options: {
          images: [
            {
              src: 'tartaytantas-grid-image-1.jpg',
              alt: 'Tarta de frambuesas',
              extraClasses: 'parallax-item',
            },
            {
              src: 'tartaytantas-grid-image-2.jpg',
              alt: 'Tarta de limón',
              extraClasses: 'parallax-item',
            },
            {
              src: 'tartaytantas-grid-image-3.jpg',
              alt: 'Cheesecake',
              extraClasses: 'parallax-item',
            },
          ],
          columns: 'grid-cols-3',
          gap: 'gap-12',
        },
      },
    ],
  },
  /* all cakes */
  {
    name: 'all-cakes',
    options: {
      boxed: true,
      flex: true,
      classes:
        'pt-20 pb-20 pl-5 2xl:pl-0 mt-40 border-solid border-primary border-t',
    },
    components: [
      {
        name: 'title-block',
        options: {
          title: homeContents[9],
          titleTag: 'h2',
          subtitle: homeContents[8],
          subtitleTag: 'p',
          width: '1/3',
          transform: 'uppercase',
          align: 'left',
          font: 'sans',
          maxWidth: 'none',
          height: '1/2-screen',
          vAlign: 'center',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'image-grid',
        options: {
          width: 'w-2/3',
          height: 'min-h-1/2-screen',
          images: [
            {
              src: 'tartaytantas-mostrador-1.jpg',
              alt: 'Mostrador de Tartaytantas',
              extraClasses: 'reveal zoom-out',
            },
            {
              src: 'tartaytantas-mostrador-2-detalle.jpg',
              alt:
                'Detalle del mostrador de Tartaytantas con una foto de Mamá Amelia',
              extraClasses: 'reveal zoom-out',
            },
          ],
          columns: 'grid-cols-2',
          gap: 'gap-12',
        },
      },
    ],
  },
]
