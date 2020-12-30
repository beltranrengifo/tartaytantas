<template>
  <div class="social-share__list mt-6">
    <share-network
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :url="getFullUrl"
      :title="title"
      :description="description"
      :twitter-user="sharing.twitterUser"
    >
      <span class="cursor-pointer">
        {{ network.name }}
      </span>
    </share-network>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SocialShare',

  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'Description of sharing',
    },
    widgetTitle: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      sharing: {
        twitterUser: this.$config.twitterUser || '',
      },
      networks: [
        { network: 'linkedin', name: 'In' },
        { network: 'twitter', name: 'Tw' },
        { network: 'facebook', name: 'Fb' },
        { network: 'email', name: 'Mail' },
        { network: 'whatsapp', name: 'Whtp' },
      ],
    }
  },

  computed: {
    getFullUrl(): string {
      return this.$config.baseUrl + this.url
    },
  },
})
</script>

<style lang="scss">
.social-share {
  &__list {
    & > a:not(:last-child) {
      margin: 0 rem(16) 0 0;
    }
  }
}
</style>
