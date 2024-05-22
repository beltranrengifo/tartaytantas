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
    options: {
      fullwidth: true,
    },
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
                'Tarta de queso al horno, con base de galleta y un toque de Idiazábal.
                Podemos hacerla sin harina de trigo, pero no podemos evitar con trazas. Consulta el precio..',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 31,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.00',
                basePriceIncrement: '4.00',
              }),
            },
            {
              image: 'carrot.jpg',
              title: 'ZANAHORIA',
              description:
                'Bizcocho de zanahoria, canela y nueces trituradas con relleno y cobertura de crema de queso.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,60 €\nMolde de 20 cm. 6/8 raciones. 29,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.30',
                basePriceIncrement: '4.30',
              }),
            },
            {
              image: 'alejo.jpg',
              title: 'ALEJITO',
              description:
                'Tarta milhojas de obleas y chocolate con cobertura de nata montada.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 32,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '32.50',
              }),
            },
            {
              image: 'queso.jpg',
              title: 'TARTA DE QUESO',
              description:
                'Tarta de queso fría con base de galleta y cobertura de mermelada de frambuesa o dulce de leche.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 32,80 €\nMolde de 20 cm. 6/8 raciones. 28,60 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.60',
                basePriceIncrement: '4.20',
              }),
            },
            {
              image: 'beltran.jpg',
              title: 'BELTRÁN',
              description:
                'Bizcocho de vainilla con galletas Oreo troceadas, con relleno de crema de queso y cobertura de galletas Oreo molidas.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,00 €\nMolde de 20 cm. 6/8 raciones. 28,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.90',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'armina.jpg',
              title: 'ARMINA',
              description:
                'Tres pisos de bizcocho de espinacas con un toque cítrico,  relleno y cobertura de crema de nata y queso, coronada con frambuesas.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo: 'Molde de 20 cm, 10/12 raciones. 41,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '41.50',
              }),
            },
            {
              image: 'abuela600.jpg',
              title: 'DE LA ABUELA',
              description:
                'Tarta de galletas empapadas en leche y mousse de chocolate. Un clásico, a nuestra manera.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,10 €\nMolde de 20 cm. 6/8 raciones. 30,80 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.80',
                basePriceIncrement: '3.30',
              }),
            },
            {
              image: 'olmo1600.jpg',
              title: 'OLMO',
              description:
                'Tarta de chocolate con un toque a malta, base de galleta y decorada con bolas de chocolate y cereales.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,00 €\nMolde de 20 cm. 6/8 raciones. 28,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.90',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'ny600.jpg',
              title: 'NEW YORK CHEESECAKE',
              description:
                'Tarta de queso al horno, con base de galleta y cobertura de mermelada de frambuesa, dulce de leche o chocolate.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,00 €\nMolde de 20 cm. 6/8 raciones. 29,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.90',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'limon600.jpg',
              title: 'LIMÓN Y MERENGUE',
              description:
                'Tarta de crema de limón, con base de galleta y merengue italiano tostado con soplete.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 34,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '34.00',
                onlyBigSize: true,
              }),
            },
            {
              image: 'pavlova600.jpg',
              title: 'PAVLOVA',
              description: 'Merengue crujiente con nata y frambuesas. Apta para intolerantes al gluten.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 39,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '39.00',
                onlyBigSize: true,
              }),
            },
            {
              image: 'bosco600.jpg',
              title: 'BOSCO',
              description:
                'Tres pisos de bizcocho de chocolate con relleno y cobertura de chocolate con leche.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,50 €\nMolde de 20 cm. 6/8 raciones. 29,20 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.20',
                basePriceIncrement: '4.30',
              }),
            },
            {
              image: 'mamaamelia600.jpg',
              title: 'MAMÁ AMELIA',
              description: 'La tarta de almendra de mi abuela. Sin harina de trigo.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 30,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.90',
                onlyBigSize: true,
              }),
            },
            {
              image: 'oreocheese600.jpg',
              title: 'OREO',
              description:
                'Tarta de crema de nata, queso y Oreo molida con base y cobertura de galleta Oreo.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 32,50 €\nMolde de 20 cm. 6/8 raciones. 28,40 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.40',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'banoffee600.jpg',
              title: 'BANOFFEE',
              description:
                'Plátano, dulce de leche y nata montada con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 32,40 €\nMolde de 20 cm. 6/8 raciones. 28,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.30',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'wendy.jpg',
              title: 'WENDY',
              description:
                'Tres pisos de bizcocho de chocolate, relleno de dulce de leche y cobertura de chocolate con leche.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,60 €\nMolde de 20 cm. 6/8 raciones. 29,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.30',
                basePriceIncrement: '4.30',
              }),
            },
            {
              image: 'cheeseblanco600.jpg',
              title: 'CHEESECAKE CHOCO BLANCO',
              description:
                'Tarta de queso al horno con base de galleta y un toque de chocolate blanco.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 31,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.00',
                basePriceIncrement: '4.00',
              }),
            },
            {
              image: 'cheesechoco600.jpg',
              title: 'CHEESECAKE CHOCOLATE',
              description:
                'Tarta tierna de queso y chocolate al horno con base de galleta.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 31,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.00',
                basePriceIncrement: '4.00',
              }),
            },
            {
              image: '3chocolates600.jpg',
              title: 'TRES CHOCOLATES',
              description:
                'Tarta fría de chocolate blanco, con leche y negro, con base de galleta. 
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 32,50 €\nMolde de 20 cm. 6/8 raciones. 28,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '28.30',
                basePriceIncrement: '4.20',
              }),
            },
            {
              image: 'brownie600.jpg',
              title: 'BROWNIE',
              description:
                'Brownie de chocolate y avellanas. Un clásico de la repostería americana, a nuestra manera.',
              listInfo: 'Molde de 21cm x 21cm, 9 raciones. 21,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '21.00',
                useCustomSizeString: 'Molde de 21cm x 21cm, 9 raciones.',
              }),
            },
            {
              image: 'cumple600.jpg',
              title: 'CUMPLEAÑOS',
              description:
                'Bizcocho de vainilla con relleno de crema de chocolate y nata montada, con cobertura de chocolate con leche.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,10 €\nMolde de 20 cm. 6/8 raciones. 30,80 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.80',
                basePriceIncrement: '3.30',
              }),
            },
            {
              image: 'celia600.jpg',
              title: 'CELIA',
              description:
                'Tres pisos de bizcocho Red Velvet,  relleno y cobertura de crema de nata y queso, coronada con fresas, frambuesas y suspiros de merengue.
                Podemos hacerla sin harina de trigo, pero sí con trazas. Pregúntanos.',
              listInfo: 'Molde de 20 cm, 10/12 raciones. 42,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '42.00',
              }),
            },
            {
              image: '3leches600.jpg',
              title: 'TRES LECHES',
              description:
                'Bizcocho genovés empapado en tres leches, con dulce de leche y merengue tostado.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 34,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '34.50',
              }),
            },
            {
              image: 'vasitos600.jpg',
              title: 'INDIVIDUALES',
              description:
                'Algunas de nuestras tartas en formato individual. De la abuela, oreo, banoffee y vasito de mango y crema de queso, en vaso de plástico o de cristal (con fianza que se recupera con la devolución). Mínimo 6 unidades de cada tipo. ',
              listInfo: 'Vasito individual 4€',
              buyButton: {
                ...getBuyButtonStandardCakeSpecificInfo({
                  basePrice: '4.00',
                  useCustomSizeString: 'Vasito individual',
                }),
                'data-item-min-quantity': 6,
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'De la abuela|Oreo|Banoffee|Mango y crema de queso',
              },
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
                'Tres pisos de bizcocho de Red Velvet relleno de crema de queso, coronada con frutos rojos y trozitos de almendra caramelizada o simplemente con trocitos de frambuesa liofilizada. Disponible también decorada con crema de queso.',
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
                'Tres pisos de bizcocho de chocolate relleno de crema de chocolate. Coronada con rosas de chocolate y trocitos de almendra caramelizada.',
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
                'Tres pisos de bizcocho de vainilla relleno de crema de chocolate blanco, coronada con rosas de chocolate blanco y trocitos de frambuesa liofilizada.',
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
                'La versión muffin de nuestras tartas, con el mismo relleno y cobertura. Mínimo 12u de cada tipo para encargo. 2,25 €',
              listInfo: 'Zanahoria\nBeltrán\nWendy\nBosco\nRed Velvet',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '2.25',
                'data-item-min-quantity': 12,
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'Zanahoria|Beltrán|Wendy|Bosco|Red Velvet',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'bizcochos.jpg',
              title: 'BIZCOCHOS',
              description: '600 g / 10,00 €',
              listInfo:
                'Zanahoria\nVainilla\nOreo\nChocolate\nRed Velvet\nYogur\nCebra (vainilla y chocolate)\nLimón\nVainilla sin azúcar\nChocolate sin azúcar\nCebra sin azúcar',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '10.00',
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'Zanahoria|Vainilla|Oreo|Chocolate|Red Velvet|Yogur|Limón|Cebra (vainilla y chocolate)',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'galletas600.jpg',
              title: 'COOKIES',
              description:
                'Aprox 25 g /0,75€ unidad, consultar disponibilidad en tienda',
              listInfo:
                '\nCon lacasitos\nCon pepitas de chocolate\nDoble chocolate\nCon chocolate blanco y nuez\nRed Velvet con pepitas de chocolate blanco\nDe limón\nDe mantequilla\nDe cacahuete\nDe jengibre',
              hideListInfo: true,
            },
            {
              image: 'supercookies600.jpg',
              title: 'SUPERCOOKIES',
              description:
                'Super cookies blanditas por el centro, rellenas y crujientes en el borde. 2,50€, mínimo 3u',
              listInfo: '\nRellenas de crema de avellanas y de chocolate',
              hideListInfo: true,
              buyButton: {
                'data-item-min-quantity': 3,
                'data-item-price': '2.50',
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'De crema de avellanas y chocolate',
                'data-item-stackable': 'never',
              },
            },
          ],
        },
      },
    ],
  },
]
