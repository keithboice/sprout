<template>
  <b-card-code title="Separator">
    <b-card-text>
      <span>These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing </span>
      <code>$breadcrumb-divider</code>
      <span> variable value in scss</span>
    </b-card-text>
    
    <div id="component-breadcrumbs">
      <b-breadcrumb
        :items="items"
        class="breadcrumb-slash"
      />
      <b-breadcrumb
        :items="items"
        class="breadcrumb-dots"
      />
      <b-breadcrumb
        :items="items"
        class="breadcrumb-dashes"
      />
      <b-breadcrumb
        :items="items"
        class="breadcrumb-pipes"
      />
      <b-breadcrumb
        :items="items"
        class="breadcrumb-chevron mb-0"
      />
    </div>
    
    <template #code>
      {{ codeSeparator }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                  from "@core/components/b-card-code";
import { BBreadcrumb, BCardText } from "bootstrap-vue";
import { codeSeparator }          from "./code";


export default {
  components: {
    BCardCode,
    BBreadcrumb,
    BCardText
  },
  data () {
    return {
      codeSeparator,
      items: [
        {
          text: "Home"
        }, {
          text: "Library"
        }, {
          text:   "Data",
          active: true
        }
      ]
    };
  }
};
</script>
