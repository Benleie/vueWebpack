<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>

            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="search" placeholder="搜索商家或地点" @focus="focus" @blur='blur' @input="input" />
                    <button class="el-button el-button--primary">
                        <i class="el-icon-search" />
                    </button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlace" :key="index"> {{item}} </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index"> {{ item }} </dd>
                    </dl>
                </div>

                <p class="suggest">
                    <a href="#">西单</a>
                    <a href="#">西单</a>
                    <a href="#">西单</a>
                    <a href="#">西单</a>
                    <a href="#">西单</a>
                    <a href="#">西单</a>
                </p>
                <ul class="nav">
                    <li>
                        <a to="/" class="takeout">美团外卖</a>
                    </li>
                    <li>
                        <a to="/" class="movie">猫眼电影</a>
                    </li>
                    <li>
                        <a to="/" class="hotel">美团酒店</a>
                    </li>
                    <li>
                        <a to="/" class="apartment">民宿/公寓</a>
                    </li>
                    <li>
                        <a to="/" class="business">商家入驻</a>
                    </li>
                </ul>
            </el-col>

            <el-col :span="6" class="right">
                <ul class="security">
                    <li>
                        <i class="refund" />
                        <p class="txt">随时退</p>
                    </li>
                    <li>
                        <i class="single" />
                        <p class="txt">不满意免单</p>
                    </li>
                    <li>
                        <i class="overdue" />
                        <p class="txt">过期退</p>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import _ from "lodash"
export default {
    data() {
        return {
            search: "",
            isFocus: false,
            hotPlace: ['丸子', '丸子', '丸子', '丸子', '丸子'],
            searchList: ['鱼蛋', '鱼蛋', '鱼蛋', '鱼蛋', '鱼蛋']
        }
    },
    computed: {
        isHotPlace() {
            return this.isFocus && !this.search
        },
        isSearchList() {
            return this.isFocus && this.search
        }
    },
    methods: {
        focus() {
            this.isFocus = true
        },
        blur() {
            let self = this;
            setTimeout(function() {
                self.isFocus = false
            }, 200)
            // this.isFocus = false
        },

        input() {
            /* let self = this;
            let city = self.$store.state.geo.position.city.replace('市', '')
            self.searchList = []
            let { status, data: { top } } = await self.$axios.get('/search/top', {
                params: {
                    input: self.search,
                    city
                }
            })
            self.searchList = top.slice(0, 10) */
        }
    }
}
</script>