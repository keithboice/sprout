<template>
  <b-card>
    
    <b-row>
      
      <!-- User Info: Left col -->
      <b-col
        class="d-flex justify-content-between flex-column"
        cols="21"
        xl="6"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.avatar"
            :text="avatarText(userData.fullName)"
            :variant="`light-${resolveUserRoleVariant(userData.role)}`"
            rounded
            size="104px"
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.fullName }} </h4>
              <span class="card-text">{{ userData.email }}</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                :to="{ name: 'apps-users-edit', params: { id: userData.id } }"
                variant="primary"
              >
                Edit
              </b-button>
              <b-button
                class="ml-1"
                variant="outline-danger"
              >
                Delete
              </b-button>
            </div>
          </div>
        </div>
        
        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              rounded
              variant="light-primary"
            >
              <feather-icon
                icon="DollarSignIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                23.3k </h5>
              <small>Monthly Sales</small>
            </div>
          </div>
          
          <div class="d-flex align-items-center">
            <b-avatar
              rounded
              variant="light-success"
            >
              <feather-icon
                icon="TrendingUpIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                $99.87k </h5>
              <small>Annual Profit</small>
            </div>
          </div>
        </div>
      </b-col>
      
      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                class="mr-75"
                icon="UserIcon"
              />
              <span class="font-weight-bold">Username</span>
            </th>
            <td class="pb-50">
              {{ userData.username }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                class="mr-75"
                icon="CheckIcon"
              />
              <span class="font-weight-bold">Status</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.status }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                class="mr-75"
                icon="StarIcon"
              />
              <span class="font-weight-bold">Role</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.role }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                class="mr-75"
                icon="FlagIcon"
              />
              <span class="font-weight-bold">Country</span>
            </th>
            <td class="pb-50">
              {{ userData.country }}
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                class="mr-75"
                icon="PhoneIcon"
              />
              <span class="font-weight-bold">Contact</span>
            </th>
            <td>
              {{ userData.contact }}
            </td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BCard, BButton, BAvatar, BRow, BCol } from "bootstrap-vue"
import { avatarText }                          from "@core/../../../../utils/filter"
import useUsersList                            from "../users-list/useUsersList"


export default {
  components: {
    BCard,
    BButton,
    BRow,
    BCol,
    BAvatar
  },
  props:      {
    userData: {
      type:     Object,
      required: true
    }
  },
  setup () {
    const { resolveUserRoleVariant } = useUsersList()
    return {
      avatarText,
      resolveUserRoleVariant
    }
  }
}
</script>

<style>

</style>
