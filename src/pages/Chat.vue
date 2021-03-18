<template>
  <q-page>
    <q-banner class="bg-grey-4 text-center">
      User is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages" :key="message.id"
        :avatar="message.avatar"
        :text="[message.text]"
        :stamp="message.stamp"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer>
      <q-toolbar class="bg-grey-3 text-black row">
        <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="newMessage" placeholder="Type a message" />
        <q-btn round flat icon="send" color="primary" @click="sendMessage" />
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: 'PageFollowing',
  data(){
    return{
      newMessage: '',
      messages:[
        {
          id:1,
          text:'hey, how are you?',
          from:'me',
          avatar:'https://cdn.quasar.dev/img/avatar1.jpg',
          stamp:'4 minutes ago'
        },
        {
          id:2,
          text:'doing fine, how r you?',
          from:'them',
          avatar:'https://cdn.quasar.dev/img/avatar5.jpg',
          stamp:'10 minutes ago'
        }
      ]
    }
  },
  methods:{
    sendMessage(){
      const message = {
        id:'snnls157'+Date.now(),
        text:this.newMessage,
        from:'',
        avatar:'https://cdn.quasar.dev/img/avatar5.jpg',
        stamp:Date.now()
      }
      this.messages.push(message)
    }
  }
}
</script>
