<template xmlns="http://www.w3.org/1999/html">


<!--    <v-radio-group>-->
<!--      <v-radio-->
<!--        color="success"-->
<!--        label="Present"-->
<!--        value="success"-->
<!--        @click="markPresent(memberProp)"-->
<!--      ></v-radio>-->
<!--    {{members}}-->
<!--      <v-radio-->
<!--        ref="absent"-->
<!--        color="error"-->
<!--        label="Absent"-->
<!--        value="error"-->
<!--        @click="markAbsent(memberProp)"></v-radio>-->
<!--    </v-radio-group>-->
  <div>
    <div v-if="status">
        <v-chip
          class="mr-2"
          color="green"
          @click="markPresent"
        >
          <v-icon left>
            mdi-checkbox-marked-circle
          </v-icon>
          Mark Present
        </v-chip>
      </div>
      <div v-else>
        <v-chip
          class="mr-2"
          color="red"
          @click="markAbsent"
        >

          <v-icon left>
            mdi-minus-circle
          </v-icon>
          Mark Absent
        </v-chip>

  </div>
</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "toggle",
  props: ['memberProp', 'disabled', 'ídentifier'],

  data() {
    return {
      members: '',
      status: false,
      checked: false,
    }


  },
  computed: {},
  methods: {

    ...mapActions({
      save: 'attendance/addMember',
      getIndex: 'attendance/indexMember',
      remove: 'attendance/removeMember'

    }),
    markAbsent: function () {
     this.status =! this.status
      this.save(this.memberProp)

    },
    markPresent: function () {
       this.status=!this.status
      this.remove(this.memberProp)

    },
    test: function () {
      if ((this.$refs.absent.checked) === true) {
        console.log('checked')
      } else {

        console.log('not checeked');
      }


    }

  }
  ,

}
</script>

<style scoped>

</style>
