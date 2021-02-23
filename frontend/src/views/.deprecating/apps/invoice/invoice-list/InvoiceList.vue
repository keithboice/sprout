<template>
  
  <!-- Table Container Card -->
  <b-card no-body>
    
    <div class="m-2">
      
      <!-- Table Top -->
      <b-row>
        
        <!-- Per Page -->
        <b-col
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          cols="12"
          md="6"
        >
          <label>Entries</label>
          <v-select
            v-model="perPage"
            :clearable="false"
            :dir="$store.state.chat.isRTL ? 'rtl' : 'ltr'"
            :options="perPageOptions"
            class="per-page-selector d-inline-block ml-50 mr-1"
          />
          <b-button
            :to="{ name: 'apps-invoice-add'}"
            variant="primary"
          >
            Add Record
          </b-button>
        </b-col>
        
        <!-- Search -->
        <b-col
          cols="12"
          md="6"
        >
          <div class="d-flex align-items-center justify-content-end">
            <b-form-input
              v-model="searchQuery"
              class="d-inline-block mr-1"
              placeholder="Search..."
            />
            <v-select
              v-model="statusFilter"
              :dir="$store.state.chat.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              class="invoice-filter-select"
              placeholder="Select Status"
            >
              <template #selected-option="{ label }">
                <span class="text-truncate overflow-hidden">
                  {{ label }}
                </span>
              </template>
            </v-select>
          </div>
        </b-col>
      </b-row>
    
    </div>
    
    <b-table
      ref="refInvoiceListTable"
      :fields="tableColumns"
      :items="fetchInvoices"
      :sort-by.sync="sortBy"
      :sort-desc.sync="isSortDirDesc"
      class="position-relative"
      empty-text="No matching records found"
      primary-key="id"
      responsive
      show-empty
    >
      
      <template #head(invoiceStatus)>
        <feather-icon
          class="mx-auto"
          icon="TrendingUpIcon"
        />
      </template>
      
      <!-- Column: Id -->
      <template #cell(id)="data">
        <b-link
          :to="{ name: 'apps-invoice-preview', params: { id: data.item.id }}"
          class="font-weight-bold"
        >
          #{{ data.value }}
        </b-link>
      </template>
      
      <!-- Column: Invoice Status -->
      <template #cell(invoiceStatus)="data">
        <b-avatar
          :id="`invoice-row-${data.item.id}`"
          :variant="`light-${resolveInvoiceStatusVariantAndIcon(data.item.invoiceStatus).variant}`"
          size="32"
        >
          <feather-icon :icon="resolveInvoiceStatusVariantAndIcon(data.item.invoiceStatus).icon" />
        </b-avatar>
        <b-tooltip
          :target="`invoice-row-${data.item.id}`"
          placement="top"
        >
          <p class="mb-0">
            {{ data.item.invoiceStatus }} </p>
          <p class="mb-0">
            Balance: {{ data.item.balance }} </p>
          <p class="mb-0">
            Due Date: {{ data.item.dueDate }} </p>
        </b-tooltip>
      </template>
      
      <!-- Column: Client -->
      <template #cell(client)="data">
        <b-media vertical-align="center">
          <template #aside>
            <b-avatar
              :src="data.item.avatar"
              :text="avatarText(data.item.client.name)"
              :variant="`light-${resolveClientAvatarVariant(data.item.invoiceStatus)}`"
              size="32"
            />
          </template>
          <span class="font-weight-bold d-block text-nowrap">
            {{ data.item.client.name }}
          </span> <small class="text-muted">{{ data.item.client.companyEmail }}</small>
        </b-media>
      </template>
      
      <!-- Column: Issued Date -->
      <template #cell(issuedDate)="data">
        <span class="text-nowrap">
          {{ data.value }}
        </span>
      </template>
      
      <!-- Column: Balance -->
      <template #cell(balance)="data">
        <template v-if="data.value === 0">
          <b-badge
            pill
            variant="light-success"
          >
            Paid
          </b-badge>
        </template>
        <template v-else>
          {{ data.value }}
        </template>
      </template>
      
      <!-- Column: Actions -->
      <template #cell(actions)="data">
        
        <div class="text-nowrap">
          <feather-icon
            :id="`invoice-row-${data.item.id}-send-icon`"
            class="cursor-pointer"
            icon="SendIcon"
            size="16"
          />
          <b-tooltip
            :target="`invoice-row-${data.item.id}-send-icon`"
            class="cursor-pointer"
            title="Send Invoice"
          />
          
          <feather-icon
            :id="`invoice-row-${data.item.id}-preview-icon`"
            class="mx-1"
            icon="EyeIcon"
            size="16"
            @click="$router.push({ name: 'apps-invoice-preview', params: { id: data.item.id }})"
          />
          <b-tooltip
            :target="`invoice-row-${data.item.id}-preview-icon`"
            title="Preview Invoice"
          />
          
          <!-- Dropdown -->
          <b-dropdown
            :right="$store.state.chat.isRTL"
            no-caret
            toggle-class="p-0"
            variant="link"
          >
            
            <template #button-content>
              <feather-icon
                class="align-middle text-body"
                icon="MoreVerticalIcon"
                size="16"
              />
            </template>
            <b-dropdown-item>
              <feather-icon icon="DownloadIcon" />
              <span class="align-middle ml-50">Download</span>
            </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'apps-invoice-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <feather-icon icon="CopyIcon" />
              <span class="align-middle ml-50">Duplicate</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    
    </b-table>
    <div class="mx-2 mb-2">
      <b-row>
        
        <b-col
          class="d-flex align-items-center justify-content-center justify-content-sm-start"
          cols="12"
          sm="6"
        >
          <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
        </b-col>
        <!-- Pagination -->
        <b-col
          class="d-flex align-items-center justify-content-center justify-content-sm-end"
          cols="12"
          sm="6"
        >
          
          <b-pagination
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="totalInvoices"
            class="mb-0 mt-1 mt-sm-0"
            first-number
            last-number
            next-class="next-item"
            prev-class="prev-item"
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
        
        </b-col>
      
      </b-row>
    </div>
  </b-card>

</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BTooltip
}                      from "bootstrap-vue"
import { avatarText }  from "@core/../../../../utils/filter"
import vSelect         from "vue-select"
import { onUnmounted } from "@vue/composition-api"
import store           from "@/store"
import useInvoicesList from "./useInvoiceList"

import invoiceStoreModule from "../invoiceStoreModule"


export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    
    vSelect
  },
  setup () {
    const INVOICE_APP_STORE_MODULE_NAME = "app-invoice"
    
    // Register module
    if ( !store.hasModule( INVOICE_APP_STORE_MODULE_NAME ) ) {
      store.registerModule( INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule )
    }
    
    // UnRegister on leave
    onUnmounted( () => {
      if ( store.hasModule( INVOICE_APP_STORE_MODULE_NAME ) ) {
        store.unregisterModule( INVOICE_APP_STORE_MODULE_NAME )
      }
    } )
    
    const statusOptions = [
      "Downloaded", "Draft", "Paid", "Partial Payment", "Past Due"
    ]
    
    const {
            fetchInvoices,
            tableColumns,
            perPage,
            currentPage,
            totalInvoices,
            dataMeta,
            perPageOptions,
            searchQuery,
            sortBy,
            isSortDirDesc,
            refInvoiceListTable,
      
            statusFilter,
      
            refetchData,
      
            resolveInvoiceStatusVariantAndIcon,
            resolveClientAvatarVariant
          } = useInvoicesList()
    
    return {
      fetchInvoices,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,
      
      statusFilter,
      
      refetchData,
      
      statusOptions,
      
      avatarText,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant
    }
  }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;
  
  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }
  
  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
