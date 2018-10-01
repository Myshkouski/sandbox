<template lang="pug" src="~/templates/pages/map"></template>

<script>
let Leaflet = {}

if (process.client) {
	Leaflet = require('leaflet')
}

export default {
	data() {
		return {
			location: [53, 26],
			locationMarker: null,
			zoom: 5,
			markers: [],
			map: null
		}
	},

	watch: {
		markers(to, from) {
			window.localStorage.setItem('leaflet:markers', JSON.stringify(to))
		},
		location: {
			handler: '_setLocationMarker'
		}
	},

	methods: {
		locate() {
			const {
				map
			} = this

			map.locate({
				enableHighAccuracy: true,
				timeout: 6e4
			}).once('locationfound', event => {
				this.location = [
					event.latlng.lat,
					event.latlng.lng
				]

				this.zoom = 12

				map.setView(this.location, this.zoom)
			}).once('locationerror', event => {
				console.error('locationerror', event)
			})
		},

		_setLocationMarker() {
			if (!this.locationMarker) {
				const locationIcon = new Leaflet.Icon({
					iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
					iconSize: [50, 50],
					// iconAnchor: [20, 20],
					// popupAnchor: [-3, -76],
					// shadowUrl: 'my-icon-shadow.png',
					// shadowSize: [68, 95],
					// shadowAnchor: [22, 94]
				})

				this.locationMarker = new Leaflet.Marker(this.location, {
					icon: locationIcon
				}).addTo(this.map)
			}

			this.locationMarker.setLatLng(this.location)
		}
	},

	mounted() {
		this.markers = JSON.parse(window.localStorage.getItem('leaflet:markers') || '[]')

		const map = new Leaflet.map(this.$refs.map, {
			zoomControl: false,
			attributionControl: false
		})

		this.map = map

		map.setView(this.location, this.zoom)
		setImmediate(() => {
			this.locate()
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

		const markerIcon = new Leaflet.Icon({
			iconUrl: '/img/water-drop.png',
			iconSize: [50, 50],
			// iconAnchor: [20, 20],
			// popupAnchor: [-3, -76],
			// shadowUrl: 'my-icon-shadow.png',
			// shadowSize: [68, 95],
			// shadowAnchor: [22, 94]
		})

		this.markers.forEach(latlng => {
			new Leaflet.Marker(latlng, {
				icon: markerIcon
			}).addTo(map)
		})

		map.on('click', event => {
			const latlng = [
				event.latlng.lat,
				event.latlng.lng
			]
			this.markers.push(latlng)
			new L.Marker([
				event.latlng.lat,
				event.latlng.lng
			], {
				icon: markerIcon
			}).addTo(map)
		})
	}
}
</script>

<style src="leaflet/dist/leaflet.css"></style>
<style lang="sass" src="~/styles/pages/map" scoped></style>
