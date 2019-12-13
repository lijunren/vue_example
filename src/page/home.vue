<template>
    <div>
        <div class="headContent">
            <Swipe :autoplay="2000" indicator-color="white" :height="150">
                <SwipeItem v-for="(item,index) in swipeData" :key="index">{{item}}</SwipeItem>
            </Swipe>
        </div>
        <List>
            <Cell v-for="(item,index) in listData" :key="index" :title="item.name" @click="goToDetail(item.id)"></Cell>
        </List>
    </div>
</template>
<script>
import {Swipe, SwipeItem} from "vant";
import { List,Cell } from 'vant';
export default {
    data() {
        return {
            swipeData: [1,2,3,4],
            listData: [
                {
                    id: 1,
                    name: "订单1",
                    desc: "暗杀掉地上"
                },
                {
                    id: 2,
                    name: "订单2",
                    desc: "拉拉地方"
                },
                {
                    id: 3,
                    name: "订单3",
                    desc: "哦ID是李开复"
                },
                {
                    id: 4,
                    name: "订单5",
                    desc: "快递费高"
                }
            ]
        }
    },
    methods: {
        goToDetail(id) {
            this.$router.push({path: `/detail/${id}`})
        }
    },
    mounted() {
        this.$store.dispatch("footModule/changeTab",0);
    },
    components: {
        Swipe,
        SwipeItem,
        List,
        Cell
    }
}
</script>
<style scoped>
.headContent .van-swipe{
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 150px;
}
</style>
