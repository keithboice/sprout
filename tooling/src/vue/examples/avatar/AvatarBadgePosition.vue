<template>
  <b-card-code title="Badge positioning">
    <b-card-text class="mb-0">
      <span>By default the badge appears on the bottom right of the avatar. </span>
      <span>You can use the </span>
      <code>badge-top</code>
      <span> and </span>
      <code>badge-right</code>
      <span> boolean props to switch the sides.</span>
    </b-card-text>
    
    <div class="demo-inline-spacing">
      <b-avatar
        badge
        badge-variant="success"
        class="mr-1"
      />
      <b-avatar
        badge
        badge-left
        badge-variant="success"
        class="mr-1"
      />
      <b-avatar
        badge
        badge-top
        badge-variant="success"
        class="mr-1"
      />
      <b-avatar
        badge
        badge-left
        badge-top
        badge-variant="success"
        class="mr-1"
      />
    </div>
    
    <template #code>
      {{ codeBadgePosition }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode              from "@core/components/b-card-code";
import { BAvatar, BCardText } from "bootstrap-vue";
import { codeBadgePosition }  from "./code";


export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText
  },
  data () {
    return {
      codeBadgePosition
    };
  }
};
</script>
