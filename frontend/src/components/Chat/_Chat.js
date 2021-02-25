import store                                     from "@/store"
import { ref, onUnmounted, nextTick }            from "@vue/composition-api"
import { BAvatar, BDropdown, BDropdownItem, BForm, BInputGroup, BFormInput, BButton } from "bootstrap-vue"
import VuePerfectScrollbar                                                            from "vue-perfect-scrollbar"
// import { formatDate } from '@core/utils/filter'
import { useResponsiveAppLeftSidebarVisibility } from "@/utils/app"
import ChatLeftSidebar                           from "@/components/ChatLeftSidebar/ChatLeftSidebar.vue"
import chatStoreModule                           from "@/store/chat"
import ChatActiveChatContentDetailsSidedbar      from "@/components/ChatActiveChatContentDetailsSidedbar/ChatActiveChatContentDetailsSidedbar.vue"
import ChatLog from "@/components/ChatLog/ChatLog.vue"
import useChat from "@/components/Chat/useChat"

export default {
    
        components: {
            
            // BSV
            BAvatar,
            BDropdown,
            BDropdownItem,
            BForm,
            BInputGroup,
            BFormInput,
            BButton,
            
            // 3rd Party
            VuePerfectScrollbar,
            
            // SFC
            ChatLeftSidebar,
            ChatActiveChatContentDetailsSidedbar,
            ChatLog
        },
        setup () {
            const CHAT_APP_STORE_MODULE_NAME = "chat"
            
            // Register module
            if ( !store.hasModule( CHAT_APP_STORE_MODULE_NAME ) ) {
                store.registerModule( CHAT_APP_STORE_MODULE_NAME, chatStoreModule )
            }
            
            // UnRegister on leave
            onUnmounted( () => {
                if ( store.hasModule( CHAT_APP_STORE_MODULE_NAME ) ) {
                    store.unregisterModule( CHAT_APP_STORE_MODULE_NAME )
                }
            } )
            
            const { resolveAvatarBadgeVariant } = useChat()
            
            // Scroll to Bottom ChatLog
            const refChatLogPS = ref( null )
            const scrollToBottomInChatLog = () => {
                const scrollEl = refChatLogPS.value.$el || refChatLogPS.value
                scrollEl.scrollTop = scrollEl.scrollHeight
            }
            
            // ------------------------------------------------
            // Chats & Contacts
            // ------------------------------------------------
            const chatsContacts = ref( [] )
            const contacts = ref( [] )
            
            const fetchChatAndContacts = () => {
                store.dispatch( "chat/fetchChatsAndContacts" )
                  .then( response => {
                      chatsContacts.value = response.data.chatsContacts
                      contacts.value = response.data.contacts
                      // eslint-disable-next-line no-use-before-define
                      profileUserDataMinimal.value = response.data.profileUser
                  } )
            }
            
            fetchChatAndContacts()
            
            // ------------------------------------------------
            // Single Chat
            // ------------------------------------------------
            const activeChat = ref( {} )
            const chatInputMessage = ref( "" )
            const openChatOfContact = userId => {
                // Reset send message input value
                chatInputMessage.value = ""
                
                store.dispatch( "chat/getChat", { userId } )
                  .then( response => {
                      activeChat.value = response.data
                      
                      // Set unseenMsgs to 0
                      const contact = chatsContacts.value.find( c => c.id === userId )
                      if ( contact ) {
                          contact.chat.unseenMsgs = 0
                      }
                      
                      // Scroll to bottom
                      nextTick( () => { scrollToBottomInChatLog() } )
                  } )
                
                // Responsive =>  Close Chat & Contacts left sidebar
                // eslint-disable-next-line no-use-before-define
                mqShallShowLeftSidebar.value = false
            }
            const sendMessage = () => {
                if ( !chatInputMessage.value ) {
                    return
                }
                const payload = {
                    contactId: activeChat.value.contact.id, // eslint-disable-next-line no-use-before-define
                    senderId:  profileUserDataMinimal.value.id,
                    message:   chatInputMessage.value
                }
                store.dispatch( "chat/sendMessage", payload )
                  .then( response => {
                      const {
                                newMessageData,
                                chat
                            } = response.data
                      
                      // Handle new chat / new contact.
                      if ( chat !== undefined ) {
                          activeChat.value = {
                              chat,
                              contact: activeChat.value.contact
                          }
                          chatsContacts.value.push( {
                              ...activeChat.value.contact,
                              chat: {
                                  id:          chat.id,
                                  lastMessage: newMessageData,
                                  unseenMsgs:  0
                              }
                          } )
                      }
                      else {
                          // Log messages.
                          activeChat.value.chat.chat.push( newMessageData )
                      }
                      
                      // Reset send message input.
                      chatInputMessage.value = ""
                      
                      // Set Last Message for active contact
                      const contact = chatsContacts.value.find( c => c.id === activeChat.value.contact.id )
                      contact.chat.lastMessage = newMessageData
                      
                      // Scroll to bottom
                      nextTick( () => { scrollToBottomInChatLog() } )
                  } )
            }
            
            const perfectScrollbarSettings = {
                maxScrollbarLength: 150
            }
            
            // User Profile Sidebar
            // ? Will contain all details of profile user (e.g. settings, about etc.)
            const profileUserData = ref( {} )
            // ? Will contain id, name and avatar & status
            const profileUserDataMinimal = ref( {} )
            
            const shallShowUserProfileSidebar = ref( false )
            const showUserProfileSidebar = () => {
                store.dispatch( "chat/getProfileUser" )
                  .then( response => {
                      profileUserData.value = response.data
                      shallShowUserProfileSidebar.value = true
                  } )
            }
            
            // Active Chat Contact Details
            const shallShowActiveChatContactSidebar = ref( false )
            
            // UI + SM Devices
            // Left Sidebar Responsiveness
            const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()
            const startConversation = () => {
                if ( store.state.chat.windowWidth < store.state.chat.breakpoints.lg ) {
                    mqShallShowLeftSidebar.value = true
                }
            }
            
            return {
                // Filters
                // formatDate,
                
                // useChat
                resolveAvatarBadgeVariant,
                
                // Chat & Contacts
                chatsContacts,
                contacts,
                
                // Single Chat
                refChatLogPS,
                activeChat,
                chatInputMessage,
                openChatOfContact,
                sendMessage,
                
                // Profile User Minimal Data
                profileUserDataMinimal,
                
                // User Profile Sidebar
                profileUserData,
                shallShowUserProfileSidebar,
                showUserProfileSidebar,
                
                // Active Chat Contact Details
                shallShowActiveChatContactSidebar,
                
                // UI
                perfectScrollbarSettings,
                
                // UI + SM Devices
                startConversation,
                mqShallShowLeftSidebar
            }
        }
}