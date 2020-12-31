import Vue from 'vue'
import VSanitize from 'v-sanitize'

const options = {
  allowedTags: ['span', 'a'],
  allowedAttributes: {
    a: ['href', 'target'],
    span: ['class'],
  },
  allowedClasses: {
    '*': ['block', 'mb-6'],
  },
}

Vue.use(VSanitize, options)
