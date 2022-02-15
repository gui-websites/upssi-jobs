<template>
  <l-map
    ref="myMap"
    @ready="setBounds()"
    @resize="setBounds()"
    id="map"
    :zoom="minZoom"
    :center="center"
    :options="{ zoomControl: false }"
  >
    <l-tile-layer
      ref="myTiles"
      :options="{ minZoom: minZoom, maxZoom: 18 }"
      :url="tileURL"
      :attribution="attribution"
    ></l-tile-layer>

    <l-marker :lat-lng="center"></l-marker>
  </l-map>
</template>

<script lang="ts">
import Vue from "vue";

import { Map, LatLng, LatLngExpression } from "leaflet";

const attributions = {
  OpenStreetMap: "http://www.openstreetmap.org/copyright",
};

export default Vue.extend({
  name: "Map",
  data() {
    return {
      center: [0, 0] as LatLngExpression,
      minZoom: 12,
    };
  },

  methods: {
    async getCoords(address: string): Promise<LatLngExpression> {
      const res = await fetch(
        "https://nominatim.openstreetmap.org/search?format=json&q=" + address
      ).then((x) => x.json());
      return new LatLng(res[0].lat, res[0].lon);
    },

    setBounds() {
      console.log("ready");

      const mapComponent: any = this.$refs.myMap;
      const map: Map = mapComponent?.mapObject;
      console.log(map.getBounds());

      map.once("move", () => {
        map.setMaxBounds(map.getBounds());
        map.on("drag", function () {
          map.panInsideBounds(map.getBounds(), { animate: false });
        });
      });

      map.setView(this.center, this.minZoom);
    },
  },

  computed: {
    tileURL(): string {
      return (
        "https://api.mapbox.com/styles/v1/frenchfry06/ckznb2veo00in14rwd45zwlaf/tiles/256/{z}/{x}/{y}@2x?access_token=" +
        process.env.VUE_APP_TILES_API_KEY
      );
    },

    attribution(): string {
      return Object.entries(attributions)
        .map((x) => `&copy; <a href="${x[1]}">${x[0]}</a>`)
        .join(", ");
    },
  },

  async created() {
    this.center = await this.getCoords("Toulouse, France");
  },
});
</script>

<style>
#map {
  height: 100%;
  background-color: #2e2e2e;
}
</style>
