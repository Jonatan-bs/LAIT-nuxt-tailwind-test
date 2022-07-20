<template>
	<div class="container mx-auto l-p-xxs">
		<nuxt-link to="/">custom</nuxt-link>
		<h1 class="text-clamp font-display font-bold text-sm-2xl text-lg-3xl">
			NUXT Tailwind default config
		</h1>

		<div class="mb-xxl">
			<h2 class="text-xl font-display font-bold mb-m">Simple Grid</h2>

			<div class="grid grid-cols-12 gap-8">
				<div class="col-span-3 col-start-2 bg-black">test</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "IndexPage",
});
</script>
