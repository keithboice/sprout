<template>
  <b-card title="Multiple Select">
    <b-row>
      <b-col lg="6">
        <b-card-code
          class="border"
          title="Basic Multiple Select"
        >
          <b-card-text>
            <span>Equivalent to the </span>
            <code>multiple</code>
            <span> attribute on a </span>
            <code>&lt;select&gt;</code>
            <span> input.</span>
          </b-card-text>
          
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="option"
            label="title"
            multiple
          />
          
          <template #code>
            {{ codeVueMultiBasic }}
          </template>
        </b-card-code>
      </b-col>
      <b-col lg="6">
        <b-card-code
          class="border"
          title="Select with Icon"
        >
          <b-card-text>
            <span>The current option within the dropdown, contained within </span><code>&lt;li&gt;</code>
            <span>.</span>
          </b-card-text>
          
          <v-select
            v-model="selected1"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="books"
            label="title"
            multiple
          >
            <template #option="{ title, icon }">
              <feather-icon
                :icon="icon"
                class="align-middle mr-25"
                size="16"
              />
              <span> {{ title }}</span>
            </template>
          </v-select>
          
          <template #code>
            {{ codeVueMultiIcon }}
          </template>
        </b-card-code>
      </b-col>
      <b-col lg="6">
        <b-card-code
          class="border"
          title="vue-select pushTags"
        >
          <b-card-text>
            To allow input that's not present within the options, set the taggable prop to true.
          </b-card-text>
          
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            multiple
            placeholder="Add Options"
            push-tags
            taggable
          />
          
          <template #code>
            {{ codeMultiPush }}
          </template>
        </b-card-code>
      </b-col>
      <b-col lg="6">
        <b-card-code
          class="border mb-0"
          title="Limiting the Number of Selections"
        >
          <b-card-text>
            <code>selectable</code>
            <span>
              can also be used a bit more creatively to limit the number selections that can be made within the component.
              In this case, the user can select any author, but may only select a maximum of three books.
            </span>
          </b-card-text>
          
          <v-select
            v-model="selected2"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="books"
            :selectable="() => selected2.length < 3"
            label="title"
            multiple
            placeholder="Choose up to 3 books!"
          />
          
          <template #code>
            {{ codeVueSelectionLimit }}
          </template>
        </b-card-code>
      </b-col>
      <b-col lg="6">
        <b-card-code
          class="border mb-0"
          title="Vue-Select direction"
        >
          <b-card-text><span>Sets RTL support. Accepts </span><code>ltr, rtl, auto</code>.</b-card-text>
          
          <div class="mb-2">
            <b-form-radio
              v-model="dir"
              inline
              name="some-radios"
              value="ltr"
            >
              LRT
            </b-form-radio>
            <b-form-radio
              v-model="dir"
              inline
              name="some-radios"
              value="rtl"
            >
              RTL
            </b-form-radio>
          </div>
          
          <v-select
            v-model="selected3"
            :dir="dir"
            :options="books"
            label="title"
            multiple
          />
          
          <template #code>
            {{ codeVueDir }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import BCardCode                                                                                 from "@core/components/b-card-code";
import { BCard, BCardText, BCol, BFormRadio, BRow }                                              from "bootstrap-vue";
import vSelect                                                                                   from "vue-select";
import { codeMultiPush, codeVueDir, codeVueMultiBasic, codeVueMultiIcon, codeVueSelectionLimit } from "./code";


export default {
  components: {
    BRow,
    BCol,
    BFormRadio,
    BCardText,
    BCard,
    BCardCode,
    vSelect
  },
  data () {
    return {
      codeVueMultiBasic,
      codeVueMultiIcon,
      codeMultiPush,
      codeVueSelectionLimit,
      codeVueDir,
      dir:       "ltr",
      selected:  [
        { title: "Square" }, { title: "Romboid" }
      ],
      selected1: [
        {
          title: "Command",
          icon:  "CommandIcon"
        }
      ],
      selected2: [],
      selected3: [
        {
          title: "Database",
          icon:  "DatabaseIcon"
        }
      ],
      options:   [],
      option:    [
        { title: "Square" },
        { title: "Rectangle" },
        { title: "Rombo" },
        { title: "Romboid" },
        { title: "Trapeze" },
        { title: "Triangle" },
        { title: "Polygon" }
      ],
      books:     [
        {
          title: "Database",
          icon:  "DatabaseIcon"
        }, {
          title: "Codepen",
          icon:  "CodepenIcon"
        }, {
          title: "Aperture ",
          icon:  "ApertureIcon"
        }, {
          title: "Command",
          icon:  "CommandIcon"
        }
      ]
    };
  }
};
</script>
