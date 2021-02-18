<template>
  <b-card class="text-center">
    <b-avatar
      :variant="`light-${color}`"
      class="mb-1"
      size="45"
    >
      <feather-icon
        :icon="icon"
        size="21"
      />
    </b-avatar>
    <div class="truncate">
      <h2 class="mb-25 font-weight-bolder">
        {{ statistic }}
      </h2>
      <span>{{ statisticTitle }}</span>
    </div>
  </b-card>
</template>

<script>
import { BAvatar, BCard } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    statistic: {
      type: [Number, String],
      required: true,
    },
    statisticTitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
