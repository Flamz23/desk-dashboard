<template>
    <div class="fscreen">
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

<style>
h1 {
    font-family: 'Product Sans Light', sans-serif;
    font-size: 50rem;

    text-align: center;
    color: #F8F9FA;
}

@media all and (max-device-width: 1920px){
    h1 {
        font-size: 40rem;
    }
}

@media all and (max-device-width: 1080px){
    h1 {
        font-size: 30rem;
    }
}

@media all and (max-device-width: 720px){
    h1 {
        font-size: 12rem;
    }
}
</style>