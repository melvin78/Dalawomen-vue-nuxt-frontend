<template>
  <div>
   <v-overlay :value="valueOver">
      <v-progress-circular
        :width="30"
        color="green"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "loading-overlay",
  props:['valueOver'],





}



</script>

<style scoped>

</style>
