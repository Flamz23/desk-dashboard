<template>
    <div>
        <h1>
            {{ msg }}
        </h1>
    </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
}
</style>