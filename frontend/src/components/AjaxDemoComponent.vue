<template>
  <v-runtime-template :template="htmlString"></v-runtime-template>
</template>
<script>
import axios from 'axios';

export default {
  name: "AjaxDemoComponent",
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