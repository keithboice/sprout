<template>

  <div>

    <user-list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :plan-options="planOptions"
      :role-options="roleOptions"
      @refetch-data="refetchData"
    />

    <!-- Filters -->
    <users-list-filters
      :plan-filter.sync="planFilter"
      :plan-options="planOptions"
      :role-filter.sync="roleFilter"
      :role-options="roleOptions"
      :status-filter.sync="statusFilter"
      :status-options="statusOptions"
    />

    <!-- Table Container Card -->
    <b-card
      class="mb-0"
      no-body
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
            cols="12"
            md="6"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :clearable="false"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
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
              <b-button
                variant="primary"
                @click="isAddNewUserSidebarActive = true"
              >
                <span class="text-nowrap">Add User</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        :fields="tableColumns"
        :items="fetchUsers"
        :sort-by.sync="sortBy"
        :sort-desc.sync="isSortDirDesc"
        class="position-relative"
        empty-text="No matching records found"
        primary-key="id"
        responsive
        show-empty
      >

        <!-- Column: User -->
        <template #cell(user)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                :src="data.item.avatar"
                :text="avatarText(data.item.fullName)"
                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                :variant="`light-${resolveUserRoleVariant(data.item.role)}`"
                size="32"
              />
            </template>
            <b-link
              :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.fullName }}
            </b-link>
            <small class="text-muted">@{{ data.item.username }}</small>
          </b-media>
        </template>

        <!-- Column: Role -->
        <template #cell(role)="data">
          <div class="text-nowrap">
            <feather-icon
              :class="`text-${resolveUserRoleVariant(data.item.role)}`"
              :icon="resolveUserRoleIcon(data.item.role)"
              class="mr-50"
              size="18"
            />
            <span class="align-text-top text-capitalize">{{ data.item.role }}</span>
          </div>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
            pill
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            :right="$store.state.appConfig.isRTL"
            no-caret
            variant="link"
          >

            <template #button-content>
              <feather-icon
                class="align-middle text-body"
                icon="MoreVerticalIcon"
                size="16"
              />
            </template>
            <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
            cols="12"
            sm="6"
          >
            <span
              class="text-muted"
            >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
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
              :total-rows="totalUsers"
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
  </div>
</template>

<script>
import store from '@/store'
import { avatarText } from '@core/utils/filter'
import { onUnmounted, ref } from '@vue/composition-api'
import {
  BAvatar, BBadge, BButton, BCard, BCol, BDropdown, BDropdownItem, BFormInput, BLink, BMedia, BPagination, BRow, BTable,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import userStoreModule from '../userStoreModule'
import UserListAddNew from './UserListAddNew.vue'
import UsersListFilters from './UsersListFilters.vue'
import useUsersList from './useUsersList'

export default {
  components: {
    UsersListFilters,
    UserListAddNew,

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

    vSelect,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) {
      store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const isAddNewUserSidebarActive = ref(false)

    const roleOptions = [
      {
        label: 'Admin',
        value: 'admin',
      }, {
        label: 'Author',
        value: 'author',
      }, {
        label: 'Editor',
        value: 'editor',
      }, {
        label: 'Maintainer',
        value: 'maintainer',
      }, {
        label: 'Subscriber',
        value: 'subscriber',
      },
    ]

    const planOptions = [
      {
        label: 'Basic',
        value: 'basic',
      }, {
        label: 'Company',
        value: 'company',
      }, {
        label: 'Enterprise',
        value: 'enterprise',
      }, {
        label: 'Team',
        value: 'team',
      },
    ]

    const statusOptions = [
      {
        label: 'Pending',
        value: 'pending',
      }, {
        label: 'Active',
        value: 'active',
      }, {
        label: 'Inactive',
        value: 'inactive',
      },
    ]

    const {
      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = useUsersList()

    return {

      // Sidebar
      isAddNewUserSidebarActive,

      fetchUsers,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      roleOptions,
      planOptions,
      statusOptions,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
