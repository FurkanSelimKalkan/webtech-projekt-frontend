<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World!"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
