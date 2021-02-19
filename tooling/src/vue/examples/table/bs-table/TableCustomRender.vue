<template>
  <b-card-code
    no-body
    title="Custom data rendering"
  >
    <b-table
      :fields="fields"
      :items="items"
      class="mb-0"
      responsive
    >
      
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      
      <!-- A custom formatted column -->
      <template #cell(name)="data">
        <span class="text-nowrap">{{ data.value.first + " - " + data.value.last }}</span>
      </template>
      
      <!-- A custom formatted column -->
      <template #cell(Popularity)="data">
        <b-progress
          :value="data.value.value"
          :variant="data.value.variant"
          height="7px"
          max="100"
          striped
        />
      </template>
      
      <template #cell(order_status)="data">
        <b-badge
          :variant="data.value.variant"
          pill
        >
          {{ data.value.status }}
        </b-badge>
      </template>
      
      <!-- A virtual composite column -->
      <template #cell(price)="data">
        {{ "$" + data.value }}
      </template>
      
      <!-- Optional default data cell scoped slot -->
      <template #cell()="data">
        {{ data.value }}
      </template>
    </b-table>
    
    <template #code>
      {{ codeDataRendering }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                     from "@core/components/b-card-code/BCardCode.vue";
import { BBadge, BProgress, BTable } from "bootstrap-vue";
import { codeDataRendering }         from "./code";


export default {
  components: {
    BCardCode,
    BTable,
    BProgress,
    BBadge
  },
  data () {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        "index", // A column that needs custom formatting
        { key:   "name",
          label: "Name"
        }, "Category", // A regular column
        { key:   "Popularity",
          label: "Popularity"
        }, // A regular column
        { key:   "order_status",
          label: "Order Status"
        }, // A virtual column made up from two fields
        { key:   "price",
          label: "Price"
        }
      ],
      items:  [
        {
          name:         {
            first: "Fitbit",
            last:  "Activity Tracker"
          },
          Category:     "Fitness",
          order_status: {
            status:  "Delivered",
            variant: "success"
          },
          Popularity:   {
            value:   50,
            variant: "success"
          },
          price:        99.99
        }, {
          name:         {
            first: "Fitbit ",
            last:  "Flex Wireless Activity"
          },
          Category:     "Fitness",
          order_status: {
            status:  "Pending",
            variant: "primary"
          },
          Popularity:   {
            value:   36,
            variant: "primary"
          },
          price:        89.85
        }, {
          name:         {
            first: "Fitbit",
            last:  "Sleep Tracker Wristband"
          },
          Category:     "Fitness",
          order_status: {
            status:  "Delivered",
            variant: "success"
          },
          Popularity:   {
            value:   76,
            variant: "success"
          },
          price:        65.25
        }, {
          name:         {
            first: "Fitbit",
            last:  "Sleep Wristband"
          },
          Category:     "Fitness",
          order_status: {
            status:  "On Hold",
            variant: "warning"
          },
          Popularity:   {
            value:   55,
            variant: "warning"
          },
          price:        75.55
        }, {
          name:         {
            first: "Fitbit",
            last:  "Clip for Zip Wireless Activity Trackers"
          },
          Category:     "Fitness",
          order_status: {
            status:  "Canceled",
            variant: "danger"
          },
          Popularity:   {
            value:   75,
            variant: "danger"
          },
          price:        105.55
        }
      ],
      codeDataRendering
    };
  }
};
</script>
