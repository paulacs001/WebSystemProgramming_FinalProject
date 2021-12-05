<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/yeouido2.webp">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="">
                  <h2 style="font-weight:bold; size:60px">Yeouido Hangang Park</h2>
                  <h4>Address : 330 Yeouidong-ro, Yeongdeungpo-gu, Seoul </h4>

                  <h4>Transport (Subway): Line 5 Yeouinaru </h4>
                  </div>
              <h2></h2>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
          <h1 style="font-weight: bold;">History</h1>
        <p>
            Situated in Yeouido, the heart of politics, media, banking and finance, Yeouido Hangang Park is easily accessible via public transportation. The park hosts many exciting events, from the Yeouido Cherry Blossom Festival in spring to the International Fireworks Festival in fall, as well as concerts and marathons throughout the year. Well-preserved natural areas such as Bamseom Island and Yeouido Saetgang Tributary provide visitors with an opportunity to learn about nature and ecology. In addition, thanks to the Hangang Renaissance Project, the park is full of new attractions: the Water Light Square, waterside fountains, a riverside stage, a yacht marina, and more.
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Activities and facilities</h2>
      </v-container>
    <v-container class="mb-6">
        <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <div class="googlemap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.1299183038386!2d126.93088941499066!3d37.528434634067644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3b03c4b7ef%3A0xa4d8869ebf8d452c!2sYeouido%20Hangang%20Park!5e0!3m2!1sfr!2skr!4v1638723367788!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                
                </div>
            </v-flex>
            <v-flex xs12 sm12 md6 s>
                <div v-for="item in items" :key="item.id">
                <h3>{{item.name}}</h3>
                <p> Address : {{item.address}}  
                <p>Phone number : {{item.phone}} </p>
            </div>
            </v-flex>
        </v-layout>
    </v-container>
    <router-link to="/SeoulMain">
        <v-btn
            class="ma-2"
            outlined
            color="indigo"
            >
            Back
        </v-btn>
    </router-link>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Yeouido",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Yeouido Hangang Park Outdoor Swimming Pool',
          address: '330, Yeouidong-ro, Yeongdeungpo-gu, Seoul',
          phone: '+82-2-785-0478'
        },
         {
          id: 2,
          name: 'Aqua Planet 63',
          address: '50, 63-ro, Yeongdeungpo-gu, Seoul',
          phone: '+82-2-780-6382'
        },
         {
          id: 3,
          name: 'Hangang River Ferry Cruise',
          address: '290, Yeouidong-ro, Yeongdeungpo-gu, Seoul',
          phone: '+82-2-6291-6900'
        }
      ]
    };
  }
};
</script>
