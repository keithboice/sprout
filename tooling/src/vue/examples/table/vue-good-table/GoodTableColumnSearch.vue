<template>
  <b-card-code title="Column Search Table">
    
    <!-- input search -->
    <div class="custom-search d-flex justify-content-end">
      <b-form-group>
        <div class="d-flex align-items-center">
          <label class="mr-1">Search</label>
          <b-form-input
            v-model="searchTerm"
            class="d-inline-block"
            placeholder="Search"
            type="text"
          />
        </div>
      </b-form-group>
    </div>
    
    <!-- table -->
    <vue-good-table
      :columns="columns"
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
      :rows="rows"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >
        
        <!-- Column: Name -->
        <div
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </div>
        
        <!-- Column: Status -->
        <span v-else-if="props.column.field === 'status'">
          <b-badge :variant="statusVariant(props.row.status)">
            {{ props.row.status }}
          </b-badge>
        </span>
        
        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
          <span>
            <b-dropdown
              no-caret
              toggle-class="text-decoration-none"
              variant="link"
            >
              <template v-slot:button-content>
                <feather-icon
                  class="text-body align-middle mr-25"
                  icon="MoreVerticalIcon"
                  size="16"
                />
              </template>
              <b-dropdown-item>
                <feather-icon
                  class="mr-50"
                  icon="Edit2Icon"
                />
                <span>Edit</span>
              </b-dropdown-item>
              <b-dropdown-item>
                <feather-icon
                  class="mr-50"
                  icon="TrashIcon"
                />
                <span>Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </span>
        </span>
        
        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[ props.column.field ] }}
        </span>
      </template>
      
      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap">
              Showing 1 to
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['3','5','10']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap "> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :per-page="pageLength"
              :total-rows="props.total"
              :value="1"
              align="right"
              class="mt-1 mb-0"
              first-number
              last-number
              next-class="next-item"
              prev-class="prev-item"
              @input="(value)=>props.pageChanged({currentPage:value})"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>
    
    <template #code>
      {{ codeColumnSearch }}
    </template>
  </b-card-code>
</template>

<script>
import store                                                                                           from "@/store";
import BCardCode
                                                                                                       from "@core/components/b-card-code/BCardCode.vue";
import { BAvatar, BBadge, BDropdown, BDropdownItem, BFormGroup, BFormInput, BFormSelect, BPagination } from "bootstrap-vue";
import { VueGoodTable }                                                                                from "vue-good-table";
import { codeColumnSearch }                                                                            from "./code";


export default {
  components: {
    BCardCode,
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem
  },
  data () {
    return {
      pageLength: 3,
      dir:        false,
      codeColumnSearch,
      columns:    [
        {
          label:         "Name",
          field:         "fullName",
          filterOptions: {
            enabled:     true,
            placeholder: "Search Name"
          }
        }, {
          label:         "Email",
          field:         "email",
          filterOptions: {
            enabled:     true,
            placeholder: "Search Email"
          }
        }, {
          label:         "Date",
          field:         "startDate",
          filterOptions: {
            enabled:     true,
            placeholder: "Search Date"
          }
        }, {
          label:         "Salary",
          field:         "salary",
          filterOptions: {
            enabled:     true,
            placeholder: "Search Salary"
          }
        }, {
          label:         "Status",
          field:         "status",
          filterOptions: {
            enabled:     true,
            placeholder: "Search Status"
          }
        }, {
          label: "Action",
          field: "action"
        }
      ],
      rows:       [],
      searchTerm: ""
    };
  },
  computed: {
    statusVariant () {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current:      "light-primary",
        Professional: "light-success",
        Rejected:     "light-danger",
        Resigned:     "light-warning",
        Applied:      "light-info" /* eslint-enable key-spacing */
      };
      
      return status => statusColor[ status ];
    },
    direction () {
      if ( store.state.appConfig.isRTL ) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false;
      return this.dir;
    }
  },
  created () {
    this.$http.get( "/good-table/basic" )
      .then( res => { this.rows = res.data; } );
  }
};
</script>
