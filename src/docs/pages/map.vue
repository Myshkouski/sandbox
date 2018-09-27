<template lang="pug">
div.map(ref="map")
</template>

<script>
export default {
  data() {
    return {
      markers: []
    }
  },

  watch: {
    markers(to, from) {
      window.localStorage.setItem('leaflet:markers', JSON.stringify(to))
    }
  },

  mounted() {
    const Leaflet = require('leaflet')

    this.markers = JSON.parse(window.localStorage.getItem('leaflet:markers') || '[]')

    const map = new Leaflet.map(this.$refs.map, {
      zoomControl: false,
      attributionControl: false
    })

    const attribution = Leaflet.control.attribution({
      position: 'bottomright',
      prefix: 'Drink&Piss'
    }).addTo(map)

    const tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.{ext}', {
      attribution: 'Powered by OpenStreetMaps',
      minZoom: 1,
      maxZoom: 16,
      ext: 'png'
    }).addTo(map)

    const locationIcon = new Leaflet.Icon({
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
      iconSize: [50, 50],
      iconAnchor: [0, 0],
      // popupAnchor: [-3, -76],
      // shadowUrl: 'my-icon-shadow.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    })

    const markerIcon = new Leaflet.Icon({
      iconUrl: '/img/water-drop.png',
      iconSize: [50, 50],
      iconAnchor: [25, 0],
      popupAnchor: [0, 0],
      // shadowUrl: 'my-icon-shadow.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    })

    function _createMarker(latlng) {
      const marker = new L.Marker(latlng, {
        icon: markerIcon
      })

      return marker
    }

    this.markers.forEach(latlng => {
      _createMarker(latlng).addTo(map)
    })

    map.locate({
      enableHighAccuracy: true
    }).once('locationfound', event => {
      const latlng = [
        event.latlng.lat,
        event.latlng.lng
      ]
      map.setView(latlng, 12)
      const marker = new L.Marker(latlng, {
        icon: locationIcon
      }).addTo(map)

      marker.bindTooltip("I'm here!", {
        direction: 'bottom',
        offset: [25, 50]
      }).openTooltip()
    }).on('click', event => {
      const latlng = [
        event.latlng.lat,
        event.latlng.lng
      ]
      this.markers.push(latlng)
      _createMarker(latlng).addTo(map)
    })
  }
}
</script>

<style src="leaflet/dist/leaflet.css"></style>
<style lang="sass" src="~/styles/pages/map"></style>
