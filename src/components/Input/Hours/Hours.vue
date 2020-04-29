<template>
  <div class="filters__hours">
    <h2>Active Hours</h2>

    <label class="toggle">
      <input type="checkbox" name="hours_current" class="currentToggle" v-model="current">
      <span>Now</span>
    </label>

    <div class="hours__input">
      <div
        class="meter"
        :class="{ '-current': current }"
        :style="`--currentTime: ${time}`
      ">
        <div
          class="hour"
          :class="{
            '-quarter': hour / 100 % 6 === 0,
            '-eighth': hour / 100 % 3 === 0,
          }"
          v-for="hour in hours"
          :key="`hour-${hour}`"
          @mouseenter="dragTo(hour)"
        >
          <span class="quarterHour" v-if="hour / 100 % 6 === 0 && hour !== 2400">
            <span v-if="hour === 0">AM</span>
            <span v-if="hour === 1200">PM</span>
            {{ hour / 100 % 12 || 12 }}
          </span>
        </div>
      </div>
      <template v-if="!current">
        <div
          class="hours__span"
          :style="{
            width: hourSpan,
            left: startPos,
          }"
        ></div>
        <button
          class="hours__handle -low"
          :style="{
            left: startPos,
          }"
          @mousedown="dragging = 0"
        ><icon icon="more_vert" /></button>
        <button
          class="hours__handle -high"
          :style="{
            left: endPos,
          }"
          @mousedown="dragging = 1"
        ><icon icon="more_vert" /></button>
      </template>
    </div>
  </div>
</template>

<script src="./Hours.js"></script>
<style src="./Hours.scss" lang="scss"></style>
