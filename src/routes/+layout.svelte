<script lang="ts">
  import { blur, scale } from "svelte/transition";
  let showEditor = false;
  let showFooter = false;
  // Show editor after some time
  setInterval(() => {
    showEditor = true;
  }, 200);
  // Aaaaaand... footer!
  setInterval(() => {
    showFooter = true;
  }, 800);
</script>

<div
  class="filter grayscale-10 sepia-30 dark:sepia-0 h-screen w-screen 
  antialiased bg-gradient-to-br from-yellow-200 via-orange-400 to-red-500
  dark:from-blue-gray-700 dark:via-blue-gray-800 dark:to-blue-gray-900"
>
  <main class="flex w-screen h-screen">
    <div class="m-auto">
      {#if showEditor}
        <div in:scale>
          <div
            in:blur
            class="relative rounded-2xl px-4 md:px-12 py-4 shadow-2xl cursor-text bg-warm-gray-900 dark:bg-blue-gray-900 bg-opacity-80 border-1 border-warm-gray-800 dark:border-blue-gray-900"
          >
            <!-- Buttons -->
            <div class="absolute left-3 top-2 flex space-x-1.5">
              <div
                class="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer"></div>
              <div
                class="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer"></div>
              <div
                class="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer"></div>
            </div>
            <!-- Title -->
            <p class="text-center text-white text-xs opacity-60 font-bold">
              ./app/Models/Dev.php
            </p>
            <div class="font-mono xl:text-lg py-4">
              <slot />
            </div>
          </div>
        </div>
      {/if}
    </div>
  </main>
</div>

{#if showFooter}
  <footer class="absolute bottom-8 flex items-center w-full">
    <div
      in:scale
      class="animate-wiggle rounded-lg m-auto text-center bg-warm-gray-900 text-yellow-100 dark:bg-blue-gray-900 dark:text-teal-300 bg-opacity-80 text-sm font-mono px-4 py-2 right-2 rotate-6 transform hover:-rotate-6 transition-all duration-500 ease-in-out shadow-lg"
    >
      <a
        href="https://github.com/murdercode/stefano9lli.com"
        target="_blank"
        class="flex"
        rel="noopener"
      >
        <p class="mx-1 my-auto">Powered by</p>
        <!-- TODO: logo as component-->
        <p class="w-6 h-6">
          <svg
            fill="currentColor"
            version="1.1"
            id="Livello_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 283.5 283.5"
            style="enable-background:new 0 0 283.5 283.5;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M271.5,0H12C5.4,0,0,5.4,0,12v259.5c0,6.6,5.4,12,12,12h259.5c6.6,0,12-5.4,12-12V12
		C283.5,5.4,278.1,0,271.5,0z M162.6,260.3h-41.8l39.4-45.3h-0.7c-3.4,2.1-6.3,3.3-8.5,3.8c-2.2,0.4-4.2,0.6-5.9,0.6
		c-6.8,0-13-1.3-18.7-3.9c-5.7-2.6-10.6-6.1-14.7-10.6c-4.1-4.5-7.3-9.7-9.7-15.8c-2.3-6-3.5-12.5-3.5-19.3c0-7.4,1.4-14.2,4.1-20.5
		c2.7-6.3,6.6-11.9,11.7-16.6c5.1-4.7,11.3-8.4,18.5-11.1c7.2-2.7,15.4-4.1,24.5-4.1c9.2,0,17.4,1.4,24.7,4.1
		c7.2,2.7,13.4,6.4,18.5,11.1c5.1,4.7,9,10.1,11.7,16.3c2.7,6.2,4.1,12.8,4.1,19.8c0,7.9-1.8,16.4-5.3,25.5
		c-3.5,9.2-8.9,18.1-16.1,27L162.6,260.3z M221.2,260.3h-11.6v-53.1h11.6V260.3z M240.7,260.3h-11.6v-53.1h11.6V260.3z M260.2,260.3
		h-11.6v-32.8h11.6V260.3z M260.4,217.4c-0.3,0.8-0.8,1.5-1.4,2.1c-0.6,0.6-1.3,1.1-2.1,1.4c-0.8,0.3-1.6,0.5-2.5,0.5
		s-1.7-0.2-2.5-0.5c-0.8-0.3-1.5-0.8-2.1-1.4c-0.6-0.6-1.1-1.3-1.4-2.1c-0.3-0.8-0.5-1.6-0.5-2.5s0.2-1.7,0.5-2.5
		c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4c0.8-0.3,1.6-0.5,2.5-0.5s1.7,0.2,2.5,0.5c0.8,0.3,1.5,0.8,2.1,1.4
		c0.6,0.6,1.1,1.3,1.4,2.1c0.3,0.8,0.5,1.6,0.5,2.5S260.8,216.6,260.4,217.4z"
              />
              <path
                d="M173.6,152.9c-2.1-2.1-4.5-3.7-7.3-5c-2.8-1.2-5.7-1.8-8.9-1.8c-3.2,0-6.2,0.6-8.9,1.8c-2.8,1.2-5.2,2.9-7.3,5
		c-2.1,2.1-3.7,4.5-5,7.3c-1.2,2.8-1.8,5.7-1.8,8.9c0,3.2,0.6,6.2,1.8,8.9c1.2,2.8,2.9,5.2,5,7.3c2.1,2.1,4.5,3.7,7.3,5
		c2.8,1.2,5.7,1.8,8.9,1.8c3.2,0,6.2-0.6,8.9-1.8c2.8-1.2,5.2-2.9,7.3-5c2.1-2.1,3.7-4.5,5-7.3c1.2-2.8,1.8-5.7,1.8-8.9
		c0-3.2-0.6-6.2-1.8-8.9C177.4,157.4,175.7,155,173.6,152.9z"
              />
            </g>
          </svg>
        </p>
      </a>
    </div>
  </footer>
{/if}

<style windi:preflights:global windi:safelist:global>
</style>
