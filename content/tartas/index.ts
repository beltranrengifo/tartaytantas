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
                'Tarta de queso al horno, con base de galleta y un toque de queso Idiazábal.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 36,00 €\nMolde de 20 cm. 6/8 raciones. 31,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.50',
                basePriceIncrement: '4.50',
              }),
            },
            {
              image: 'carrot.jpg',
              title: 'ZANAHORIA',
              description:
                'Bizcocho de zanahoria, canela y nueces trituradas con relleno y cobertura de crema de queso.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,80 €\nMolde de 20 cm. 6/8 raciones. 30,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.30',
                basePriceIncrement: '4.50',
              }),
            },
            {
              image: 'alejo.jpg',
              title: 'ALEJITO',
              description:
                'Tarta milhojas de obleas y chocolate con cobertura de nata montada.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 33,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '33.00',
                onlyBigSize: true,
              }),
            },
            {
              image: 'queso.jpg',
              title: 'TARTA DE QUESO',
              description:
                'Tarta de queso fría con base de galleta y cobertura de mermelada de frambuesa o dulce de leche.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,80 €\nMolde de 20 cm. 6/8 raciones. 29,60 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.60',
                basePriceIncrement: '4.20',
              }),
            },
            {
              image: 'beltran.jpg',
              title: 'BELTRÁN',
              description:
                'Bizcocho de vainilla con galletas tipo Oreo troceadas, con relleno y cobertura de crema de queso y terminada con galletas tipo Oreo molidas.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,00 €\nMolde de 20 cm. 6/8 raciones. 29,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.90',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'armina.jpg',
              title: 'ARMINA',
              description:
                'Tres pisos de bizcocho de espinacas con un toque cítrico,  relleno y cobertura de crema de nata y queso, coronada con frambuesas.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo: 'Molde de 20 cm, 10/12 raciones. 42,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '42.00',
              }),
            },
            {
              image: 'abuela600.jpg',
              title: 'DE LA ABUELA',
              description:
                'Tarta de galletas empapadas en leche y mousse de chocolate. Un clásico, a nuestra manera.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,10 €\nMolde de 20 cm. 6/8 raciones. 31,80 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.80',
                basePriceIncrement: '3.30',
              }),
            },
            {
              image: 'olmo1600.jpg',
              title: 'OLMO',
              description:
                'Tarta de chocolate con un toque a malta, base de galleta y decorada con bolas de chocolate y cereales.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,00 €\nMolde de 20 cm. 6/8 raciones. 29,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.00',
                basePriceIncrement: '4.00',
              }),
            },
            {
              image: 'limon600.jpg',
              title: 'LIMÓN Y MERENGUE',
              description:
                'Tarta de crema de limón, con base de galleta y merengue italiano tostado con soplete.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 34,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '34.50',
                onlyBigSize: true,
              }),
            },
            {
              image: 'pavlova600.jpg',
              title: 'PAVLOVA',
              description:
                'Merengue crujiente con nata y frambuesas. Apta para intolerantes al gluten.',
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
                'Tres pisos de bizcocho de chocolate con relleno y cobertura de chocolate con leche.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 34,50 €\nMolde de 20 cm. 6/8 raciones. 30,20 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.20',
                basePriceIncrement: '4.30',
              }),
            },
            {
              image: 'wendy.jpg',
              title: 'WENDY',
              description:
                'Tres pisos de bizcocho de chocolate, relleno de dulce de leche y cobertura de chocolate con leche.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 30,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.30',
                basePriceIncrement: '4.70',
              }),
            },
            {
              image: 'mamaamelia600.jpg',
              title: 'MAMÁ AMELIA',
              description:
                'La tarta de almendra de mi abuela. Sin harina de trigo, apta para intolerantes al gluten.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 31,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.90',
                onlyBigSize: true,
              }),
            },
            {
              image: 'oreocheese600.jpg',
              title: 'OREO',
              description:
                'Tarta de crema de nata, queso y galleta tipo Oreo molida con base y cobertura de galleta tipo Oreo.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,50 €\nMolde de 20 cm. 6/8 raciones. 29,40 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.40',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'banoffee600.jpg',
              title: 'BANOFFEE',
              description:
                'Plátano, dulce de leche y nata montada con base de galleta.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,40 €\nMolde de 20 cm. 6/8 raciones. 29,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.30',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'ny600.jpg',
              title: 'NEW YORK CHEESECAKE',
              description:
                'Tarta de queso al horno, con base de galleta y cobertura de mermelada de frambuesa o de dulce de leche.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 30,90 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '30.90',
                basePriceIncrement: '4.10',
              }),
            },
            {
              image: 'cheeseblanco600.jpg',
              title: 'CHEESECAKE CHOCOLATE BLANCO',
              description:
                'Tarta de queso y chocolate blanco al horno con base de galleta .',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 36,00 €\nMolde de 20 cm. 6/8 raciones. 32,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '32.00',
                basePriceIncrement: '4.00',
              }),
            },
            {
              image: 'cheesechoco600.jpg',
              title: 'CHEESECAKE CHOCOLATE NEGRO',
              description:
                'Tarta de queso y chocolate negro al horno con base de galleta.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 36,00 €\nMolde de 20 cm. 6/8 raciones. 32,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '32.00',
                basePriceIncrement: '4.00',
              }),
            },
            {
              image: 'cheeseoreo600.jpg',
              title: 'CHEESECAKE CON OREO',
              description:
                'Tarta de queso al horno con trozos y base de galleta tipo Oreo.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 36,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '32.00',
                basePriceIncrement: '4.00',
                onlyBigSize: true,
              }),
            },
            {
              image: '3chocolates600.jpg',
              title: 'TRES CHOCOLATES',
              description:
                'Tarta fría de chocolate blanco, con leche y negro, con base de galleta.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 33,50 €\nMolde de 20 cm. 6/8 raciones. 29,30 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '29.30',
                basePriceIncrement: '4.20',
              }),
            },
            {
              image: 'brownie600.jpg',
              title: 'BROWNIE DE AVELLANAS',
              description:
                'Brownie de chocolate y avellanas. Un clásico de la repostería americana, a nuestra manera.',
              listInfo: 'Molde de 21cm x 21cm, 9 raciones. 22,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '22.00',
                useCustomSizeString: 'Molde de 21cm x 21cm, 9 raciones.',
              }),
            },
            {
              image: 'BrownieNutella600.jpg',
              title: 'BROWNIE DE NUTELLA',
              description:
                'Brownie de chocolate relleno de Nutella. Otra vuelta más al brownie.',
              listInfo: 'Molde de 21cm x 21cm, 9 raciones. 25,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '25.00',
                useCustomSizeString: 'Molde de 21cm x 21cm, 9 raciones.',
              }),
            },
            {
              image: 'cumple600.jpg',
              title: 'CUMPLEAÑOS',
              description:
                'Bizcocho de vainilla con relleno de crema de chocolate y nata montada, con cobertura de chocolate con leche.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo:
                'Molde de 24 cm, 10/12 raciones. 35,00 €\nMolde de 20 cm. 6/8 raciones. 31,80 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '31.80',
                basePriceIncrement: '3.20',
              }),
            },
            {
              image: 'celia600.jpg',
              title: 'CELIA',
              description:
                'Tres pisos de bizcocho Red Velvet,  relleno y cobertura de crema de nata y queso, coronada con fresas, frambuesas y suspiros de merengue. La decoración puede cambiar.',
              descriptionHelper:
                'Podemos hacerla sin harina de trigo, pero con trazas. Consulta el precio.',
              listInfo: 'Molde de 20 cm, 10/12 raciones. 42,00 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '42.00',
              }),
            },
            {
              image: '3leches600.jpg',
              title: 'TRES LECHES',
              description:
                'Bizcocho genovés empapado en tres leches, cubierto con dulce de leche y merengue tostado.',
              listInfo: 'Molde de 24 cm, 10/12 raciones. 35,50 €',
              buyButton: getBuyButtonStandardCakeSpecificInfo({
                basePrice: '35.50',
                onlyBigSize: true,
              }),
            },
            {
              image: 'vasitos600.jpg',
              title: 'INDIVIDUALES',
              description:
                'Algunas de nuestras tartas en formato individual. De la abuela, oreo, banoffee, zanahoria, Bosco, ..pregúntanos. En vaso de plástico o de cristal (con fianza que se recupera con la devolución). Mínimo 6 unidades de cada tipo. ',
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
                'Tres pisos de bizcocho Red Velvet relleno de crema de queso, decorada con frutos rojos. La decoración puede cambiar.',
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
                'Tres pisos de bizcocho de chocolate relleno de buttercream de chocolate con leche o negro. Coronada con rosas de buttercream.',
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
                'Tres pisos de bizcocho de vainilla relleno de buttercream de chocolate blanco, coronada buttercream y bolas de cereales de colores. La decoración puede cambiar.',
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
                'La versión muffin de nuestras tartas, con el mismo relleno y cobertura. Por encargo, mínimo 12u de cada tipo . 2,25 €',
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
              description: '550 g / 10,00 €',
              listInfo:
                'Zanahoria\nVainilla\nOreo\nChocolate\nRed Velvet\nYogur\nLimón\nVainilla con edulcorante\nChocolate con edulcorante\nCebra con edulcorante',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '10.00',
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'Zanahoria|Yogur|Limón|Vainilla|Oreo|Chocolate|Red Velvet|Vainilla con edulcorante|Chocolate con edulcorante|Cebra (vainilla y chocolate)',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'galletas600.jpg',
              title: 'COOKIES',
              description:
                'Bolsas de 8 unidades, consultar disponibilidad en tienda',
              listInfo:
                '\nCon lacasitos\nCon pepitas de chocolate\nDoble chocolate\nRed Velvet con pepitas de chocolate blanco\nDe limón\nDe mantequilla',
              hideListInfo: true,
            },
            {
              image: 'supercookies600.jpg',
              title: 'NY COOKIES',
              description:
                'Galletas tipo NY, blanditas por el centro y crujientes en el borde. 3,50€, mínimo 3u',
              listInfo:
                '\nDe pepitas de chocolate y nuez\nDe avellanas, Nutella y rellenas de Nutella\nCon lacasitos\nDe galletas tipo Oreo\nRed Velvet con pepitas de chocolate blanco\nRellenas de Nutella',
              hideListInfo: true,
              buyButton: {
                'data-item-min-quantity': 3,
                'data-item-price': '3.50',
                'data-item-custom1-name': 'Tipo',
                'data-item-custom1-options':
                  'De pepitas|De Nutella|De lacasitos|De Oreo|De Red Velvet',
                'data-item-stackable': 'never',
              },
            },
          ],
        },
      },
    ],
  },
  /* velas y toppers */
  {
    name: 'velas-y-toppers',
    options: {
      classes: 'bg-brand-secondary',
      fullwidth: true,
    },
    components: [
      {
        name: 'product-grid',
        options: {
          containerTailwind: 'pt-36 pb-20',
          imageDir: 'other-grid',
          hoverSuffix: '-hover',
          items: [
            {
              image: 'vela_n_demo.jpg',
              title: 'VELAS NÚMEROS (0-9)',
              description:
                'Velas decorativas con números del 0 al 9, perfectas para celebrar cualquier edad. Acabado metálico elegante. 2,50€',
              listInfo: '\nPlata\nRosa metalizado',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '2.50',
                'data-item-custom1-name': 'Número',
                'data-item-custom1-options': '0|1|2|3|4|5|6|7|8|9',
                'data-item-custom2-name': 'Color',
                'data-item-custom2-options': 'Plata|Rosa metalizado',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'vela_corazon.jpg',
              title: 'VELA CORAZÓN',
              description:
                'Vela en forma de corazón, ideal para celebraciones románticas y especiales. 2,50€',
              listInfo: '\nPlata\nRosa metalizado',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '2.50',
                'data-item-custom1-name': 'Color',
                'data-item-custom1-options': 'Plata|Rosa metalizado',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'vela_interrogante.jpg',
              title: 'VELA INTERROGACIÓN',
              description:
                'Vela interrogante, perfecta para fiestas sorpresa y revelaciones. Crea expectación con estilo. 2,50€',
              listInfo: '\nPlata\nRosa metalizado',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '2.50',
                'data-item-custom1-name': 'Color',
                'data-item-custom1-options': 'Plata|Rosa metalizado',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'topper-madera.jpg',
              title: 'TOPPERS MADERA',
              description:
                'Toppers de madera personalizables con un toque natural y elegante. Desde 8,00€',
              listInfo:
                '\nGenéricos\nPersonalizados\nGrabado imagen\n15cm o 20cm',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '8.00',
                'data-item-custom1-name': 'Tamaño',
                'data-item-custom1-options': '15cm|20cm[+2.00]',
                'data-item-custom2-name': 'Tipo',
                'data-item-custom2-options':
                  'Genéricos|Personalizados[+3.00]|Grabado imagen[+5.00]',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'topper-acrilico.jpg',
              title: 'TOPPERS ACRÍLICO',
              description:
                'Toppers de acrílico con acabado moderno y brillante. Ideales para darle un toque sofisticado a tu celebración. Desde 8,00€',
              listInfo: '\nGenéricos\nPersonalizados\n15cm o 20cm',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '8.00',
                'data-item-custom1-name': 'Tamaño',
                'data-item-custom1-options': '15cm|20cm[+2.00]',
                'data-item-custom2-name': 'Tipo',
                'data-item-custom2-options': 'Genéricos|Personalizados[+3.00]',
                'data-item-stackable': 'never',
              },
            },
            {
              image: 'mini-topper.jpg',
              title: 'MINI TOPPERS 10cm',
              description:
                'Mini toppers de 10cm, perfectos para tartas pequeñas o cupcakes. Disponibles en madera o acrílico. Desde 5,00€',
              listInfo:
                '\nMadera - Genéricos\nMadera - Personalizados\nMadera - Grabado imagen\nAcrílico - Genéricos\nAcrílico - Personalizados',
              hideListInfo: true,
              buyButton: {
                'data-item-price': '5.00',
                'data-item-custom1-name': 'Material',
                'data-item-custom1-options': 'Madera|Acrílico',
                'data-item-custom2-name': 'Tipo',
                'data-item-custom2-options':
                  'Genéricos|Personalizados[+2.00]|Grabado imagen (solo madera)[+3.00]',
                'data-item-stackable': 'never',
              },
            },
          ],
        },
      },
    ],
  },
]
