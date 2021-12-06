<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/haedong2.jpeg" style="opacity:1">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="color:black">
                  <h2 style="font-weight:bold; size:60px">Haedong Yonggungsa Temple</h2>
                  <h4>Address : 86, Yonggung-gil, Gijang-gun, Busan</h4>
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
Haedong Yonggungsa Temple is situated on the coast of the north-eastern portion of Busan. This superb attraction offers visitors the rare find of a temple along the shore line; most temples in Korea are located in the mountains. Haedong Yonggungsa Temple was first built in 1376 by the great Buddhist teacher known as Naong during the Goryeo dynasty. Haesu Gwaneum Daebul (Seawater Great Goddess Buddha), Daeungjeon Main Sanctuary, Yongwangdang Shrine, Gulbeop Buddhist Sanctum (enclosed in a cave), and a three-story pagoda with four lions can all be seen looking out over the ocean. <br><br>

The main sanctuary of the temple was reconstructed in 1970 with careful attention paid to the colors that were traditionally used in such structures. On the right-hand side, inside the a cave, is a uniquely designed Buddhist sanctum, while situated just in front of the main sanctuary is a three-story pagoda with four lions. The four lions symbolize joy, anger, sadness, and happiness. Other special sites at the temple are the 108 stairs and stone lanterns lining the rocky landscape. After going down the 108 steps, one will be delighted with the beauty of the temple. Midway down the 108 steps one can stop and enjoy the calming sounds of the waves, and view the majestic sunrise. <br><br>

Many people often come to this spot on New Year's Day to make a wish for the new year as they watch the sun come up. April is an especially beautiful time of year with cherry blossoms in full bloom. The birth of Buddha is also celebrated in the fourth month of the lunar calendar and offers a spectacular night view as the temple area is aglow with lit lanterns. <br><br>
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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.7271640482363!2d129.22112271492622!3d35.18835216445261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688c1bbbdea6c1%3A0xa141406d6f112e5c!2sHaedong%20Yonggungsa%20Temple!5e0!3m2!1sfr!2skr!4v1638778786574!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
          name: 'Fisheries Science Museum',
          address: '216, Gijanghaean-ro, Gijang-gun, Busan',
          phone: '+82-51-720-3061~6'
        },
         {
          id: 2,
          name: 'Busan National Science Museum',
          address: '59, Dongbusangwangwang 6-ro, Gijang-gun, Busan',
          phone: '+82-51-750-2300'
        },
        {
          id: 3,
          name: 'Cheongsapo Port  ',
          address: 'Jung-dong, Haeundae-gu, Busan',
          phone: '+82-51-253-8253'
        }
      ]
    };
  }
};
</script>
