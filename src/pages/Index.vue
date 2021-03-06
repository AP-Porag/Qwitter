<template>
  <q-page>
    <div class="qwitting-bax q-py-lg q-px-lg q-mx-md q-my-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="text"
          placeholder="What's on your mind !"
          counter
          maxlength="280"
          autogrow
          class="new-qweet"
        >
          <template v-slot:before>
            <q-avatar
              size="xl"
            >
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"/>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          :disable="!text"
          unelevated
          rounded
          color="primary"
          label="Qweet"
          no-caps
          class="q-mb-lg"
        />
      </div>

    </div>
    <q-separator size="10px" class="bg-grey-2 divider"/>
    <div class="qweet-list">
      <q-list separator>
        <q-item class="q-py-md" v-for="qweet in qweets" :key="qweet.id">
          <q-item-section avatar top>
            <q-avatar size="xl">
              <img :src="qweet.avatar">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong class="q-mr-sm">{{qweet.qweeter}}</strong>
              <span class="text-grey-7">@{{qweet.handle}}</span>
            </q-item-label>
            <q-item-label class="content text-body1">
{{qweet.content}}
            </q-item-label>
            <div class="row justify-between q-mt-lg qweet-icons">
              <q-btn
                flat
                round
                color="grey"
                icon="far fa-comment"
                size="sm"
              >
                <q-badge color="primary" floating>22</q-badge>
              </q-btn>
              <q-btn
                flat
                round
                color="grey"
                icon="fas fa-retweet"
                size="sm"
              >
                <q-badge color="orange" floating>22</q-badge>
              </q-btn>
              <q-btn
                flat
                round
                color="grey"
                icon="far fa-heart"
                size="sm"
              >
                <q-badge color="red" floating>13</q-badge>
              </q-btn>
              <q-btn
                flat
                round
                color="grey"
                icon="fas fa-trash"
                size="sm"
              />
            </div>
          </q-item-section>

          <q-item-section side top>
            {{qweet.date | distance}}
          </q-item-section>
        </q-item>
      </q-list>

    </div>
  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'
export default {
  name: 'PageHome',
  data() {
    return {
      text: '',
      qweets:[
        {id:'ygohiotfadgyhod125478',qweeter:'emily',avatar:'https://cdn.quasar.dev/img/avatar6.jpg',handle:'emilyQweeter',date:1615063478381,content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
            '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'},
        {id:'ygohiotf125478',qweeter:'jhon',avatar:'https://cdn.quasar.dev/img/avatar4.jpg',handle:'jhonQweeter',date:1615063477381,content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
            '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'},
        {id:'ygohiotfadgyhod12478',qweeter:'ava',avatar:'https://cdn.quasar.dev/img/avatar2.jpg',handle:'avaQweeter',date:1615063478351,content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
            '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'},
        {id:'ygotfadgyhod125478',qweeter:'doe',avatar:'https://cdn.quasar.dev/img/avatar1.jpg',handle:'doeQweeter',date:1615063478371,content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
            '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'},
      ]
    }
  },
  filters:{
    distance(value){
      return formatDistance(value, new Date())
    }
  },
}
</script>
<style lang="sass">
.new-qweet
  font-size: 19px
  line-height: 1.4 !important

.divider
  border-bottom: 1px solid $grey-4
  border-top: 1px solid $grey-4

.content
  white-space: pre-line

  .qweet-icons
    margin-left: -5px
</style>
