<template>
<div>
  <v-alert
    outlined
    type="warning"
    prominent
    border="left"
  >
  You are not authorised to view this page.Only treasures and admins can approve loans.If you think this is
    a problem send an email to <i>dalawomen@info.tech</i>
  <v-btn><nuxt-link to="/dashboard">GO TO DASHBOARD</nuxt-link></v-btn>
  </v-alert>
</div>
</template>

<script>
export default {
name: "authorization"
}
</script>

<style scoped>

</style>
