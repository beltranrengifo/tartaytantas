import { SHOP_URL } from '@/config/constants'

export default [
  { name: 'Inicio', path: '/', target: '_self' },
  { name: 'Tartas', path: '/tartas', target: '_self' },
  {
    name: 'Tienda',
    path: SHOP_URL,
    target: '_blank',
  },
  { name: 'Nosotras', path: '/nosotros', target: '_self' },
  { name: 'Las favoritas', path: '/las-favoritas', target: '_self' },
]
