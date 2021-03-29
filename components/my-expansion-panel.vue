<template>
  <v-row class="mb-4" justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel>


        <v-expansion-panel-header>LOAN CONFIRMATION
          <template v-slot:actions>
            <v-badge
              color="green"
              :content="badgeContent"
              class="pr-4"
            >

            </v-badge>
          </template>
        </v-expansion-panel-header>


        <v-expansion-panel-content>
          <textfield-chip
            :value="getMembers"
            @clicked="modifyBadge"
          ></textfield-chip>
          <v-row justify="end" class="pb-4 pr-2 pt-4">
            <v-btn>CONFIRM THIS LOANS</v-btn>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

  </v-row>
</template>

<script>
export default {
name: "my-expansion-panel",

  props:['badgeContent']
}
</script>

<style scoped>

</style>
