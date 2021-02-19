<template>
  <b-card-code title="Input Mask">
    <b-row>
      
      <!-- credit card -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Credit Card"
          label-for="cardNumber"
        >
          <cleave
            id="cardNumber"
            v-model="form.cardNumber"
            :options="options.creditCard"
            :raw="false"
            class="form-control"
            placeholder="0000 0000 0000 0000"
          />
        </b-form-group>
      </b-col>
      
      <!-- phone number -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Phone Number"
          label-for="phone"
        >
          <b-input-group>
            <b-input-group-prepend is-text>
              US (+1)
            </b-input-group-prepend>
            <cleave
              id="phone"
              v-model="form.phone"
              :options="options.phone"
              :raw="false"
              class="form-control"
              placeholder="1234 567 8900"
            />
          </b-input-group>
        
        </b-form-group>
      </b-col>
      
      <!-- date -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Date"
          label-for="date"
        >
          <cleave
            id="date"
            v-model="form.date"
            :options="options.date"
            :raw="false"
            class="form-control"
            placeholder="YYYY-MM-DD"
          />
        </b-form-group>
      </b-col>
      
      <!-- time -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Time"
          label-for="time"
        >
          <cleave
            id="time"
            v-model="form.time"
            :options="options.time"
            :raw="false"
            class="form-control"
            placeholder="hh:mm:ss"
          />
        </b-form-group>
      </b-col>
      
      <!-- Numeral Formatting -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Numeral Formatting"
          label-for="number"
        >
          <cleave
            id="number"
            v-model="form.number"
            :options="options.number"
            :raw="false"
            class="form-control"
            placeholder="10,000"
          />
        </b-form-group>
      </b-col>
      
      <!-- block -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Blocks"
          label-for="block"
        >
          <cleave
            id="block"
            v-model="form.block"
            :options="options.block"
            :raw="false"
            class="form-control"
            placeholder="Block [4,3,3]"
          />
        </b-form-group>
      </b-col>
      
      <!-- delimiters -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Delimiters"
          label-for="delimiter"
        >
          <cleave
            id="delimiter"
            v-model="form.delimiter"
            :options="options.delimiter"
            :raw="false"
            class="form-control"
            placeholder="Delimiter: '.'"
          />
        </b-form-group>
      </b-col>
      
      <!-- Custom Delimiters -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Custom Delimiters"
          label-for="customDelimiter"
        >
          <cleave
            id="customDelimiter"
            v-model="form.customDelimiter"
            :options="options.customDelimiter"
            :raw="false"
            class="form-control"
            placeholder="Delimiter: ['.', '.', '-']"
          />
        </b-form-group>
      </b-col>
      
      <!-- prefix -->
      <b-col
        md="6"
        xl="4"
      >
        <b-form-group
          label="Prefix"
          label-for="prefix"
        >
          <cleave
            id="prefix"
            v-model="form.prefix"
            :options="options.prefix"
            :raw="false"
            class="form-control"
          />
        </b-form-group>
      </b-col>
    </b-row>
    
    <template #code>
      {{ codeMask }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode                                                   from "@core/components/b-card-code/BCardCode.vue";
import { BCol, BFormGroup, BInputGroup, BInputGroupPrepend, BRow } from "bootstrap-vue";
// eslint-disable-next-line import/no-extraneous-dependencies
import "cleave.js/dist/addons/cleave-phone.us";
import Cleave                                                      from "vue-cleave-component";
import { codeMask }                                                from "./code";


export default {
  components: {
    BCardCode,
    BFormGroup,
    BInputGroupPrepend,
    BInputGroup,
    Cleave,
    BRow,
    BCol
  },
  data () {
    return {
      form:    {
        cardNumber: null,
        date:       null,
        phone:      null
      },
      options: {
        creditCard:      {
          creditCard: true
        },
        date:            {
          date:        true,
          delimiter:   "-",
          datePattern: [ "Y", "m", "d" ]
        },
        phone:           {
          phone:           true,
          phoneRegionCode: "US"
        },
        time:            {
          time:        true,
          timePattern: [ "h", "m", "s" ]
        },
        number:          {
          numeral:                    true,
          numeralThousandsGroupStyle: "thousand"
        },
        block:           {
          blocks:    [ 4, 3, 3 ],
          uppercase: true
        },
        delimiter:       {
          delimiter: "·",
          blocks:    [ 3, 3, 3 ],
          uppercase: true
        },
        customDelimiter: {
          delimiters: [ ".", ".", "-" ],
          blocks:     [ 3, 3, 3, 2 ],
          uppercase:  true
        },
        prefix:          {
          prefix:    "+63",
          blocks:    [ 3, 3, 3, 4 ],
          uppercase: true
        }
      },
      codeMask
    };
  }
};
</script>
