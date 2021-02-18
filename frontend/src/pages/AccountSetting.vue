<template>
  <b-tabs
    content-class="col-12 col-md-9 mt-1 mt-md-0"
    nav-class="nav-left"
    nav-wrapper-class="col-md-3 col-12"
    pills
    vertical
  >
    
    <!-- general tab -->
    <b-tab active>
      
      <!-- title -->
      <template #title>
        <feather-icon
          class="mr-50"
          icon="UserIcon"
          size="18"
        />
        <span class="font-weight-bold">General</span>
      </template>
      
      <account-setting-general
        v-if="options.general"
        :general-data="options.general"
      />
    </b-tab>
    <!--/ general tab -->
    
    <!-- change password tab -->
    <b-tab>
      
      <!-- title -->
      <template #title>
        <feather-icon
          class="mr-50"
          icon="LockIcon"
          size="18"
        />
        <span class="font-weight-bold">Change Password</span>
      </template>
      
      <account-setting-password />
    </b-tab>
    <!--/ change password tab -->
    
    <!-- info -->
    <b-tab>
      
      <!-- title -->
      <template #title>
        <feather-icon
          class="mr-50"
          icon="InfoIcon"
          size="18"
        />
        <span class="font-weight-bold">Information</span>
      </template>
      
      <account-setting-information
        v-if="options.info"
        :information-data="options.info"
      />
    </b-tab>
    
    <!-- social links -->
    <b-tab>
      
      <!-- title -->
      <template #title>
        <feather-icon
          class="mr-50"
          icon="LinkIcon"
          size="18"
        />
        <span class="font-weight-bold">Social</span>
      </template>
      
      <account-setting-social
        v-if="options.social"
        :social-data="options.social"
      />
    </b-tab>
    
    <!-- notification -->
    <b-tab>
      
      <!-- title -->
      <template #title>
        <feather-icon
          class="mr-50"
          icon="BellIcon"
          size="18"
        />
        <span class="font-weight-bold">Notifications</span>
      </template>
      
      <account-setting-notification
        v-if="options.notification"
        :notification-data="options.notification"
      />
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTab, BTabs }            from "bootstrap-vue";
import AccountSettingGeneral      from "../views/AccountSettingGeneral.vue";
import AccountSettingInformation  from "../views/AccountSettingInformation.vue";
import AccountSettingNotification from "../views/AccountSettingNotification.vue";
import AccountSettingPassword     from "../views/AccountSettingPassword.vue";
import AccountSettingSocial       from "../views/AccountSettingSocial.vue";


export default {
  components: {
    BTabs,
    BTab,
    AccountSettingGeneral,
    AccountSettingPassword,
    AccountSettingInformation,
    AccountSettingSocial,
    AccountSettingNotification
  },
  data () {
    return {
      options: {}
    };
  },
  beforeCreate () {
    this.$http.get( "/account-setting/data" )
      .then( res => { this.options = res.data; } );
  }
};
</script>
