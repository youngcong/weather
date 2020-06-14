<template>
  <div id="app">
    <BasicInfo></BasicInfo>
    <Hourly></Hourly>
    <DailyForecast></DailyForecast>
    <Search></Search>
  </div>
</template>

<script>
import BasicInfo from './components/BasicInfo.vue'
import Hourly from './components/Hourly'
import DailyForecast from './components/DailyForecast'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    BasicInfo,
    Hourly,
    DailyForecast,
    Search
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
