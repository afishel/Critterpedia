<template>
  <header class="app__header">
    <slot></slot>
    <button
      class="toggleHemisphere"
      @click="switchHemisphere"
      :title="`${
        hemisphere === NORTHERN_HEMISPHERE ? 'Northern' : 'Southern'
      } Hemisphere`">
      <img
        src="/img/northern-hemisphere.png"
        alt="Northern Hemisphere"
        v-if="hemisphere === NORTHERN_HEMISPHERE">
      <img
        src="/img/southern-hemisphere.png"
        alt="Southern Hemisphere"
        v-if="hemisphere === SOUTHERN_HEMISPHERE">
    </button>
  </header>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" lang="scss"></style>
