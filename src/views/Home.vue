<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import BottomView from '../components/BottomView'
import SalesView from '../components/SalesView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    SalesView,
    MapView
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>>
