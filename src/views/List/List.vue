<template>
  <div>
    <h1>List</h1>
    <router-link :to="{ name: 'Pictures' }">Pictures</router-link> |
    <router-link :to="{ name: 'Details' }">Details</router-link>
  </div>
</template>

<script src="./List.js"></script>
<style src="./List.scss" lang="scss"></style>
