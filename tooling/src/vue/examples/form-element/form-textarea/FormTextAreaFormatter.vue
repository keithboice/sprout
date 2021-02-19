<template>
  <b-card-code title="Formatter support">
    <b-card-text>
      <code>&lt;b-form-textarea&gt;</code>
      <span>optionally supports formatting by passing a function reference to the </span>
      <code>formatter</code>
      <span> prop.</span>
    </b-card-text>
    
    <div>
      <b-form-group
        description="We will convert your text to lowercase instantly"
        label="Textarea with formatter (on input)"
        label-for="textarea-formatter"
      >
        <b-form-textarea
          id="textarea-formatter"
          v-model="text1"
          :formatter="formatter"
          placeholder="Enter your text"
        />
      </b-form-group>
      <b-card-text><strong>Value:</strong> {{ text1 }}</b-card-text>
      
      <b-form-group
        description="This one is a little lazy!"
        label="Textarea with lazy formatter (on blur)"
        label-for="textarea-lazy"
      >
        <b-form-textarea
          id="textarea-lazy"
          v-model="text2"
          :formatter="formatter"
          lazy-formatter
          placeholder="Enter your text"
        />
      </b-form-group>
      <b-card-text><strong>Value:</strong> {{ text2 }}</b-card-text>
    </div>
    
    <template #code>
      {{ codeFormatter }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                from "@core/components/b-card-code";
import { BCardText, BFormGroup, BFormTextarea } from "bootstrap-vue";
import { codeFormatter }                        from "./code";


export default {
  components: {
    BCardCode,
    BFormTextarea,
    BCardText,
    BFormGroup
  },
  data () {
    return {
      text1: "",
      text2: "",
      codeFormatter
    };
  },
  methods: {
    formatter ( value ) {
      return value.toLowerCase();
    }
  }
};
</script>
