<template>
  <div class="filters__months">
    <h2>Seasonality</h2>

    <label class="toggle">
      <input type="checkbox" name="months_current" class="currentToggle" v-model="current">
      <span>Now</span>
    </label>

    <ol class="months" :class="{ '-disabled': current }">
      <li
        class="month"
        :class="{
          '-active': filterMonths.includes(i + 1),
        }"
        v-for="(month, i) in months"
        :key="month"
      >
        <label>
          <input
            type="checkbox"
            name="months"
            :value="i + 1"
            :disabled="current"
            v-model="filterMonths"
          >
          <span>{{ month }}</span>
        </label>
      </li>
    </ol>
  </div>
</template>

<script src="./Months.js"></script>
<style src="./Months.scss" lang="scss"></style>
