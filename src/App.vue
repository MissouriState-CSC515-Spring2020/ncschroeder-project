<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <h3 v-if="isOffline">You're offline but this website still works</h3>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      install_button: "none",
      installer: undefined
    };
  },

  created() {
  }
}
</script>

<style>
#app {
  font-family: fantasy;
  text-align: center;
  color: black;
  background-color: deepskyblue;
}

</style>
