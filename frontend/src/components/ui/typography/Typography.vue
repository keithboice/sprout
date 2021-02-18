<template>
  <div>
    <typography-default />
    <typography-display />
    <typography-blockquotes />
    <typography-list />
    <typography-description />
  </div>
</template>

<script>
import TypographyBlockquotes from "./TypographyBlockquotes.vue";
import TypographyDefault     from "./TypographyDefault.vue";
import TypographyDescription from "./TypographyDescription.vue";
import TypographyDisplay     from "./TypographyDisplay.vue";
import TypographyList        from "./TypographyList.vue";


export default {
  components: {
    TypographyDefault,
    TypographyDisplay,
    TypographyBlockquotes,
    TypographyList,
    TypographyDescription
  }
};
</script>
