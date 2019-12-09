<template>
    <div>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../component/Footer";
export default {
    data() {
        return {
        }
    },
    components: {
        Footer
    }
}
</script>
<style scoped>

</style>
