<template>
    <div id="app">
        <div class="navigation">
            <router-link tag="div" to="/home">
            <a>/home</a>
            </router-link>
            <router-link tag="div" to="/about">
            <a>/about</a>
            </router-link>
        </div>
        

        <router-view></router-view>
    </div>
</template>

<style lang="less">
@import "style.less";
</style>
