<template>
  <div>

    <v-overlay :value="valueOver">
      <v-card max-width="500" max-height="500" class="overflow-y-auto">
        <v-card-subtitle>

          {{infoDisplay}}
          Check notifications to also see new updates
        </v-card-subtitle>
        <v-card-actions>
          <div v-if="dashboardButton" class="pr-5">
            <v-btn :value="dashboardButton" @click="goTodashboard">
              GO TO DASHBOARD
            </v-btn>
          </div>
          <div v-else >


            <v-btn @click="goToattendance">
              {{absentDisplay}}
            </v-btn>



          </div>
          <div v-if="repeat">
            <v-btn  @click="repeatProcess()">
              {{buttonDisplay}}
            </v-btn >
          </div>
        </v-card-actions>
      </v-card>


    </v-overlay>

  </div>
</template>

<script>
export default {
name: "submitted-overlay",
  props:{
  valueOver: Boolean,
    infoDisplay: String,
    buttonDisplay:String,
    dashboardButton:Boolean,
    absentDisplay:String,
    repeat:Boolean
  },
  methods:{

    goTodashboard(){
      this.$router.push('/dashboard')
    },

    repeatProcess(){
      this.$router.go(this.$router.currentRoute)
    },

    goToattendance(){
      this.$router.push('/absentees')
    }
  }
}
</script>

<style scoped>

</style>
