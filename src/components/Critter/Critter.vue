<template>
  <router-link
    class="critter"
    :to="{ name: 'Details', params: { id: critter.name } }">
    <tag :text="critter.name" />
    <img
      src="/img/critters/insects/common-butterfly.png"
      :alt="critter.name"
      width="242"
      height="179" />
    <span class="price">{{ critter.price.toLocaleString() }}</span>
  </router-link>
</template>

<script src="./Critter.js"></script>
<style src="./Critter.scss" lang="scss"></style>
