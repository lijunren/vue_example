<template>
    <div>
        <p>我的页面</p>
        <span>脚本测试</span>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../component/Footer";
export default {
    mounted() {
        this.$store.dispatch("footModule/changeTab",1);
    },
    components: {
        Footer,
    }
}
</script>