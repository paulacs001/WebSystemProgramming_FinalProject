<template>
  <div class="heroBlock">
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row
          class="fill-height title hidden-ss-only"
          align="center"
          justify="center"
        >
          <div>
           {{item.title}}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  export default {
    name: 'Hero',

      data () {
        return {
          items: [
            {
              src: require("../assets/Images/img-carrousel1.jpeg"),
              title:"Welcome to Tour Guide! " 
            },
            {
              src: require("../assets/Images/img-carrousel2.webp"),
              title:"You are going to live an incredible experience..." 

            },
            {
              src: require("../assets/Images/img-carrousel3.jpeg"),
              title:"In South Korea..." 

            },
            {
              src: require("../assets/Images/img-carrousel4.jpeg"),
              title:"With our tour guide and discover secret places." 

            },
          ],
        }
      },
  }
</script>
