<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
    <kss />
    <test />
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import BottomView from '@/components/BottomView'
import SalesView from '@/components/SalesView'
import MapView from '@/components/MapView/Bmap'
import Kss from '@/components/Kss'
import Test from '@/components/Test'

export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    SalesView,
    MapView,
    Kss,
    Test,
  },
}
</script>

<style scoped>
.home {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>>
