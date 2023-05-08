import { createApp, provide, ref, onMounted, watch, configureCompat } from '@vue/compat/dist/vue.esm-bundler.js';
import VRuntimeTemplate from "vue3-runtime-template";
import AjaxDemoComponent from "./components/AjaxDemoComponent.vue";

// Styles
// import './scss/base.scss';
// import './scss/main.scss';

VRuntimeTemplate.compatConfig = {
    MODE: 3, // opt-in to Vue 3 behavior for this component only
    RENDER_FUNCTION: false
};

configureCompat({
    WATCH_ARRAY: false
});

const demoApp = createApp({
    components: { AjaxDemoComponent },
});

demoApp.component("VRuntimeTemplate", VRuntimeTemplate);
demoApp.mount('.js-root');
