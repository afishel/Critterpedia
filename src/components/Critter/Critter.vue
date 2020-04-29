<template>
  <router-link
    class="critter"
    :to="{ name: 'Details', params: { id: critter.name } }">
    <tag :text="critter.name" />
    <img
      :src="`/img/critters/${critter.name}.png`"
      :alt="critter.name"
      :key="critter.name"/>
    <span class="price">{{ critter.price.toLocaleString() }}</span>
  </router-link>
</template>

<script src="./Critter.js"></script>
<style src="./Critter.scss" lang="scss"></style>
