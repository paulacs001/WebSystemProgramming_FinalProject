<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/hanokvillage2.jpeg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="">
                  <h2 style="font-weight:bold; size:60px">Bukchon Hanok Village</h2>
                  <h4>Address : Seoul, Jongno-gu </h4>

                  <h4>Transport (Subway): Line 3 Anguk </h4>
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
            Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, Bukchon Hanok Village is home to hundreds of traditional houses, called hanok, that date back to the Joseon dynasty. The name Bukchon, which literally translates to "northern village," came about as the neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. Today, many of these hanoks operate as cultural centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in traditional Korean culture. As Bukchon Hanok Village is an actual neighborhood with people's homes, visitors are advised to be respectful at all times while looking around.
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.983699309247!2d126.98422521499201!3d37.579001531172395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2daaff8c14f%3A0xcdbcbaa9ffc9e59a!2sBukchon%20Hanok%20Village!5e0!3m2!1sfr!2skr!4v1638725621930!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: "HanokVillage",
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Bukchon Cultural Center',
          address: '37, Gyedong-gil, Jongno-gu, Seoul',
          phone: '+82-2-2133-1371~2'
        },
         {
          id: 2,
          name: 'Cheongwonsanbang Studio ',
          address: '27, Bukchon-ro 6-gil, Jongno-gu, Seoul',
          phone: '+82-2-715-3342'
        },
         {
          id: 3,
          name: 'Eight Scenic Views of Bukchon',
          address: '37, Gyedong-gil, Jongno-gu, Seoul',
          phone: '+82-2-2148-4161'
        }
      ]
    };
  }
};
</script>
