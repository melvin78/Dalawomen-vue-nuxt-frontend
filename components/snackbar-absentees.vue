<template>
  <v-snackbar
    :value="myValue"
    absolute
    color="blue-grey"
    elevation="24"
    right
    top
  >

    <b>{{ name }}</b> has already been marked as absent<br>
    email: <b>{{ email }}</b>
  </v-snackbar>
</template>

<script>
export default {
  name: "snackbar-absentees",
  props:['name','email','myValue'],

  data(){
    return{

    }
  },
  methods:{

    close(){
      this.myValue=false
    }
  }




}
</script>

<style scoped>

</style>
