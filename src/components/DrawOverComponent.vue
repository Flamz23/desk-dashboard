<template>
    <nav class="drawover-nav">
        <div class="setting-list">
            <button v-for="item in settingItems">
                <component :is="item.icon" class="tab"></component>
                <p class="setting-desc"> 
                    {{ item.desc }} 
                </p>                
            </button>
        </div>
    </nav>
</template>

<script>
import IconSettings from './icons/IconSettings.vue';
import IconFullscreen from './icons/IconFullscreen.vue';
import IconSeconds from './icons/IconSeconds.vue';
import IconMeridien from './icons/IconMeridien.vue';
import IconDate from './icons/IconDate.vue';
import IconDarkMode from './icons/IconDarkMode.vue';
import IconWeather from './icons/IconWeather.vue';
import IconCloseSettings from './icons/IconCloseSettings.vue';

export default {
  data() {
    return {
      settingItems: [{ desc: 'Fullscreen', icon: 'IconFullscreen' }, { desc: 'Seconds', icon: 'IconSeconds' }, { desc: 'AM/PM', icon: 'IconMeridien' }, { desc: 'Date', icon: 'IconDate' }, { desc: 'Dark mode', icon: 'IconDarkMode' }, { desc: 'Weather', icon: 'IconWeather' }, { desc: 'Exit', icon: 'IconCloseSettings' }]
    }
  },

  components: {
    IconSettings,
    IconFullscreen,
    IconSeconds,
    IconMeridien,
    IconDate,
    IconDarkMode,
    IconWeather,
    IconCloseSettings
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
    color: #6C757D;
    background-color: #343A40;
}

.setting-list > button > p {
    white-space: nowrap;
}

.setting-desc {
    font-family: 'Product Sans Light', sans-serif;
    font-size: 1rem;
    font-weight: 700;
}

/* .drawover-nav:hover  {
    transform: translateY(7rem);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
} */

svg {
    fill: #6C757D;
}

svg:hover  {
    transform: scale(1.1);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>