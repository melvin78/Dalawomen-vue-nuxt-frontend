<template xmlns="http://www.w3.org/1999/html">

  <v-container fluid>

    <v-row class="mb-4" justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel>


          <v-expansion-panel-header>ATTENDANCE CONFIRMATION
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
           <textfield-chip-absentee
             :value="absenteesMembers"
             @clicked="modifyBadge"
           >

           </textfield-chip-absentee>
            <v-row justify="end" class="pb-4 pr-2 pt-4"  v-if="absenteesMembers.length>0">
              <v-btn @click="confirmAttendance">CONFIRM ABSENTEES LIST</v-btn>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>

    </v-row>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="(item,i) in props.items"
            :key="i"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>



                <v-btn
                  color="red"
                  text
                  @click="confirmApproval(item)"
                >
                 MARK AS ABSENT
                </v-btn>


              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>

          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
    <snackbar-absentees
    :my-value="snackbar"
    :name="name"
    :email="email"
    >
    </snackbar-absentees>

    <loading-overlay :value-over="overlay"></loading-overlay>
<submitted-overlay
:value-over="propValue"
:button-display="propButtonDisplay"
:info-display="propInfodisplay"
:dashboard-button="propDashboardbutton"
:repeat="propRepeat"
>


</submitted-overlay>
  </v-container>


</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import Toggle from "@/components/toggle";
import TextfieldChip from "@/components/textfield-chip";
import LoadingOverlay from "@/components/loading-overlay";
import SnackbarAbsentees from "@/components/snackbar-absentees";
import SubmittedOverlay from "@/components/submitted-overlay";

export default {
  name: "absentees",
  auth:false,
  middleware:'rolecheck',
  components: {SubmittedOverlay, SnackbarAbsentees, LoadingOverlay, TextfieldChip, Toggle,},

  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      propValue:false,
      propRepeat:true,
      propInfodisplay:'',
      propButtonDisplay:'',
      propDashboardbutton:true,
      sortDesc: false,
      snackbar:false,
      page: 1,
      overlay:true,
      name:'',
      snackbarConfirmation:false,
      email:'',
      itemsPerPage: 4,
      sortBy: 'name',
      items: [],
      badgeContent:0,
      keys: [
        'Name',
        'Email',
        'Joined'
      ],
    }

  },
  computed: {
    ...mapGetters({
      allMembers: 'apiservice/MEMBERS_RESPONSE',
      absenteesMembers: 'attendance/GET_MEMBERS',
      overlayValue:'apiservice/OVERLAY_VALUE'
    }),

    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },

  methods: {
    ...mapActions({
      getMembers: 'apiservice/getMembers',
      submitList: 'apiservice/absentees',
      addAbsenteemember:'attendance/addMember',
      changeOverlay:'apiservice/changeOverlay'
    }),
    confirmAttendance: function (){

      const payload ={
        members: this.absenteesMembers.map(e=>e.name)
      }
      this.submitList(payload)
     this.propValue=true
      this.propInfodisplay='Attendance Confiremd Absent members will be penalised.Incase you missed someone click on mark attendance to check again'
      this.propButtonDisplay='Mark Attendance'

    },

    confirmApproval(value) {


      let idx = this.absenteesMembers.map(e => e.id).indexOf(value.id)
      if (idx === -1) {
        this.addAbsenteemember(value)
        this.snackbar = false
        this.badgeContent +=1
      } else {
        this.name = value.name
        this.email = value.email
        this.snackbar = !this.snackbar
      }


    },
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
    modifyBadge(){
      this.badgeContent -= 1
    },
  },



  mounted() {
    this.getMembers().then( ()=>{
      this.items=this.allMembers
      this.changeOverlay()
      this.overlay =this.overlayValue

    })
  }
}
</script>

<style scoped>
html {
  font-family: 'Righteous', cursive;
}
</style>
