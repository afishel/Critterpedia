<template>
  <div class="modal__backdrop" @click="close">
    <div class="modal filters" @click.stop>
      <input-bells />
      <input-hours />
      <input-months />
      <div class="modal__footer">
        <button class="submit" type="button" @click="close">Done</button>
      </div>
    </div>
  </div>
</template>

<script src="./Filters.js"></script>
<style src="./Filters.scss" lang="scss"></style>
