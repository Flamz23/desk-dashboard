<template>
    <div>
        <h1>
          {{ currentTime }}
        </h1>
    </div>
</template>

<script>
import time from '../time.js';

export default {
  data() {
    return {
      currentTime: null
    }
  },

  // hook executes after initial rendering of the compoent
  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = time.getFullTime();
  }, 1000)
  }
}
</script>

<style scoped>
h1 {
    font-family: 'Product Sans', sans-serif;
    font-weight: 100;
    font-size: 20rem;
}

@media all and (max-device-width: 720px){
    h1 {
        font-size: 15rem;
    }
}
</style>