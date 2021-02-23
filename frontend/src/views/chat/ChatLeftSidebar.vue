<template>
  <div class="sidebar-left">
    <div class="sidebar">
      
      <!-- Logged In User Profile Sidebar -->
      <user-profile-sidebar
        :profile-user-data="profileUserData"
        :shall-show-user-profile-sidebar="shallShowUserProfileSidebar"
        @close-sidebar="$emit('update:shall-show-user-profile-sidebar', false)"
      />
      
      <!-- Sidebar Content -->
      <div
        :class="{'show': mqShallShowLeftSidebar}"
        class="sidebar-content card"
      >
        
        <!-- Sidebar close icon -->
        <span class="sidebar-close-icon">
          <feather-icon
            icon="XIcon"
            size="16"
            @click="$emit('update:mq-shall-show-left-sidebar', false)"
          />
        </span>
        
        <!-- Header -->
        <div class="chat-fixed-search">
          <div class="d-flex align-items-center w-100">
            <div class="sidebar-profile-toggle">
              <b-avatar
                :src="profileUserMinimalData.avatar"
                badge
                badge-variant="success"
                class="cursor-pointer badge-minimal avatar-border-2"
                size="42"
                variant="transparent"
                @click.native="$emit('show-user-profile')"
              />
            </div>
            <!-- Search -->
            <b-input-group class="input-group-merge ml-1 w-100 round">
              <b-input-group-prepend is-text>
                <feather-icon
                  class="text-muted"
                  icon="SearchIcon"
                />
              </b-input-group-prepend>
              <b-form-input
                v-model="searchQuery"
                placeholder="Search..."
              />
            </b-input-group>
          </div>
        </div>
        
        <!-- ScrollArea: Chat & Contacts -->
        <vue-perfect-scrollbar
          :settings="perfectScrollbarSettings"
          class="chat-user-list-wrapper list-group scroll-area"
        >
          
          <!-- Chats Title -->
          <h4 class="chat-list-title">
            Chats </h4>
          
          <!-- Chats -->
          <ul class="chat-users-list chat-list media-list">
            <chat-contact
              v-for="contact in filteredChatsContacts"
              :key="contact.id"
              :class="{'active': activeChatContactId === contact.id}"
              :user="contact"
              is-chat-contact
              tag="li"
              @click="$emit('open-chat', contact.id)"
            />
          </ul>
          
          <!-- Contacts Title -->
          <h4 class="chat-list-title">
            Contacts </h4>
          
          <!-- Contacts -->
          <ul class="chat-users-list contact-list media-list">
            <chat-contact
              v-for="contact in filteredContacts"
              :key="contact.id"
              :user="contact"
              tag="li"
              @click="$emit('open-chat', contact.id)"
            />
          </ul>
        </vue-perfect-scrollbar>
      </div>
    
    </div>
  </div>
</template>

<script>
import { BAvatar, BInputGroup, BInputGroupPrepend, BFormInput } from "bootstrap-vue"
import VuePerfectScrollbar                                      from "vue-perfect-scrollbar"
import { ref, computed }                                        from "@vue/composition-api"
import ChatContact                                              from "@/views/chat/ChatContact.vue"
import UserProfileSidebar                                       from "@/views/chat/UserProfileSidebar.vue"


export default {
  components: {
    
    // BSV
    BAvatar,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    
    // 3rd party
    VuePerfectScrollbar,
    
    // SFC
    ChatContact,
    UserProfileSidebar
  },
  props:      {
    chatsContacts:               {
      type:     Array,
      required: true
    },
    contacts:                    {
      type:     Array,
      required: true
    },
    shallShowUserProfileSidebar: {
      type:     Boolean,
      required: true
    },
    profileUserData:             {
      type:     Object,
      required: true
    },
    profileUserMinimalData:      {
      type:     Object,
      required: true
    },
    activeChatContactId:         {
      type:    Number,
      default: null
    },
    mqShallShowLeftSidebar:      {
      type:     Boolean,
      required: true
    }
  },
  setup ( props ) {
    const perfectScrollbarSettings = {
      maxScrollbarLength: 150
    }
    
    const resolveChatContact = userId => props.contacts.find( contact => contact.id === userId )
    
    // Search Query
    const searchQuery = ref( "" )
    
    const searchFilterFunction = contact => contact.fullName.toLowerCase()
      .includes( searchQuery.value.toLowerCase() )
    const filteredChatsContacts = computed( () => props.chatsContacts.filter( searchFilterFunction ) )
    const filteredContacts = computed( () => props.contacts.filter( searchFilterFunction ) )
    
    return {
      // Search Query
      searchQuery,
      filteredChatsContacts,
      filteredContacts,
      
      // UI
      resolveChatContact,
      perfectScrollbarSettings
    }
  }
}
</script>
