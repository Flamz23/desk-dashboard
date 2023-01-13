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
      console.log('now');
  }, 1000)
  }
}
</script>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
}
</style>