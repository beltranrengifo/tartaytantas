import introText from '@/content/home/1-intro.txt'
import claim1 from '@/content/home/2-claim-1.txt'
import claim2 from '@/content/home/2-claim-2.txt'
import more from '@/content/home/3-more.txt'
import carrotText from '@/content/home/4-carrot.txt'
import uniqueText from '@/content/home/5-unique.txt'
import igTitle from '@/content/home/6-ig-title.txt'
import igSubtitle from '@/content/home/6-ig-subtitle.txt'
import allCakesTitle from '@/content/home/7-all-cakes-title.txt'
import allCakesText from '@/content/home/7-all-cakes-text.txt'

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
          content: introText,
          decoration: true,
          decorationColor: 'primary',
          tag: 'h1',
          width: '1/2',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'tertiary',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'image-block',
        options: {
          image: 'tartaytantas-espinacas-frambuesa.jpg',
          imageAlt: 'Tarta de bizcocho de espinacas con frambuesas',
          width: '1/2',
          height: '3/4-screen',
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
          content: claim1,
          decoration: false,
          tag: 'h2',
          width: '1/2',
          height: '1/3-screen',
          contentWidth: 'md',
          background: 'secondary-light',
          extraClasses: 'parallax-item',
        },
      },
      {
        name: 'text-block',
        options: {
          content: claim2,
          decoration: false,
          tag: 'h2',
          width: '1/2',
          height: '1/3-screen',
          contentWidth: 'md',
          background: 'secondary-light',
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
          width: '1/1',
          height: '1/3-screen',
          align: 'top',
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
          content: more,
          decoration: true,
          decorationColor: 'white',
          tag: 'h2',
          width: '1/3',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'secondary',
          color: 'white',
          extraClasses: 'parallax-item',
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
          width: '2/3',
          height: '3/4-screen',
          align: 'center',
          extraClasses: 'reveal zoom-out',
        },
      },
      {
        name: 'text-block',
        options: {
          content: carrotText,
          decoration: false,
          decorationColor: 'white',
          tag: 'h2',
          width: '1/3',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'tertiary',
          color: 'base',
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
          content: uniqueText,
          decoration: true,
          decorationColor: 'primary',
          tag: 'h2',
          width: '1/2',
          height: '3/4-screen',
          contentWidth: 'sm',
          background: 'tertiary',
          extraClasses: 'parallax-item',
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
          title: igTitle,
          titleTag: 'h2',
          transform: 'uppercase',
          align: 'center',
          font: 'sans',
          subtitle: igSubtitle,
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
          columns: 3,
          gap: 12,
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
        'pt-20 pb-20 pl-5 2xl:pl-0 mt-40 border-solid border-primary border-t border-b',
    },
    components: [
      {
        name: 'title-block',
        options: {
          title: allCakesTitle,
          titleTag: 'h2',
          subtitle: allCakesText,
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
          width: '2/3',
          height: '1/2-screen',
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
          columns: 2,
          gap: 12,
        },
      },
    ],
  },
]
