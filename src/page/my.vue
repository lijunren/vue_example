<template>
    <div>
        <p>我的页面</p>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../component/Footer";
export default {
    mounted() {
        this.$store.commit({
            type: "changeTab",
            index: 1,
        });
    },
    components: {
        Footer,
    }
}
</script>