import { SHOP_URL, SHOP_URL_APANYMANTEL } from '@/config/constants'

export default [
  { name: 'Inicio', path: '/', target: '_self' },
  { name: 'Del obrador', path: '/tartas', target: '_self' },
  {
    name: 'Tienda',
    path: SHOP_URL,
    target: '_blank',
  },
  {
    name: 'Tienda Apanymantel',
    path: SHOP_URL_APANYMANTEL,
    target: '_blank',
  },
  { name: 'Nosotras', path: '/nosotros', target: '_self' },
]
