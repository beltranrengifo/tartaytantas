const getBuyButtonStandardCakeSpecificInfo = ({
  basePrice,
  basePriceIncrement,
  onlyBigSize = false,
  useCustomSizeString,
}: {
  basePrice: string
  basePriceIncrement?: string
  onlyBigSize?: boolean
  useCustomSizeString?: string
}) => {
  return {
    'data-item-price': basePrice,
    'data-item-custom1-options': useCustomSizeString
      ? useCustomSizeString
      : onlyBigSize
      ? `Molde de 24 cm. 10/12 raciones`
      : `Molde de 20 cm. 6/8 raciones${
          basePriceIncrement
            ? `|Molde de 24 cm. 10/12 raciones[+${basePriceIncrement}]`
            : ''
        }`,
  }
}
const getBuyButtonNakedCakeSpecificInfo = ({
  basePrice,
  basePriceIncrement,
}: {
  basePrice: string
  basePriceIncrement?: string
}) => {
  return {
    'data-item-price': basePrice,
    'data-item-custom1-options': `Molde de 18x10 cm. 10 raciones${
      basePriceIncrement
        ? `|Molde de 20x10 cm. 15 raciones[+${basePriceIncrement}]`
        : ''
    }`,
  }
}

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
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 29,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.00',
                basePriceIncrement: '6.00',
              }),
            },
            {
              image: 'carrot.jpg',
              title: 'ZANAHORIA',
              description:
                'Bizcocho de zanahoria, canela y nueces trituradas con relleno y cobertura de crema de queso.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,90 €\nMolde de 20 cm. 6/8 raciones. 28,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.00',
                basePriceIncrement: '2.90',
              }),
            },
            {
              image: 'redvelvet600.jpg',
              title: 'RED VELVET',
              description:
                'Tres pisos de bizcocho Red Velvet, con relleno y cobertura de crema de queso.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 32,20 €\nMolde de 20 cm. 6/8 raciones. 29,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.90',
                basePriceIncrement: '2.30',
              }),
            },
            {
              image: 'alejo.jpg',
              title: 'ALEJITO',
              description:
                'Tarta milhojas de obleas y chocolate con cobertura de nata montada.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 29,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.90',
              }),
            },
            {
              image: 'queso.jpg',
              title: 'TARTA DE QUESO',
              description:
                'Tarta de queso fría con base de galleta y cobertura de mermelada de frambuesa o dulce de leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,90 €\nMolde de 20 cm. 6/8 raciones. 27,20 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '27.20',
                basePriceIncrement: '3.70',
              }),
            },
            {
              image: 'beltran.jpg',
              title: 'BELTRÁN',
              description:
                'Bizcocho de vainilla con galletas Oreo troceadas, con relleno de crema de queso y cobertura de galletas Oreo molidas.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,50 €\nMolde de 20 cm. 6/8 raciones. 26,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '26.30',
                basePriceIncrement: '4.20',
              }),
            },
            {
              image: 'armina.jpg',
              title: 'ARMINA',
              description:
                'Tres pisos de bizcocho de espinacas con un toque cítrico,  relleno y cobertura de crema de nata y queso, coronada con frambuesas.',
              listInfo: 'Molde de 20 cm, 10/12 raciones. 41,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '41.50',
              }),
            },
            {
              image: 'abuela600.jpg',
              title: 'DE LA ABUELA',
              description:
                'Tarta de galletas empapadas en leche y mousse de chocolate. Un clásico, a nuestra manera.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 31,50 €\nMolde de 20 cm. 6/8 raciones. 29,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.50',
                basePriceIncrement: '2.00',
              }),
            },
            {
              image: 'olmo1600.jpg',
              title: 'OLMO',
              description:
                'Tarta de chocolate, nata y leche con un toque a malta, base de galleta y decorada con Maltesers.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,20 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '27.00',
                basePriceIncrement: '3.20',
              }),
            },
            {
              image: 'ny600.jpg',
              title: 'NEW YORK CHEESECAKE',
              description:
                'Tarta de queso al horno, con base de galleta y cobertura de mermelada de frambuesa, dulce de leche o chocolate.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 31,50 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '27.00',
                basePriceIncrement: '4.50',
              }),
            },
            {
              image: 'limon600.jpg',
              title: 'LIMÓN Y MERENGUE',
              description:
                'Tarta de crema de limón, con base de galleta y merengue italiano tostado con soplete.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 31,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.50',
                onlyBigSize: true,
              }),
            },
            {
              image: 'pavlova600.jpg',
              title: 'PAVLOVA',
              description: 'Merengue crujiente con nata y frambuesas.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 37,80 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '37.80',
                onlyBigSize: true,
              }),
            },
            {
              image: 'bosco600.jpg',
              title: 'BOSCO',
              description:
                'Tres pisos de bizcocho de chocolate con relleno y cobertura de chocolate con leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,90 €\nMolde de 20 cm. 6/8 raciones. 27,70 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '27.70',
                basePriceIncrement: '3.20',
              }),
            },
            {
              image: 'mamaamelia600.jpg',
              title: 'MAMÁ AMELIA',
              description: 'La tarta de almendra de mi abuela.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 28,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.50',
                onlyBigSize: true,
              }),
            },
            {
              image: 'oreocheese600.jpg',
              title: 'OREO',
              description:
                'Tarta de crema de nata, queso y Oreo molida con base y cobertura de galleta Oreo.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,20 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '27.00',
                basePriceIncrement: '3.20',
              }),
            },
            {
              image: 'banoffee600.jpg',
              title: 'BANOFFEE',
              description:
                'Plátano, dulce de leche y nata montada con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 29,90 €\nMolde de 20 cm. 6/8 raciones. 26,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '26.50',
                basePriceIncrement: '3.40',
              }),
            },
            {
              image: 'wendy.jpg',
              title: 'WENDY',
              description:
                'Tres pisos de bizcocho de chocolate, relleno de dulce de leche y cobertura de chocolate con leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 31,000 €\nMolde de 20 cm. 6/8 raciones. 28,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.00',
                basePriceIncrement: '3.00',
              }),
            },
            {
              image: 'cheeseblanco600.jpg',
              title: 'CHEESECAKE CHOCO BLANCO',
              description:
                'Tarta de queso al horno con base de galleta y un toque de chocolate blanco.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,50 €\nMolde de 20 cm. 6/8 raciones. 30,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.00',
                basePriceIncrement: '4.50',
              }),
            },
            {
              image: 'cheesechoco600.jpg',
              title: 'CHEESECAKE CHOCOLATE',
              description:
                'Tarta tierna de queso y chocolate al horno con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,50 €\nMolde de 20 cm. 6/8 raciones. 30,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.00',
                basePriceIncrement: '4.50',
              }),
            },
            {
              image: '3chocolates600.jpg',
              title: 'TRES CHOCOLATES',
              description:
                'Tarta fría de chocolate blanco, con leche y negro, con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 30,00 €\nMolde de 20 cm. 6/8 raciones. 27,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '27.00',
                basePriceIncrement: '3.00',
              }),
            },
            {
              image: 'brownie600.jpg',
              title: 'BROWNIE',
              description:
                'Brownie de chocolate y avellanas. Un clásico de la repostería americana, a nuestra manera.',
              listInfo: 'Molde de 21cm x 21cm, 9 raciones. 20,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '20.00',
                useCustomSizeString: 'Molde de 21cm x 21cm, 9 raciones.',
              }),
            },
            {
              image: 'cumple600.jpg',
              title: 'CUMPLEAÑOS',
              description:
                'Bizcocho de vainilla con relleno de crema de chocolate y nata montada, con cobertura de chocolate con leche.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 31,50 €\nMolde de 20 cm. 6/8 raciones. 28,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.00',
                basePriceIncrement: '3.50',
              }),
            },
            {
              image: 'vasitos600.jpg',
              title: 'INDIVIDUALES',
              description:
                'Algunas de nuestras tartas en formato individual. De la abuela, oreo, banoffee y vasito de mango y crema de queso, en vaso de plástico o de cristal (con fianza que se recupera con la devolución). Mínimo 6 unidades de cada tipo. ',
              listInfo: 'Vasito individual 4€',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '4.00',
                useCustomSizeString: 'Vasito individual',
              }),
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
              image: 'nakedred600.jpg',
              title: 'SEMINAKED RED VELVET',
              description:
                'Cuatro pisos de bizcocho de Red Velvet relleno de crema de queso, coronada con frutos rojos y trozitos de almendra caramelizada o simplemente con trocitos de frambuesa liofilizada. Disponible también decorada con crema de queso.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44,00 €\nMolde de 20x10 cm. 15 raciones. 60,00 €',
              buyButton: getBuyButtonNakedCakeSpecificInfo({
                basePrice: '44.00',
                basePriceIncrement: '16',
              }),
            },
            {
              image: 'nakedchoco600.jpg',
              title: 'SEMINAKED CHOCOLATE',
              description:
                'Cuatro pisos de bizcocho de chocolate relleno de crema de chocolate. Coronada con rosas de chocolate y trocitos de almendra caramelizada.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44,00 €\nMolde de 20x10 cm. 15 raciones. 60,00 €',
              buyButton: getBuyButtonNakedCakeSpecificInfo({
                basePrice: '44.00',
                basePriceIncrement: '16',
              }),
            },
            {
              image: 'seminakedvaini600.jpg',
              title: 'SEMINAKED VAINILLA',
              description:
                'Cuatro pisos de bizcocho de vainilla relleno de crema de chocolate blanco, coronada con rosas de chocolate blanco y trocitos de frambuesa liofilizada.',
              listInfo:
                'Molde de 18x10 cm, 10 raciones. 44,00 €\nMolde de 20x10 cm. 15 raciones. 60,00 €',
              buyButton: getBuyButtonNakedCakeSpecificInfo({
                basePrice: '44.00',
                basePriceIncrement: '16',
              }),
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
                'La versión muffin de nuestras tartas, con el mismo relleno y cobertura. Mínimo 6u de cada tipo para encargo. 2,25 €',
              listInfo: 'Zanahoria\nBeltrán\nWendy\nBosco\nRed Velvet',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '2.00',
                'data-item-min-quantity': 6,
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'Zanahoria|Beltrán|Wendy|Bosco|Red Velvet',
                'data-item-quantity-step': 6,
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'bizcochos.jpg',
              title: 'BIZCOCHOS',
              description: '600 g / 10,00 €',
              listInfo:
                'Zanahoria\nVainilla\nOreo\nChocolate\nRed Velvet\nYogur\nCebra (vainilla y chocolate)\nVainilla sin azúcar\nChocolate sin azúcar\nCebra sin azúcar',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '10.00',
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'Zanahoria|Vainilla|Oreo|Chocolate|Red Velvet|Yogur|Cebra (vainilla y chocolate)',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'galletas600.jpg',
              title: 'COOKIES',
              description: 'Aprox 25 g /0,60€ unidad, consultar disponibilidad en tienda',
              listInfo:
                '\nCon lacasitos\nCon pepitas de chocolate\nDoble chocolate\nCon chocolate blanco y nuez\nRed Velvet con pepitas de chocolate blanco\nDe limón\nDe mantequilla\nDe cacahuete\nDe jengibre',
              hideListInfo: true,
            },
            {
              image: 'supercookies600.jpg',
              title: 'SUPERCOOKIES',
              description:
                'Super cookies blanditas por el centro y con relleno y crujientes en el borde. 3,00€, mínimo 3u de cada tipo',
              listInfo:
                '\nDe kinder bueno blanco\nDe kinder bueno blanco',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '3.00',
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'De pepitas de chocolate y nutella|De kinder bueno blanco|De Red Velvet con pepitas de chocolate y nutella blanca',
                'data-item-stackable': 'never',
              },
            },
          ],
        },
      },
    ],
  },
]
