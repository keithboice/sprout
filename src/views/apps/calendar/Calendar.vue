<template>
  <div class="app-calendar overflow-hidden border">
    <div class="row no-gutters">
      <!-- Sidebar -->
      <div
        :class="{'show': isCalendarOverlaySidebarActive}"
        class="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"
      >
        <calendar-sidebar :is-event-handler-sidebar-active.sync="isEventHandlerSidebarActive" />
      </div>

      <!-- Calendar -->
      <div class="col position-relative">
        <div class="card shadow-none border-0 mb-0 rounded-0">
          <div class="card-body pb-0">
            <full-calendar
              ref="refCalendar"
              :options="calendarOptions"
              class="full-calendar"
            />
          </div>
        </div>
      </div>

      <!-- Sidebar Overlay -->
      <div
        :class="{'show': isCalendarOverlaySidebarActive}"
        class="body-content-overlay"
        @click="isCalendarOverlaySidebarActive = false"
      />
      <calendar-event-handler
        v-model="isEventHandlerSidebarActive"
        :clear-event-data="clearEventData"
        :event="event"
        @remove-event="removeEvent"
        @add-event="addEvent"
        @update-event="updateEvent"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store'
import FullCalendar from '@fullcalendar/vue'
import { onUnmounted } from '@vue/composition-api'
import CalendarEventHandler from './calendar-event-handler/CalendarEventHandler.vue'
import CalendarSidebar from './calendar-sidebar/CalendarSidebar.vue'
import calendarStoreModule from './calendarStoreModule'
import useCalendar from './useCalendar'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    CalendarSidebar,
    CalendarEventHandler,
  },
  setup() {
    const CALENDAR_APP_STORE_MODULE_NAME = 'calendar'

    // Register module
    if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) {
      store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
      }
    })

    const {
      refCalendar,
      isCalendarOverlaySidebarActive,
      event,
      clearEventData,
      addEvent,
      updateEvent,
      removeEvent,
      fetchEvents,
      refetchEvents,
      calendarOptions,

      // ----- UI ----- //
      isEventHandlerSidebarActive,
    } = useCalendar()

    fetchEvents()

    return {
      refCalendar,
      isCalendarOverlaySidebarActive,
      event,
      clearEventData,
      addEvent,
      updateEvent,
      removeEvent,
      refetchEvents,
      calendarOptions,

      // ----- UI ----- //
      isEventHandlerSidebarActive,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/apps/calendar.scss';
</style>
