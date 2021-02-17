<template>
  <component
    :is="tag"
    v-on="$listeners"
  >
    <b-avatar
      :badge="isChatContact"
      :badge-variant="resolveAvatarBadgeVariant(user.status)"
      :src="user.avatar"
      class="badge-minimal"
      size="42"
      variant="transparent"
    />
    <div class="chat-info flex-grow-1">
      <h5 class="mb-0">
        {{ user.fullName }}
      </h5>
      <p class="card-text text-truncate">
        {{ isChatContact ? user.chat.lastMessage.message : user.about }}
      </p>
    </div>
    <div
      v-if="isChatContact"
      class="chat-meta text-nowrap"
    >
      <small class="float-right mb-25 chat-time">{{ formatDateToMonthShort(user.chat.lastMessage.time, {
        hour: 'numeric',
        minute: 'numeric'
      }) }}</small>
      <b-badge
        v-if="user.chat.unseenMsgs"
        class="float-right"
        pill
        variant="primary"
      >
        {{ user.chat.unseenMsgs }}
      </b-badge>
    </div>
  </component>
</template>

<script>
import { formatDateToMonthShort } from '@core/utils/filter'
import { BAvatar, BBadge } from 'bootstrap-vue'
import useChat from './useChat'

export default {
  components: {
    BAvatar,
    BBadge,
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    user: {
      type: Object,
      required: true,
    },
    isChatContact: {
      type: Boolean,
      dedfault: false,
    },
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()
    return {
      formatDateToMonthShort,
      resolveAvatarBadgeVariant,
    }
  },
}
</script>

<style>

</style>
