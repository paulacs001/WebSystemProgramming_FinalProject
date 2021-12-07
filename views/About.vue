<template>
  <v-content>
    <div class="staticHero">
      <v-img src="../src/assets/Images/about.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
<<<<<<< HEAD
        <p>
          As a foreigner living in South Korea, we know how small but big South Korea can seem at the same time. Wanting to discover the country, we didn't know where to start as Seoul is a city that we feel is "endless" to explore. So we don't talk to you about the second big city of South Korea Busan as well as the island of Jeju, the cities like Daegu which are all as beautiful but unknown to the general public.
This country hides a lot of beautiful, breathtaking sights. We want you to have an unforgettable experience with this guide without having to search for all the information and get lost on the Internet. 
We hope to bring you a tourist experience close to the locals.
        </p>
=======
        <p>As a foreigner living in South Korea, we know how small but big South Korea can seem at the same time. Wanting to discover the country, we didn't know where to start as Seoul is a city that we feel is "endless" to explore. So we don't talk to you about the second big city of South Korea Busan as well as the island of Jeju, the cities like Daegu which are all as beautiful but unknown to the general public. This country hides a lot of beautiful, breathtaking sights. We want you to have an unforgettable experience with this guide without having to search for all the information and get lost on the Internet. We hope to bring you a tourist experience close to the locals.</p>
>>>>>>> 5c3c87a9807ac212fd07506b6668b6b3adc6f832
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../src/assets/Images/img1.png"),
          name: 'Anais Zhang',
          title: 'Developer'
        },
        {
          id: 2,
          src: require("../src/assets/Images/img2.png"),
          name: 'Jisoo Park',
          title: 'Manager'
        },
        {
          id: 3,
          src: require("../src/assets/Images/img3.png"),
          name: 'Paula Sanchez',
          title: 'Developer'
        },
        {
          id: 4,
          src: require("../src/assets/Images/img4.png"),
          name: 'Sean',
          title: 'Designer'
        },
        {
          id: 5,
          src: require("../src/assets/Images/img5.png"),
          name: 'YuJeong Jo',
          title: 'Developer'
        }
      ]
    };
  }
};
</script>
