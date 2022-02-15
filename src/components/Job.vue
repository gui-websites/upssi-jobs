<template>
  <div class="p-4 rounded-lg bg-gray-100">
    <h1>{{ job.name }}</h1>
    <div class="contact">
      <div>{{ job.website }}</div>
      <div>{{ job.email }}</div>
      <div>{{ job.phone }}</div>
      <div>{{ job.address }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { IJob } from "@/store/types";

export default Vue.extend({
  name: "LeftBar",
  props: {
    job: {
      type: Object as () => IJob,
      required: true,
    },
  },
});
</script>

<style></style>
