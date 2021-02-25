<!--suppress ALL -->
<template>
  <!-- Need to add height inherit because Vue 2 doesn't allow multiple root elements -->
  <div
    class="Chat"
    style="height: inherit"
  >
    
    <div
      :class="{'show': shallShowUserProfileSidebar || shallShowActiveChatContactSidebar || mqShallShowLeftSidebar}"
      class="body-inbox-content-overlay"
      @click="//noinspection JSValidateTypes
        mqShallShowLeftSidebar=shallShowActiveChatContactSidebar=shallShowUserProfileSidebar=false"
    />
    
    <!-- Main Area -->
    <section class="chat-app-window">
      
      
      <!-- Start Chat Logo -->
      <div
        v-if="!activeChat.contact"
        class="start-chat-area"
      >
        <div class="mb-1 start-chat-icon">
          <feather-icon
            icon="MessageSquareIcon"
            size="56"
          />
        </div>
        <h4
          class="sidebar-toggle start-chat-text text-center mx-auto"
        >
          Click a contact on the left to<br> start or continue a conversation.</h4>
      </div>
      
      <!-- Chat Content -->
      <div
        v-else
        class="active-chat"
      >
        <!-- Chat Navbar -->
        <div class="chat-navbar">
          <header class="chat-header">
            
            <!-- Avatar & Name -->
            <div class="d-flex align-items-center">
              
              <!-- Toggle Icon -->
              <div class="sidebar-toggle d-block d-lg-none mr-1">
                <feather-icon
                  class="cursor-pointer"
                  icon="MenuIcon"
                  size="21"
                  @click="mqShallShowLeftSidebar = true"
                />
              </div>
              
              <b-avatar
                :badge-variant="resolveAvatarBadgeVariant(activeChat.contact.status)"
                :src="activeChat.contact.avatar"
                badge
                class="mr-1 cursor-pointer badge-minimal"
                size="36"
                @click.native="shallShowActiveChatContactSidebar=true"
              />
              <h6 class="mb-0">
                {{ activeChat.contact.fullName }} </h6>
            </div>
            
            <!-- Contact Actions -->
            <div class="d-flex align-items-center">
              <feather-icon
                class="cursor-pointer d-sm-block d-none mr-1"
                icon="PhoneCallIcon"
                size="17"
              />
              <feather-icon
                class="cursor-pointer d-sm-block d-none mr-1"
                icon="VideoIcon"
                size="17"
              />
              <feather-icon
                class="cursor-pointer d-sm-block d-none mr-50"
                icon="SearchIcon"
                size="17"
              />
              <div class="dropdown">
                <b-dropdown
                  no-caret
                  right
                  toggle-class="p-0"
                  variant="link"
                >
                  <template #button-content>
                    <feather-icon
                      class="align-middle text-body"
                      icon="MoreVerticalIcon"
                      size="17"
                    />
                  </template>
                  <b-dropdown-item>
                    View Contact
                  </b-dropdown-item>
                  <b-dropdown-item>
                    Mute Notifications
                  </b-dropdown-item>
                  <b-dropdown-item>
                    Block Contact
                  </b-dropdown-item>
                  <b-dropdown-item>
                    Clear Chat
                  </b-dropdown-item>
                  <b-dropdown-item>
                    Report
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </header>
        </div>
        
        <!-- User Chat Area -->
        <vue-perfect-scrollbar
          ref="refChatLogPS"
          :settings="perfectScrollbarSettings"
          class="user-chats scroll-area"
        >
          <chat-log
            :chat-data="activeChat"
            :profile-user-avatar="profileUserDataMinimal.avatar"
          />
        </vue-perfect-scrollbar>
        
        <!-- Message Input -->
        <b-form
          class="chat-app-form"
          @submit.prevent="sendMessage"
        >
          <b-input-group class="input-group-merge form-send-message mr-1">
            <b-form-input
              v-model="chatInputMessage"
              placeholder="Enter your message"
            />
          </b-input-group>
          <b-button
            type="submit"
            variant="primary"
          >
            Send
          </b-button>
        </b-form>
      </div>
    </section>
    
    <!-- Active Chat Contact Details Sidebar -->
    <chat-active-chat-content-details-sidedbar
      :contact="activeChat.contact || {}"
      :shall-show-active-chat-contact-sidebar.sync="shallShowActiveChatContactSidebar"
    />
    
    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-left">
      <chat-left-sidebar
        :active-chat-contact-id="activeChat.contact ? activeChat.contact.id : null"
        :chats-contacts="chatsContacts"
        :contacts="contacts"
        :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar"
        :profile-user-data="profileUserData"
        :profile-user-minimal-data="profileUserDataMinimal"
        :shall-show-user-profile-sidebar.sync="shallShowUserProfileSidebar"
        @show-user-profile="showUserProfileSidebar"
        @open-chat="openChatOfContact"
      />
    </portal>
  </div>
</template>

<script src="./_Chat.js" lang="js"></script>
<style src="./_Chat.scss" lang="scss"></style>