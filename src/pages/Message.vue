<template>
  <q-page>
    <div class="" :style="style">
      <q-scroll-area style="height: 95vh; max-width: 100%;">
      <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
        <q-header elevated>
          <q-toolbar class="bg-grey-3 text-black">
            <q-btn
              round
              flat
              icon="keyboard_arrow_left"
              class="q-mr-sm"
              @click="leftDrawerOpen = !leftDrawerOpen"
            />

            <q-btn round flat>
              <q-avatar>
                <img :src="currentConversation.avatar">
              </q-avatar>
            </q-btn>

            <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.name }}
          </span>

            <q-space/>

            <q-btn round flat icon="search" />
            <q-btn round flat>
              <q-icon name="attachment" class="rotate-135" />
            </q-btn>
            <q-btn round flat icon="more_vert">
              <q-menu auto-close :offset="[110, 0]">
                <q-list style="min-width: 150px">
                  <q-item clickable>
                    <q-item-section>Contact data</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Block</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Select messages</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Silence</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Clear messages</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Erase messages</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-toolbar>
        </q-header>

        <q-drawer
          v-model="leftDrawerOpen"
          show-if-above
          bordered
          :breakpoint="690"
        >
          <q-toolbar class="bg-grey-3">
            <q-avatar class="cursor-pointer">
              <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
            </q-avatar>

            <q-space />

            <q-btn round flat icon="message" />
            <q-btn round flat icon="more_vert">
              <q-menu auto-close :offset="[110, 8]">
                <q-list style="min-width: 150px">
                  <q-item clickable>
                    <q-item-section>New group</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Profile</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Archived</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Favorites</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>

            <q-btn
              round
              flat
              icon="close"
              class="WAL__drawer-close"
              @click="leftDrawerOpen = false"
            />
          </q-toolbar>

          <q-toolbar class="bg-grey-2">
            <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search or start a new conversation">
              <template slot="prepend">
                <q-icon name="search" />
              </template>
            </q-input>
          </q-toolbar>

          <q-scroll-area style="height: calc(100% - 100px)">
            <q-list
            separator
            class="q-mt-md"
            >
              <q-item
                v-for="user in users"
                :key="user.id"
                clickable
                v-ripple
                to="/chat"
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="user.avatar">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1">
                    {{ user.name }}
                  </q-item-label>
                  <q-item-label class="conversation__summary text-grey-7">
                    {{ user.email }}
                  </q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-badge rounded :color="user.status ? 'light-green-5':'grey-4'" class="q-pa-sm" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-page-container class="">
          <router-view />
        </q-page-container>
      </q-layout>
      </q-scroll-area>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageMessage',
  data () {
    return {
      leftDrawerOpen: true,
      search: '',
      currentConversationIndex: 0,
      users: [
        {
          id: 1,
          name: 'Razvan Stoenescu',
          avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          email: 'I\'m working on Quasar!',
          status:true
        },
        {
          id: 2,
          name: 'Dan Popescu',
          avatar: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
          email: 'I\'m working on Quasar!',
          status:false
        },
        {
          id: 3,
          name: 'Jeff Galbraith',
          avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          email: 'I\'m working on Quasar!',
          status:false
        },
        {
          id: 4,
          name: 'Allan Gaunt',
          avatar: 'https://cdn.quasar.dev/team/allan_gaunt.png',
          email: 'I\'m working on Quasar!',
          status:true
        }
      ]
    }
  },
  computed: {
    currentConversation () {
      return this.users[this.currentConversationIndex]
    },
    style () {
      return {
        height: this.$q.screen.height + 'px'
      }
    }
  }
}
</script>
<style lang="sass">
.WAL
  width: 100%
  height: 100%
  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%
    background-color: #009688
  &__layout
    margin: 0 auto
    height: 97vh
    width: 100%
    border-radius: 5px
  &__field.q-field--outlined .q-field__control:before
    border: none
  .q-drawer--standard
    .WAL__drawer-close
      display: none
@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0
@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none
.conversation__summary
  margin-top: 4px
.conversation__more
  margin-top: 0!important
  font-size: 1.4rem

</style>
