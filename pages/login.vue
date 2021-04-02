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
            <v-card-title>Fill in the form to register</v-card-title>
            <v-card-subtitle>You will be assigned the role of a member by default. If you wish to test
              the admin features,login with the following credentials:<br>
              <strong>Email: Miles95@example.org</strong><br>
              <strong>Password: password</strong><br>
            </v-card-subtitle>

            <validation-observer ref="loginform" v-slot="{ handleSubmit}">
              <form @submit="handleSubmit(login)">
                <ValidationProvider v-slot="{ errors }" name="email" rules="required" vid="email">
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="Name"
                    name="name"
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
        </v-col>
      </v-row>
    </div>
  </v-container>


</template>

<script>

import {mapGetters} from 'vuex';
import {ValidationObserver} from 'vee-validate';
import {ValidationProvider} from 'vee-validate';


export default {
  name: "login",
  layout: 'normal',
  auth: false,
  components: {ValidationObserver, ValidationProvider},


  data() {
    return {

      password: '',
      email: ''

    }
  },

  methods: {


    login: function () {



      const payload = {
        password: this.password,
        email: this.email,

      }

      this.$auth.loginWith('laravelSanctum', {data: payload})
        .then(() => {
          this.$router.push('/dashboard')
        })
        .catch(() => {
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


