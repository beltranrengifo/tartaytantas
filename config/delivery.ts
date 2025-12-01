// Delivery can be disabled via deliveryDisabled in nuxt.config.js env
// This forces all orders to "Recogida en tienda" (in-store pickup)
export const isDeliveryDisabled = (): boolean => {
  const value = process.env.deliveryDisabled as unknown
  return value === true || value === 'true' || value === '1'
}
