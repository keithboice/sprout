<template>
  <b-card-code title="Pill Themes">
    <b-card-text>
      <span>Use class </span>
      <code>.nav-pill-{color-name}</code>
      <span> with </span>
      <code>&lt;b-tabs&gt;</code>
      <span> class to apply color according to your choice.</span>
    </b-card-text>
    
    <!-- primary -->
    <h6>Primary</h6>
    <b-tabs
      nav-class="nav-pill-primary"
      pills
    >
      <b-tab
        active
        title="Active"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        disabled
        title="Disabled"
      />
    </b-tabs>
    
    <!-- secondary -->
    <h6>Secondary</h6>
    <b-tabs
      nav-class="nav-pill-secondary"
      pills
    >
      <b-tab
        active
        title="Active"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        disabled
        title="Disabled"
      />
    </b-tabs>
    
    <!-- success -->
    <h6>Success</h6>
    <b-tabs
      nav-class="nav-pill-success"
      pills
    >
      <b-tab
        active
        title="Active"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        disabled
        title="Disabled"
      />
    </b-tabs>
    
    <!-- danger -->
    <h6>Danger</h6>
    <b-tabs
      nav-class="nav-pill-danger"
      pills
    >
      <b-tab
        active
        title="Active"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        disabled
        title="Disabled"
      />
    </b-tabs>
    
    <!-- warning -->
    <h6>Warning</h6>
    <b-tabs
      nav-class="nav-pill-warning"
      pills
    >
      <b-tab
        active
        title="Active"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        disabled
        title="Disabled"
      />
    </b-tabs>
    
    <!-- info -->
    <h6>Info</h6>
    <b-tabs
      nav-class="nav-pill-info"
      pills
    >
      <b-tab
        active
        title="Active"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        disabled
        title="Disabled"
      />
    </b-tabs>
    
    <template #code>
      {{ codeThemes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                  from "@core/components/b-card-code";
import { BCardText, BTab, BTabs } from "bootstrap-vue";
import { codeThemes }             from "./code";


export default {
  components: {
    BCardCode,
    BCardText,
    BTab,
    BTabs
  },
  data () {
    return {
      codeThemes
    };
  }
};
</script>
