<template>
  <b-card-code title="Badges With Icons">
    <b-card-text class="mb-0">
      You can add icon inside badge components.
    </b-card-text>
    
    <!--badges -->
    <div class="demo-inline-spacing">
      <b-badge variant="primary">
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Primary</span>
      </b-badge>
      <b-badge>
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Secondary</span>
      </b-badge>
      <b-badge
        variant="success"
      >
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Success</span>
      </b-badge>
      <b-badge
        variant="danger"
      >
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Danger</span>
      </b-badge>
      <b-badge
        variant="warning"
      >
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Warning</span>
      </b-badge>
      <b-badge
        variant="info"
      >
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Info</span>
      </b-badge>
      <b-badge
        variant="dark"
      >
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span>Dark</span>
      </b-badge>
    </div>
    
    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode             from "@core/components/b-card-code";
import { BBadge, BCardText } from "bootstrap-vue";
import { codeIcon }          from "./code";


export default {
  components: {
    BCardCode,
    BBadge,
    BCardText
  },
  data () {
    return {
      codeIcon
    };
  }
};
</script>
