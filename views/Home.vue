<template>
  <v-content>
    <Hero/>
    <Gallery/>
    <LatestPost/>
  </v-content>
</template>
<script>
import Hero from '../src/components/Hero';
import Gallery from '../src/components/Gallery';
  export default {
    name: 'Home',
    components: {
      Hero, 
      Gallery,
    },

      data () {
        return {
          items: [
            
          ],
        }
      },
  }
</script>
