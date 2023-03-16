export const SHOW_MENU_SCROLL_THRESHOLD: number = 50
export const GOOGLE_PAGE: string = 'https://g.page/tartaytantas'
export const SHOP_URL: string =
  'https://www.portalrest.com/index.html?data=%3DATPrNXYmETPtZyMxMzN5ETP0NXZSRWa'
export const WHATSAPP_URL: string =
  'https://wa.me/34663398161?text=Quiero una tarta! :D'
export const PHONE_CALL_URL: string = 'tel:34663398161'
export const SNIPCART_PUBLIC_API_KEY: string =
  'ZTk1NDExNjItNGIwNy00YTMxLTllY2UtMDQ4YmQxOWZhMmViNjM4MTI2OTIwMjY5OTY5NjMw'

export const getDomain = () => {
  return process.env.NODE_ENV !== 'production'
    ? 'https://5475-139-47-82-16.eu.ngrok.io'
    : 'https://tartaytantas-git-ecommerce-belt.vercel.app'
  // : 'https://tartaytantas.es'
}

export const GOOGLE_ROUTES_API_KEY = 'AIzaSyA_xHqlPu6sNVUzmaWOoyuSUOS1t95Vxf4'

export const TARTAYTANTAS_LAT_LONG = {
  lat: 40.4498699,
  long: -3.7729428,
}
