<template>
  <nav class="app__navigation">
    <button
      class="navigation__link -insects"
      :class="{ '-active': type === INSECT }"
      title="Insects"
      @click="showInsects">
      <icon icon="insects" />
      <span class="popover" v-if="type === INSECT">Insects</span>
    </button>
    <button
      class="navigation__link -fish"
      :class="{ '-active': type === FISH }"
      title="Fish"
      @click="showFish">
      <icon icon="fish" />
      <span class="popover" v-if="type === FISH">Fish</span>
    </button>
    <span class="trigger -start">A</span>
    <span class="trigger -end">D</span>
  </nav>
</template>

<script src="./Navigation.js"></script>
<style src="./Navigation.scss" lang="scss"></style>
