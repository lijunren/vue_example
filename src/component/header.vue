<template>
    <div class="header">
        <NavBar v-bind:title="title || '暂无'" v-bind:left-arrow="leftShow" @click-left="goback"></NavBar>
    </div>
</template>
<script>
import { NavBar } from 'vant';
export default {
    props: {
        title: String,
        leftShow: Boolean
    },
    data() {
        return {
            
        }
    },
    methods: {
        goback() {
            // console.log("返回");
            this.$router.go(-1);
        }
    },
    components: {
        NavBar
    }
}
</script>
<style scoped>
.header{
    font-size: .4rem;
}
.header .van-nav-bar{
    background-color: #eceaea;
}
.header .van-nav-bar__title{
    color: #1a62ab;
}
</style>