<template>
  <b-card-code title="With Icon">
    <app-timeline>
      <app-timeline-item
        icon="AwardIcon"
        subtitle="All milestones are completed"
        time="few minutes ago"
        title="Goal Achieved"
        variant="success"
      />
      
      <app-timeline-item
        icon="InfoIcon"
        subtitle="You are just one step away from your goal"
        time="3 minutes ago"
        title="Last milestone remain"
        variant="info"
      />
      
      <app-timeline-item
        icon="ClockIcon"
        subtitle="Only 30 minutes left to finish milestone"
        time="21 minutes ago"
        title="Your are running low on time"
        variant="warning"
      />
      
      <app-timeline-item
        icon="UserIcon"
        subtitle="New event has been added to your schedule"
        time="36 minutes ago"
        title="Client Meeting"
      />
      
      <app-timeline-item
        icon="GridIcon"
        subtitle="Product design added in workflow"
        time="1 hour ago"
        title="Product Design"
        variant="success"
      />
    </app-timeline>
    
    <template #code>
      {{ codeWithIcon }}
    </template>
  </b-card-code>
</template>

<script>
import AppTimeline      from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem  from "@core/components/app-timeline/AppTimelineItem.vue";
import BCardCode        from "@core/components/b-card-code";
import { codeWithIcon } from "./code";


export default {
  components: {
    BCardCode,
    AppTimeline,
    AppTimelineItem
  },
  data () {
    return {
      codeWithIcon
    };
  }
};
</script>
