<template>
  <div>

    <v-chip v-for="item in value"
            class="ma-2 chip-modify"
            close
            :key="item.id"
            color="primary"
            @click:close="lo(item.id)"

    >
      <b>{{item.name}}</b> &nbsp; absent &nbsp;

    </v-chip>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "textfield-chip",

  props: ['value'],

  data() {
    return {
      data: false,

    }

  },

  methods: {
    ...mapActions({
      remove: 'attendance/removeMember'
    }),


    lo(value) {
      this.$emit('clicked')

      this.remove(value)


    },

  }
}
</script>

<style scoped>
.chip-modify{

  padding-top: 2px;
  padding-bottom: 2px;
}

</style>
