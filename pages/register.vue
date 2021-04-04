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
            <v-card-title>Fill in the form to register.Check your email </v-card-title>
            <v-card-subtitle>You will be assigned the role of a member by default. If you wish to test
              the admin features,login with the following credentials:<br>
              <strong>Email: Miles95@example.org</strong><br>
              <strong>Password: password</strong><br>
              <br>
              You will receive an email after successful registration
            </v-card-subtitle>

            <validation-observer ref="registerform" v-slot="{ handleSubmit }">
              <form @submit="handleSubmit(submitform)">
                <ValidationProvider v-slot="{ errors }" name="name" rules="required" vid="name">
                  <v-text-field
                    v-model="name"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="Name"
                    name="name"
                    outlined
                    required
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email" vid="email">
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="E-mail"
                    name="email"
                    outlined

                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:8" vid="password">
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="password"
                    name="password"
                    outlined

                    type="password"

                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:8" vid="password">
                  <v-text-field
                    v-model="password_confirmation"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="password confirmation"
                    name="password"
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
                      @click="submitform"
                    >

                      REGISTER
                    </v-btn>

                  </v-card-actions>
                </v-row>


              </form>

            </validation-observer>

          </v-card>
        </v-col>


        <loading-overlay-form :info="regisrationStatus" :value-over="overlay"></loading-overlay-form>
      </v-row>
    </div>
  </v-container>

</template>

<script>

import {ValidationObserver} from 'vee-validate';
import {ValidationProvider} from 'vee-validate';
import {mapGetters} from "vuex";
import LoadingOverlay from "@/components/loading-overlay";
import LoadingOverlayForm from "@/components/landingpage/loading-overlay-form";


export default {
  name: "register",
  layout: 'normal',
  auth: false,
  components: {LoadingOverlayForm, LoadingOverlay, ValidationObserver, ValidationProvider},
  computed: {
    ...mapGetters({
      FormError: 'errorhandler/getError'
    })
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      overlay: false,
      regisrationStatus: '',

    }
  },


  methods: {
    async submitform() {


      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };

      await this.$axios.get('/sanctum/csrf-cookie')
      this.overlay = true;
      this.regisrationStatus = 'Confirming Your details...'
      this.$axios.post('/register', payload).then(() => {
        this.overlay = false;
        this.$router.push('/login')

      }).catch(() => {
        this.overlay = false;
        this.$refs.registerform.setErrors(this.FormError.errors)
      })


    }
  },


}


</script>

<style scoped>

</style>
