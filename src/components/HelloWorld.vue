<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" class="discover-button" @click="$router.push('guide')" >Discover</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.discover-button {
  background-color: #76c1ff;
  border-radius: 12px;
  padding: 5px 30px;
  border: none;
}

.discover-button:hover {
  background-color: green;
  color: white;
}
</style>
