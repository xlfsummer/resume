declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module "*.data"{
    export function toString() : string;
}
