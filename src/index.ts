import App from "./App.vue";
import Vue from "vue";

import "./main.css";

new Vue({
    el: "#app",
    render: h => h(App)
});

window.addEventListener("error", ev => {
    window.alert(ev.message);
});

window.addEventListener("unhandledrejection", ev => {
    window.alert(ev.reason);
});
