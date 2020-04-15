<template>
  <div class="-details">
    <app-header/>
    <main class="app__content">
      <div class="critter__details">
        <div class="display">
          <img
            src="/img/critters/insects/common-butterfly.png"
            :alt="`photo of ${critter.name}`" />
          <tag :text="critter.name" />
        </div>
        <div class="activity">
          <div class="seasonality">
            <h2>Seasonality</h2>
            <ol class="months">
              <li
                class="month"
                :class="{ '-active': month.checked }"
                v-for="month in months" :key="month.name">
                <span>{{ month.name }}</span>
              </li>
            </ol>
          </div>
          <div class="hours">
            <h2>Active Hours</h2>
            <div class="meter">
              <div
                class="hour"
                :class="{
                  '-quarter': hour / 100 % 6 === 0,
                  '-eighth': hour / 100 % 3 === 0,
                }"
                v-for="hour in hours"
                :key="hour"></div>
              <div class="activeTime -allDay" v-if="critter.time === -1"></div>
              <div
                class="activeTime"
                :class="`span-${time[1] - time[0]} start-${time[0]}`"
                v-for="time in critter.time"
                :key="time[0]"
                v-else></div>
            </div>
          </div>
        </div>
        <div class="price">
          <span class="bells">{{ critter.price.toLocaleString() }}</span>
        </div>
      </div>
    </main>
    <app-footer/>
  </div>
</template>

<script src="./Details.js"></script>
<style src="./Details.scss" lang="scss"></style>
