<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/haeundae2.jpeg" style="opacity:0.85">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="color:black">
                  <h2 style="font-weight:bold; size:60px">Haeundae Beach</h2>
                  <h4>Address : 264, Haeundaehaebyeon-ro, Haeundae-gu, Busan </h4>
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
Haeundae Beach is the most famous beach in Busan. The white sand beach is roughly 1.5 kilometers long, over a 30- to 50-meter wide area, creating a beautiful coastline before a shallow bay, making it perfect for swimming.

People flock to Haeundae Beach every summer. All kinds of accommodations from luxury hotels to private guesthouses have developed in the area around the beach, making this the perfect summer vacation spot. Haeundae Beach is also famous for various cultural events and festivals held throughout the year. Other facilities in the area include Dongbaekseom Island, Busan Aquarium, a yachting dock, BEXCO, driving courses and more.
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13047.664222332076!2d129.1516294294803!3d35.15871422812475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688d5c0efe075f%3A0x9963b1d5c163ac98!2sHaeundae%20Beach!5e0!3m2!1sfr!2skr!4v1638777194220!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: "Haeundae",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'SEA LIFE Busan Aquarium ',
          address: '266, Haeundaehaebyeon-ro, Haeundae-gu, Busan',
          phone: '+82-51-740-1700'
        },
         {
          id: 2,
          name: 'Paradise Casino Busan',
          address: '296, Haeundaehaebyeon-ro, Haeundae-gu, Busan',
          phone: '+82-51-749-3550~4'
        },
        {
          id: 3,
          name: 'Haeundae Cruise Boat',
          address: '33-1, Dalmaji-gil 62beon-gil, Haeundae-gu, Busan',
          phone: '+82-1688-3353'
        }
      ]
    };
  }
};
</script>
