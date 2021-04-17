<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">

            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Melvin Ochieng</h1>
              <h1 class="font-weight-light">
               Fullstack developer,passionate programmer and eager to learn new technologies. Check out my github profile
              </h1>
              <v-btn rounded outlined href="https://github.com/melvin78" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name:'DownloadSection'

}

</script>

<style scoped>
#download {
  background-image: url("/img/bg.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>
