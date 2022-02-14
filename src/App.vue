<template>
  <div id="app" class="grid grid-cols-2">
    <LeftBar />
    <Map />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Map from "@/components/Map.vue";
import LeftBar from "@/components/LeftBar.vue";

export default Vue.extend({
  components: { Map, LeftBar },
  name: "App",
});
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
