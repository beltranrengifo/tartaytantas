import introText from '@/content/home/intro.txt'

export default [
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
          content: introText,
          decoration: true,
          decorationColor: 'primary',
          tag: 'h1',
          width: '1/2',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'tertiary',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-espinacas-frambuesa.jpg',
          imageAlt: 'Tarta de bizcocho de espinacas con frambuesas',
          width: '1/2',
          height: '3/4-screen',
        },
      },
    ],
  },
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
          content:
            'Apostamos por la calidad en la materia prima y el diseño de pasteles con un aspecto sencillo pero cuidado.',
          decoration: false,
          tag: 'h2',
          width: '1/2',
          height: '1/3-screen',
          contentWidth: 'md',
          background: 'secondary-light',
        },
      },
      {
        name: 'text-block',
        options: {
          content:
            'Nuestra identidad gráfica, es un homenaje a la obra de Wayne Thiebaud. Su delicioso trabajo, nos inspira. <a target="_blank" href="https://google.es">Puedes verlo aquí.</a>',
          decoration: false,
          tag: 'h2',
          width: '1/2',
          height: '1/3-screen',
          contentWidth: 'md',
          background: 'secondary-light',
        },
      },
    ],
  },
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
          width: '1/1',
          height: '1/3-screen',
          align: 'top',
        },
      },
    ],
  },
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
          content:
            '<span class="block mb-6">Y no sólo tartas. También ofrecemos bizcochos, brownies, galletas, tartaletas <span class="text-primary">y tantas</span> otras recetas.</span> <span class="block mb-6">No dudes en preguntarnos.</span>',
          decoration: true,
          decorationColor: 'white',
          tag: 'h2',
          width: '1/3',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'secondary',
          color: 'white',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-mas-que-tartas.jpg',
          imageAlt:
            'En TartayTantas no sólo se venden tartas. Bizcochos, brownies, galletas, tartaletas y tantas otras recetas.',
          width: '2/3',
          height: '3/4-screen',
          align: 'center',
        },
      },
    ],
  },
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
          width: '2/3',
          height: '3/4-screen',
          align: 'center',
        },
      },
      {
        name: 'text-block',
        options: {
          content:
            '<span class="block mb-6">Nuestra Tarta de Zanahoria, es uno de nuestros productos estrella. </span> <span class="block mb-6">Cada vez son más los restaurantes de la Capital que la incluyen en su carta de postres, junto a otros de nuestros productos.</span> <span class="block mb-6">Encarga la tuya, <a href="https://google.es" target="_blank">aquí</a>.</span>',
          decoration: false,
          decorationColor: 'white',
          tag: 'h2',
          width: '1/3',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'tertiary',
          color: 'base',
        },
      },
    ],
  },
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
          content:
            'Nuestro trabajo es artesano, producimos para particulares, eventos y restaurantes. Cada tarta es única.',
          decoration: true,
          decorationColor: 'primary',
          tag: 'h2',
          width: '1/2',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'tertiary',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-tartas-unicas.jpg',
          imageAlt:
            'En Tartaytantas ofrecemos tartas únicas hechas a diario en el obrador',
          width: '1/2',
          height: '3/4-screen',
        },
      },
    ],
  },
  {
    name: 'social',
    options: {
      fullwidth: true,
    },
    components: [
      {
        name: 'title-block',
        options: {
          title: 'Síguenos en Instagram',
          titleTag: 'h2',
          transform: 'uppercase',
          align: 'center',
          font: 'sans',
          subtitle: '@tartaytantas',
          subtitleTag: 'h3',
          useLink: true,
          href: 'http://instagram.com',
          maxWidth: 'none',
          paddingTop: 'pt-40',
          paddingBottom: 'pb-16',
        },
      },
      {
        name: 'image-grid',
        options: {
          images: [
            {
              src: 'tartaytantas-grid-image-1.jpg',
              alt: 'Tarta de frambuesas',
            },
            {
              src: 'tartaytantas-grid-image-2.jpg',
              alt: 'Tarta de limón',
            },
            {
              src: 'tartaytantas-grid-image-3.jpg',
              alt: 'Cheesecake',
            },
          ],
          columns: 3,
          gap: 12,
        },
      },
    ],
  },
  {
    name: 'all-cakes',
    options: {
      boxed: true,
      flex: true,
    },
    components: [
      {
        name: 'title-block',
        options: {
          title: 'Todas nuestras tartas',
          titleTag: 'h2',
          subtitle:
            '<span class="block">Trabajamos de manera artesana.</span><span class="block">Diseñamos tartas sencillas y deliciosas.</span>',
          subtitleTag: 'p',
          width: '1/3',
          transform: 'uppercase',
          align: 'left',
          font: 'sans',
          maxWidth: 'none',
          height: '1/2-screen',
        },
      },
    ],
  },
]
