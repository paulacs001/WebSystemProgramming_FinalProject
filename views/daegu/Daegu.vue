<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/seoulMain.jpeg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Daegu</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <h1 class="text-center">Daegu Recommended Places</h1>
    </div>
     <div class="block latestPost Block">
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card
            outlined
            class="mx-auto"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src=item.src
            >
            </v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-subtitle class="pb-0">
              {{item.subtitle}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="primary"
                text
              >
                <router-link :to=item.path>More</router-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Daegu",
  data() {
    return {
      items: [
          {
            id: 1,
            title: "Dalseong Toseong",
            subtitle: "Address : 161 Sajik-ro, Jongno-gu, Seoul",
            src: require("../../src/assets/Images/gyeongbokgung.png"),
            path:'/Gyeongbokgung'
          },
          {
            id: 2,
            title: "Seomun Market",
            subtitle: " Address : Insadong",
            src: require("../../src/assets/Images/insadong.png"),
            path: '/Insadong'
          },
          {
            id: 3,
            title: "Gyeongsang Gamyeong annd Old Alley",
            subtitle: "Address : 330 Yeouidong-ro, Yeongdeungpo-gu, Seoul ",
            src: require("../../src/assets/Images/yeouidopark.jpeg"),
            path:'/Yeouido'
          },
          {
            id: 4,
            title: "83 Tower",
            subtitle: "Address : 105 Namsangongwon-gil, Yongsan-gu, Seoul",
            src: require("../../src/assets/Images/Namsamtower.jpeg"),
            path:'/NSeoulTower'
          },
          {
            id: 5,
            title: "Suseongmot Lake",
            subtitle: "Address : 37, Mugyo-ro, Jongno-gu, Seoul  ",
            src: require("../../src/assets/Images/cheonggyecheon.jpeg"),
            path:'/Cheonggyecheon'
          },
          {
            id: 6,
            title: "Palgongsan Mountain",
            subtitle: "Address : Seoul, Jongno-gu",
            src: require("../../src/assets/Images/hanokvillage.jpeg"),
            path:'/HanokVillage'

          },
          {
            id: 7,
            title: "Dongseong-ro",
            subtitle: "Address : 273 Ttukseom-ro, Seongdong-gu, Seoul",
            src: require("../../src/assets/Images/seoulforest.jpeg"),
            path:'/SeoulForest'

          },
          {
            id: 8,
            title: "Kim Gwangseok-gil",
            subtitle: "Address : 41 Naksan-gil, Jongno-gu, Seoul",
            src: require("../../src/assets/Images/naksan.jpeg"),
            path:'/NaksanPark'

          },
        ]
    };
  }
};
</script>