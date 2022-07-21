<template>
	<div class="container l-p-xxs">
		<nuxt-link to="/">custom</nuxt-link>

		<h1 class="font-display font-bold">NUXT Tailwind default config</h1>

		<div class="mb-xxl">
			<h2 class="text-xl font-display font-bold mb-m">Simple Grid</h2>

			<div class="grid grid-cols-12 gap-c-xxs">
				<div
					class="col-span-3 col-start-2 bg-black text-white border-2"
				>
					col-span-3 col-start-2
				</div>
				<div class="col-span-1 bg-black text-white border-2">
					col-span-1 col-start-2
				</div>
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
