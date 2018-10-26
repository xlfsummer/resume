<template>
    <div class="app">
        <h1>Resume</h1>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {

}
</script>

<script lang="ts">
import Vue from 'vue'

export default class extends Vue {
    data(){
        return {
            msg: "Hello"
        }
    }
}
</script>
