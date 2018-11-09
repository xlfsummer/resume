<template>
    <div class="app">
        <!-- <img src="./public/potrait.jpg" style="float: right"> -->
        <h1>简历</h1>
        <div class="jos">{{basic.job}}</div>
        <section class="base-info">
            <h2>基本信息</h2>
            <p v-for="i in basic.info" :key="i">{{i}}</p>
            <div class="brief">{{basic.brief}}</div>
        </section>
        <hr>
        <h2>时间线</h2>
        <ol class="time-line">
            <li class="time-line__item time-line__item--start">
                <div class="time-line__tag">.</div>
                <div class="time-line__axis"></div>
                <h3>...</h3>
            </li>
            <li class="time-line__item"
                :class="'time-line__item--' + timeLineEvent.type"
                v-for="timeLineEvent in timeLineEventList"
                :key="timeLineEvent.start">
                <div class="time-line__tag">{{timeLineEvent.start}}</div>
                <div class="time-line__axis"></div>
                <h3>{{timeLineEvent.title}}</h3>
                <p>{{timeLineEvent.desc}}</p>
                <p style="max-width: 400px">{{timeLineEvent.content}}</p>
                <ul class="time-line__sub" v-if="timeLineEvent.sub">
                    <li class="time-line__sub-item"
                        v-for="subEvent in timeLineEvent.sub"
                        :key="subEvent.start">
                        <h4>{{subEvent.title}}</h4>
                        <p style="max-width: 400px">{{subEvent.content}}</p>
                        <p class="project-skill"
                            v-if="subEvent.skill"
                            v-for="skill in subEvent.skill"
                            :key="skill">
                            {{skill}}
                        </p>
                    </li>
                </ul>
            </li>
            <li class="time-line__item time-line__item--end">
                <div class="time-line__tag">至今</div>
                <div class="time-line__axis"></div>
                <h3>...</h3>
            </li>
        </ol>
        <h2>技能</h2>
        <details>
        <summary>
            <div v-for="skill in skillList.slice(0, 5)" :key="skill.name">
                <div class="skill-progress" :style="'width:' + (skill.value * 10) + '%'">{{skill.name}}</div>
            </div>
        </summary>
        <div v-for="skill in skillList.slice(6)" :key="skill.name">
            <div class="skill-progress" :style="'width:' + (skill.value * 10) + '%'">{{skill.name}}</div>
        </div>
        </details>
        <h2>其它</h2>
        <ul class="link-list">
            <li v-for="item in other" :key="item.name">
                <a :href="item.link">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<<<<<<< HEAD
<script lang="ts">
import Vue from "vue";
import { decrypt } from "crypto-js/aes";
import * as utf8 from "crypto-js/enc-utf8";
import * as timeLineData from "./static/time-line.json.data";
import * as skillData from "./static/skill.json.data"
import * as basicData from "./static/basic.json.data"
import * as otherData from "./static/other.json.data"

export default/*  class App extends Vue  */{
=======
<script lang="js">
import Vue from 'vue'
export default Vue.extend({
>>>>>>> 5d4e754874f42ad00ea8a303846b694046aa18bd
    data(){
        return {
            basic: {},
            timeLineEventList: [],
            skill: {},
            other: []
        }
    },
    computed: {
        skillList(){
            let data = [];
            for(var k in this.skill){
                data.push({
                    name: k,
                    value: this.skill[k]
                });
            }
            return data.sort((a, b) => b.value - a.value);
        }
    },
    created(){
        let data;
        this.timeLineEventList = this.decrypt(timeLineData);
        this.skill = this.decrypt(skillData);
        this.basic = this.decrypt(basicData);
        this.other = this.decrypt(otherData);
    },
    methods: {
        decrypt(mod: {toString(): () => string}){
            let data;
            let key = new URLSearchParams(window.location.search).get("k");
            try{
                data = JSON.parse(decrypt(mod, key).toString(utf8));
            }catch(e){
                throw new Error("您的访问密钥不正确");
            }
            return data;
        }
    }
}

</script>
