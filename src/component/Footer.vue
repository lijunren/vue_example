<template>
    <div class="footer">
        <div v-for="(item,index) in menu" v-bind:key="index" @click="changeTab(index, item.path)"
            v-bind:class="currentIndex === index ? 'current' : ''">
            <Icon v-bind:name="item.iconName"></Icon>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>
<script>
import { Icon } from "vant";
import pageConfig from "../lib/dataConfig";
export default {
    data() {
        return {
            currentIndex: 0,
            menu: pageConfig.menu,
        }
    },
    mounted() {
        // console.log(this.$store.state);
        this.currentIndex = this.$store.state.footModule.currentIndex;
    },
    methods: {
        changeTab(index,path) {
            try{
                const currPath = window.location.pathname;
                console.log(currPath);
                if (currPath === path) {
                    return;
                }
                this.$router.push({path});
            } catch(e) {
                console.log(e);
            }
            this.$store.dispatch("footModule/changeTab",index);
            this.currentIndex = this.$store.state.footModule.currentIndex
        }
    },
    components: {
        Icon
    }
}
</script>
<style scoped>
    .footer{
        box-sizing: border-box;
        position: fixed;
        bottom : 0;
        width: 100%;
        display: flex;
        height: 1.2rem;
        padding: .02rem 0;
        background: #fff;
        color: #4c4a4a;
        justify-content: space-around;
        border-top: .02rem #cecece solid;
    }
    .footer div{
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        width: 1.5rem;
        text-align: center;
        font-size: .4rem;
    }
    .footer div .van-icon{
        font-size: .5rem;
    }
    .footer .current{
        /* border-bottom: .02rem red solid; */
        font-weight: 700;
    }
    .footer .current .van-icon{
        color: #e62121;
    }
</style>