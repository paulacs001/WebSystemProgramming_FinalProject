<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/huinnyeoul2.jpeg" style="opacity:0.95">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="color:black">
                  <h2 style="font-weight:bold; size:60px">Huinnyeoul Culture Village</h2>
                  <h4>Address : 1044-6, Yeongseon-dong 4-ga, Yeongdo-gu, Busan</h4>
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
The houses that stand shoulder to shoulder and overlook the Busan seaside and Namhang ports was born when Korean War refugees came to the area. Signs in the village will tell you about the pain felt during the period when refugees from the Korean War came to the area. Artists began to take up residence in the village around 2011 when the rents were low and the village was decaying a bit. They brought the village back to life again through art in various forms from murals to mosaics and now the village is just a stunning place to visit. Do be aware that much like the Ihwa Mural Village in Seoul, there still are some residential buildings so don’t go just walking in places that aren’t clearly marked as restaurants, cafes, or public places.        </p>    
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13048.550825140315!2d129.1099112294779!3d35.15318627933858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ed2f27c70ec7%3A0xff6df0e14d9216fb!2sGwangalli%20Beach!5e0!3m2!1sfr!2skr!4v1638776788312!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
    <router-link to="/Busan">
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
  name: "Huinnyeoul",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Hamchang Art Road',
          address: '203, Suyeonggangbyeon-daero, Haeundae-gu, Busan',
          phone: '+82-51-780-0077'
        },
         {
          id: 2,
          name: 'Gongju’s Yugu Mural Village',
          address: '43, Suyeongseong-ro, Suyeong-gu, Busan',
          phone: '+82-51-610-4372'
        },
        {
          id: 3,
          name: 'Geumnyeonsan Youth Training Institute ',
          address: '156, Hwangnyeongsan-ro, Suyeong-gu, Busan',
          phone: '+82-51-625-0709'
        }
      ]
    };
  }
};
</script>
