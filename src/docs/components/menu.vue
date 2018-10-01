<template lang="pug">
div.root
  div.wrapper(:class="{hidden: hide ? true : false}")
    div.menu
</template>

<script>
export default {
	props: {
		hide: {
			type: Boolean,
			default: () => true
		}
	}
}
</script>

<style lang="sass" scoped>
  .wrapper
    position: absolute
    top: 0
    left: 0
    right: 0
    width: 100vw
    height: 100vh
    background-color: rgba(0, 0, 0, .5)
    z-index: 900

    &.hidden
      display: none

  .menu
    color: white
    position: relative
    width: 90%
    margin-top: 4.5rem
</style>
