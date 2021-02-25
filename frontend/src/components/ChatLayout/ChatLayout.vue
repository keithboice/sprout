<template>
  <ChatLayoutWrapper>
    
    <router-view />
  
  </ChatLayoutWrapper>
</template>

<script>
  import ChatLayoutWrapper from "@/components/ChatLayoutWrapper/ChatLayoutWrapper.vue"
  import { $themeConfig }  from "@conf/theme"

  /**
   * Chat layout.
   */
  export default {
    name: 'ChatLayout',
    components: {
      ChatLayoutWrapper
    },
    data () {
      return {
        showCustomizer: $themeConfig.layout.customizer
      }
    }
  }
</script>