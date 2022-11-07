import Vue from 'vue'
import { MetaData } from '@/types'

export default Vue.extend({
  methods: {
    getMetadata(options: MetaData): object {
      return {
        title: options.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: options.description,
          },
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: options.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: options.description,
          },
          // Twitter Card
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: options.title,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: options.description,
          },
        ],
      }
    },
    getMetaPixel() {
      return {
        __dangerouslyDisableSanitizers: ['script'],
        script: [
          {
            hid: 'meta-pixel',
            innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '789310138838241');
            fbq('track', 'PageView');
            `,
            type: 'text/javascript',
            charset: 'utf-8',
          },
        ],
      }
    },
  },
})
