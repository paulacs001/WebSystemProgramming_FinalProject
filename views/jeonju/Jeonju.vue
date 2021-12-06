<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/seoulMain.jpeg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Jeonju</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <h1 class="text-center">Jeonju Recommended Places</h1>
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
  name: "SeoulMain",
  data() {
    return {
      items: [
          {
            id: 1,
            title: "Jeonju Traditional Art Museum",
            subtitle: "Address : 161 Sajik-ro, Jongno-gu, Seoul",
            src: require("../../src/assets/Images/gyeongbokgung.png"),
            path:'/Gyeongbokgung'
          },
          {
            id: 2,
            title: "Jeonju Hanok Village",
            subtitle: " Address : Insadong",
            src: require("../../src/assets/Images/insadong.png"),
            path: '/Insadong'
          },
          {
            id: 3,
            title: "Gyeonggijeon",
            subtitle: "Address : 330 Yeouidong-ro, Yeongdeungpo-gu, Seoul ",
            src: require("../../src/assets/Images/yeouidopark.jpeg"),
            path:'/Yeouido'
          },
          {
            id: 4,
            title: "Jeonju Hyanggyo",
            subtitle: "Address : 105 Namsangongwon-gil, Yongsan-gu, Seoul",
            src: require("../../src/assets/Images/Namsamtower.jpeg"),
            path:'/NSeoulTower'
          },
          {
            id: 5,
            title: "Nambu Market",
            subtitle: "Address : 37, Mugyo-ro, Jongno-gu, Seoul  ",
            src: require("../../src/assets/Images/cheonggyecheon.jpeg"),
            path:'/Cheonggyecheon'
          },
          {
            id: 6,
            title: "Jaman Mural Village",
            subtitle: "Address : Seoul, Jongno-gu",
            src: require("../../src/assets/Images/hanokvillage.jpeg"),
            path:'/HanokVillage'

          },
          {
            id: 7,
            title: "Jeondong Cathedral",
            subtitle: "Address : 273 Ttukseom-ro, Seongdong-gu, Seoul",
            src: require("../../src/assets/Images/seoulforest.jpeg"),
            path:'/SeoulForest'

          },
          {
            id: 8,
            title: "Omokdae/Imokdae",
            subtitle: "Address : 41 Naksan-gil, Jongno-gu, Seoul",
            src: require("../../src/assets/Images/naksan.jpeg"),
            path:'/NaksanPark'

          },
        ]
    };
  }
};
</script>