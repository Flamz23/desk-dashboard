<template>
    <nav class="drawover-nav">
        <button class="nav-buttons">
            <IconFullscreen />
        </button>
        <button class="nav-buttons">
            <IconSettings />
        </button>
    </nav>
</template>

<script setup>
import IconSettings from './icons/IconSettings.vue';
import IconFullscreen from './icons/IconFullscreen.vue';
</script>

<style>
.drawover-nav {
    background-color: #212529;
}
.nav-buttons {
    border: none;
    border-color: #6C757D;
    border-radius: 50%;
    background-color: #212529;
}
svg {
    fill: #6C757D;
}
</style>