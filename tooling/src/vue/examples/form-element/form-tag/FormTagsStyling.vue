<template>
  <b-card-code
    title="Styling Options"
  >
    <b-card-text>
      <span>Several props are available to alter the basic styling of the default tagged interface:</span>
      <code>tag-pills, tag-variant, size, placeholder, state, disabled</code>
    </b-card-text>
    
    <div>
      <label for="tags-pills">Enter tags</label>
      <b-form-tags
        v-model="value"
        class="mb-2"
        input-id="tags-pills"
        placeholder="Enter new tags separated by space"
        separator=" "
        size="lg"
        tag-pills
        tag-variant="primary"
      />
      <b-card-text>Value: {{ value }}</b-card-text>
    </div>
    
    <template #code>
      {{ codeStyling }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                from "@core/components/b-card-code";
import { BCardText, BFormTags } from "bootstrap-vue";
import { codeStyling }          from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BFormTags
  },
  data () {
    return {
      value: [ "apple", "orange", "grape" ],
      codeStyling
    };
  }
};
</script>
