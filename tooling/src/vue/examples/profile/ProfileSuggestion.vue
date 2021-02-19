<template>
  <b-card>
    <h5>Suggestions</h5>
    
    <!-- contacts suggestion  -->
    <div
      v-for="(data,index) in suggestions"
      :key="data.avatar"
      :class="index == 0 ? 'mt-2' : 'mt-1'"
      class="d-flex justify-content-start align-items-center"
    >
      <b-avatar
        :src="data.avatar"
        class="mr-50"
        size="40"
      />
      <div class="user-page-info">
        <h6 class="mb-0">
          {{ data.name }}
        </h6>
        <small class="text-muted">{{ data.mutualFriend }}</small>
      </div>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        class="btn-icon ml-auto"
        size="sm"
        variant="primary"
      >
        <feather-icon icon="UserPlusIcon" />
      </b-button>
    </div>
    <!--/ contacts suggestion  -->
  </b-card>
</template>

<script>
import { BAvatar, BButton, BCard } from "bootstrap-vue";
import Ripple                      from "vue-ripple-directive";


export default {
  components: {
    BCard,
    BAvatar,
    BButton
  },
  directives: {
    Ripple
  },
  props:      {
    suggestions: {
      type:    Array,
      default: () => []
    }
  }
};
</script>
