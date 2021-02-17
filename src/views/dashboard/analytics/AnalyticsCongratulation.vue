<template>
  <b-card
    v-if="data"
    class="card"
    text-variant="center"
  >

    <b-avatar
      class="shadow mb-2"
      size="70"
      variant="dark"
    >
      <feather-icon
        icon="AwardIcon"
        size="28"
      />
    </b-avatar>
    <h1 class="mb-1 mt-50 text-dark">
      {{ new Date().toLocaleDateString() }}
    </h1>
    <b-card-text class="m-auto w-75">
      Campaigns are performing <strong>{{ data.saleToday }}%</strong> better than average today.
    </b-card-text>
  </b-card>
</template>

<script>
import { BAvatar, BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
    BCardText,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
