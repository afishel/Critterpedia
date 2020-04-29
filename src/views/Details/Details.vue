<template>
  <div class="-details">
    <app-header/>
    <main class="app__content">
      <div class="critter__details">
        <div class="display">
          <img
            :src="`/img/critters/${critter.name}.png`"
            :alt="`photo of ${critter.name}`"
            :key="critter.name" />
          <tag :text="critter.name" />
        </div>
        <div class="activity">
          <div class="seasonality">
            <h2>Seasonality</h2>
            <ol class="months">
              <li
                class="month"
                :class="{
                  '-active': m.checked,
                  '-current': i === month,
                }"
                v-for="(m, i) in months" :key="m.name">
                <span>{{ m.name }}</span>
              </li>
            </ol>
          </div>
          <div class="hours">
            <h2>Active Hours</h2>
            <div class="meter" :style="`--currentTime: ${time}`">
              <div
                class="hour"
                :class="{
                  '-quarter': hour / 100 % 6 === 0,
                  '-eighth': hour / 100 % 3 === 0,
                }"
                v-for="hour in hours"
                :key="`hour-${hour}`">
                  <span class="quarterHour" v-if="hour / 100 % 6 === 0 && hour !== 2400">
                    <span v-if="hour === 0">AM</span>
                    <span v-if="hour === 1200">PM</span>
                    {{ hour / 100 % 12 || 12 }}
                  </span>
                </div>
              <div class="activeTime -allDay" v-if="critter.time === -1"></div>
              <div
                class="activeTime"
                :class="`span-${t[1] - t[0]} start-${t[0]}`"
                v-for="t in critter.time"
                :key="`active-${t[0]}`"
                v-else></div>
            </div>
          </div>
        </div>
        <div class="price">
          <span class="bells">{{ critter.price.toLocaleString() }}</span>
        </div>
      </div>
      <nav class="critter__navigation">
        <router-link
          :to="{ name: 'Details', params: { id: prev.name } }"
          class="navigate__action -prev"
          :title="prev.name"
          v-if="prev">
          <icon icon="navigate_before" />
        </router-link>
        <router-link
          :to="{ name: 'Details', params: { id: next.name } }"
          class="navigate__action -next"
          :title="next.name"
          v-if="next">
          <icon icon="navigate_next" />
        </router-link>
      </nav>
    </main>
    <app-footer>
      <v-button text="Close" char="X" :code="88" @click="showAll" />
    </app-footer>
  </div>
</template>

<script src="./Details.js"></script>
<style src="./Details.scss" lang="scss"></style>
