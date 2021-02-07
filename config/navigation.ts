import { SHOP_URL } from '@/config/constants'

export default [
  { name: 'Inicio', path: '/', target: '_self' },
  { name: 'Del obrador', path: '/tartas', target: '_self' },
  {
    name: 'Tienda',
    path: SHOP_URL,
    target: '_blank',
  },
  { name: 'Nosotras', path: '/nosotros', target: '_self' },
]
