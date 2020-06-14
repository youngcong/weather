<template>
  <div class="basic-container" v-if="basicInfo">
    <div class="cond_txt">{{this.basicInfo.cond_txt}}</div>
    <div class="tmp">{{this.basicInfo.tmp}}°</div>
    <div class="location">{{this.basicInfo.location}}</div>
  </div>
</template>

<script>
import { getBasicInfo } from '../api/api'
import Bus from '../bus'

export default {
  data() {
    return {
      location: 'shanghai',
      basicInfo: null
    }
  },
  created() {
    getBasicInfo({location: this.location}).then(res => {
      this.basicInfo = res
    })
  },
  mounted() {
    Bus.$on('changeLocation', location => {
      this.location = location
    })
  },
  watch: {
    location() {
      getBasicInfo({location: this.location}).then(res => {
        this.basicInfo = res
      })
    }
  }
}
</script>

<style scoped>
.basic-container {
  height: 60vh;
}
.basic-container .cond_txt {
  padding-top: 16px;
  font-size: 22px;
}
.basic-container .tmp {
  margin: 14px;
  font-size: 50px;

}
.basic-container .location {
  margin-top: 300px;
  font-size: 24px;
}
</style>