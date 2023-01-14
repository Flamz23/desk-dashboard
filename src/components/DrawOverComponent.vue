<template>
    <nav class="drawover-nav">
        <ul class="setting-list">
            <li>
                <div class="icon-wrapper">
                    <IconSettings />
                </div>                
            </li>
        </ul>
    </nav>
</template>

<script setup>
import IconSettings from './icons/IconSettings.vue';
import IconFullscreen from './icons/IconFullscreen.vue';
</script>

<style>
.drawover-nav {
    display: flex;

    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0.5rem;

    width: 40%;
    min-width: 20rem;
    height: auto;
    padding: 0.5rem;
    

    border-radius: 0.8rem;

    background-color: #343A40;
}

.setting-list {
    width: 100%;
    padding: 0;
}

.setting-list > li {
    margin: 0.4rem 0 0.4rem 0;
    border-radius: 0.8rem;
    background-color: #495057;
}

.icon-wrapper {
    border: none;
    border-color: #6C757D;
    border-radius: 50%;
    background-color: #212529;
}
svg {
    fill: #CED4DA;
}
</style>