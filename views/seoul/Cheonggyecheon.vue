<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/cheonggyecheon2.jpeg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="">
                  <h2 style="font-weight:bold; size:60px">Cheonggyecheon</h2>
                  <h4>Address : Changsin-dong, Jung-gu, Seoul</h4>
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
            Cheonggyecheon Stream starts from Cheonggye Plaza, just off Sejong-ro Avenue. Cheonggye Plaza roughly covers an area of 2,500 square meters, and is located at the starting point of Cheonggyecheon Stream. The square, created based on the design of traditional Korean bojagi (a colorful wrapping cloth), features the elegant beauty of traditional stonework that is colorful yet refined. The plaza also includes a model of Cheonggyecheon that provides visitors with a bird's-eye view of the restored Cheonggyecheon Stream. At the plaza, there are plaques that provide detailed commentaries on the 22 bridges that span the stream, as well as a number of graceful fountains that add to the ambience of the area. The area commemorates the Cheonggyecheon Stream Restoration Project, and also symbolizes gathering, harmony, peace, and unity.<br><br>
            After the completion of Cheonggye Plaza, Seoul Metropolitan Government designated the area as a vehicle-free zone on holidays, providing more leisure space for pedestrians. Since then, the waterfront areas of Cheonggyecheon Stream, and the surrounding streets have become popular places for those seeking refreshment and a variety of cultural experiences. A favorite of many is the Candle Fountain, which features the magnificent synchronicity of three different lighting fixtures and a four-meter-high, two-tiered waterfall. Along the two sides of the waterfall are the Palseokdam wishing wells, made of eight different stones from each of the nation's eight provinces.     
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.403902208061!2d126.97648051499182!3d37.569105731739235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ece3930023%3A0xbd86fa6e88b74ed4!2sCheonggyecheon!5e0!3m2!1sfr!2skr!4v1638724726663!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
          name: 'Dongdaemun Design Plaza',
          address: '281, Eulji-ro, Jung-gu, Seoul',
          phone: '+82-2-2153-0000'
          
        },
        {
          id: 2,
          name: 'Kansong Art Museum',
          address: '281, Eulji-ro, Jung-gu, Seoul',
          phone: '+82-70-7774-2524'
          
        },
        {
          id: 3,
          name: 'Heunginjimun Gate - Dongdaemun Gate',
          address: '288, Jong-ro, Jongno-gu, Seoul',
          phone: '+82-2-2148-1842'
          
        }
      ]
    };
  }
};
</script>
