<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/naksanpark2.jpeg" style="opacity:0.85">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="color:black">
                  <h2 style="font-weight:bold; size:60px">Naksan Park</h2>
                  <h4>Address : 41, Naksan-gil, Jongno-gu, Seoul </h4>

                  <h4>Transport (Subway): Line 4 Hyehwa Station</h4>
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
Information
Introduction
Naksan Park gets its name from its camel hump-like appearance. The mountain is a solid granite bedrock. The Joseon royal family enjoyed the natural beauty of the granite mountain, but during the Japanese Colonial Period, a hasty manner of urban planning resulted in the demolition of most parts of the mountain. In an effort to save the remaining green belts, Naksan was designated as a park on June 10, 2002. Located in the center of the Seoul, this historical and beautiful park allows its visitors to view the magnificence of the entire city.
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9132103965117!2d127.00529481499211!3d37.580661331077266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca32d72d213e9%3A0x9f6263b27f9d345d!2sParc%20Naksan!5e0!3m2!1sfr!2skr!4v1638726877836!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: "Naksan Park",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Arko Art Center',
          address: '3, Dongsung-gil, Jongno-gu, Seoul',
          phone: '+82-2-760-4850'
        },
         {
          id: 2,
          name: 'Marronnier Park ',
          address: '104, Daehak-ro, Jongno-gu, Seoul',
          phone: '+82-2-2148-4158'
        },
        {
          id: 3,
          name: 'Daehangno (University Street)',
          address: '104, Daehak-ro, Jongno-gu, Seoul',
          phone: '+82-2-2148-1114'
        }
      ]
    };
  }
};
</script>
