<template>
  <main class="fscreen">
    <DateComponent />
    <DrawOverComponent />
  </main>
</template>

<script>
import DateComponent from '../components/DateComponent.vue'
import DrawOverComponent from '../components/DrawOverComponent.vue'

export default {
  components: {
    DateComponent,
    DrawOverComponent
  }
}
</script>

<style>
.fscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: #212529;
}
</style>