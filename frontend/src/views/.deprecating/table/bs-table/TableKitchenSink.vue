<template>
  <b-card-code no-body title="Table Kitchen Sink">
    <b-card-body>
      <div class="d-flex justify-content-between  flex-wrap">
        
        <!-- sorting  -->
        <b-form-group class="mr-1 mb-md-0" label="Sort" label-align-sm="left" label-cols-sm="2" label-for="sortBySelect" label-size="sm">
          <b-input-group size="sm">
            <b-form-select id="sortBySelect" v-model="sortBy" :options="sortOptions">
              <template #first>
                <option value="">
                  none
                </option>
              </template>
            </b-form-select>
            <b-form-select v-model="sortDesc" :disabled="!sortBy" size="sm">
              <option :value="false">
                Asc
              </option>
              <option :value="true">
                Desc
              </option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
        
        <!-- filter -->
        <b-form-group class="mb-0" label="Filter" label-align-sm="left" label-cols-sm="2" label-for="filterInput" label-size="sm">
          <b-input-group size="sm">
            <b-form-input id="filterInput" v-model="filter" placeholder="Type to Search" type="search" />
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </div>
    </b-card-body>
    
    <b-table :current-page="currentPage" :fields="fields" :filter="filter" :filter-included-fields="filterOn" :items="items" :per-page="perPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" class="position-relative" hover responsive striped @filtered="onFiltered">
      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>
      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[ 0 ][ data.value ] }}
        </b-badge>
      </template>
    </b-table>
    
    <b-card-body class="d-flex justify-content-between flex-wrap pt-0">
      
      <!-- page length -->
      <b-form-group class="text-nowrap mb-md-0 mr-1" label="Per Page" label-align="left" label-cols="6" label-for="sortBySelect" label-size="sm">
        <b-form-select id="perPageSelect" v-model="perPage" :options="pageOptions" inline size="sm" />
      </b-form-group>
      
      <!-- pagination -->
      <div>
        <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="totalRows" class="mb-0" first-number last-number next-class="next-item" prev-class="prev-item">
          <template #prev-text>
            <feather-icon icon="ChevronLeftIcon" size="18" />
          </template>
          <template #next-text>
            <feather-icon icon="ChevronRightIcon" size="18" />
          </template>
        </b-pagination>
      </div>
    </b-card-body>
    
    <template #code>
      {{ codeKitchenSink }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode           from "@core/components/b-card-code/BCardCode.vue"
import {
  BTable, BAvatar, BBadge, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton, BCardBody
}                          from "bootstrap-vue"
import { codeKitchenSink } from "./code"


export default {
  components: {
    BCardCode,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody
  },
  data () {
    return {
      perPage:       5,
      pageOptions:   [ 3, 5, 10 ],
      totalRows:     1,
      currentPage:   1,
      sortBy:        "",
      sortDesc:      false,
      sortDirection: "asc",
      filter:        null,
      filterOn:      [],
      infoModal:     {
        id:      "info-modal",
        title:   "",
        content: ""
      },
      fields:        [
        {
          key:   "id",
          label: "Id"
        },
        {
          key: "avatar",
          label: "Avatar"
        },
        {
          key:      "full_name",
          label:    "Full Name",
          sortable: true
        },
        {
          key:      "post",
          label:    "Post",
          sortable: true
        },
        "email",
        "city",
        "start_date",
        "salary",
        "age",
        "experience",
        {
          key:      "status",
          label:    "Status",
          sortable: true
        }
      ], /* eslint-disable global-require */
      items: [
        {
          id:         1,
          avatar:     require( "@images/avatars/10-small.png" ),
          full_name:  "Korrie O'Crevy",
          post:       "Nuclear Power Engineer",
          email:      "kocrevy0@thetimes.co.uk",
          city:       "Krasnosilka",
          start_date: "09/23/2016",
          salary:     "$23896.35",
          age:        "61",
          experience: "1 Year",
          status:     2
        }, {
          id:         2,
          avatar:     require( "@images/avatars/1-small.png" ),
          full_name:  "Bailie Coulman",
          post:       "VP Quality Control",
          email:      "bcoulman1@yolasite.com",
          city:       "Hinigaran",
          start_date: "05/20/2018",
          salary:     "$13633.69",
          age:        "63",
          experience: "3 Years",
          status:     2
        }, {
          id:         3,
          avatar:     require( "@images/avatars/9-small.png" ),
          full_name:  "Stella Ganderton",
          post:       "Operator",
          email:      "sganderton2@tuttocitta.it",
          city:       "Golcowa",
          start_date: "03/24/2018",
          salary:     "$13076.28",
          age:        "66",
          experience: "6 Years",
          status:     5
        }, {
          id:         4,
          avatar:     require( "@images/avatars/3-small.png" ),
          full_name:  "Dorolice Crossman",
          post:       "Cost Accountant",
          email:      "dcrossman3@google.co.jp",
          city:       "Paquera",
          start_date: "12/03/2017",
          salary:     "$12336.17",
          age:        "22",
          experience: "2 Years",
          status:     2
        }, {
          id:         5,
          avatar:     require( "@images/avatars/4-small.png" ),
          full_name:  "Harmonia Nisius",
          post:       "Senior Cost Accountant",
          email:      "hnisius4@gnu.org",
          city:       "Lucan",
          start_date: "08/25/2017",
          salary:     "$10909.52",
          age:        "33",
          experience: "3 Years",
          status:     2
        }, {
          id:         6,
          avatar:     require( "@images/avatars/5-small.png" ),
          full_name:  "Genevra Honeywood",
          post:       "Geologist",
          email:      "ghoneywood5@narod.ru",
          city:       "Maofan",
          start_date: "06/01/2017",
          salary:     "$17803.80",
          age:        "61",
          experience: "1 Year",
          status:     1
        }, {
          id:         7,
          avatar:     require( "@images/avatars/7-small.png" ),
          full_name:  "Eileen Diehn",
          post:       "Environmental Specialist",
          email:      "ediehn6@163.com",
          city:       "Lampuyang",
          start_date: "10/15/2017",
          salary:     "$18991.67",
          age:        "59",
          experience: "9 Years",
          status:     3
        }, {
          id:         8,
          avatar:     require( "@images/avatars/9-small.png" ),
          full_name:  "Richardo Aldren",
          post:       "Senior Sales Associate",
          email:      "raldren7@mtv.com",
          city:       "Skoghall",
          start_date: "11/05/2016",
          salary:     "$19230.13",
          age:        "55",
          experience: "5 Years",
          status:     3
        }, {
          id:         9,
          avatar:     require( "@images/avatars/2-small.png" ),
          full_name:  "Allyson Moakler",
          post:       "Safety Technician",
          email:      "amoakler8@shareasale.com",
          city:       "Mogilany",
          start_date: "12/29/2018",
          salary:     "$11677.32",
          age:        "39",
          experience: "9 Years",
          status:     5
        }, {
          id:         10,
          avatar:     require( "@images/avatars/6-small.png" ),
          full_name:  "Merline Penhalewick",
          post:       "Junior Executive",
          email:      "mpenhalewick9@php.net",
          city:       "Kanuma",
          start_date: "04/19/2019",
          salary:     "$15939.52",
          age:        "23",
          experience: "3 Years",
          status:     2
        }
      ], /* eslint-disable global-require */
      status: [
        {
          1: "Current",
          2: "Professional",
          3: "Rejected",
          4: "Resigned",
          5: "Applied"
        }, {
          1: "light-primary",
          2: "light-success",
          3: "light-danger",
          4: "light-warning",
          5: "light-info"
        }
      ],
      codeKitchenSink
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter( f => f.sortable )
        .map( f => (
          {
            text:  f.label,
            value: f.key
          }
        ) )
    }
  },
  mounted () {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info ( item, index, button ) {
      this.infoModal.title = `Row index: ${ index }`
      this.infoModal.content = JSON.stringify( item, null, 2 )
      this.$root.$emit( "bv::show::modal", this.infoModal.id, button )
    },
    resetInfoModal () {
      this.infoModal.title = ""
      this.infoModal.content = ""
    },
    onFiltered ( filteredItems ) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
