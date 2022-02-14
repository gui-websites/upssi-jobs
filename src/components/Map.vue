<template>
  <l-map ref="myMap" id="map" :zoom="12" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="center"></l-marker>
  </l-map>
</template>

<script lang="ts">
import Vue from "vue";

import { LatLng, LatLngExpression } from "leaflet";

export default Vue.extend({
  name: "Map",
  data() {
    return {
      center: [0, 0] as LatLngExpression,
      url: "http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    };
  },

  methods: {
    async getCoords(address: string): Promise<LatLngExpression> {
      const res = await fetch(
        "https://nominatim.openstreetmap.org/search?format=json&q=" + address
      ).then((x) => x.json());
      return new LatLng(res[0].lat, res[0].lon);
    },
  },

  async created() {
    this.center = await this.getCoords("Toulouse, France");
    console.log(this.center);
  },
});
</script>

<style>
#map {
  height: 100%;
}
</style>
