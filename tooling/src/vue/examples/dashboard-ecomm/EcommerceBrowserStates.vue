<template>
  <div>
    <l-map
      :center="center"
      :zoom="zoom"
    >
      <l-tile-layer
        :attribution="attribution"
        :url="url"
      />
      
      <!-- Use default icon -->
      <l-marker :lat-lng="[47.41322, -1.219482]" />
      
      <!-- Use icon given in icon property -->
      <l-marker
        :icon="icon"
        :lat-lng="[47.41322, -1.209482]"
      />
      
      <!-- Create image icon (icon) from l-icon tag -->
      <l-marker :lat-lng="[47.41322, -1.199482]">
        <l-icon>
          <b-img
            :src="require('@/assets/images/misc/leaf-red.png')"
            height="50"
          />
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BImg }                             from "bootstrap-vue";
import { icon, Icon, latLng }               from "leaflet";
import { LIcon, LMap, LMarker, LTileLayer } from "vue2-leaflet";

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions( {
                             iconRetinaUrl: require( "leaflet/dist/images/marker-icon-2x.png" ),
                             iconUrl:       require( "leaflet/dist/images/marker-icon.png" ),
                             shadowUrl:     require( "leaflet/dist/images/marker-shadow.png" )
                           } );

export default {
  name:       "Icon",
  components: {
    BImg,
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data () {
    return {
      zoom:        13,
      center:      latLng( 47.41322, -1.219482 ),
      url:         "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      icon:        icon( {
                           iconUrl:    require( "@/assets/images/misc/leaf-green.png" ),
                           iconSize:   [ 50, 50 ],
                           iconAnchor: [ 16, 37 ]
                         } )
    };
  }
};
/* eslint-disable global-require */
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
