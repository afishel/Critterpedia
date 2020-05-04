<template>
  <div class="filters__bells">
    <h2>Bells</h2>
    <div class="range">
      <div
        class="step"
        v-for="price in prices"
        :key="`price-${price}`"
        @mouseenter="dragTo(price)"></div>
      <div
        class="range__active"
        :style="{
          width: `${
            (prices.indexOf(bells[1]) / (prices.length - 1) * 100) -
            (prices.indexOf(bells[0]) / prices.length * 100)
          }%`,
          left: `${prices.indexOf(bells[0]) / prices.length * 100}%`,
        }"
      ></div>
      <button
        type="button"
        class="handle -low"
        :style="`left:${prices.indexOf(bells[0]) / prices.length * 100}%`"
        @mousedown="dragging = 0"
        ref="handleLow">
          <span>{{ bells[0].toLocaleString() }}</span>
      </button>
      <button
        type="button"
        class="handle -high"
        :style="`left:${prices.indexOf(bells[1]) / (prices.length - 1) * 100}%`"
        @mousedown="dragging = 1"
        ref="handleHigh">
          <span>{{ bells[1].toLocaleString() }}</span>
      </button>
    </div>
  </div>
</template>

<script src="./Bells.js"></script>
<style src="./Bells.scss" lang="scss"></style>
