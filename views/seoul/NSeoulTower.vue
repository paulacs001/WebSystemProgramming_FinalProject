<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/Namsamtower.jpeg" >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="">
                  <h2 style="font-weight:bold; size:60px">N Seoul Tower</h2>
                  <h4>Address : 105, Namsangongwon-gil, Yongsan-gu, Seoul </h4>
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
          Namsan Seoul Tower was the first multipurpose tower to be established in Korea, effectively incorporating a sightseeing observatory to a broadcasting tower. For the past 40 years, Namsan Seoul Tower has served as an iconic landmark of Korea and a representative tourist attraction. The tower's observatory offers an unobstructed view of the whole city, allowing it to become one of the all-time favorite attractions of Seoul citizens as well as domestic and international tourists. Another highlight of the tower is the Namsan Cable Car. The cable car began its operation in 1962, transferring passengers from the foot of the mountain to the base of the tower. Shuttle buses to the Namsan Cable Car from downtown Seoul are also available for visitors' convenience.
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.16510815492!2d126.98603791499126!3d37.551173632766115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca257a88e6aa9%3A0x5cf8577c2e7982a5!2sN%20Seoul%20Tower!5e0!3m2!1sfr!2skr!4v1638728389847!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </v-flex>
            <v-flex xs12 sm12 md6 s>
                <div v-for="item in items" :key="item.id">
                <h3>{{item.name}}</h3>
                <p> Address : {{item.address}}  
                <p>{{item.description}} </p>
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
          name: 'Observatory',
          address: 'N Seoul Tower',
          description: 'Price : Adults 11,000 won / Children 9,000 won'
        },
         {
          id: 2,
          name: 'Namsan Cable Car  ',
          address: 'N Seoul Tower',
          description: 'Phone : NONE'
        },
        
        {
          id: 3,
          name: 'Namsan Arts Center',
          address: '138, Sopa-ro, Jung-gu, Seoul',
          description: 'Phone : +82-2-758-2150'
        }
        
      ]
    };
  }
};
</script>
