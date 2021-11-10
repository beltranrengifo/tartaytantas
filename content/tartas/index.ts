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
  /* page title */
  {
    name: 'page-title',
    options: {
      boxed: true,
    },
    components: [
      {
        name: 'title-block',
        options: {
          title: 'Todas nuestras tartas',
          titleTag: 'h1',
          font: 'font-serif',
          align: 'text-center',
          paddingTop: 'pt-10',
          paddingBottom: '',
          extraClasses: 'text-3xl md:text-big-title text-secondary font-medium',
          useDecoration: true,
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
          containerTailwind: 'pt-16 pb-20',
          imageDir: 'cakes-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'idiazabal.jpg',
              title: 'CHEESECAKE IDIAZABAL',
              description:
                'Tarta de queso al horno, con base de galleta y un toque de Idiazábal.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,80 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
            },
            {
              image: 'carrot.jpg',
              title: 'ZANAHORIA',
              description:
                'Bizcocho de zanahoria, canela y nueces trituradas con relleno y cobertura de crema de queso.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 26,50 €\nMolde de 20 cm. 6/8 raciones. 24,30 €',
            },
            {
              image: 'redvelvet600.jpg',
              title: 'RED VELVET',
              description:
                'Tres pisos de bizcocho Red Velvet, con relleno y cobertura de crema de queso.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 29,50 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
            },
            {
              image: 'alejo.jpg',
              title: 'ALEJITO',
              description:
                'Tarta milhojas de obleas y chocolate con cobertura de nata montada.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 26,50 €',
            },
            {
              image: 'queso.jpg',
              title: 'TARTA DE QUESO',
              description:
                'Tarta de queso fría con base de galleta y cobertura de mermelada de frambuesa o dulce de leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 27,50 €\nMolde de 20 cm. 6/8 raciones. 24,00 €',
            },
            {
              image: 'beltran.jpg',
              title: 'BELTRÁN',
              description:
                'Bizcocho de vainilla con galletas Oreo troceadas, con relleno de crema de queso y cobertura de galletas Oreo molidas.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 28,50 €\nMolde de 20 cm. 6/8 raciones. 25,00 €',
            },
            {
              image: 'armina.jpg',
              title: 'ARMINA',
              description:
                'Tres pisos de bizcocho de espinacas con un toque cítrico,  relleno y cobertura de crema de nata y queso, coronada con frambuesas.',
              listInfo:
                'Molde de 20 cm, 10/12 raciones. 36,50 €\nMolde de 18 cm. 6/8 raciones. 31,00 €',
             },
            {
              image: 'abuela600.jpg',
              title: 'DE LA ABUELA',
              description:
                'Tarta de galletas empapadas en leche y mousse de chocolate. Un clásico, a nuestra manera.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 26,50 €\nMolde de 20 cm. 6/8 raciones. 24,30 €',
            },
            {
              image: 'olmo1600.jpg',
              title: 'OLMO',
              description:
                'Tarta de chocolate, nata y leche con un toque a malta, base de galleta y decorada con Maltesers.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 27,50 €\nMolde de 20 cm. 6/8 raciones. 24,80 €',
            },
            {
              image: 'ny600.jpg',
              title: 'NEW YORK CHEESECAKE',
              description:
                'Tarta de queso al horno, con base de galleta y cobertura de mermelada de frambuesa, dulce de leche o chocolate.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 28,50 €\nMolde de 20 cm. 6/8 raciones. 25,50 €',
            },
            {
              image: 'limon600.jpg',
              title: 'LIMÓN Y MERENGUE',
              description:
                'Tarta de crema de limón, con base de galleta y merengue italiano tostado con soplete.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 28,50 €\nMolde de 20 cm. 6/8 raciones. 25,50 €',
            },
            {
              image: 'pavlova600.jpg',
              title: 'PAVLOVA',
              description: 'Merengue crujiente con nata y frambuesas.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 36,00 €',
            },
            {
              image: 'bosco600.jpg',
              title: 'BOSCO',
              description:
                'Tres pisos de bizcocho de chocolate,  con relleno y cobertura de chocolate con leche.',
               listInfo:
                'Molde de 24 cm, 10/12 raciones. 26,50 €\nMolde de 20 cm. 6/8 raciones. 25,00 €',
            },
            {
              image: 'mamaamelia600.jpg',
              title: 'MAMÁ AMELIA',
              description: 'La tarta de almendra de mi abuela.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 23,10 €',
            },
            {
              image: 'oreocheese600.jpg',
              title: 'OREO',
              description:
                'Tarta de crema de nata, queso y Oreo molida con base y cobertura de galleta Oreo.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 28,00 €\nMolde de 20 cm. 6/8 raciones. 24,80 €',
            },
            {
              image: 'banofee.jpg',
              title: 'BANOFFEE',
              description:
                'Plátano, dulce de leche y nata montada con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 26,50 €\nMolde de 20 cm. 6/8 raciones. 24,30 €',
            },
            {
              image: 'wendy.jpg',
              title: 'WENDY',
              description:
                'Tres pisos de bizcocho de chocolate, relleno de dulce de leche y cobertura de chocolate con leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 26,50 €\nMolde de 20 cm. 6/8 raciones. 24,30 €',
            },
            {
              image: 'cheeseblanco600.jpg',
              title: 'CHEESECAKE CHOCO BLANCO',
              description:
                'Tarta de queso al horno con base de galleta y un toque de chocolate blanco.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,00 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
            },
            {
              image: 'cheesechoco600.jpg',
              title: 'CHEESECAKE CHOCOLATE',
              description:
                'Tarta tierna de queso y chocolate al horno con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,00 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
            },
            {
              image: '3chocolates600.jpg',
              title: 'TRES CHOCOLATES',
              description:
                'Tarta fría de chocolate blanco, con leche y negro, con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 26,95 €\nMolde de 20 cm. 6/8 raciones. 24,30 €',
            },
            {
              image: 'brownie600.jpg',
              title: 'BROWNIE',
              description:
                'Brownie de chocolate y avellanas. Un clásico de la repostería americana, a nuestra manera.',
              listInfo: 'Molde de 21 x 21cm, 9 raciones. 18,70 €',
            },
            {
              image: 'cumpleanos.jpg',
              title: 'CUMPLEAÑOS',
              description:
                'Bizcocho de vainilla con relleno de crema de chocolate y nata montada, con cobertura de chocolate con leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 29,00 €\nMolde de 20 cm. 6/8 raciones. 26,00 €',
            },
            {
              image: 'vasitos600.jpg',
              title: 'INDIVIDUALES',
              description:
                'Algunas de nuestras tartas en formato individual. De la abuela, oreo, banoffee y vasito de mango y crema de queso. ',
              listInfo:
                'Vasito individual 4€',
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
          containerTailwind: 'pt-36 pb-20',
          imageDir: 'naked-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'nakedredvelvet600.jpg',
              title: 'SEMINAKED RED VELVET',
              description:
                'Cuatro pisos de bizcocho de Red Velvet relleno de crema de queso, coronada con frutos rojos y trozitos de almendra caramelizada o simplemente con trocitos de frambuesa liofilizada. Disponible también decorada con crema de queso.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44,00 €\nMolde de 20x10 cm. 15 raciones. 60,00 €\nMolde de 24x10 cm. 25 raciones. 95,00 €',
            },
            {
              image: 'nakedchoco600.jpg',
              title: 'SEMINAKED CHOCOLATE',
              description:
                'Cuatro pisos de bizcocho de chocolate relleno de crema de chocolate. Coronada con rosas de chocolate y trocitos de almendra caramelizada.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44,00 €\nMolde de 20x10 cm. 15 raciones. 60,00 €\nMolde de 24x10 cm. 25 raciones. 95,00 €',
            },
            {
              image: 'seminakedvaini600.jpg',
              title: 'SEMINAKED VAINILLA',
              description:
                'Cuatro pisos de bizcocho de vainilla relleno de crema de chocolate blanco, coronada con rosas de chocolate blanco y trocitos de frambuesa liofilizada.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44,00 €\nMolde de 20x10 cm. 15 raciones. 60,00 €\nMolde de 24x10 cm. 25 raciones. 95,00 €',
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
          containerTailwind: 'pt-36 pb-20',
          imageDir: 'more-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'muffins.jpg',
              title: 'MUFFINS',
              description:
                'La versión muffin de nuestras tartas, con el mismo relleno y cobertura. 2,00 €',
              listInfo: 'Zanahoria\nBeltrán\nWendy\nBosco\nRed Velvet',
            },
            {
              image: 'bizcochos.jpg',
              title: 'BIZCOCHOS',
              description: '600 g / 10,00 €',
              listInfo:
                'Zanahoria\nVainilla\nOreo\nChocolate\nRed Velvet\nYogur\nCebra (vainilla y chocolate)',
            },
            {
              image: 'galletas600.jpg',
              title: 'COOKIES',
              description: 'Aprox 25 g /0,50 €',
              listInfo:
                '\nDe avena y canela\nCon lacasitos\nCon pepitas de chocolate\nDoble chocolate\nCon chocolate blanco y nuez\nRed Velvet con pepitas de chocolate blanco\nDe limón\nDe mantequilla\nDe cacahuete\nDe jengibre\nSin azúcar aptas para intolerantes al gluten y a la lactosa (con o sin pepitas de chocolate)',
            },
          ],
        },
      },
    ],
  },
]
