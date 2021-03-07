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
          @click="addNewQweet"
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
      <q-scroll-area style="height: 75vh; max-width: 100%;">
        <q-list separator>
          <transition-group
            appear
            enter-active-class="animated fadeIn slow"
            leave-active-class="animated fadeOut slow"
          >
            <q-item class="q-py-md qweet" v-for="qweet in qweets" :key="qweet.id">
              <q-item-section avatar top>
                <q-avatar size="xl">
                  <img :src="qweet.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-subtitle1">
                  <strong class="q-mr-sm">{{ qweet.qweeter }}</strong>
                  <span class="text-grey-7">@{{ qweet.handle }}</span>
                  <span class="q-ml-md text-grey-7"><br class="lt-md">&bull;{{ qweet.date | distance }}</span>
                </q-item-label>
                <q-item-label class="content text-body1">
                  {{ qweet.content }}
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
                    @click="toggleLiked(qweet)"
                    flat
                    round
                    :color="qweet.liked ? 'pink' : 'grey'"
                    :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                    size="sm"
                  >
                    <q-badge color="red" floating>13</q-badge>
                  </q-btn>
                  <q-btn
                    @click="deleteQweet(qweet)"
                    flat
                    round
                    color="grey"
                    icon="fas fa-trash"
                    size="sm"
                  />
                </div>
              </q-item-section>
            </q-item>
          </transition-group>
        </q-list>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import {formatDistance} from 'date-fns'
import database from "boot/firebase";

export default {
  name: 'PageHome',
  data() {
    return {
      text: '',
      qweets: [
        // {
        //   id: 'ygohiotfadgyhod125478',
        //   qweeter: 'emily',
        //   avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
        //   handle: 'emilyQweeter',
        //   date: 1615063478381,
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        //     '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'
        // },
        // {
        //   id: 'ygohiotf125478',
        //   qweeter: 'jhon',
        //   avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
        //   handle: 'jhonQweeter',
        //   date: 1615063477381,
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        //'              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'
        // },
        // {
        //   id: 'ygohiotfadgyhod12478',
        //   qweeter: 'ava',
        //   avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
        //   handle: 'avaQweeter',
        //   date: 1615063478351,
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        //     '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'
        // },
        // {
        //   id: 'ygotfadgyhod125478',
        //   qweeter: 'doe',
        //   avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
        //   handle: 'doeQweeter',
        //   date: 1615063478371,
        //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n' +
        //     '              alias aliquid delectus deserunt eaque earum est libero natus nobis nostrum, perspiciatis quas sapiente sit velit.'
        // },
      ]
    }
  },
  methods: {
    addNewQweet() {
      const newQweet = {
        qweeter: 'Jhon',
        avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
        handle: 'jhonQweeter',
        content: this.text,
        date: Date.now(),
        liked: false
      }
      // Add a new document with a generated id.
      database.collection('qweets').add(newQweet)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
      this.text = ''
    },
    toggleLiked(qweet) {

      database.collection("qweets").doc(qweet.id).update({
        liked: !qweet.liked
      })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteQweet(qweet) {
      database.collection('qweets').doc(qweet.id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  },
  filters: {
    distance(value) {
      return formatDistance(value, new Date())
    }
  },
  mounted() {

    database.collection('qweets')
      .orderBy('date')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          const qweetChange = change.doc.data();
          qweetChange.id = change.doc.id
          if (change.type === 'added') {
            this.qweets.unshift(qweetChange)
          }
          if (change.type === 'modified') {
            let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
            Object.assign(this.qweets[index], qweetChange)
          }
          if (change.type === 'removed') {
            let qweetToDelete = qweetChange.id
            let index = this.qweets.findIndex(qweet => qweet.id === qweetToDelete)
            this.qweets.splice(index, 1)
          }
        });
      });
  }
}
</script>
<style lang="sass">
.new-qweet
  font-size: 19px
  line-height: 1.4 !important

.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)

.divider
  border-bottom: 1px solid $grey-4
  border-top: 1px solid $grey-4

.content
  white-space: pre-line

  .qweet-icons
    margin-left: -5px
</style>
