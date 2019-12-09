<template>
    <div>
        <Header title="详情页面" leftShow></Header>
        <div>订单{{id}}的详情页</div>
    </div>
</template>
<script>
import Header from "../component/header";
export default {
    data() {
        return {
            id: 0,
        }
    },
    mounted() {
        // console.log(this.$route.params.id);
        this.id = this.$route.params.id;
    },
    components: {
        Header,
    }
}
</script>