<template>
  <button class="button" @click="$emit('click', $event)">
    <span class="button__char" v-if="char">{{ char }}</span>
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<script src="./Button.js"></script>
<style src="./Button.scss" lang="scss"></style>
