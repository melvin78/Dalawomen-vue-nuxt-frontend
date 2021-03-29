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
            <v-card-title>Enter Your Email Address and Password To Login</v-card-title>
            <v-card-subtitle>
              <nuxt-link to="forgotPassword"><i>Forgotten Credentials? Click Here</i></nuxt-link><br>
              If you wish to test
              the admin features,login with the following credentials:<br>
              <strong>Email</strong> Miles95@example.org<br>
              <strong>Password:</strong> password<br>
            </v-card-subtitle>
            <ValidationObserver ref="loginform" v-slot="{ handleSubmit }">
              <form @submit="handleSubmit(login)">
                <ValidationProvider v-slot="{ errors }" name="E-mail" rules="required|email" vid="email">
                  <v-text-field
                    v-model="email"

                    :error-messages="errors"
                    class="mr-4 ml-4 pt-8"
                    dense
                    label="email"
                    name="email"
                    outlined
                    placeholder="Email Address"
                    required
                  ></v-text-field>


                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="Password" rules="required" vid="password">
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    class="mr-4 ml-4 pt-3"
                    dense
                    label="password"
                    name="password"
                    outlined
                    placeholder="Password"
                    required
                  ></v-text-field>

                </ValidationProvider>
                <v-divider></v-divider>
                <v-row class="pt-5" justify="center">

                  <v-card-actions>
                    <v-btn

                      class="mr-4"
                      color="success"
                      x-large

                      @click="login"
                    >
                      <v-icon
                        dark
                        right
                      >
                        mdi-account-circle
                      </v-icon>
                      LOGIN
                    </v-btn>


                  </v-card-actions>

                </v-row>


              </form>
            </ValidationObserver>
          </v-card>
          <div class="pt-5">
            <v-sheet
              elevation="1"

              rounded
              shaped
            >
              Dont have an account? Click on register to create one
              <v-btn
                class="mr-4"
                color="success"
                text
                type="submit"
                x-large
                @click="registerMe"
              >
                <v-icon
                  dark
                  right
                >
                  mdi-plus
                </v-icon>
                REGISTER
              </v-btn>
            </v-sheet>
          </div>

        </v-col>


      </v-row>
    </div>
  </v-container>
</template>

<script>
import error from "@/layouts/error";
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

      this.errors = null;
      this.message = null;

      const payload = {
        password: this.password,
        email: this.email,

      }

      this.$auth.loginWith('laravelSanctum', {

        data: payload
      })
        .then(() => {
          // this.$router.push('/dashboard',()=>this.$router.go(0) )
          this.$router.push('/dashboard')
        })
        .catch(() => {
        this.$refs.loginform.setErrors(this.FormError.errors);
      })


    },
    //
    // check: function () {
    //   console.log(this.FormError.errors.email);
    // }

    registerMe() {
      this.$router.push('/register')
    }


  },
  computed: {

    ...mapGetters({
      FormError: 'errorhandler/getError'
    })


  },
  mounted() {

  }


}


</script>

<style scoped>

/*.centered{*/
/* display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/


</style>
