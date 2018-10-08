<template>
    <div class="app">
        <h1>Resume</h1>
        <p>{{msg}}</p>
    </div>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            msg: "Hello"
        }
    }
})
</script>
