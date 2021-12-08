<template>
  <div class="block latestPost Block">
    <v-container>
      <h2 class="text-center"> Cities</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card
            outlined
            class="mx-auto"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
            </v-img>
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-subtitle class="pb-0">
              {{item.subtitle}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="primary"
                text
              >
                <router-link :to=item.path>More</router-link>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Tours',
    data() {
      return {
        items: [
          {
            id: 1,
            title: "Seoul",
            subtitle: "Let's discover together Seoul, a capital that is both traditional and modern",
            src: require("../src/assets/Images/seoul.jpeg"),
            path:"/SeoulMain"
          },
          {
            id: 2,
            title: "Jeju",
            subtitle: "A Korean island paradise",
            src: require("../src/assets/Images/jeju.jpeg"),
            path:"/Jeju"
          },
          {
            id: 3,
            title: "Busan",
            subtitle: "Formerly romanized as Pusan, it is the economic, cultural and educational center of southeastern South Korea",
            src: require("../src/assets/Images/busan.jpeg"),
            path:"/Busan"
          },
          {
            id: 4,
            title: "Yeosu",
            subtitle: "Located on the coast in Jeollanamdo, Yeosu is one of the southernmost cities in Korea, and it actually is its own peninsula",
            src: require("../src/assets/Images/yeosu.jpeg"),
            path:"/Yeosu"
          },
          {
            id: 5,
            title: "Jeonju",
            subtitle: "It is an important tourist center famous for Korean food, historic buildings, sports activities, and innovative festivals.",
            src: require("../src/assets/Images/jeonju.jpeg"),
            path:"/Jeonju"
          },
          {
            id: 6,
            title: "Daegu",
            subtitle: "Daegu is the third largest city in South Korea on the northeastern part of Gyeongsangbuk-do.",
            src: require("../src/assets/Images/daegu.jpeg"),
            path:"/Daegu"
          }
        ]
      };
    }
  }
</script>
