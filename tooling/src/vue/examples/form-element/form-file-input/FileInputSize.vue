<template>
  <b-card-code
    title="Control sizing"
  >
    <b-card-text>
      <span>Use the </span>
      <code>size</code>
      <span>
        prop to control the visual size of the input. The default size is considered md (medium). Optional sizes are
      </span>
      <code>lg</code>
      <span> (large) and </span>
      <code>sm</code>
      <span> (small).</span>
    </b-card-text>
    
    <!-- small -->
    <b-form-group
      label="Small:"
      label-cols-sm="2"
      label-for="file-small"
      label-size="sm"
    >
      <b-form-file
        id="file-small"
        size="sm"
      />
    </b-form-group>
    
    <!-- default -->
    <b-form-group
      label="Default:"
      label-cols-sm="2"
      label-for="file-default"
    >
      <b-form-file id="file-default" />
    </b-form-group>
    
    <!-- large -->
    <b-form-group
      class="mb-0"
      label="Large:"
      label-cols-sm="2"
      label-for="file-large"
      label-size="lg"
    >
      <b-form-file
        id="file-large"
        size="lg"
      />
    </b-form-group>
    
    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                            from "@core/components/b-card-code";
import { BCardText, BFormFile, BFormGroup } from "bootstrap-vue";
import { codeSize }                         from "./code";


export default {
  components: {
    BCardCode,
    BFormFile,
    BFormGroup,
    BCardText
  },
  data () {
    return {
      codeSize
    };
  }
};
</script>
