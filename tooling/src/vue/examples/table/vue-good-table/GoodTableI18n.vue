<template>
  <b-card-code title="I18n Table">
    
    <!-- alert -->
    <b-alert
      show
      variant="primary"
    >
      <div class="alert-body">
        <span>Change language from navbar to view effect.</span>
      </div>
    </b-alert>
    
    <!-- search input -->
    <div class="custom-search d-flex justify-content-end">
      <b-form-group>
        <div class="d-flex align-items-center">
          <label class="mr-1">{{ $t( "message.seachLabel" ) }}</label>
          <b-form-input
            v-model="searchTerm"
            :placeholder=" $t('message.SearchPlaceholder')"
            class="d-inline-block"
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
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }"
    >
      
      <!-- Slot: Table Column -->
      <template
        slot="table-column"
        slot-scope="props"
      >
        <span
          v-if="props.column.label ==='Name'"
          class="text-nowrap"
        >
          {{ $t( "message.tableHeader.name" ) }}
        </span>
        <span
          v-else-if="props.column.label ==='Email'"
          class="text-nowrap"
        >
          {{ $t( "message.tableHeader.email" ) }}
        </span>
        <span
          v-else-if="props.column.label ==='Date'"
          class="text-nowrap"
        >
          {{ $t( "message.tableHeader.date" ) }}
        </span>
        <span
          v-else-if="props.column.label ==='Salary'"
          class="text-nowrap"
        >
          {{ $t( "message.tableHeader.salary" ) }}
        </span>
        <span
          v-else-if="props.column.label ==='Status'"
          class="text-nowrap"
        >
          {{ $t( "message.tableHeader.status" ) }}
        </span>
        <span
          v-else-if="props.column.label ==='Action'"
          class="text-nowrap"
        >
          {{ $t( "message.tableHeader.action" ) }}
        </span>
        <span v-else>
          {{ props.column.label }}
        </span>
      </template>
      
      <!-- Slot: Table Row -->
      <template
        slot="table-row"
        slot-scope="props"
      >
        
        <!-- Column: Name -->
        <span
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          />
          <span>{{ props.row.fullName }}</span>
        </span>
        
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
              {{ $t( "message.pagelength" ) }}
            </span>
            <b-form-select
              v-model="pageLength"
              :options="['3','5','10']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
            />
            <span class="text-nowrap">  {{ $t( "message.of" ) }} {{ props.total }} {{ $t( "message.pageText2" ) }} </span>
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
      {{ codeI18n }}
    </template>
  </b-card-code>
</template>

<script>
import store                                                                                                   from "@/store";
import BCardCode
                                                                                                               from "@core/components/b-card-code/BCardCode.vue";
import { BAlert, BAvatar, BBadge, BDropdown, BDropdownItem, BFormGroup, BFormInput, BFormSelect, BPagination } from "bootstrap-vue";
import { VueGoodTable }                                                                                        from "vue-good-table";
import { codeI18n }                                                                                            from "./code";


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
    BAlert,
    BDropdown,
    BDropdownItem
  },
  data () {
    return {
      pageLength: 5,
      codeI18n,
      dir:        false,
      columns:    [
        {
          label: "Name",
          field: "fullName"
        }, {
          label: "Email",
          field: "email"
        }, {
          label: "Date",
          field: "startDate"
        }, {
          label: "Salary",
          field: "salary"
        }, {
          label: "Status",
          field: "status"
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
