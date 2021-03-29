<template>
<div>
  <v-snackbar
    :value="myValue"
    absolute
    color="blue-grey"
    elevation="24"
    right
    top
  >


    <b>{{ membername }}</b> is already listed <br>
    with reference No <b>{{ refno }}</b>
  </v-snackbar>

</div>
</template>

<script>
export default {
  name: "snackbar-dataloan",

  props:['membername','refno','myValue'],
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
