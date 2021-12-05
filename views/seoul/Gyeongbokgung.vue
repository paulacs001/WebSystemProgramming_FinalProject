<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../../src/assets/Images/gyeongbokgung2.webp">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="block" style="">
                  <h2 style="font-weight:bold; size:60px">Gyeongbokgung Palace</h2>
                  <h3>The biggest palace in the middle of Seoul</h3>
                  <h4>Open hours : Monday-Sunday : 9:00-18:00 (Close Tuesday)  </h4>
                  <h4>Transport : Line 3 Gyeongbokgung </h4>
                  <h4>Address : 161 Sajik-ro, Jongno-gu, Seoul</h4>
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
        <p>Gyeongbokgung Palace, or the Palace of Felicitous Blessing, was the main Palace of the Joseon Dynasty (1392-1910). It opened in 1395, the fourth year of the reign of Taejo, the founding monarch of Joseon. The Palace attained all necessary facilities and systems commensurate with its status as Joseon’s primary Palace during the reign of Sejong (r. 1418-1450). It was burnt down in 1592 during the Japanese invasions and remained in ruins until extensive reconstruction was undertaken in 1868, the fifth year of Gojong. However, many of the structures were removed during the Japanese colonial rule (1910-1945).</p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Activities and facilities</h2>
      </v-container>
        <v-container class="d-flex justify-space-between mb-6">
            <v-layout row wrap>
            <v-flex xs12 sm12 md6>
                <div class="googlemap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9573820035434!2d126.97485231499209!3d37.57962123113695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c74aeddea1%3A0x8b3046532cc715f6!2sGyeongbokgung!5e0!3m2!1sfr!2skr!4v1638719025428!5m2!1sfr!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>                
                </div>
            </v-flex>
            <v-flex xs12 sm12 md6>
                <h3>Hanbok Rental</h3>
                <h4>Hanboknam Gyeongbokgung</h4>
                <p>Address : 133-5 Sajik-ro, Jongno-gu, Seoul <br> 
                Phone number : 010-6485-8507 <br> 
                Open hour : Monday - Sunday : 9:00-19:00
                </p>
                <h3>Interpretation Services Offered</h3>
                    Tours depart from in front of the information center at Heungnyemun Gate. <br>
                    - Duration: About 1 hr - 1 hr 30 min <br>
                    - Tour Schedule <br>
                    English - 11:00, 13:30, 15:30 <br>
                    Japanese - 10:00, 12:30, 14:30  <br>
                    Chinese - 10:30, 13:00, 15:00 <br>
            </v-flex>
            </v-layout>
        </v-container>
        <div class="block">
            <v-container>
                <h2 class="text-center" >Price</h2>
                <div class="text-center">
                    <h4>Individuals - Adults 3,000 won / Children 1,500 won <br>
                    Groups - Adults 2,400 won / Children 1,200 won <br>

                    * Adults (ages 19-64) / Children (ages 7-18) <br>
                    * Groups: 10 people or more <br>
                    * Free admission: Preschoolers (ages 6 and younger), senior citizens (ages 65 and older), people wearing hanbok, all visitors the last Wednesday of every month (Culture day
                    )</h4>
                    
                </div> 
                <router-link to="/SeoulMain">
                    <v-btn
                        class="ma-2"
                        outlined
                        color="indigo"
                        >
                        Back
                    </v-btn>
                </router-link>
            </v-container>
        </div>
    </div>
  </v-content>
</template>
