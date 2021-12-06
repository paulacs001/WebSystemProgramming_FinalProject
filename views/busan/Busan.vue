<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/busan2.jpeg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">Busan</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <h1 class="text-center">Busan Recommended Places</h1>
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
  name: "Busan",
  data() {
    return {
      items: [
          {
            id: 1,
            title: "Gwangalli Beach",
            subtitle: "Address : 219, Gwanganhaebyeon-ro, Suyeong-gu, Busan",
            src: require("../../src/assets/Images/gwangalli.jpeg"),
            path:'/Gwangalli'
          },
          {
            id: 2,
            title: "Haeundae Beach",
            subtitle: " Address : 264, Haeundaehaebyeon-ro, Haeundae-gu, Busan",
            src: require("../../src/assets/Images/haeundae.jpeg"),
            path: '/Haeundae'
          },
          {
            id: 3,
            title: "Huinnyeoul Culture Village",
            subtitle: "Address : 1044-6, Yeongseon-dong 4-ga, Yeongdo-gu, Busan ",
            src: require("../../src/assets/Images/huinnyeoul.jpeg"),
            path:'/Huinnyeoul'
          },
          {
            id: 4,
            title: "Gamcheon Culture Village",
            subtitle: "Address : 105 Namsangongwon-gil, Yongsan-gu, Seoul",
            src: require("../../src/assets/Images/gamcheon.jpeg"),
            path:'/Gamcheon'
          },
          {
            id: 5,
            title: "Haedong Yonggungsa Temple",
            subtitle: "Address : 37, Mugyo-ro, Jongno-gu, Seoul  ",
            src: require("../../src/assets/Images/haedong.jpeg"),
            path:'/Haedong'
          }
        ]
    };
  }
};
</script>