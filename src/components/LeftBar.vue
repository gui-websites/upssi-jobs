<template>
  <div class="p-24">
    <h1 class="font-bold text-4xl">
      UPSSI-JOBS
      <span class="ml-3 font-normal">(SRI only)</span>
    </h1>

    <div class="mt-10">
      <Job :job="job" />
    </div>
  </div>
</template>

<script lang="ts">
import { IJob } from "@/store/types";
import Vue from "vue";
import Job from "./Job.vue";

export default Vue.extend({
  components: { Job },
  name: "LeftBar",

  data() {
    return {
      job: {
        name: "Test Job",
        address: "15 avenue du Colonel Roche, 31400 Toulouse",
        phone: "06 42 61 06 81",
      } as IJob,
    };
  },
});
</script>

<style></style>
