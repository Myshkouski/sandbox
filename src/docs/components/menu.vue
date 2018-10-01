<template lang="pug">
div.wrapper(:class="{hidden: hide ? true : false}")
  div.menu
    span(@click="clearMarkers") Clear markers
</template>

<script>
export default {
	props: {
		hide: {
			type: Boolean,
			default: () => true
		}
	},

  methods: {
    clearMarkers() {
      window.localStorage.setItem('leaflet:markers', '[]')
      this.$router.go()
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    position: fixed
    top: 0
    left: 0
    right: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, .5)
    z-index: 900

    &.hidden
      display: none

  .menu
    display: flex
    padding: 1.5rem
    padding: 4.5rem
    width: 100%
    min-height: 100%
    flex-flow: column-reverse
    justify-content: center
    align-items: center
    color: white
    position: relative
</style>
