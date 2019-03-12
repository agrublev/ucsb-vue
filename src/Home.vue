<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>Secret kitty cat goes outside, but only when it rains!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
    methods: {
        calculateMeters() {
            this.meters = Math.round(this.speedKilometers * 1000);
        }
    },
    data: () => {
        return {
            showExample: false
        };
    },
    components: {}
};
</script>
<style lang="less">
@import "style.less";
</style>
