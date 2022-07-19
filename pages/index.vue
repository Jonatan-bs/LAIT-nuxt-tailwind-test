<template>
	<div class="container mx-auto p-c-m">
		<h1 class="text-xl-4xl font-display font-bold mb-c-xl">
			NUXT Tailwind test
		</h1>

		<div class="mb-c-xxl">
			<h2 class="text-sm-2xl font-display font-bold mb-c-m">
				Simple Grid
			</h2>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 12"
					:key="n"
					class="bg-black text-white border col-span-1"
				>
					col {{ n }}
				</div>
			</div>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 12"
					:key="n"
					class="border-black border col-span-1"
				>
					span 1
				</div>
			</div>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 6"
					:key="n"
					class="border-black border col-span-2"
				>
					span 2
				</div>
			</div>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 4"
					:key="n"
					class="border-black border col-span-3"
				>
					span 3
				</div>
			</div>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 3"
					:key="n"
					class="border-black border col-span-4"
				>
					span 4
				</div>
			</div>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 2"
					:key="n"
					class="border-black border col-span-6"
				>
					span 6
				</div>
			</div>
		</div>

		<div class="mb-c-xxl">
			<h2 class="text-sm-2xl font-display font-bold mb-c-m">Offset</h2>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div
					v-for="n in 12"
					:key="n"
					class="bg-black text-white border col-span-1"
				>
					col {{ n }}
				</div>
			</div>
			<div class="main-grid text-center gap-x-c-l gap-y-c-xxs mb-c-m">
				<div class="border-black border col-span-2 col-start-3">
					col-start-3
				</div>
				<div class="border-black border col-span-2"></div>
				<div class="border-black border col-span-2 col-start-8">
					col-start-8
				</div>
				<div class="border-black border col-span-2"></div>
			</div>
			>
		</div>
	</div>
</template>
