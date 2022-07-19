<template>
	<div class="container c-mx-auto l-p-xxs">
		<h1 class="c-mb-xl">NUXT Tailwind test</h1>

		<div class="c-mb-xxl">
			<h2 class="text-xl font-display font-bold c-mb-m">Simple Grid</h2>
			<div class="main-grid text-center c-mb-m">
				<div
					v-for="n in 12"
					:key="n"
					class="bg-black text-white border col-span-1"
				>
					col {{ n }}
				</div>

				<div
					v-for="n in 12"
					:key="n"
					class="bg-blue-bay-of-many text-white c-p-xs col-span-1"
				>
					span 1
				</div>

				<div
					v-for="n in 6"
					:key="n"
					class="bg-blue-bay-of-many text-white c-p-xs col-span-2"
				>
					span 2
				</div>

				<div
					v-for="n in 4"
					:key="n"
					class="bg-blue-bay-of-many text-white c-p-xs col-span-3"
				>
					span 3
				</div>

				<div
					v-for="n in 3"
					:key="n"
					class="bg-blue-bay-of-many text-white c-p-xs col-span-4"
				>
					span 4
				</div>

				<div
					v-for="n in 2"
					:key="n"
					class="bg-blue-bay-of-many text-white c-p-xs col-span-6"
				>
					span 6
				</div>
			</div>
		</div>

		<div class="c-mb-xxl">
			<h2 class="text-xl font-display font-bold c-mb-m">Offset</h2>
			<div class="main-grid text-center c-mb-m">
				<div
					v-for="n in 12"
					:key="n"
					class="bg-black text-white border col-span-1"
				>
					col {{ n }}
				</div>

				<div
					class="bg-blue-bay-of-many text-white c-p-xs col-span-2 col-start-3"
				>
					col-start-3
				</div>
				<div
					class="bg-blue-bay-of-many text-white c-p-xs col-span-2"
				></div>
				<div
					class="bg-blue-bay-of-many text-white c-p-xs col-span-2 col-start-8"
				>
					col-start-8
				</div>
				<div
					class="bg-blue-bay-of-many text-white c-p-xs col-span-2"
				></div>
			</div>
		</div>
	</div>
</template>
