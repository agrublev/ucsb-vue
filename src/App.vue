<template>
    <div id="app">
        <div v-if="!loaded">
            <ThemePreloader />
        </div>

        <Navigation></Navigation>

        <router-view></router-view>
    </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import ThemePreloader from "./components/ThemePreloader.vue";

export default {
    created: () => {
        setTimeout(() => {
            this.loaded = true;
        }, 3300);
    },
    data: function() {
        let lod = window.loaded ? window.loaded : false;
        if (!lod) {
            window.loaded = true;
        }
        return { loaded: lod };
    },
    components: { Navigation, ThemePreloader }
};
</script>
<link lang="less" rel="stylesheet" href="./assets/style.less" />
