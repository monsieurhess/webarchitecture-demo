<template>
  <v-runtime-template :template="htmlString"></v-runtime-template>
  <clientside-rendered-component></clientside-rendered-component>
</template>
<script>
import axios from 'axios';
import ClientsideRenderedComponent from "./ClientsideRenderedComponent.vue";

export default {
  name: "AjaxDemoComponent",
  components: {ClientsideRenderedComponent},
  props: {
    url: String,
  },
  data: () => {
    return {
      htmlString: "",
    };
  },
  mounted() {
    axios.get(this.url)
        .then((response) => {
          this.htmlString = response.data;
        });
  }
}
</script>