<template>
  <Carousel>
    <Slide v-for="item in Items" :key="item">
      <p v-html="item"></p>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'Guide',
  components: { Carousel, Slide, Pagination, Navigation },
  data () {
    return {
      Items: [
        '<img alt="Home Logo" src="/img/logo.00e13b35.png" width="500" height="600" data-v-41458b80="">',
        '<img alt="Logo" src="../assets/images/logo" width="500" height="600">',
        '<img src="./src/assets/thisthat.png" alt="Logo2" width="500" height="600">',
        '<img src="./src/assets/thisthat2.png" alt="Logo3" width="500" height="600">'
      ]
    }
  }
}
</script>

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
