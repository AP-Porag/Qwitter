<template>
  <q-layout view="lHr lpR fFf">
    <div class="row">
      <div class="col">
        <img src="../assets/auth-bg.svg" alt="auth-bg" style="min-height: 100vh">
      </div>
      <div class="col bg-primary">
        <div class="q-pa-md auth-form">
          <div class="q-gutter-y-md">
            <q-card class="bg-primary" flat>
              <q-tabs
                v-model="tab"
                class="text-grey"
                active-color="white"
                indicator-color="white"
                align="justify"
                narrow-indicator
              >
                <q-tab name="login" label="login" class="text-black"/>
                <q-tab name="registration" label="registration" class="text-black"/>
              </q-tabs>

              <q-separator/>

              <q-tab-panels v-model="tab" animated class="bg-primary">
                <q-tab-panel name="login">
                  <login-register :tab="tab"></login-register>
                </q-tab-panel>

                <q-tab-panel name="registration">
                  <login-register :tab="tab"></login-register>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  components:{
    'login-register': require('../components/LoginRegister').default
  },
  data() {
    return {
      tab: 'login',
    }
  },
  methods:{
  }
}
</script>
<style lang="sass">
.auth-form
  position: absolute
  top: 50%
  left: 50%
  transform: translateY(-50%)
  width: 50%

</style>
