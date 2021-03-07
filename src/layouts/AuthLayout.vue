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
                  <div class="text-h6 text-center text-uppercase text-white" style="margin-bottom: 30px">Login here</div>
                  <div class="">
                    <q-form
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        type="email"
                        v-model="loginData.email"
                        label="Your email *"
                      />
                      <q-input
                        filled
                        type="password"
                        v-model="loginData.password"
                        label="Your password *"
                        hint="min 8 Char"
                      />

                      <div>
                        <q-btn label="Login" color="primary" @click="login"/>
                        <q-btn label="Reset" color="primary" class="q-ml-sm" @click="onResetLogin"/>
                      </div>
                    </q-form>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="registration">
                  <div class="text-h6 text-center text-uppercase text-white" style="margin-bottom: 30px">Start With qweeter</div>
                  <div class="">
                    <q-form
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        type="text"
                        v-model="registrationData.name"
                        label="Your name *"
                        hint="Name and surname"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please give your name something']"
                      />
                      <q-input
                        filled
                        type="email"
                        v-model="registrationData.email"
                        label="Your email *"
                      />
                      <q-input
                        filled
                        type="password"
                        v-model="registrationData.password"
                        label="Your password *"
                        hint="min 8 Char"
                      />

                      <div class="row">
                        <q-btn label="Create Account" type="submit" color="primary" @click="registration" />
                        <q-btn label="Reset" color="primary" class="q-ml-sm" @click="onResetRegistration"/>
                      </div>
                    </q-form>
                  </div>
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
  data() {
    return {
      tab: 'login',
      loginData:{
        email:'',
        password:''
      },
      registrationData:{
        name:'',
        email:'',
        password:''
      }
    }
  },
  methods:{
    login(){},
    registration(){},
    onResetLogin(){
      this.loginData.email = ''
      this.loginData.password = ''
    },
    onResetRegistration(){
      this.registrationData.name = ''
      this.registrationData.email = ''
      this.registrationData.password = ''
    },
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
