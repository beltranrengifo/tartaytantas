import cakesContent from '~/content/tartas'
import { ProductItem } from '~/types'

const CAKES_GRID_ITEMS = ['NEW YORK CHEESECAKE', 'ZANAHORIA', 'BOSCO']

export const getGridItemsFromCakes = () => {
  const cakesOptions: any = cakesContent.find(
    (items) => items.name === 'tartas'
  )?.components[0].options

  const cakes = cakesOptions.items

  return cakes
    .filter((cake: ProductItem) => CAKES_GRID_ITEMS.includes(cake.title))
    .map((cake: ProductItem) => ({
      ...cake,
      action: {
        label: 'Comprar',
      },
    }))
}
