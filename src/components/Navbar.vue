<template>
  <nav class="navbar sticky-top  navbar-light navbar-expand-sm bg-light">
    <a class="navbar-brand" href="#">This or That</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/votings">Votings</router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar'
}

</script>

<style scoped>
</style>
