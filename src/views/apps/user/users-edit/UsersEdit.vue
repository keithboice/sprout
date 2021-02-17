<template>
  <component :is="userData === undefined ? 'div' : 'b-card'">

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

    <b-tabs
      v-if="userData"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
            class="mr-0 mr-sm-50"
            icon="UserIcon"
            size="16"
          />
          <span class="d-none d-sm-inline">Account</span>
        </template>
        <user-edit-tab-account
          :user-data="userData"
          class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: Information -->
      <b-tab>
        <template #title>
          <feather-icon
            class="mr-0 mr-sm-50"
            icon="InfoIcon"
            size="16"
          />
          <span class="d-none d-sm-inline">Information</span>
        </template>
        <user-edit-tab-information class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Social -->
      <b-tab>
        <template #title>
          <feather-icon
            class="mr-0 mr-sm-50"
            icon="Share2Icon"
            size="16"
          />
          <span class="d-none d-sm-inline">Social</span>
        </template>
        <user-edit-tab-social class="mt-2 pt-75" />
      </b-tab>
    </b-tabs>
  </component>
</template>

<script>
import router from '@/router'
import store from '@/store'
import { onUnmounted, ref } from '@vue/composition-api'
import {
  BAlert, BCard, BLink, BTab, BTabs,
} from 'bootstrap-vue'
import userStoreModule from '../userStoreModule'
import UserEditTabAccount from './UserEditTabAccount.vue'
import UserEditTabInformation from './UserEditTabInformation.vue'
import UserEditTabSocial from './UserEditTabSocial.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    UserEditTabAccount,
    UserEditTabInformation,
    UserEditTabSocial,
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
