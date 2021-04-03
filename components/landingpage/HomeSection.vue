<template>
  <section id="hero">
    <v-parallax dark height="750" src="/img/global-connections-03.jpeg">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Melosolutions Tech</h1>
              <h1 class="font-weight-light">
                Your one stop <br/>
               place for your software<br/>
                needs!
              </h1>
              <v-btn
                class="mt-5"
                dark
                large
                outlined
                rounded
                @click="$vuetify.goTo('#features')"
              >
             MY PROJECTS
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
              <div class="video d-flex align-center py-4">

                <svg width="50" height="50" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="coin 1">
                    <g id="mycoin">
                      <path id="Vector" d="M512 256C512 397.387 397.387 512 256 512C114.613 512 0 397.387 0 256C0 114.613 114.613 0 256 0C397.387 0 512 114.613 512 256Z" fill="url(#paint0_radial)"/>
                      <path id="Vector_2" d="M0 256C0 347.371 47.8789 427.547 119.906 472.848H392.094C464.121 427.547 512 347.371 512 256C512 164.629 464.121 84.4531 392.094 39.1523H119.906C47.8789 84.4531 0 164.629 0 256Z" fill="url(#paint1_linear)"/>
                      <path id="Vector_3" d="M0 256C0 321.184 24.375 380.66 64.4883 425.859H447.512C487.625 380.66 512 321.184 512 256C512 190.816 487.625 131.34 447.512 86.1445H64.4883C24.375 131.34 0 190.816 0 256H0Z" fill="url(#paint2_linear)"/>
                      <path id="Vector_4" d="M0 256C0 294.098 8.33203 330.242 23.2578 362.73H488.742C503.668 330.242 512 294.098 512 256C512 217.902 503.668 181.758 488.742 149.27H23.2578C8.33203 181.758 0 217.902 0 256V256Z" fill="url(#paint3_linear)"/>
                      <path id="Vector_5" d="M0 256C0 278.051 2.79687 299.445 8.03906 319.859H503.961C509.203 299.445 512 278.051 512 256C512 233.949 509.203 212.555 503.961 192.141H8.03906C2.79687 212.555 0 233.949 0 256H0Z" fill="url(#paint4_linear)"/>
                      <path id="Vector_6" d="M235.672 0.800781C103.793 11.1641 0 121.457 0 256C0 390.543 103.793 500.836 235.672 511.199C367.551 500.836 471.344 390.543 471.344 256C471.344 121.457 367.551 11.1641 235.672 0.800781V0.800781Z" fill="url(#paint5_radial)"/>
                      <path id="Vector_7" d="M248.922 24.2305C240.133 23.0352 231.211 23.0352 222.418 24.2305C108.285 39.7578 20.3242 137.605 20.3242 256C20.3242 374.395 108.285 472.242 222.418 487.77C231.211 488.965 240.133 488.965 248.922 487.77C363.059 472.242 451.02 374.395 451.02 256C451.02 137.605 363.059 39.7578 248.922 24.2305V24.2305Z" fill="url(#paint6_radial)"/>
                      <path id="Vector_8" d="M405.82 256C405.82 152.844 329.176 69.2188 234.633 69.2188C140.086 69.2188 63.4414 152.844 63.4414 256C63.4414 359.156 140.086 442.781 234.633 442.781C329.176 442.781 405.82 359.156 405.82 256Z" fill="url(#paint7_radial)"/>
                      <path id="Vector_9" d="M281.633 76.3594C260.32 69.7344 237.555 69.7344 216.242 76.3594C144.551 98.6445 92.0508 170.629 92.0508 256C92.0508 343.039 146.625 416.168 220.473 436.891C239.07 442.109 258.805 442.109 277.402 436.891C351.25 416.168 405.82 343.043 405.82 256C405.82 170.629 353.324 98.6445 281.633 76.3594V76.3594Z" fill="url(#paint8_radial)"/>
                      <path id="Vector_10" d="M403.867 284.285L290.547 170.961C288.488 167.379 284.215 164.418 277.715 162.082C271.043 159.688 263.934 158.059 256.402 157.16L246.457 148.289C246.258 146.887 245.438 145.613 243.914 144.488C242.156 143.199 240.262 142.547 238.234 142.547C236.02 142.547 234.121 143.199 232.555 144.488C230.984 145.781 230.199 147.258 230.199 148.918V156.953C215.238 158.617 202.723 163.602 192.66 171.914C182.59 180.227 177.559 192.406 177.559 208.449C177.559 214.164 178.203 219.371 179.5 224.074C180.789 228.773 182.914 232.875 185.871 236.375C188.824 239.879 191.645 242.875 194.32 245.363C194.461 245.496 194.621 245.625 194.77 245.758L230.199 281.27V327.617C222.016 327.062 214.805 324.945 208.57 321.258C202.34 317.574 197.441 314.117 193.875 310.891C190.309 307.664 187.43 306.051 185.242 306.051C181.934 306.051 178.996 307.801 176.426 311.305C173.855 314.809 172.574 318.309 172.574 321.812C172.574 327.551 175.902 333.207 182.535 338.777L279.914 436.156C344.375 416.914 393.66 357.605 403.867 284.285V284.285Z" fill="url(#paint9_linear)"/>
                      <path id="Vector_11" d="M172.57 321.812C172.57 318.309 173.855 314.809 176.426 311.305C178.996 307.805 181.934 306.051 185.242 306.051C187.43 306.051 190.309 307.664 193.875 310.891C197.441 314.121 202.34 317.574 208.57 321.258C214.805 324.949 222.016 327.066 230.199 327.617V262.645C224.66 260.621 220.406 259.004 217.457 257.805C214.5 256.613 210.574 254.859 205.68 252.555C200.785 250.254 196.996 247.855 194.32 245.367C191.645 242.875 188.824 239.883 185.875 236.379C182.914 232.875 180.793 228.777 179.5 224.074C178.207 219.375 177.562 214.168 177.562 208.453C177.562 192.41 182.59 180.227 192.66 171.918C202.727 163.605 215.238 158.617 230.199 156.957V148.922C230.199 147.258 230.984 145.781 232.555 144.488C234.121 143.199 236.02 142.551 238.234 142.551C240.266 142.551 242.156 143.199 243.914 144.488C245.668 145.781 246.547 147.258 246.547 148.922V156.402C257.809 156.773 268.199 158.664 277.715 162.082C287.227 165.5 291.984 170.254 291.984 176.348C291.984 179.672 290.863 183.137 288.629 186.738C286.395 190.34 283.41 192.141 279.688 192.141C278.215 192.141 274.168 190.574 267.555 187.43C260.934 184.293 253.934 182.441 246.547 181.891V238.035C253.895 240.801 260 243.43 264.867 245.918C269.734 248.406 274.879 251.863 280.301 256.285C285.719 260.711 289.805 266.285 292.559 273.012C295.312 279.738 296.691 287.621 296.691 296.652C296.691 313.152 292.191 326.27 283.191 336C274.188 345.734 261.977 351.711 246.547 353.938V363.191C246.547 364.824 245.668 366.273 243.914 367.547C242.156 368.816 240.266 369.449 238.238 369.449C236.02 369.449 234.125 368.813 232.555 367.551C230.984 366.277 230.203 364.828 230.203 363.195V354.766C214.133 354.582 200.508 350.906 189.336 343.734C178.156 336.57 172.57 329.262 172.57 321.812V321.812ZM204.988 205.691C204.988 212.879 207.227 218.363 211.703 222.141C216.18 225.918 222.902 229.469 231.859 232.785V182.418C213.945 184.633 204.988 192.391 204.988 205.691ZM244.883 327.062C261.133 324.113 269.266 314.992 269.266 299.691C269.266 291.586 267.137 285.223 262.891 280.617C258.641 276.012 252.641 272.047 244.883 268.727V327.062Z" fill="url(#paint10_linear)"/>
                    </g>
                  </g>
                  <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(243.569 247.176) scale(266.634)">
                      <stop stop-color="#FFA700"/>
                      <stop offset="0.3227" stop-color="#FCA300"/>
                      <stop offset="0.6649" stop-color="#F39600"/>
                      <stop offset="1" stop-color="#E58200"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear" x1="256" y1="215.554" x2="256" y2="673.015" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E58200" stop-opacity="0"/>
                      <stop offset="0.0396" stop-color="#E27F04" stop-opacity="0.039216"/>
                      <stop offset="0.4671" stop-color="#C15D2F" stop-opacity="0.466667"/>
                      <stop offset="0.8016" stop-color="#AD4949" stop-opacity="0.8"/>
                      <stop offset="1" stop-color="#A64153"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="256" y1="317.949" x2="256" y2="-144.334" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E58200" stop-opacity="0"/>
                      <stop offset="0.0396" stop-color="#E27F04" stop-opacity="0.039216"/>
                      <stop offset="0.4671" stop-color="#C15D2F" stop-opacity="0.466667"/>
                      <stop offset="0.8016" stop-color="#AD4949" stop-opacity="0.8"/>
                      <stop offset="1" stop-color="#A64153"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="256" y1="263.74" x2="256" y2="411.585" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E58200" stop-opacity="0"/>
                      <stop offset="0.0396" stop-color="#E27F04" stop-opacity="0.039216"/>
                      <stop offset="0.4671" stop-color="#C15D2F" stop-opacity="0.466667"/>
                      <stop offset="0.8016" stop-color="#AD4949" stop-opacity="0.8"/>
                      <stop offset="1" stop-color="#A64153"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear" x1="256" y1="311.926" x2="256" y2="60.1679" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E58200" stop-opacity="0"/>
                      <stop offset="0.0396" stop-color="#E27F04" stop-opacity="0.039216"/>
                      <stop offset="0.4671" stop-color="#C15D2F" stop-opacity="0.466667"/>
                      <stop offset="0.8016" stop-color="#AD4949" stop-opacity="0.8"/>
                      <stop offset="1" stop-color="#A64153"/>
                    </linearGradient>
                    <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160.75 186.944) scale(358.384)">
                      <stop stop-color="#FFC738"/>
                      <stop offset="0.2837" stop-color="#FFC534"/>
                      <stop offset="0.5391" stop-color="#FFBF29"/>
                      <stop offset="0.7827" stop-color="#FFB417"/>
                      <stop offset="1" stop-color="#FFA700"/>
                    </radialGradient>
                    <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(235.672 256) scale(224.174)">
                      <stop stop-color="#FFFCF8"/>
                      <stop offset="0.9485" stop-color="#FFFCF8" stop-opacity="0.05098"/>
                      <stop offset="1" stop-color="#FFFCF8" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(252.157 232.05) scale(267.924 292.334)">
                      <stop stop-color="#FFA700"/>
                      <stop offset="0.3227" stop-color="#FCA300"/>
                      <stop offset="0.6649" stop-color="#F39600"/>
                      <stop offset="1" stop-color="#E58200"/>
                    </radialGradient>
                    <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(183.684 191.758) scale(273.032)">
                      <stop stop-color="#FFC738"/>
                      <stop offset="0.2837" stop-color="#FFC534"/>
                      <stop offset="0.5391" stop-color="#FFBF29"/>
                      <stop offset="0.7827" stop-color="#FFB417"/>
                      <stop offset="1" stop-color="#FFA700"/>
                    </radialGradient>
                    <linearGradient id="paint9_linear" x1="332.438" y1="306.194" x2="158.759" y2="266.037" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFA700" stop-opacity="0"/>
                      <stop offset="0.0206" stop-color="#FEA600" stop-opacity="0.019608"/>
                      <stop offset="0.6348" stop-color="#EC8C00" stop-opacity="0.635294"/>
                      <stop offset="1" stop-color="#E58200"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear" x1="221.867" y1="256" x2="284.762" y2="256" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFA700"/>
                      <stop offset="0.3227" stop-color="#FCA300"/>
                      <stop offset="0.6649" stop-color="#F39600"/>
                      <stop offset="1" stop-color="#E58200"/>
                    </linearGradient>
                  </defs>
                </svg>


              </div>
            </v-col>
            <v-col class="hidden-sm-and-down" cols="12" md="6" xl="4"></v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="/img/borderWaves.svg"/>
      </div>
    </v-parallax>
    <v-container id="features" class="mt-2" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">

            <v-col
              v-for="(feature, i) in features"
              :key="i"
              class="text-center"
              cols="12"
              sm="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :class="{ up: hover }"
                  :elevation="hover ? 10 : 4"
                  class="card"
                  shaped
                >
                  <v-img
                    :class="{ 'zoom-efect': hover }"
                    :src="feature.img"
                    class="d-block ml-auto mr-auto"
                    max-width="100px"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                  <v-card-actions>
                    <v-btn :to="feature.to">
                      VIEW PROJECT
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">

    </v-dialog>
    <div class="svg-border-waves">
      <img src="/img/wave2.svg"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Dala Women Group",
          text: "A fintech system that helps in the daily transactions of a SACCO ",
          to:"/dalapage"


        },
        // {
        //   img: require("@/assets/img/icon1.png"),
        //   title: "Dados Seguros",
        //   text: "icon1.",
        // },
        // {
        //   img: require("@/assets/img/icon3.png"),
        //   title: "Código Aberto",
        //   text: "icon3.",
        // },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {

  },
};
</script>

<style lang="scss">

</style>

<style>

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}


#mycoin {

  animation: rotate3d 5s  infinite;
  transform-origin: center;
}


@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

/*@keyframes shine {*/
/*  0%, 15% {*/
/*    transform: translateY($coin-diameter*2) rotate(-40deg);*/
/*  }*/
/*  50% {*/
/*    transform: translateY(-$coin-diameter) rotate(-40deg);*/
/*  }*/
/*}*/
</style>

<style>
section {
  position: relative;
}
</style>
