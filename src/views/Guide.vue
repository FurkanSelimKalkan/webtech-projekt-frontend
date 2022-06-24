<template>
  <h1 class="header1">Guide</h1>
  <Carousel>
    <Slide v-for="item in Items" :key="item">
      <img :src="item" />
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
        'https://i.ibb.co/XW8qbdw/1.png',
        'https://i.ibb.co/yQmTjtX/2.png',
        'https://i.ibb.co/f4WszrM/3.png',
        'https://i.ibb.co/3sk0rZc/4.png',
        'https://i.ibb.co/5smhSdn/5.png',
        'https://i.ibb.co/DRgrdx5/6.png',
        'https://i.ibb.co/cTRDLVX/7.png',
        'https://i.ibb.co/px79YXv/8.png'
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

.header1 {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-size: 40px;
  font-weight: bold;
}
</style>
