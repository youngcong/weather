<template>
  <div class="search-container">
    <input class="input" type="text" @keyup.enter="changeLocation">
  </div>
</template>

<script>
import Bus from '../bus'

export default {
  data() {
    return {
      location: ''
    }
  },
  methods: {
    changeLocation(e) {
      Bus.$emit('changeLocation', e.target.value)
      e.target.value = ''
    }
  }
}
</script>

<style scoped>
.search-container {
  z-index: 10;
  width: 90%;
  padding: 10px;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-sizing: border-box;
}
.search-container .input {
  width: 100%;
  height: 30px;
  font-size: 16px;
  border-radius: 20px;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>