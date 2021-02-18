<template>
  <b-card-code title="Avatar Group">
    <b-card-text>
      <span>Group multiple avatars together by wrapping them in a </span>
      <code>&lt;b-avatar-group&gt;</code>
      <span> component. Add class </span>
      <code>pull-up</code>
      <span> for pull up the avatar on hover.</span>
    </b-card-text>
    
    <b-avatar-group size="32px">
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
        class="pull-up"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-7.jpg')"
        class="pull-up"
        variant="primary"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-10.jpg')"
        class="pull-up"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
        class="pull-up"
        variant="danger"
      />
      <b-avatar
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
        class="pull-up"
      />
    </b-avatar-group>
    
    <template #code>
      {{ codeGroup }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                            from "@core/components/b-card-code/BCardCode.vue";
import { BAvatar, BAvatarGroup, BCardText } from "bootstrap-vue";
import { codeGroup }                        from "./code";


export default {
  components: {
    BCardCode,
    BAvatarGroup,
    BAvatar,
    BCardText
  },
  data () {
    return {
      codeGroup
    };
  }
};
</script>
