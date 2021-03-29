<template>
  <div class="text-center">

    <approval_card :loan-details="getloanInfos"></approval_card>
    <v-pagination
      v-model="pagination.current"
      :length="getLastPage"
      @input="onPageChange"
      :value="getCurrentPage"
    ></v-pagination>
    <slot><P>jk</P></slot>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Approval_card from "@/components/approval_card";

export default {
  name: "laravel-pagination",
  components: {Approval_card},
  data() {

    return {

      users: null,
      pagination: {
        current: 1,
        total: 0
      }

    }
  },

  computed: {
    ...mapGetters({
      getCurrentPage: 'apiservice/CURRENT_PAGE_RESPONSE',
      getLastPage: 'apiservice/LAST_PAGE',
      getloanInfos: 'apiservice/LOANEES_RESPONSE',
    })

  },
  methods: {
    ...mapGetters({


    }),

    ...mapActions({
      fetchLoaninfos: 'apiservice/fetchLoans'
    }),

    onPageChange: function () {

      this.fetchLoaninfos(this.pagination.current)

      this.pagination.current =this.getCurrentPage

    }
  },
  mounted() {
    this.fetchLoaninfos(this.pagination.current)

  }
}
</script>

<style scoped>

</style>
