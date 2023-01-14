<template>
    <nav class="drawover-nav">
        <div class="setting-list">
            <button v-for="items in settingItems">
                <!-- <div class="icon-wrapper"> -->
                    <IconSettings />
                <!-- </div> -->
                <p> 
                    {{ items.desc }} 
                </p>                
            </button>
        </div>
    </nav>
</template>

<script>
import IconSettings from './icons/IconSettings.vue';
import IconFullscreen from './icons/IconFullscreen.vue';

export default {
  data() {
    return {
      settingItems: [{ desc: 'Fullscreen' }, { desc: 'Seconds' }, { desc: 'AM/PM' }, { desc: 'Date' }, { desc: 'Dark mode' }, { desc: 'Weather' }]
    }
  },

  components: {
    IconSettings
  }
}
</script>

<style>
.drawover-nav {
    display: flex;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.6rem;
}

.setting-list {
    display: flex;
    justify-content: space-evenly;

    width: 30%;
    min-width: 27rem;
    margin: auto;
    padding: 0.6rem;
    border-radius: 0.7rem;

    background-color: #343A40;
}

.setting-list > button {
    border: none;
    color: #ADB5BD;
    background-color: #343A40;
}

.setting-list > button > p {
    white-space: nowrap;
}
/* .drawover-nav:hover  {
    transform: translateY(7rem);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
} */

.icon-wrapper {
    margin: auto;
    padding: 0.2rem;
    border: none;
    border-radius: 50%;
    background-color: #212529;
}

svg {
    fill: #6C757D;
}

svg:hover  {
    transform: scale(1.1);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>