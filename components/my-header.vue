<template>

</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "my-header",
  ...mapGetters({
    loaneeDetails:'apiservice/LOANEES_RESPONSE',
    getCurrentPage: 'apiservice/CURRENT_PAGE_RESPONSE',
    getLastPage: 'apiservice/LAST_PAGE',
  }),

  mounted() {

  }
}
</script>

<style scoped>

</style>
