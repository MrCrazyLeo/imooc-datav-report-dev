<template>
  <div id="app">
    <router-view />
    <img
      src=""
      id="img-wrapper2"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'PingFang SC Regular', 'Microsoft YaHei', Arial, Helvetica,
    sans-serif;
  background-color: #eee;
}
</style>
