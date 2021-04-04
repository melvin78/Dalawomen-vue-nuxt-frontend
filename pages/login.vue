<template>
  <v-container class="centered">
    <div class="child">
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          lg="6"
          md="8"
          sm="10"
        >
          <v-card elevation="13"
                  shaped>
            <v-card-title>Fill in the form to login</v-card-title>
            <v-card-subtitle>Login with your newly registered account. If you wish to test
              the admin features,login with the following credentials:<br>
              <strong>Email: Miles95@example.org</strong><br>
              <strong>Password: password</strong><br>
            </v-card-subtitle>

            <validation-observer ref="loginform" v-slot="{ handleSubmit}">
              <form @submit="handleSubmit(login)">
                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email" vid="email">
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="Email"
                    name="email"
                    outlined
                    required
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:8" vid="password">
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="Password"
                    outlined
                    type="password"

                  ></v-text-field>
                </ValidationProvider>

                <v-divider></v-divider>
                <v-row class="pt-3" justify="end">
                  <v-card-actions>
                    <v-btn
                      class="mr-4"
                      color="success"
                      x-large
                      @click="login"
                    >

                  LOGIN
                    </v-btn>

                  </v-card-actions>
                </v-row>


              </form>

            </validation-observer>

          </v-card>
          <div class="pt-5">
            <div>Register from here:</div>
            <v-btn x-large @click="registerMe"> REGISTER</v-btn>
          </div>
        </v-col>
        <loading-overlay-form :info="regisrationStatus" :value-over="overlay"></loading-overlay-form>
      </v-row>
    </div>
  </v-container>


</template>

<script>

import {mapGetters} from 'vuex';
import {ValidationObserver} from 'vee-validate';
import {ValidationProvider} from 'vee-validate';
import LoadingOverlayForm from "@/components/landingpage/loading-overlay-form";


export default {
  name: "login",
  layout: 'normal',
  auth: false,
  components: {LoadingOverlayForm, ValidationObserver, ValidationProvider},


  data() {
    return {

      password: '',
      email: '',
      regisrationStatus:'',
      overlay:false,

    }
  },

  methods: {


    login: function () {



      const payload = {
        password: this.password,
        email: this.email,

      }
      this.overlay = true;
      this.regisrationStatus='Logging you in...'
      this.$auth.loginWith('laravelSanctum', {data: payload})
        .then(() => {
          this.overlay=false
          this.$router.push('/dashboard')
        })
        .catch(() => {
          this.overlay=false
          this.$refs.loginform.setErrors(this.FormError.errors);
        })


    },


    registerMe() {
      this.$router.push('/register')
    }


  },
  computed: {

    ...mapGetters({
      FormError: 'errorhandler/getError'
    })


  },

}


</script>


