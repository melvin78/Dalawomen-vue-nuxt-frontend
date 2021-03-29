<template>
  <v-menu
    bottom
    origin="center center"
    transition="scale-transition"

  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Scale Transition
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
name: "notification-menu-popup",
  props:['myValue'],

  data(){

  return{

    items:[
      {id:1,title:'side'},
      {id:2,title:'left'},
      {id:3,title:'right'},
      {id:4,title:'center'},


    ]
  }
  }
}
</script>

<style scoped>

</style>
