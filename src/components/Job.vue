<template>
  <div class="p-4 rounded-lg">
    <h1>{{ job.name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type Job = {
  name: string;
};

export default Vue.extend({
  name: "LeftBar",
  props: {
    job: {
      type: Object as () => Job,
      required: true,
    },
  },
});
</script>

<style></style>
