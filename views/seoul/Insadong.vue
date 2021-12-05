<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/insadong2.webp">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="">
                  <h2 style="font-weight:bold; size:60px">Insadong</h2>
                  <h4>Transport (Subway): <br> Line 3 Anguk <br> Line 1 Jonggak </h4>
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
        <p>Insa-dong, located in the heart of the city, is an important place where old but precious traditional goods are on display. There is one main road in Insa-dong with alleys on each side. Within these alleys are galleries, traditional restaurants, teahouses, and cafes. <br><br>

        The galleries are the heartbeat of Insa-dong. There are about 100 galleries in the area offering every example of traditional Korean fine art from paintings to sculptures. The most famous galleries are Hakgojae Gallery, which functions as the center of folk art, Gana Art Gallery, which promotes many promising artists, and Gana Art Center. <br><br>
        The teahouses and restaurants are the perfect complement to the galleries. They are hidden deep within the twisting alleyways, making it feel like a treasure hunt. The shops in Insa-dong are very popular among all age groups, because each one is unique.
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2791077343645!2d126.98381726531184!3d37.572044879796806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e80ef04ca1%3A0x4dbdf00ad06265a4!2sInsa-dong%2C%20Jongno-gu%2C%20S%C3%A9oul!5e0!3m2!1sfr!2skr!4v1638722997388!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                
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
  name: "Insadong",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Ssamzigil',
          address: '44, Insadong-gil, Jongno-gu, Seoul',
          phone: ' +82-2-736-0088'
        },
         {
          id: 2,
          name: 'Kyung-In Museum of Fine Art',
          address: '11-4, Insadong 10-gil, Jongno-gu, Seoul',
          phone: '+82-2-733-4448'
        },
         {
          id: 3,
          name: 'Jeongdok Library',
          address: '48, Bukchon-ro 5-gil, Jongno-gu, Seoul',
          phone: '+82-2-2011-5799'
        }
      ]
    };
  }
};
</script>
