<template>

  <v-container fluid>

    <v-row class="mb-4" justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel>
          <v-expansion-panel-header>LOAN CONFIRMATION
            <template v-slot:actions>
              <v-badge
                :content="badgeContent"
                class="pr-4"
                color="green"
              >

              </v-badge>
            </template>
          </v-expansion-panel-header>


          <v-expansion-panel-content>
            <textfield-chip
              :value="getMembers"
              @clicked="modifyBadge"
            ></textfield-chip>
            <v-row class="pb-4 pr-2 pt-4" justify="end">
             <div v-if="getMembers.length>0"><v-btn @click="submitLoans">CONFIRM THIS LOANS</v-btn></div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>

    </v-row>
<v-row>
  <div>
  <snackbar-dataloan
    :my-value="snackbarDataloan"
    :membername="propMembername"
    :refno="propRefno"
  ></snackbar-dataloan>


  </div>
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
          class="mb-1"
          color="blue darken-3"
          dark
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            hide-details
            label="Search On this Page"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              :items="keys"
              flat
              hide-details
              label="Sort by"
              prepend-inner-icon="mdi-magnify"
              solo-inverted
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                :value="false"
                color="blue"
                depressed
                large
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                :value="true"
                color="blue"
                depressed
                large
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
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            lg="3"
            md="4"
            sm="6"
          >
            <v-card

              elevation="13"
              shaped>

              <v-card-title class="subheading font-weight-bold">
                {{ item.member_name }}
              </v-card-title>
              <v-card-subtitle>
                REF NO: {{ item.id }}
              </v-card-subtitle>

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
                    :class="{ 'blue--text': sortBy === key }"
                    class="align-end"
                  >
                    {{ item[key.toLowerCase().replace(/ /g, "_")] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn
                  color="green"
                  text
                  @click="confirmApproval(item)"
                >
                  ADD TO APPROVAL LIST
                </v-btn>


              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          align="center"
          class="mt-2"
          justify="center"
        >

          <v-menu offset-y>

          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ lastPage }}

          </span>

          <v-pagination
            v-model="page"
            :length="getLastPage"
            :value.sync="page"
            @input="onPageChange"
          ></v-pagination>
        </v-row>
      </template>
    </v-data-iterator>



    <loading-overlay :value-over="overlay"></loading-overlay>
<submitted-overlay
:info-display="propInfodisplay"
:button-display="propButtonDisplay"
:value-over="propValue"
:dashboard-button="propDashboardbutton"
:repeat="propRepeat"
>

</submitted-overlay>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TextfieldChip from "@/components/textfield-chip";
import SnackbarDataloan from "@/components/snackbar-dataloan";
import SubmittedOverlay from "@/components/submitted-overlay";


export default {
  components: { SubmittedOverlay, SnackbarDataloan, TextfieldChip},
  middleware:'rolecheck',
  data() {
    return {
      itemsPerPageArray: [10, 20, 30],
      search: '',
      badgeContent: 0,
      propInfodisplay:'',
      propButtonDisplay:'',
      propValue:false,
      propRepeat:true,
      propMembername: '',
      propDashboardbutton:true,
      propRefno: '',
      apiResponse:'',
      filter: {},
      overlay: true,
      sortDesc: false,
      page: 1,
      itemsPerPage: null,
      lastPage: 0,
      sortBy: 'type_of_loan',
      items: [],
      snackbarDataloan: false,
      snackbarSubmitloan:false,
      keys: [
        'Amount',
        'Type Of Loan',
        'Date Borrowed',

      ],

    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.loaneeDetails.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter(key => key !== 'Member Name')
    },

    ...mapGetters({
      loaneeDetails: 'apiservice/LOANEES_RESPONSE',
      getCurrentPage: 'apiservice/CURRENT_PAGE_RESPONSE',
      getLastPage: 'apiservice/LAST_PAGE',
      getperPage: 'apiservice/PER_PAGE',
      getMembers: 'loanapproval/GET_ALL_MEMBERS',
      overlayValue: 'apiservice/OVERLAY_VALUE',
      loanResponse:'apiservice/RESPONSE_AFTER_LOAN_SUBMISSION',
      getSocketdata:'websocket/GET_LOANS_APPROVED'

    })
  },
  methods: {

    onPageChange: function () {

      this.fetchLoaninfos(this.page).then(() => {
        this.items = this.loaneeDetails
        this.page = this.getCurrentPage
        this.lastPage = this.getLastPage
      })

    },

    submitLoans() {


      const payload = {
        data: this.getMembers
      }


      this.approveLoan(payload).then(() => {

        this.apiResponse= this.loanResponse
        this.propValue=true
        this.propInfodisplay='The loans have succcesfully been approved'
        this.propButtonDisplay='Approve More Loans'




      })

    },

    confirmApproval(value) {


      let idx = this.getMembers.map(e => e.id).indexOf(value.id)
      if (idx === -1) {
        this.setApproval(value)
        this.snackbarDataloan = false
        this.badgeContent += 1
      } else {
        this.propMembername = value.member_name;
        this.propRefno = value.id
        this.snackbarDataloan =!this.snackbarDataloan
      }


    },

    modifyBadge() {
      this.badgeContent -= 1
    },


    ...mapActions({
      fetchLoaninfos: 'apiservice/fetchLoans',
      setApproval: 'loanapproval/addMember',
      changeOverlay: 'apiservice/changeOverlay',
      approveLoan: 'apiservice/approveLoans'
    }),

  },
  mounted() {
    this.fetchLoaninfos(this.page).then(() => {
      this.items = this.loaneeDetails
      this.page = this.getCurrentPage
      this.lastPage = this.getLastPage
      this.itemsPerPage = this.getperPage
      this.changeOverlay()
      this.overlay = this.overlayValue
    })


  },

}
</script>
<style scoped>
html {
  font-family: 'Righteous', cursive;
}
</style>
