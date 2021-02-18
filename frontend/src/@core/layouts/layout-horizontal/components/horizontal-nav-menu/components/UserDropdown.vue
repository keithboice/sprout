<template>
  <b-nav-item-dropdown
    class="ml-1 dropdown-user"
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          {{ userData.fullName || userData.username }}
        </p>
        <span class="user-status">{{ userData.role }}</span>
      </div>
      <b-avatar
        :src="userData.avatar"
        badge
        badge-variant="warning"
        class="badge-minimal"
        size="40"
        variant="light-secondary"
      >
        <feather-icon
          v-if="!userData.fullName"
          icon="UserIcon"
          size="22"
        />
      </b-avatar>
    </template>

    <b-dropdown-item
      :to="{ name: 'pages-profile'}"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="UserIcon"
        size="16"
      />
      <span>Profile</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'apps-email' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="MailIcon"
        size="16"
      />
      <span>Inbox</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'apps-todo' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="CheckSquareIcon"
        size="16"
      />
      <span>Task</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'apps-chat' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="MessageSquareIcon"
        size="16"
      />
      <span>Chat</span>
    </b-dropdown-item>

    <b-dropdown-divider />

    <b-dropdown-item
      :to="{ name: 'pages-account-setting' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="SettingsIcon"
        size="16"
      />
      <span>Settings</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'pages-knowledge-base' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="LifeBuoyIcon"
        size="16"
      />
      <span>Support</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'pages-faq' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        class="mr-50"
        icon="HelpCircleIcon"
        size="16"
      />
      <span>FAQ</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
    >
      <feather-icon
        class="mr-50"
        icon="LogOutIcon"
        size="16"
      />
      <span>Logout</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import useJwt                                                         from "@/auth/jwt/useJwt";
import { initialAbility }                                             from "@/libs/acl/config";
import { avatarText }                                                 from "@core/utils/filter";
import { BAvatar, BDropdownDivider, BDropdownItem, BNavItemDropdown } from "bootstrap-vue";


export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
    }
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
