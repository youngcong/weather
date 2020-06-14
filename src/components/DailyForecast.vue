<template>
  <div class="outer-container" v-if="forecasts">
    <ul>
      <li v-for="info in forecasts" :key="info.date">
        <span class="date item">{{info.date}}</span>
        <div class="img-container item">
          <img class="img" :src="info.imgSrc">
        </div>
        <div class="tmp-container item">
          <span>{{info.tmp_max}}</span>
          <span>{{info.tmp_min}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDailyForecast } from '../api/api'
import Bus from '../bus'

export default {
  data() {
    return {
      location: 'shanghai',
      forecasts: null
    }
  },
  created() {
    getDailyForecast({location: this.location}).then(res => {
      this.forecasts = res
    })
  },
  mounted() {
    Bus.$on('changeLocation', location => {
      this.location = location
    })
  },
  watch: {
    location() {
      getDailyForecast({location: this.location}).then(res => {
        this.forecasts = res
      })
    }
  }
}
</script>

<style scoped>
.outer-container ul {
  padding: 16px;
}
.outer-container ul li {
  width: 100%;
  display: flex;
  list-style: none;  
}
.outer-container ul li .item {
  flex: 1;

  display: flex;
  align-items: center;
}

.outer-container ul li .item.date {
  justify-content: flex-start;
}
.outer-container ul li .item.img-container {
  justify-content: center;
}
.outer-container ul li .item.tmp-container {
  justify-content: flex-end;
}

.outer-container ul li .item.img-container .img {
  width: 50px;
}

.outer-container ul li .item.tmp-container span {
  display: inline-block;
  padding-left: 14px;
}

</style>