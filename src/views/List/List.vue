<template>
  <div class="-list">
    <app-header>
      <app-navigation/>
    </app-header>
    <main class="app__content">
      <ul class="critters -grid">
        <li class="critter__item" v-for="critter in critters" :key="critter.name">
          <critter :critter="critter" />
        </li>
      </ul>
    </main>
    <app-footer>
      <v-button text="Filter" char="F" :code="70" @click="changeShowFilters(true)" />
      <!-- <v-button text="Display Pictures" char="X" :code="88" @click="showPictures" /> -->
    </app-footer>
  </div>
</template>

<script src="./List.js"></script>
<style src="./List.scss" lang="scss"></style>
