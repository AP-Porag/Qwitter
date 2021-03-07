<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title class="text-weight-bold text-capitalize">
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon
            class="q-pa-md lt-md header-icon"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
        <q-input
          color="primary"
          placeholder="Search Qwitter"
          class="q-ma-md lt-md"
          outlined
          rounded
          dense
        >
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-icon
        class="q-pa-md"
        name="fas fa-dove"
        size="lg"
        color="primary"
      />
      <q-list>
        <q-item
          v-for="menu in menus"
          :key="menu.name"
          clickable
          v-ripple
          :to="menu.link"
          exact
        >
          <q-item-section avatar>
            <q-icon :name="menu.icon" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold text-capitalize">{{ menu.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="right"
      side="right"
      bordered
    >
      <!-- drawer content -->
      <q-input
        color="primary"
        placeholder="Search Qwitter"
        class="q-ma-md"
        outlined
        rounded
        dense
      >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>

      <!--      right side item start-->
      <!--      top news start-->
      <div class="bg-grey-2 q-ma-sm q-mb-md" style="border-radius: 5px;">
        <div class="text-h6 q-pa-md">What’s happening</div>
        <q-separator/>
        <q-list
          padding
          separator
        >
          <q-item
          v-for="news in newses"
          :key="news.id"
          >
            <q-item-section>
              <q-item-label overline class="text-grey">{{news.category}}</q-item-label>
              <q-item-label class="text-weight-bold text-black">{{news.title}}</q-item-label>
              <q-item-label caption>
                {{news.content}}<span :to="news.link" class="text-primary q-ml-sm text-capitalize text-weight-bold 2" style="cursor: pointer;font-size: 13px;">...Reed more</span>
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>{{news.time}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator/>
        <div class="q-pa-sm">
          <q-btn
          flat
          class="text-capitalize text-weight-bold text-primary"
          >Show more</q-btn>
        </div>
      </div>
      <!--      top news end-->
      <!--      user suggestion start-->
      <div class="bg-grey-2 q-ma-sm q-mb-md" style="border-radius: 5px;">
        <div class="text-h6 q-pa-md">Who to follow</div>
        <q-separator/>
        <q-list
          padding
          separator
        >
          <q-item v-for="user in users" :key="user.id"
            class="q-mb-sm"
            clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img :src="user.avatar" :alt="user.name">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-capitalize text-weight-bold">{{user.name}}</q-item-label>
              <q-item-label caption lines="1">{{user.profile}}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn outline rounded color="primary" label="Follow" size="sm"></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator/>
        <div class="q-pa-sm">
          <q-btn
            flat
            class="text-capitalize text-weight-bold text-primary"
          >Show more</q-btn>
        </div>
      </div>
      <!--      user suggestion end-->
      <!--      right side item end-->
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {title: 'home', icon: 'home', link: '/'},
        {title: 'message', icon: 'question_answer', link: '/message'},
        {title: 'following', icon: 'supervisor_account', link: '/following'},
        {title: 'follower', icon: 'favorite', link: '/follower'},
        {title: 'profile', icon: 'perm_identity', link: '/profile'},
        {title: 'about', icon: 'help', link: '/about'},
      ],
      left: false,
      right: false,
      newses: [
        {id:'hgshjnj458475ahjz',category:'education',title: 'Something happen very good !', content:'Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.',time:'15 min ago', link: ''},
        {id:'ajohoijf8958df47d',category:'politics',title: 'Something happen very amazing !', content:'Primary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.',time:'10 min ago', link: ''},
        {id:'aut5jy18947wer789',category:'hollywood',title: 'Something happen very nice !', content:'top line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.',time:'5 min ago', link: ''},
      ],
      users:[
        {id:'shfsjjsohfhs56564',name:'emily',profile:'emilyQwitter',avatar:'https://cdn.quasar.dev/img/avatar6.jpg'},
        {id:'gysuyfsbn58944',name:'jhon',profile:'jhonQwitter',avatar:'https://cdn.quasar.dev/img/avatar4.jpg'},
        {id:'156absdf4561sdfju',name:'ava',profile:'avaQwitter',avatar:'https://cdn.quasar.dev/img/avatar2.jpg'},
        {id:'41z8sbghjs454564s',name:'doe',profile:'doeQwitter',avatar:'https://cdn.quasar.dev/img/avatar1.jpg'},
      ],
    }
  }
}
</script>
<style lang="sass">
.header-icon
  padding-left: 20px
  padding-right: 30px

</style>
