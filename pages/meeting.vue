<template>
  <div>
    <ValidationObserver ref="meetingform" v-slot="{ handleSubmit }">
      <form @submit="handleSubmit(submit)">
        <v-card
          class="mx-auto"
          elevation="60"
          max-width="700">

          <v-card-title>This month's host is {{ fetchHostname }}</v-card-title>
          <v-card-text>
            <ValidationProvider v-slot="{ errors }" name="meeting" rules="required" vid="meeting">
              <v-text-field v-model="meeting"
                            :error-messages="errors"
                            outlined
                            dense
                            label="Summarise Today's meeting in a few words and fill it below then click on submit"
                            name="meeting">

              </v-text-field>
            </ValidationProvider>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit">START MEETING</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </ValidationObserver>
    <submitted-overlay
      :absent-display="propAbsent"
      :button-display="propButtonDisplay"
      :dashboard-button="propDashboardbutton"
      :info-display="propInfodisplay"
      :repeat="propRepeat"
      :value-over="propValue"
    >

    </submitted-overlay>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import SubmittedOverlay from "@/components/submitted-overlay";
import {ValidationProvider, ValidationObserver} from 'vee-validate';


export default {
  name: "meeting",
  middleware: 'rolecheck',
  components: {SubmittedOverlay, ValidationObserver, ValidationProvider},
  data() {
    return {

      meeting: '',
      members: '',
      propValue: false,
      propRepeat: false,
      propAbsent: '',
      propPath: '',
      propButtonDisplay: '',
      propDashboardbutton: false,
      propInfodisplay: '',
      snackbarConfirmation: false,

    }

  },

  computed: {
    ...mapGetters({
      getMeeting: 'apiservice/MEETING_RESPONSE',
      fetchHostname: 'apiservice/GET_HOST',
      FormError: 'errorhandler/getError'
    }),


  },
  methods: {
    ...mapActions({
      initiateMeeting: 'apiservice/startMeeting',
      absentees: 'apiservice/absentees',
      getHostname: 'apiservice/getHostname',
    }),
    addfind: function (value) {
      return this.members.push(value)
    },


    submit: function () {
      const payload = {
        meeting: this.meeting,

      }

      this.initiateMeeting(payload).then(() => {
        this.propValue = true
        this.propDashboardbutton = false
        this.propRepeat = false
        this.propInfodisplay = 'Head over and mark attendance for this meeting. Click on Mark attendance'
        this.propAbsent = 'Mark Attendance'
      }).catch(() => {
        this.$refs.meetingform.setErrors(this.FormError.errors)
      })


    },
    // submitAbsentees: function () {
    //
    //   const payload = {
    //     members: [1,2,3,4]
    //   }
    //   this.absentees(payload)
    //
    // }
  },
  mounted() {
    this.getHostname()
  }
}
</script>

<style scoped>
html {
  font-family: 'Righteous', cursive;
}
</style>
