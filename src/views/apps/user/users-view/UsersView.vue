<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      :show="userData === undefined"
      variant="danger"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          :to="{ name: 'apps-users-list'}"
          class="alert-link"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="userData">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
          lg="8"
          md="7"
          xl="9"
        >
          <user-view-user-info-card :user-data="userData" />
        </b-col>
        <b-col
          cols="12"
          lg="4"
          md="5"
          xl="3"
        >
          <user-view-user-plan-card />
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-timeline-card />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-permissions-card />
        </b-col>
      </b-row>

      <invoice-list />
    </template>

  </div>
</template>

<script>
import router from '@/router'
import store from '@/store'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import { onUnmounted, ref } from '@vue/composition-api'
import {
  BAlert, BCol, BLink, BRow,
} from 'bootstrap-vue'
import userStoreModule from '../userStoreModule'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'
import UserViewUserPlanCard from './UserViewUserPlanCard.vue'
import UserViewUserTimelineCard from './UserViewUserTimelineCard.vue'

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    UserViewUserInfoCard,
    UserViewUserPlanCard,
    UserViewUserTimelineCard,
    UserViewUserPermissionsCard,

    InvoiceList,
  },
  setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) {
      store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { userData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
      })

    return {
      userData,
    }
  },
}
</script>

<style>

</style>
