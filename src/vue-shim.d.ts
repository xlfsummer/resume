// declare module "vue" {
//     import Vue from "/node_modules/vue/dist/vue.esm.js";
//     export default Vue;
// }

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}