export default [
  /* page nav */
  {
    name: 'page-nav',
    components: [
      {
        name: 'one-page-nav',
        options: {
          nav: [
            {
              name: 'Tartas',
              link: '#tartas',
            },
            {
              name: 'Tartas naked',
              link: '#naked',
            },
            {
              name: 'Bizcochos, muffins y cookies',
              link: '#mas',
            },
          ],
        },
      },
    ],
  },
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
              content: '',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
            {
              image: 'tartaytantas-carousel-tartas-1.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: '',
              button: {
                text: '',
                link: '',
                target: '',
              },
            },
            {
              image: 'tartaytantas-carousel-tartas-2.jpg',
              imageAlt: 'Tartaytantas Obrador de tartas en Madrid',
              content: '',
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
  /* cakes grid */
  {
    name: 'tartas',
    components: [
      {
        name: 'product-grid',
        options: {
          imageDir: 'cakes-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'idiazabal.jpg',
              title: 'CHEESECAKE IDIAZABAL',
              description:
                'Tarta de queso al horno, con base de galleta y un toque de Idiazabal',
            },
            {
              image: 'carrot.jpg',
              title: 'ZANAHORIA',
              description:
                'Bizcocho de zanahoria, canela y nueces trituradas relleno de crema de queso y la misma cobertura',
            },
            {
              image: 'cheesecake.jpg',
              title: 'NEW YORK CHEESECAKE',
              description:
                'Tarta de queso al horno, base galleta con cobertura de mermelada frambuesa, dulce de leche o chocolate',
            },
            {
              image: 'alejo.jpg',
              title: 'ALEJITO',
              description:
                'Tarta de obelas con chocolate y nata montada manga pastelera copitos',
            },
            {
              image: 'queso.jpg',
              title: 'TARTA DE QUESO',
              description:
                'Tarta de queso fría con cobertura de dulce de leche o mermelada de frambuesa. Base de galleta y mantequilla.',
            },
            {
              image: 'beltran.jpg',
              title: 'BELTRÁN',
              description:
                'Bizcocho de vainilla con galletas Oreo troceadas, relleno y con cobertura de crema de queso y espolvoreada con galletas Oreo',
            },
            {
              image: 'oreo.jpg',
              title: 'OREO',
              description:
                'Tarta de queso fría con crema de nata, queso y oreo molida. Base de galleta Oreo y mantequilla, recubierta con oreo molida.',
            },
            {
              image: 'limon.jpg',
              title: 'LIMÓN Y MERENGUE',
              description:
                'Base de galleta, con crema de limón y merengue italiano tostado con soplete.',
            },
            {
              image: 'abuela.jpg',
              title: 'DE LA ABUELA',
              description:
                'Varios pisos de galletas en leche y mousse de chocolate con leche. Un clásico, a nuestra manera.',
            },
            {
              image: 'armina.jpg',
              title: 'ARMINA',
              description:
                'Tres pisos de bizcocho de espinacas con un toque cítrico, relleno de crema de nata y queso con frambuesas. Cobertura de crema de queso decoradas  frambuesas',
            },
            {
              image: 'cheesecake-white-choco.jpg',
              title: 'CHEESECAKE CHOCO BLANCO',
              description:
                'Tarta de queso al horno con base de galleta y mantequilla y un toque de chocolate blanco.',
            },
            {
              image: 'olmo.jpg',
              title: 'OLMO',
              description:
                'Tarta de chocolate, nata y leche con un toque a malta y cubierta de Maltesers. Base de galleta y mantequilla.',
            },
            {
              image: 'wendy.jpg',
              title: 'WENDY',
              description:
                'Tres pisos de bizcoho chocolate, relleno de dulce de leche y cobertura de chocolate con leche.',
            },
            {
              image: 'bosco.jpg',
              title: 'BOSCO',
              description:
                'Tres pisos de bizcoho chocolate, relleno y con cobertura de crema de choco con leche.',
            },
            {
              image: 'choco-guiness.jpg',
              title: 'CHOCO Y GUINNES',
              description:
                'Bizcocho de chocolate y cerveza negra Guinnes con cobertura de crema queso',
            },
          ],
        },
      },
    ],
  },
  /* naked cakes */
  {
    name: 'naked',
    options: {
      classes: 'bg-brand-secondary',
      fullwidth: true,
    },
    components: [
      {
        name: 'product-grid',
        options: {
          imageDir: 'naked-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'seminaked-red-velvet.jpg',
              title: 'SEMINAKED RED VELVET',
              description:
                'Cuatro pisos de bizcocho de red velvet relleno de crema de merengue italiano, de dulce de leche o de chocolate. Cobertura crema de merengue italiano.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44 €\nMolde de 20x10 cm. 15 raciones. 60 €\nMolde de 24x10 cm. 25 raciones. 95 €',
            },
            {
              image: 'seminaked-vainilla.jpg',
              title: 'SEMINAKED VAINILLA',
              description:
                'Cuatro pisos de bizcocho de vainilla relleno de crema de merengue italiano, de dulce de leche o de chocolate. Cobertura crema de merengue italiano.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44 €\nMolde de 20x10 cm. 15 raciones. 60 €\nMolde de 24x10 cm. 25 raciones. 95 €',
            },
            {
              image: 'seminaked-chocolate.jpg',
              title: 'SEMINAKED CHOCOLATE',
              description:
                'Cuatro pisos de bizcocho de chocolate relleno de crema de merengue italiano, de dulce de leche o de chocolate. Cobertura crema de merengue italiano.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44 €\nMolde de 20x10 cm. 15 raciones. 60 €\nMolde de 24x10 cm. 25 raciones. 95 €',
            },
          ],
        },
      },
    ],
  },
  /* mas */
  {
    name: 'mas',
    options: {
      fullwidth: true,
    },
    components: [
      {
        name: 'product-grid',
        options: {
          imageDir: 'more-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'muffins.jpg',
              title: 'MUFFINS',
              listInfo:
                'Vainilla\nZanahoria\nOreo\nRed Velvet\nChocolate\nRed Velvet',
            },
            {
              image: 'bizcochos.jpg',
              title: 'BIZCOCHOS',
              listInfo:
                'Vainilla\nZanahoria\nOreo\nRed Velvet\nChocolate\nRed Velvet',
            },
            {
              image: 'galletas-cookies.jpg',
              title: 'GALLETAS Y COOKIES',
              listInfo:
                'Pepitas de chocolate\nDoble chocolate\nLacasitos\nCacahuete\nMantequilla\nLimón\nNata y frambuesa\nAvena\nChocolate blanco\nNueces',
            },
          ],
        },
      },
    ],
  },
]
