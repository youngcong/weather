<template>
  <div v-show="!hourlyInfo">Hourly</div>
</template>

<script>
export default {
  data() {
    return {
      hourlyInfo: []
    }
  }
}
</script>