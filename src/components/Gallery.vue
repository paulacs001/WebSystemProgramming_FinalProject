<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" md="4">
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data() {
      return {
        items: [
          {
            id: 1,
            src: require("../assets/Images/gallery-img1.jpeg")
          },
          {
            id: 2,
            src: require("../assets/Images/gallery-img3.webp")
          },
          {
            id: 3,
            src: require("../assets/Images/gallery-img2.jpeg")
          },
          {
            id: 4,
            src: require("../assets/Images/gallery-img5.jpeg")
          },
          {
            id: 5,
            src: require("../assets/Images/flag.jpeg")
          },
          {
            id: 6,
            src: require("../assets/Images/gallery-img7.jpeg")
          },
          {
            id: 7,
            src: require("../assets/Images/jeju.jpeg")
          },
          {
            id: 8,
            src: require("../assets/Images/gallery-img6.jpeg")
          },
          {
            id: 9,
            src: require("../assets/Images/gallery-img4.jpeg")
          }
        ]
      };
    }
  }
</script>
