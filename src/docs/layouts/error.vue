<template lang="pug">
div
	h3 {{error.statusCode}}
	p {{error.message}}
	div
		nuxt-link(
			to='/'
			) Go to homepage
</template>

<script type="text/javascript" src="~/scripts/layouts/error.js"></script>
