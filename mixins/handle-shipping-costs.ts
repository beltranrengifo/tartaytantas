import Vue from 'vue'
import {
  GOOGLE_ROUTES_API_KEY,
  TARTAYTANTAS_LAT_LONG,
} from '~/config/constants'
import { SnipcartStore } from '~/types'

declare const Snipcart: any

export default Vue.extend({
  methods: {
    async getDistance(geocodeAddressUrl: string): Promise<number | undefined> {
      try {
        const geocodingResponse = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${geocodeAddressUrl}&key=${GOOGLE_ROUTES_API_KEY}`
        )

        if (!geocodingResponse) return

        const geocodingData = await geocodingResponse.json()

        if (!geocodingData) return

        const routeResponse = await fetch(
          'https://routes.googleapis.com/directions/v2:computeRoutes',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': GOOGLE_ROUTES_API_KEY,
              'X-Goog-FieldMask':
                'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline',
            },
            body: JSON.stringify({
              origin: {
                location: {
                  latLng: {
                    latitude: TARTAYTANTAS_LAT_LONG.lat,
                    longitude: TARTAYTANTAS_LAT_LONG.long,
                  },
                },
              },
              destination: {
                location: {
                  latLng: {
                    latitude: geocodingData?.results[0]?.geometry.location.lat,
                    longitude: geocodingData?.results[0]?.geometry.location.lng,
                  },
                },
              },
              travelMode: 'DRIVE',
              routingPreference: 'TRAFFIC_AWARE',
              computeAlternativeRoutes: false,
              routeModifiers: {
                avoidTolls: true,
                avoidHighways: false,
                avoidFerries: false,
              },
              languageCode: 'es-ES',
              units: 'IMPERIAL',
            }),
          }
        )

        const routeData = await routeResponse.json()
        return routeData.routes[0].distanceMeters
      } catch (error) {
        console.error(error)
      }
    },

    async handleShippingCosts({
      snipcartStore,
    }: {
      snipcartStore: SnipcartStore
    }): Promise<void> {
      const snipcartStoreState = snipcartStore.getState()
      const shippingAddress = snipcartStoreState.cart.shippingAddress

      if (!shippingAddress) return

      const geocodeAddressUrl = `${shippingAddress.fullAddress} ${shippingAddress.postalCode} ${shippingAddress.province}`

      try {
        const distance = await this.getDistance(geocodeAddressUrl)

        if (
          distance &&
          distance > 10000 &&
          snipcartStoreState.cart.shippingDetails.method === 'Envío estandar'
        ) {
          const inputNode = document.getElementById(
            'selectedRate-envio-estandar-envio-estandar'
          )
          const selectShippingButton = inputNode?.closest(
            '.snipcart-shipping-rates-list-item'
          )

          if (selectShippingButton) {
            await Snipcart.api.cart.setShippingInformation({
              method: 'Recogida en tienda',
              cost: 0,
            })

            const existingAlert = document.getElementById('tt-distance-alert')

            if (existingAlert) {
              return
            }

            const titleNode = document.querySelector(
              '#snipcart-checkout-step-shipping h1.snipcart__font--subtitle'
            )
            const titleContainer = titleNode?.closest('.snipcart__box--header')

            const alert = document.createElement('div')
            alert.classList.add('tt-snipcart-alert')
            alert.setAttribute('id', 'tt-distance-alert')
            alert.innerHTML = `
              <h4>El envío no está disponible.</h4>
              Según nuestros cálculos, el punto de entrega está a más de 10 km de distancia de nuestro obrador (${distance} m).<br/>
              Sentimos comunicarte que aún no tenemos disponible la entrega para esta distancia.
              Ven al obrador a recoger tu pedido o, si no te es posible, llámanos por teléfono o escríbenos un Whatsapp al
              <a href="https://wa.me/34663398161?text=Quiero una tarta! :D" target="_blank">663398161</a> y vemos cómo ayudarte.
            `
            titleContainer?.after(alert)
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
})
