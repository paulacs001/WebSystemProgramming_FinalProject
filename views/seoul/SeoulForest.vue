<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/seoulforest2.jpeg" style="opacity:0.85">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="color:black">
                  <h2 style="font-weight:bold; size:60px">Seoul Forest</h2>
                  <h4>Address : 273 Ttukseom-ro, Seongdong-gu, Seoul </h4>

                  <h4>Transport (Subway): Line 2 Ttukseom </h4>
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
Opened on June 18, 2005, Seoul Forest had previously undergone a series of changes on Ttukseom Island. In the past, the forest had been a royal hunting ground for kings and served as a military inspection facility. However, in more recent decades, the area has served a wide variety of functions. Ttukseom initially served as a water treatment facility, and later as a golf course, horse racing track, and eventually a sports park. <br><br>

Consisting of five parks spread over approximately 595,000 ㎡ of land, Seoul Forest is an eco-friendly zone appreciated not only by the people of the city but also those visiting Seoul. Seoul Forest is rapidly developing into the premium city-park of Korea like Hyde Park in London and Central Park in New York.
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.4529019097663!2d127.03525371499107!3d37.544392033154324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca37d51f4f62b%3A0xdd9b9865be0f469a!2sSEOUL%20Forest!5e0!3m2!1sfr!2skr!4v1638726282098!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: "SeoulForest",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Hangang River',
          address: '257, Gangbyeonbuk-ro, Seongdong-gu, Seoul',
          phone: 'NONEs'
        },
         {
          id: 2,
          name: 'Waterworks Museum ',
          address: '27, Wangsimni-ro, Seongdong-gu, Seoul',
          phone: '+82-2-3146-5936'
        }
      ]
    };
  }
};
</script>
