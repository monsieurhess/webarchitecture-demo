<template>
<div class="component">
  <div class="accordion" @click="toggleAccordion">{{sampleHeadline}}</div>
  <div class="panel">
    <p>{{sampleText}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "ClientsideRenderedComponent",
  data() {
    return {
      sampleHeadline: 'Clientseitig gerenderte Komponente',
      sampleText: 'Komponente die vom Browser ausgeführt und verarbeitet wird.',
      showMore: false,
    };
  },
  methods: {
    toggleAccordion() {
      const panel = document.getElementsByClassName("panel")[0];
      const accordion = document.getElementsByClassName("accordion")[0];
      if(panel.style.display === "block") {
        panel.style.display = "none";
        accordion.classList.remove("active");
      } else {
        accordion.classList.add("active");
        panel.style.display = "block";
      }
    },
  },
}
</script>

<style scoped>
/* Style the buttons that are used to open and close the accordion panel */
.component {
  max-width: 560px;
  margin-top: 36px;
}
.accordion {
  background-color: lightgrey;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  justify-content: space-between;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: darkgray;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign */
  font-size: 14px;
  margin-left: 6px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign */
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}

</style>