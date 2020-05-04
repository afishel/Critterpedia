<template>
  <div class="-pictures">
    <app-header/>
    <main class="app__content">
      <h1>Pictures</h1>
      <router-link :to="{ name: 'List' }">List</router-link> |
      <router-link :to="{ name: 'Details' }">Details</router-link>
    </main>
    <app-footer/>
  </div>
</template>

<script src="./Pictures.js"></script>
<style src="./Pictures.scss" lang="scss"></style>
