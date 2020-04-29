<template>
  <div id="app">
    <router-view class="page"/>
    <filters v-show="showFilters" />
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.scss" lang="scss"></style>
