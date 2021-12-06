<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/gamcheon2.jpeg" style="opacity:1">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="color:black">
                  <h2 style="font-weight:bold; size:60px">Gamcheon Culture Village</h2>
                  <h4>Address : 203, Gamnae 2-ro, Saha-gu, Busan</h4>
                  <h4>Transportation : Line 1 Goejeong</h4>
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
            Gamcheon Culture Villiage is formed by houses built in staircase-fashion on the foothills of a coastal mountain, earning this village the nickname "Machu Picchu of Busan." Many alleys that cut through this community are vibrantly decorated with murals and sculptures created by the residents.
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.373043402493!2d129.00840371492382!3d35.09739476937691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568e9b7a3113a51%3A0x977e01d7224cf6a3!2sGamcheon%20Culture%20Village!5e0!3m2!1sfr!2skr!4v1638777995215!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: "Gamcheon",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'BIFF Square',
          address: '4, Nampo-gil, Jung-gu, Busan',
          phone: '+82-51-253-8523'
        },
         {
          id: 2,
          name: 'Provisional Capital Memorial Hall',
          address: '45, Imsisudoginyeom-ro, Seo-gu, Busan',
          phone: '+82-51-244-6345'
        },
        {
          id: 3,
          name: 'Yongdusan Jagalchi Special Tourist Zone ',
          address: '52, Jagalchihaean-ro, Jung-gu, Busan',
          phone: '+82-51-600-4000, 4082'
        }
      ]
    };
  }
};
</script>
